import logo from "@/assets/logo.png";
import LandingPageButtonNavigation from "@/components/global/buttons/Buttons";

export default function LandingPage() {
  return (
    <div className="bg-primary h-screen flex justify-center flex-col items-center gap-30">
      <div>
        <img src={logo} />
      </div>
      <div>
        <LandingPageButtonNavigation title="Get Started" to="/login" />
      </div>
    </div>
  );
}
