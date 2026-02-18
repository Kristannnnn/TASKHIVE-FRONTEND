import PrimaryTextLabel from "@/components/global/inputs/PrimaryTextLabel";
import SecondaryTextLabel from "@/components/global/inputs/SecondaryTextLabel";
import { useState } from "react";

export default function TermsAndCondition() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="bg-primary flex flex-col items-center h-screen justify-center">
      {/* Container */}
      <div className="border-2 mt-10 rounded-3xl p-6 w-[80%] max-w-4xl bg-container flex flex-col justify-center items-center backdrop-blur-sm">
        <PrimaryTextLabel
          content="Terms and Conditions"
          className="text-4xl text-center mb-6"
        />

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[450px] pr-4 space-y-6 text-lg">
          <div>
            <SecondaryTextLabel content="Effective Date: February 9, 2026" />
            <SecondaryTextLabel content="Application Name: TaskHive" />
          </div>

          <div>
            <SecondaryTextLabel
              content="1. Acceptance of Terms"
              className="text-2xl mb-2"
            />
            <SecondaryTextLabel content="By accessing or using TaskHive, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, you must not use the system." />
          </div>

          <div>
            <SecondaryTextLabel
              content="2. Description of Service"
              className="text-2xl mb-2"
            />
            <SecondaryTextLabel content="TaskHive is a web-based task management system that allows users to:" />
            <ul className="list-disc ml-6 mt-2 space-y-1 font-normal text-[12px]">
              <li>Create, edit, and delete tasks</li>
              <li>Organize tasks into categories</li>
              <li>Track task progress</li>
              <li>View analytics and archived tasks</li>
              <li>
                Access administrative management features (for authorized
                admins)
              </li>
            </ul>
            <SecondaryTextLabel
              content="The system may be updated, modified, or improved at any time without prior notice."
              className="mt-2"
            />
          </div>

          <div>
            <SecondaryTextLabel
              content="3. User Accounts"
              className="text-2xl mb-2"
            />
            <SecondaryTextLabel content="To access certain features, users must register and create an account." />
            <SecondaryTextLabel content="You agree to:" className="mt-2" />
            <ul className="list-disc ml-6 mt-2 space-y-1 font-normal text-[12px]">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your login credentials</li>
              <li>Be responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
            <SecondaryTextLabel
              content="We reserve the right to suspend or terminate accounts that violate these terms."
              className="mt-2"
            />
          </div>

          <div>
            <SecondaryTextLabel
              content="4. User Responsibilities"
              className="text-2xl mb-2"
            />
            <SecondaryTextLabel content="Users agree not to:" />
            <ul className="list-disc ml-6 mt-2 space-y-1 text-[12px] font-normal">
              <li>Use the system for unlawful purposes</li>
              <li>Attempt to gain unauthorized access to the system</li>
              <li>Disrupt or interfere with system performance</li>
              <li>Upload harmful or malicious content</li>
            </ul>
            <SecondaryTextLabel
              content="Any misuse may result in account termination."
              className="mt-2"
            />
          </div>

          <div>
            <SecondaryTextLabel
              content="5. Password Security"
              className="text-2xl mb-2"
            />
            <SecondaryTextLabel content="Users are responsible for maintaining strong passwords. The system may enforce password requirements to enhance security." />
            <SecondaryTextLabel
              content="Password reset processes are protected using secure verification mechanisms."
              className="mt-2"
            />
          </div>

          <div>
            <SecondaryTextLabel
              content="6. Termination"
              className="text-2xl mb-2"
            />
            <SecondaryTextLabel content="We reserve the right to:" />
            <ul className="list-disc ml-6 mt-2 space-y-1 text-[12px] font-normal">
              <li>Suspend or terminate user accounts</li>
              <li>Restrict access to the system</li>
              <li>Modify or discontinue services</li>
            </ul>
            <SecondaryTextLabel
              content="Termination may occur if users violate these Terms and Conditions."
              className="mt-2"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="w-4 h-4"
            />
            <span>I agree to the Terms and Conditions</span>
          </label>

          <button
            disabled={!accepted}
            className={`px-8 py-2 rounded-xl text-white transition-all duration-200 ${
              accepted
                ? "bg-mainbutton hover:opacity-90"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
