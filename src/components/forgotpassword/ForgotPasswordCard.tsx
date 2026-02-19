import PrimaryButton from "@/components/global/buttons/PrimaryButton";
import InputField from "@/components/global/inputs/InputField";
import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import NotifOnlyModal from "@/components/global/notifications/feedbacks/NotifOnlyModal";
import axios from "axios";
import { useState } from "react";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordCard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSuccessOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (error) setError(""); // Clear error as user types
  };

  const handleForgotPass = async () => {
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must include @");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/forgotpass", { email });
      setSuccessOpen(true);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Failed to send reset link");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
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
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <NotifOnlyModal
          isOpen={isSuccessOpen}
          onClose={() => {
            setSuccessOpen(false);
            navigate("/login");
          }}
          title="Reset Link Sent"
          message="Check your email for the password reset link."
          icon={<div className="text-green-500">✓</div>}
          autoClose={false}
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <PrimaryButton
        title={loading ? "Sending..." : "Reset Password"}
        onClick={handleForgotPass}
        disabled={loading}
      />
    </div>
  );
}
