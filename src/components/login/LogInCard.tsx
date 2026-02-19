import { useAuthStore } from "@/stores/authStore";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdCreate } from "react-icons/io";
import {
  MdMail,
  MdOutlineKey,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../global/buttons/PrimaryButton";
import InputField from "../global/inputs/InputField";
import PrimaryTextLabel from "../global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "../global/inputs/SecondaryTextLabel";
import NotifOnlyModal from "../global/notifications/feedbacks/NotifOnlyModal";

export default function LogInCard() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const login = useAuthStore((state) => state.login);
  const [isSuccessOpen, setSuccessOpen] = useState(false);

  const handleLogin = async () => {
    try {
      setMessage("");

      if (!email.includes("@gmail.com")) {
        setMessage("Email must include @gmail.com");
        return;
      }

      const { data } = await axios.post("/api/login", {
        email,
        password,
      });

      console.log("Login response:", data);

      if (data.token) {
        setSuccessOpen(true);
        setTimeout(() => {
          login(data.token, data.user, data.expiresIn);
        }, 1000);
      }
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="border-2 mt-16 rounded-3xl p-8 mx-[10%] bg-container flex flex-col items-center justify-center">
      <div>
        <NotifOnlyModal
          isOpen={isSuccessOpen}
          onClose={() => {
            setSuccessOpen(false);
            navigate("/dashboard");
          }}
          title="Login Successful"
          message="Welcome back!"
          icon={<div className="text-green-500">✓</div>}
          autoClose={false}
        />
      </div>

      <PrimaryTextLabel content="Hello there" />
      <SecondaryTextLabel
        className="pl-[10%]"
        content="Ready to organize your day?"
      />

      <div className="relative w-64 mt-4">
        <MdMail className="absolute left-3 top-1/2 translate-y-1 text-black" />
        <InputField
          type="text"
          placeholder="enter email"
          value={email}
          onChange={setEmail}
        />
      </div>

      <div className="relative w-64 mt-4">
        <MdOutlineKey className="absolute left-3 top-1/2 -translate-y-2.5 text-black" />
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="enter password"
          value={password}
          onChange={setPassword}
        />
        {showPassword ? (
          <MdVisibility
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <MdVisibilityOff
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
        <p
          className="text-secondary pl-31 mr-2.5 underline mt-1 cursor-pointer font-cursive"
          onClick={() => navigate("/forgotpassword")}
        >
          forgot password
        </p>
      </div>

      <PrimaryButton title="Log In" onClick={handleLogin} />

      {message && (
        <p className="text-center text-sm mt-4 text-secondary">{message}</p>
      )}

      <div className="mt-4 w-full flex justify-center items-center gap-4">
        <button
          className="flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-3xl bg-white font-cursive"
          onClick={() => navigate("")}
        >
          continue with <FcGoogle className="text-lg" />
        </button>

        <button
          className="flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-3xl bg-white font-cursive"
          onClick={() => navigate("/register")}
        >
          create account <IoMdCreate className="text-lg" />
        </button>
      </div>
    </div>
  );
}
