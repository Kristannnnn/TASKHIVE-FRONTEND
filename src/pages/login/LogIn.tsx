import logo from "@/assets/logo.png";
import LogInCard from "@/components/login/LogInCard";
export default function LogIn() {
  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <div className="mt-18 w-screen  flex justify-center items-center">
        <img src={logo} />
      </div>
      <LogInCard />
    </div>
  );
}
