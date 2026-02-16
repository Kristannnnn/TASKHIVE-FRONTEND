import AppHeader from "@/components/AppHeader";
import LandingPageButtonNavigation from "@/components/Buttons";
import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import { CiSquarePlus } from "react-icons/ci";
import { FaChalkboardUser } from "react-icons/fa6";
import { IoTodayOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
export default function Category() {
  const storedUsername = localStorage.getItem("username");
  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <AppHeader headerText="“From chaos to clarity, effortlessly. “" />
      <div>
        <PrimaryTextLabel content={`Hello there ${storedUsername}`} />
      </div>
      <div className="flex justify-center items-center flex-col pt-10 gap-20">
        <LandingPageButtonNavigation
          title="PERSONAL"
          to="/task/personal"
          icon={<FaChalkboardUser />}
        />
        <LandingPageButtonNavigation
          title="DAILY"
          to="/task/daily"
          icon={<IoTodayOutline />}
        />
        <LandingPageButtonNavigation
          title="WORK"
          to="/task/work"
          icon={<MdOutlineWorkOutline />}
        />
        <LandingPageButtonNavigation
          title="OTHER"
          to="/task/other"
          icon={<CiSquarePlus />}
        />
      </div>
    </div>
  );
}
