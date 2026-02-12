import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/SecondaryTextLabel";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMail, MdOutlineKey } from "react-icons/md";

export default function RegisterCard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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
      <PrimaryButton title="Register" to="/login" />
    </div>
  );
}
