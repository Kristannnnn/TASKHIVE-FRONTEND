import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (taskName: string) => void;
  icon?: React.ReactNode;
  primaryText?: string;
  placeholder: string;
  defaultValue?: string;
  isDelete?: boolean;
}

const AddTaskModal = ({
  isOpen,
  onClose,
  onSubmit,
  icon,
  primaryText,
  placeholder,
  defaultValue = "",
  isDelete = false,
}: AddTaskModalProps) => {
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTaskName(defaultValue);
    }
  }, [defaultValue, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!isDelete && !taskName.trim()) return;

    onSubmit(taskName);
    setTaskName("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-container w-100 rounded-2xl shadow-xl p-8 relative">
        <h2 className="text-2xl font-cursive text-black text-center mb-6">
          {primaryText}
        </h2>

        <div className="flex justify-center mb-6">{icon}</div>
        {!isDelete && (
          <input
            type="text"
            placeholder={placeholder}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full px-4 py-2 rounded-full border text-center border-black focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        )}

        {isDelete && (
          <p className="text-center text-black mb-4">
            Are you sure you want to delete this task?
          </p>
        )}

        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={handleSubmit}
            className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-red-800 transition"
          >
            {isDelete
              ? "Delete"
              : primaryText?.includes("Edit")
                ? "Save"
                : "Add"}
          </button>

          <button
            onClick={onClose}
            className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-red-800 transition"
          >
            Cancel
          </button>
        </div>

        <IoClose
          className="absolute top-4 right-4 text-xl cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default AddTaskModal;
