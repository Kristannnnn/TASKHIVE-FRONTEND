import LandingPageButtonNavigation from "@/components/global/buttons/Buttons";
import AppHeader from "@/components/global/inputs/AppHeader";
import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import SkeletonLoader from "@/components/global/skeletons/DashboardSkeleton";
import { useAuthStore } from "@/stores/authStore";
import { useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaChalkboardUser } from "react-icons/fa6";
import { IoTodayOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
export default function ArchiveCategory() {
  const user = useAuthStore((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <AppHeader headerText="“From chaos to clarity, effortlessly. “" />
      <div>
        <PrimaryTextLabel content={`Hello there ${user?.username}`} />
        <SecondaryTextLabel content="Organize, prioritize, conquer. Let’s get started!" />
      </div>
      <div className="flex justify-center items-center flex-col pt-10 gap-9">
        <LandingPageButtonNavigation
          title="PERSONAL"
          to="/archive/personal"
          icon={<FaChalkboardUser />}
        />
        <LandingPageButtonNavigation
          title="DAILY"
          to="/archive/daily"
          icon={<IoTodayOutline />}
        />
        <LandingPageButtonNavigation
          title="WORK"
          to="/archive/work"
          icon={<MdOutlineWorkOutline />}
        />
        <LandingPageButtonNavigation
          title="OTHER"
          to="/archive/other"
          icon={<CiSquarePlus />}
        />
      </div>
    </div>
  );
}
