import AppHeader from "@/components/AppHeader";
import LandingPageButtonNavigation from "@/components/Buttons";
import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import { FaTasks, FaUserCircle } from "react-icons/fa";
import { IoIosArchive } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
export default function Dashboard() {
  const storedUsername = localStorage.getItem("username");

  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <AppHeader headerText="“From chaos to clarity, effortlessly. “" />
      <div>
        <PrimaryTextLabel content={`Hello there ${storedUsername} `} />
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
          to="/login"
          icon={<IoLogOut />}
        />
      </div>
    </div>
  );
}
