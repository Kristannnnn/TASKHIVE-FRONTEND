import axios from "axios";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  MdMail,
  MdOutlineKey,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InputField from "../global/inputs/InputField";
import PrimaryTextLabel from "../global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "../global/inputs/SecondaryTextLabel";
import NotifOnlyModal from "../global/notifications/feedbacks/NotifOnlyModal";
import TermsAndConditionModal from "./TermsAndConditionModal";
export default function RegisterCard() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccessOpen, setSuccessOpen] = useState(false);
  const [isErrorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (value && !value.includes("@gmail.com")) {
      setError("Email must include @gmail.com");
      return;
    }

    setError("");
  };

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
    if (strength <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const handleRegister = async () => {
    try {
      setError("");

      if (!termsAccepted) {
        setError("You must accept the Terms and Conditions");
        return;
      }

      if (!username || !email || !password || !confirmPassword) {
        setError("All fields are required");
        return;
      }

      if (!email.includes("@")) {
        setError("Email must include @");
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

      await axios.post("/api/users", {
        username,
        email,
        password,
      });
      setSuccessOpen(true);
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed, change credentials for duplicate.");
      setErrorOpen(true);
      setTimeout(() => {
        setErrorOpen(false);
      }, 1000);
    }
  };

  const isRegisterDisabled = strength <= 1 || !termsAccepted;

  return (
    <>
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

        {/* Email */}
        <div className="relative w-64 mt-4">
          <MdMail className="absolute left-3 top-12 -translate-y-1/2" />
          <InputField
            type="email"
            placeholder="enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        {/* Password */}
        <div className="relative w-64 mt-4">
          <MdOutlineKey className="absolute left-3 top-11 -translate-y-1/2" />
          <InputField
            type={showPassword ? "text" : "password"}
            placeholder="enter password"
            value={password}
            onChange={setPassword}
          />
          {showPassword ? (
            <MdVisibility
              className="absolute right-3 top-11 -translate-y-1/2 text-black cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <MdVisibilityOff
              className="absolute right-3 top-11 -translate-y-1/2 text-black cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}

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
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative w-64 mt-4">
          <MdOutlineKey className="absolute left-3 top-11 -translate-y-1/2" />
          <InputField
            type={showConfirmPassword ? "text" : "password"}
            placeholder="confirm password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          {showConfirmPassword ? (
            <MdVisibility
              className="absolute right-3 top-11 -translate-y-1/2 text-black cursor-pointer"
              onClick={() => setShowConfirmPassword(false)}
            />
          ) : (
            <MdVisibilityOff
              className="absolute right-3 top-11 -translate-y-1/2 text-black cursor-pointer"
              onClick={() => setShowConfirmPassword(true)}
            />
          )}
        </div>

        {/* Terms Link */}
        <div className="mt-4 text-sm text-center">
          <span>
            By registering, you agree to our{" "}
            <button
              type="button"
              onClick={() => setShowTerms(true)}
              className="text-secondary font-bold underline"
            >
              Terms and Conditions
            </button>
          </span>
        </div>

        {termsAccepted && (
          <p className="text-green-600 text-sm mt-1">✓ Terms accepted</p>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={handleRegister}
          disabled={isRegisterDisabled}
          className={`border-2 rounded-lg mt-6 py-2 px-16 text-white transition-all font-cursive ${
            isRegisterDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-secondary hover:opacity-90"
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

      {/* Terms Modal */}
      <TermsAndConditionModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        onAccept={() => {
          setTermsAccepted(true);
          setShowTerms(false);
        }}
      />
      <div>
        <NotifOnlyModal
          isOpen={isSuccessOpen}
          onClose={() => {
            setSuccessOpen(false);
            navigate("/dashboard");
          }}
          title="Registered Successful"
          message="Welcome to Taskhive!"
          icon={<div className="">✓</div>}
          autoClose={false}
        />
        <NotifOnlyModal
          isOpen={isErrorOpen}
          onClose={() => {
            setErrorOpen(false);
          }}
          title="Registration Failed"
          message={errorMessage}
          icon={<div className="text-red-500">✕</div>}
          autoClose={false}
        />
      </div>
    </>
  );
}
