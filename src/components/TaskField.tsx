import type { TaskFieldProps } from "@/types/TextProps";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const TaskField: React.FC<TaskFieldProps> = ({
  placeholder,
  type = "text",
  value,
  checked,
  onChange,
  onToggle,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="relative w-full mt-6 flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="absolute left-3 w-4 h-4"
      />

      <input
        className={`w-full pl-10 pr-20 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500
        ${checked ? "line-through text-black" : ""}`}
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={!isEditing || checked}
        onChange={(e) => onChange?.(e.target.value)}
      />

      <div className="absolute right-3 flex gap-3">
        <FaEdit
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => setIsEditing(!isEditing)}
        />

        <FaTrash
          className="cursor-pointer text-red-500 hover:text-red-700"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};
export default TaskField;
