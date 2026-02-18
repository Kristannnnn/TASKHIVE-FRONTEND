import AppHeader from "@/components/global/inputs/AppHeader";
import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import TaskField from "@/components/global/inputs/TaskField";
import SuccessModal from "@/components/global/notifications/feedbacks/SuccessModal";
import AddTaskModal from "@/components/task/AddTaskModal";
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdAddTask, MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
interface Task {
  _id: string;
  taskName: string;
  category: string;
  status: "pending" | "completed";
}

type ModalMode = "add" | "edit" | "delete";

const TaskPage = () => {
  const { category } = useParams<{ category: string }>();
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("add");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useEffect(() => {
    if (!category) return;

    const fetchTasks = async () => {
      try {
        const response = await axios.get(`/api/tasks/${category}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else if (Array.isArray(response.data.tasks)) {
          setTasks(response.data.tasks);
        } else {
          setTasks([]);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks([]);
      }
    };

    fetchTasks();
  }, [category, token]);

  const handleToggle = async (taskId: string, currentStatus: string) => {
    const newStatus = currentStatus === "pending" ? "completed" : "pending";

    try {
      await axios.put(
        `/api/tasks/${taskId}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task,
        ),
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const openAddModal = () => {
    setModalMode("add");
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task: Task) => {
    setModalMode("edit");
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const openDeleteModal = (task: Task) => {
    setModalMode("delete");
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleSubmit = async (taskName: string) => {
    try {
      // ADD
      if (modalMode === "add") {
        if (!taskName.trim() || !category) return;

        const response = await axios.post(
          `/api/tasks`,
          {
            taskName,
            category,
            status: "pending",
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        setTasks((prev) => [...prev, response.data]);
      }

      // EDIT
      if (modalMode === "edit" && selectedTask) {
        await axios.put(
          `/api/tasks/${selectedTask._id}`,
          { taskName },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        setTasks((prev) =>
          prev.map((task) =>
            task._id === selectedTask._id ? { ...task, taskName } : task,
          ),
        );
      }

      // DELETE
      if (modalMode === "delete" && selectedTask) {
        await axios.delete(`/api/tasks/${selectedTask._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTasks((prev) =>
          prev.filter((task) => task._id !== selectedTask._id),
        );
      }

      setIsModalOpen(false);
      setIsSuccessOpen(true);
    } catch (error) {
      console.error("Error handling task:", error);
    }
  };

  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <AppHeader headerText="“From chaos to clarity, effortlessly. “" />
      <PrimaryTextLabel content={`Hello there ${user?.username} `} />
      <SecondaryTextLabel
        className="text-center"
        content="Here’s your hive of tasks—time to get busy."
      />
      <div className="border-2 mt-16 rounded-3xl p-8 mx-[10%] h-150 bg-container flex flex-col relative">
        <div className="flex items-center justify-between w-full mb-6">
          <PrimaryTextLabel content={`${category?.toUpperCase()} TASK`} />

          <IoAddCircleSharp
            size={40}
            className="text-2xl cursor-pointer hover:text-blue-500 transition fill-secondary"
            onClick={openAddModal}
          />
        </div>
        <div className="w-full overflow-y-auto">
          {!tasks.length && (
            <p className="text-center mt-[50%] text-black font-cursive">
              Nothing here yet. Your future productivity starts with one click.
            </p>
          )}
          {tasks.map((task) => (
            <TaskField
              key={task._id}
              value={task.taskName}
              checked={task.status === "completed"}
              onToggle={() => handleToggle(task._id, task.status)}
              onEdit={() => openEditModal(task)}
              onDelete={() => openDeleteModal(task)}
            />
          ))}
        </div>
        <AddTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          icon={
            modalMode === "add" ? (
              <MdAddTask size={60} />
            ) : modalMode === "edit" ? (
              <FaEdit size={60} />
            ) : (
              <MdDelete size={60} />
            )
          }
          primaryText={
            modalMode === "add"
              ? "Add Task"
              : modalMode === "edit"
                ? "Edit Task"
                : "Delete Task"
          }
          placeholder={
            modalMode === "edit"
              ? "Update your task"
              : "add it before you forget it"
          }
          defaultValue={
            modalMode === "edit" && selectedTask ? selectedTask.taskName : ""
          }
          isDelete={modalMode === "delete"}
        />
        <SuccessModal
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          title={
            modalMode === "add"
              ? "Task Added Successfully"
              : modalMode === "edit"
                ? "Task Updated Successfully"
                : "Task Deleted Successfully"
          }
          message={
            modalMode === "add"
              ? "Your task has been created."
              : modalMode === "edit"
                ? "Your task has been updated."
                : "Your task has been removed."
          }
          buttonText="Confirm"
          icon={<FaCheck />}
          autoClose={true}
          autoCloseTime={2000}
        />
      </div>
    </div>
  );
};

export default TaskPage;
