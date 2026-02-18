import { type PrimaryButtonProps } from "@/types/TextProps";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 rounded-lg mt-[6%] py-1.25 px-17.5 bg-secondary text-white font-cursive"
    >
      {title}
    </button>
  );
};
export default PrimaryButton;
