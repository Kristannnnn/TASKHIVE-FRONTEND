import InputField from "@/components/InputField";
import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/SecondaryTextLabel";
import axios from "axios";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMail, MdOutlineKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function RegisterCard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      if (!username || !email || !newPassword) {
        setError("All fields are required");
        return;
      }
      if (newPassword !== oldPassword) {
        setError("Passwords do not match");
        return;
      }
      const response = await axios.post("/api/users", {
        username,
        email,
        password: newPassword,
      });
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    }
  };
  return (
    <div className="border-2 mt-16 rounded-3xl p-8 mx-[10%] bg-container flex flex-col items-center justify-center">
      <PrimaryTextLabel content="Let’s Get You Started!" />
      <SecondaryTextLabel
        className="text-center "
        content="It only takes a minute to start organizing your tasks."
      />
      <div className="relative w-64">
        <FaUserCircle className="absolute left-3 top-1/2 translate-y-1" />
        <InputField
          type="text"
          placeholder="enter username"
          value={username}
          onChange={setUsername}
        />
      </div>
      <div className="relative w-64">
        <MdMail className="absolute left-3 top-1/2 translate-y-1" />
        <InputField
          type="email"
          placeholder="enter email"
          value={email}
          onChange={setEmail}
        />
      </div>
      <div className="relative w-64">
        <MdOutlineKey className="absolute left-3 top-1/2 translate-y-1" />
        <InputField
          type="password"
          placeholder="enter password"
          value={oldPassword}
          onChange={setOldPassword}
        />
      </div>
      <div className="relative w-64">
        <MdOutlineKey className="absolute left-3 top-1/2 translate-y-1" />
        <InputField
          type="password"
          placeholder="confirm password"
          value={newPassword}
          onChange={setNewPassword}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <button
        onClick={handleRegister}
        className="border-2 rounded-lg mt-[6%] py-1.25 px-17.5 bg-secondary text-white hover:cursor-pointer"
      >
        Register
      </button>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-secondary font-bold">
          Login
        </a>
      </p>
    </div>
  );
}
