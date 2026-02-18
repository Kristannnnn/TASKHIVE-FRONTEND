import AppHeader from "@/components/global/inputs/AppHeader";
import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { useEffect, useState } from "react";
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

  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <AppHeader headerText="“From chaos to clarity, effortlessly.”" />
      <PrimaryTextLabel content={`Hello there ${user?.username}`} />
      <SecondaryTextLabel content="Here’s your hive of completed tasks." />

      <div className="border-2 mt-16 rounded-3xl p-8 mx-[10%] h-[600px] bg-container flex flex-col relative">
        <div className="flex items-center justify-between w-full mb-6">
          <PrimaryTextLabel content={`${category?.toUpperCase()} ARCHIVE`} />
        </div>

        <div className="w-full overflow-y-auto flex-1">
          {loading ? (
            <p className="text-center mt-20 text-black">Loading...</p>
          ) : error ? (
            <p className="text-center mt-20 text-red-500">{error}</p>
          ) : tasks.length === 0 ? (
            <p className="text-center mt-20 text-black">
              No completed tasks yet.
            </p>
          ) : (
            tasks.map((task) => (
              <div
                key={task._id}
                className="p-4 border-b flex justify-between items-center"
              >
                <PrimaryTextLabel content={task.taskName} />
                <span className="text-green-600 font-medium">
                  {task.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Archive;
