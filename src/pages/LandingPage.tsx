import logo from "../assets/logo.png";
import LandingPageButton from "@/components/Buttons";

export default function LandingPage() {
  return (
    <div className="bg-primary h-screen flex justify-center flex-col items-center gap-30">
      <div>
        {" "}
        <img src={logo} />
      </div>
      <div><LandingPageButton/> </div>
    </div>
  );
}
