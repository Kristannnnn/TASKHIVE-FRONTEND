import { useNavigate } from "react-router-dom";
interface LandingPageButonProps {
  title: string;
  to: string;
  icon?: React.ReactNode;
}

const LandingPageButtonNavigation: React.FC<LandingPageButonProps> = ({
  title,
  to,
  icon,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(to)}
        className={`bg-container rounded-2xl p-3 w-60 py-6 text-black font-cursive flex items-center justify-center gap-2 border-b-4`}
        style={{ borderBottomColor: "rgba(0, 0, 0, 0.5)" }}
      >
        {icon && <span className="flex items-center mr-3">{icon}</span>}
        {title}
      </button>
    </div>
  );
};
export default LandingPageButtonNavigation;
