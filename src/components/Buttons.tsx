import { useNavigate } from "react-router-dom";

interface LandingPageButonProps {
  title: string;
  to?: string; // 👈 make optional
  icon?: React.ReactNode;
  onClick?: () => void;
}

const LandingPageButtonNavigation: React.FC<LandingPageButonProps> = ({
  title,
  to,
  icon,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to); 
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-container rounded-2xl p-3 w-60 py-6 text-black font-cursive flex items-center justify-center gap-2 border-b-4"
        style={{ borderBottomColor: "rgba(0, 0, 0, 0.5)" }}
      >
        {icon && <span className="flex items-center mr-3">{icon}</span>}
        {title}
      </button>
    </div>
  );
};

export default LandingPageButtonNavigation;
