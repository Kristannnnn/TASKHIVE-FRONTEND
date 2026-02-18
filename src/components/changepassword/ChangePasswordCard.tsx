import PrimaryButton from "@/components/global/buttons/PrimaryButton";
import InputField from "@/components/global/inputs/InputField";
import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import axios, { isAxiosError } from "axios";
import { useState } from "react";
import { MdOutlineKey, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
interface changePassProps {
  userId: string;
}

export default function ChangePasswordCard({ userId }: changePassProps) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async () => {
    setError("");
    setMessage("");

    if (!newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.put(`/api/users/${userId}`, {
        password: newPassword,
      });

      setMessage("Password successfully updated");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err: unknown) {
      console.error(err);
      if (isAxiosError(err))
        setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="border-2 mt-16 rounded-3xl p-8 mx-[10%] bg-container flex flex-col items-center justify-center">
      <PrimaryTextLabel content="Change Password" />
      <SecondaryTextLabel
        className="text-center"
        content="Please enter a new password for your account."
      />

      {/* New Password */}
      <div className="relative w-64 mt-4">
        <MdOutlineKey className="absolute left-3 top-12 -translate-y-2.5 text-black" />
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="New password"
          value={newPassword}
          onChange={setNewPassword}
        />
        {showPassword ? (
          <MdVisibility aria-label="showPasswordOn"
            className="absolute right-3 top-12 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <MdVisibilityOff
            className="absolute right-3 top-12 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>

      {/* Confirm Password */}
      <div className="relative w-64 mt-4">
        <MdOutlineKey className="absolute left-3 top-12 -translate-y-2.5 text-black" />
        <InputField
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
        {showConfirmPassword ? (
          <MdVisibility
            className="absolute right-3 top-12 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowConfirmPassword(false)}
          />
        ) : (
          <MdVisibilityOff
            className="absolute right-3 top-12 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowConfirmPassword(true)}
          />
        )}
      </div>

      {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
      {message && <p className="text-green-600 text-sm mt-3">{message}</p>}

      <PrimaryButton title="Update Password" onClick={handleChangePassword} />
    </div>
  );
}
