import PrimaryButton from "@/components/global/buttons/PrimaryButton";
import InputField from "@/components/global/inputs/InputField";
import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import axios from "axios";
import { useState } from "react";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ForgotPasswordCard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleForgotPass = async () => {
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    try {
      await axios.post("/api/forgotpass", { email });
      setSuccess("Reset link sent");
      toast.success("Reset pass sent");
      navigate("/login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Failed to send reset link");
      } else {
        setError("Something went wrong");
      }
    }
  };
  return (
    <div className=" border-2 mt-16 rounded-3xl p-8 mx-[10%] bg-container flex flex-col items-center justify-center">
      <PrimaryTextLabel content="Forgot Password?" />
      <SecondaryTextLabel
        className="text-center"
        content="Enter your email address and we’ll send you a reset link."
      />
      <div className="relative w-64">
        <MdMail className="absolute left-3 top-1/2 translate-y-1" />
        <InputField
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}
      <PrimaryButton title="Reset Password" onClick={handleForgotPass} />
    </div>
  );
}
