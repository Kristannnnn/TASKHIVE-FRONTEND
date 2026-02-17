import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/SecondaryTextLabel";
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

export default function LogInCard() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const login = useAuthStore((state) => state.login);

  
  const handleLogin = async () => {
    try {
      const { data } = await axios.post("/api/login", {
        email,
        password,
      });

      if (data.token) {
        login(data.token, data.user);
      }

      alert("Logged In");

      console.log(useAuthStore.getState().token);

      navigate("/dashboard");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="border-2 mt-16 rounded-3xl p-8 mx-[10%] bg-container flex flex-col items-center justify-center">
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
          className="text-secondary text-center mr-2.5 underline mt-1 cursor-pointer"
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
          className="flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-3xl bg-white hover:shadow-md transition-all flex-1 max-w-50 min-w-30"
          onClick={() => navigate("")}
        >
          continue with <FcGoogle className="text-lg" />
        </button>

        <button
          className="flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-3xl bg-white hover:shadow-md transition-all flex-1 max-w-50 min-w-30"
          onClick={() => navigate("/register")}
        >
          create account <IoMdCreate className="text-lg" />
        </button>
      </div>
    </div>
  );
}
