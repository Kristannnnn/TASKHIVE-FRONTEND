import ForgotPasswordCard from "@/utils/ForgotPasswordCard";
import logo from "../assets/logo.png";
export default function ForgotPassword() {
  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <div className="mt-18 w-screen  flex justify-center items-center">
        <img src={logo} />
      </div>
      <ForgotPasswordCard />
    </div>
  );
}
