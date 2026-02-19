import AppHeader from "@/components/global/inputs/AppHeader";
import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import TaskField from "@/components/global/inputs/TaskField";
import SuccessModal from "@/components/global/notifications/feedbacks/SuccessModal";
import TaskSkeleton from "@/components/global/skeletons/TaskSkeleton";
import AddTaskModal from "@/components/task/AddTaskModal";
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";

interface Task {
  _id: string;
  taskName: string;
  category: string;
  status: "pending" | "completed";
}

const Archive = () => {
  const { category } = useParams<{ category: string }>();
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useEffect(() => {
    if (!category || !token) return;

    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(`/api/tasks/${category}/completed`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Failed to load tasks");
        setTasks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [category, token]);

  const openDeleteModal = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedTask) return;

    try {
      await axios.delete(`/api/tasks/${selectedTask._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks((prev) => prev.filter((task) => task._id !== selectedTask._id));

      setIsModalOpen(false);
      setIsSuccessOpen(true);
    } catch (err) {
      console.error("Error deleting task:", err);
      setError("Failed to delete task");
    }
  };

  if (loading) {
    return <TaskSkeleton />;
  }

  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <AppHeader headerText="“From chaos to clarity, effortlessly.”" />
      <PrimaryTextLabel content={`Hello there ${user?.username}`} />
      <SecondaryTextLabel content="Here’s your hive of completed tasks." />

      <div className="border-2 mt-5 rounded-3xl p-8 mx-[10%] bg-container flex flex-col h-[400px]">
        <div className="flex items-center justify-between w-full mb-6">
          <PrimaryTextLabel content={`${category?.toUpperCase()} ARCHIVE`} />
        </div>

        <div className="w-full overflow-y-auto flex-1">
          {error ? (
            <p className="text-center mt-20 text-red-500">{error}</p>
          ) : tasks.length === 0 ? (
            <p className="text-center mt-20 text-black">
              No completed tasks yet.
            </p>
          ) : (
            tasks.map((task) => (
              <TaskField
                key={task._id}
                value={task.taskName}
                checked={task.status === "completed"}
                onToggle={() => {}}
                onDelete={() => openDeleteModal(task)}
                hideEdit={true}
              />
            ))
          )}
        </div>
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleDelete}
        icon={<MdDelete size={60} />}
        primaryText="Delete Task"
        placeholder=""
        defaultValue={selectedTask?.taskName || ""}
        isDelete={true}
      />

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Task Deleted Successfully"
        message="Your archived task has been removed."
        buttonText="Confirm"
        icon={<FaCheck />}
        autoClose={true}
        autoCloseTime={2000}
      />
    </div>
  );
};

export default Archive;
