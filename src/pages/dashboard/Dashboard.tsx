import LandingPageButtonNavigation from "@/components/global/buttons/Buttons";
import AppHeader from "@/components/global/inputs/AppHeader";
import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import NotifOnlyModal from "@/components/global/notifications/feedbacks/NotifOnlyModal";
import SkeletonLoader from "@/components/global/skeletons/DashboardSkeleton";
import { useAuthStore } from "@/stores/authStore";
import { useEffect, useState } from "react";
import { FaTasks, FaUserCircle } from "react-icons/fa";
import { IoIosArchive } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isSuccessOpen, setSuccessOpen] = useState(false);

  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    setSuccessOpen(true);
    setTimeout(() => {
      logout();
    }, 1000);
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <AppHeader headerText="Organize, prioritize, conquer. Let’s get started!" />
      <div>
        <PrimaryTextLabel content={`Hello there ${user?.username}`} />

        <SecondaryTextLabel content="Here’s your hive of tasks—time to get busy." />
      </div>
      <div className="flex justify-center items-center flex-col pt-10 gap-9">
        <LandingPageButtonNavigation
          title="TASK"
          to="/Category"
          icon={<FaTasks />}
        />
        <LandingPageButtonNavigation
          title="ARCHIVE"
          to="/archivecategory"
          icon={<IoIosArchive />}
        />
        <LandingPageButtonNavigation
          title="PROFILE"
          to="/comingsoon"
          icon={<FaUserCircle />}
        />
        <LandingPageButtonNavigation
          title="LOG OUT"
          onClick={handleLogout}
          icon={<IoLogOut />}
        />
      </div>
      <div>
        <NotifOnlyModal
          isOpen={isSuccessOpen}
          onClose={() => {
            setSuccessOpen(false);
            navigate("/dashboard");
          }}
          title="Logged Out"
          message="Untill your next visit!"
          icon={<div className="">✓</div>}
          autoClose={false}
        />
      </div>
    </div>
  );
}
