import axios from "axios";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMail, MdOutlineKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InputField from "../global/inputs/InputField";
import PrimaryTextLabel from "../global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "../global/inputs/SecondaryTextLabel";

export default function RegisterCard() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const checkStrength = (password: string) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = checkStrength(password);

  const getStrengthLabel = () => {
    if (strength <= 1) return "Weak";
    if (strength === 2 || strength === 3) return "Medium";
    if (strength === 4) return "Strong";
    return "";
  };

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength === 2 || strength === 3) return "bg-yellow-500";
    if (strength === 4) return "bg-green-500";
    return "bg-gray-300";
  };

  const handleRegister = async () => {
    try {
      setError("");

      if (!username || !email || !password || !confirmPassword) {
        setError("All fields are required");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      if (strength <= 1) {
        setError("Password is too weak");
        return;
      }

      const response = await axios.post("/api/users", {
        username,
        email,
        password,
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
        className="text-center"
        content="It only takes a minute to start organizing your tasks."
      />

      {/* Username */}
      <div className="relative w-64 mt-4">
        <FaUserCircle className="absolute left-3 top-12 -translate-y-1/2" />
        <InputField
          type="text"
          placeholder="enter username"
          value={username}
          onChange={setUsername}
        />
      </div>

      <div className="relative w-64 mt-4">
        <MdMail className="absolute left-3 top-12 -translate-y-1/2" />
        <InputField
          type="email"
          placeholder="enter email"
          value={email}
          onChange={setEmail}
        />
      </div>

      <div className="relative w-64 mt-4">
        <MdOutlineKey className="absolute left-3 top-11 -translate-y-1/2" />
        <InputField
          type="password"
          placeholder="enter password"
          value={password}
          onChange={setPassword}
        />

        {password && (
          <div className="mt-2">
            <div className="h-2 w-full bg-gray-200 rounded">
              <div
                className={`h-2 rounded transition-all duration-300 ${getStrengthColor()}`}
                style={{ width: `${(strength / 4) * 100}%` }}
              />
            </div>

            <p className="text-sm mt-1 font-medium">
              Strength: {getStrengthLabel()}
            </p>

            <ul className="text-xs mt-2 space-y-1">
              <li
                className={
                  password.length >= 8 ? "text-green-500" : "text-gray-400"
                }
              >
                • At least 8 characters
              </li>
              <li
                className={
                  /[A-Z]/.test(password) ? "text-green-500" : "text-gray-400"
                }
              >
                • One uppercase letter
              </li>
              <li
                className={
                  /[0-9]/.test(password) ? "text-green-500" : "text-gray-400"
                }
              >
                • One number
              </li>
              <li
                className={
                  /[^A-Za-z0-9]/.test(password)
                    ? "text-green-500"
                    : "text-gray-400"
                }
              >
                • One special character
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div className="relative w-64 mt-4">
        <MdOutlineKey className="absolute left-3 top-11 -translate-y-1/2" />
        <InputField
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        onClick={handleRegister}
        disabled={strength <= 1}
        className={`border-2 rounded-lg mt-6 py-2 px-16 text-white transition-all font-cursive ${
          strength <= 1 ? "bg-gray-400 " : "bg-secondary hover:opacity-90"
        }`}
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
