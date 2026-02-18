import axios from "axios";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMail, MdOutlineKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InputField from "../global/inputs/InputField";
import PrimaryTextLabel from "../global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "../global/inputs/SecondaryTextLabel";
import TermsAndConditionModal from "../modals/TermsAndConditionModal";

export default function RegisterCard() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
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

      if (!acceptedTerms) {
        setError("You must accept the Terms and Conditions");
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
    <>
      {/* Terms Modal */}
      <TermsAndConditionModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={() => {
          setAcceptedTerms(true);
          setShowTermsModal(false);
        }}
      />

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
            onChange={setEmail}
          />
        </div>

        {/* Password */}
        <div className="relative w-64 mt-4">
          <MdOutlineKey className="absolute left-3 top-11 -translate-y-1/2" />
          <InputField
            type="password"
            placeholder="enter password"
            value={password}
            onChange={setPassword}
          />
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

        {/* Terms Checkbox */}
        <div className="flex items-center gap-2 mt-4 w-64">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={() => {
              if (!acceptedTerms) {
                setShowTermsModal(true); // open modal first
              } else {
                setAcceptedTerms(false);
              }
            }}
            className="w-4 h-4"
          />
          <span className="text-sm">
            I agree to the{" "}
            <span
              className="text-secondary font-bold cursor-pointer underline"
              onClick={() => setShowTermsModal(true)}
            >
              Terms and Conditions
            </span>
          </span>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Register Button */}
        <button
          onClick={handleRegister}
          disabled={strength <= 1 || !acceptedTerms}
          className={`border-2 rounded-lg mt-6 py-2 px-16 text-white transition-all font-cursive ${
            strength <= 1 || !acceptedTerms
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
    </>
  );
}
