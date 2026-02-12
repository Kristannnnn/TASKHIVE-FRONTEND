import { type PrimaryButtonProps } from "@/types/TextProps";
import { useNavigate } from "react-router-dom";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, to }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="border-2 rounded-[8px] mt-[6%] py-[5px] px-[70px] bg-secondary text-white hover:cursor-pointer"
    >
      {title}
    </button>
  );
};
export default PrimaryButton;
