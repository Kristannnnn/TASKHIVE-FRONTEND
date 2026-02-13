import { type PrimaryButtonProps } from "@/types/TextProps";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 rounded-[8px] mt-[6%] py-[5px] px-[70px] bg-secondary text-white hover:cursor-pointer"
    >
      {title}
    </button>
  );
};
export default PrimaryButton;
