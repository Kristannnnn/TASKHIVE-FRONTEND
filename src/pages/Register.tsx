import RegisterCard from "@/utils/RegisterCard";
import logo from "../assets/logo.png";

export default function Register() {
  return (
    <div className="bg-primary flex-col justify-center h-screen ">
      <div className="mt-10 w-screen  flex justify-center items-center">
        <img src={logo} />
      </div>
      <RegisterCard />
    </div>
  );
}
