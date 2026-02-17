import ChangePasswordCard from "@/utils/ChangePasswordCard";
import { useSearchParams } from "react-router-dom";
import logo from "../assets/logo.png";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return (
      <div className="h-screen flex items-center justify-center">
        Invalid or missing reset link.
      </div>
    );
  }

  return (
    <div className="bg-primary flex-col justify-center h-screen">
      <div className="mt-10 w-screen flex justify-center items-center">
        <img src={logo} />
      </div>
      <ChangePasswordCard userId={id} />
    </div>
  );
}
