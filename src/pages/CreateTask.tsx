import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateTask = () => {
  const { category } = useParams<{ category: string }>();
  const [taskName, setTaskName] = useState("");
  const token = useAuthStore((state) => state.token);

  const handleSubmit = async () => {
    if (!taskName.trim() || !token) {
      console.log("No token available");
      return;
    }

    try {
      console.log("TOKEN BEING SENT:", token);

      const response = await axios.post(
        "/api/tasks",
        {
          taskName,
          category,
          status: "pending",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Created Task:", response.data);
      setTaskName("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default CreateTask;
