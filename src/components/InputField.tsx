import { type InputFieldProps } from "@/types/TextProps";

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <input
      className="mt-6 w-full pl-10 pr-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export default InputField;
