import { useNavigate } from "react-router-dom";
interface LandingPageButonProps {
  title: string;
  to: string;
}

const LandingPageButtonNavigation: React.FC<LandingPageButonProps> = ({
  title,
  to,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(to)}
        className={
          "bg-secondary rounded-2xl p-3 w-60 py-6 text-white font-cursive"
        }
      >
        {title}
      </button>
    </div>
  );
};
export default LandingPageButtonNavigation;
