import AppHeader from "@/components/AppHeader";
import LandingPageButtonNavigation from "@/components/Buttons";
import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/SecondaryTextLabel";
import { useAuthStore } from "@/stores/authStore";
import { FaTasks, FaUserCircle } from "react-icons/fa";
import { IoIosArchive } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <AppHeader headerText="Organize, prioritize, conquer. Let’s get started!" />
      <div>
        <PrimaryTextLabel content={`Hello there ${user?.username}`} />

        <SecondaryTextLabel content="Here’s your hive of tasks—time to get busy." />
      </div>
      <div className="flex justify-center items-center flex-col pt-10 gap-20">
        <LandingPageButtonNavigation
          title="TASK"
          to="/Category"
          icon={<FaTasks />}
        />
        <LandingPageButtonNavigation
          title="ARCHIVE"
          to="/login"
          icon={<IoIosArchive />}
        />
        <LandingPageButtonNavigation
          title="PROFILE"
          to="/login"
          icon={<FaUserCircle />}
        />
        <LandingPageButtonNavigation
          title="LOG OUT"
          onClick={handleLogout}
          icon={<IoLogOut />}
        />
      </div>
    </div>
  );
}
