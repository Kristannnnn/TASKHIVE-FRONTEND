import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import TaskField from "@/components/taskField";
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

interface Task {
  _id: string;
  taskName: string;
  category: string;
  status: "pending" | "completed";
}

const TaskPage = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const token = useAuthStore((state) => state.token);
  const handleToggle = async (taskId: string, currentStatus: string) => {
    const newStatus = currentStatus === "pending" ? "completed" : "pending";

    try {
      await axios.put(
        `/api/tasks/${taskId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

  useEffect(() => {
    if (!category) return;

    const fetchTasks = async () => {
      try {
        const response = await axios.get(`/api/tasks/${category}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("API Response:", response.data);
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
  }, [category]);

  return (
    <div className="border-2 mt-16 rounded-3xl p-8 mx-[10%] h-[600px] bg-container flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-6">
        <PrimaryTextLabel content={`${category?.toUpperCase()} TASK`} />

        <IoAddCircleSharp
          className="text-2xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate(`/task/${category}/create`)}
        />
      </div>

      {/* Tasks */}
      <div className="w-full">
        {tasks.map((task) => (
          <TaskField
            key={task._id}
            value={task.taskName}
            checked={task.status === "completed"}
            onToggle={() => handleToggle(task._id, task.status)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
