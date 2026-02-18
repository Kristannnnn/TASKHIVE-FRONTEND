import type { TaskFieldProps } from "@/types/TextProps";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const TaskField: React.FC<TaskFieldProps> = ({
  placeholder,
  type = "text",
  value,
  checked,
  onToggle,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="relative w-full mt-6 flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="absolute left-3 w-4 h-4 rounded-2xl"
      />

      <input
        className={`w-full pl-10 pr-20 py-2 border rounded-2xl font-cursive focus:outline-none
        ${checked ? "line-through text-black" : ""}`}
        placeholder={placeholder}
        type={type}
        value={value}
        disabled
        readOnly
      />

      {/* Icons */}
      <div className="absolute right-3 flex gap-3">
        <FaEdit
          className="cursor-pointer fill-secondary text-blue-500 hover:text-blue-700"
          onClick={onEdit}
        />

        <FaTrash
          className="cursor-pointer fill-secondary text-red-500 hover:text-red-700"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default TaskField;
