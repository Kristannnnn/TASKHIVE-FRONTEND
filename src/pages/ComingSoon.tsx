import { FaRocket } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="mb-8">
          <FaRocket className="mx-auto text-6xl text-blue-500 animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Something amazing is on the way! We're working hard to bring you an
          incredible experience.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-12">
          Stay tuned for exciting updates and new features.
        </p>

        {/* Button */}
        <button
          onClick={() => window.history.back()}
          className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Go Back
        </button>

        {/* Optional: Decorative elements */}
        <div className="mt-16">
          <div className="inline-flex items-center justify-center gap-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
