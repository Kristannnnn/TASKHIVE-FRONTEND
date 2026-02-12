import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/SecondaryTextLabel";
import { MdMail } from "react-icons/md";

export default function ForgotPasswordCard() {
  return (
    <div className=" border-2 mt-16 rounded-3xl p-8 mx-[10%] bg-container flex flex-col items-center justify-center">
      <PrimaryTextLabel content="Forgot Password?" />
      <SecondaryTextLabel
        className="text-center"
        content="Enter your email address and we’ll send you a reset link."
      />
      <div className="relative w-64">
        <MdMail className="absolute left-3 top-1/2 translate-y-1" />
        <InputField type="email" placeholder="enter email" />
      </div>
      <PrimaryButton title="Reset Password" to="/login" />
    </div>
  );
}
