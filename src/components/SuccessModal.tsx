import { type ReactNode, useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
  icon?: ReactNode;
  autoClose?: boolean;
  autoCloseTime?: number;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title = "Success",
  message = "Operation completed successfully",
  buttonText = "Confirm",
  icon,
  autoClose = false,
  autoCloseTime = 2000,
}) => {
  useEffect(() => {
    if (autoClose && isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseTime, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-container w-96 rounded-xl p-8 text-center shadow-lg">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-red-700 text-white rounded-full text-2xl animate-pop">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        {/* Message */}
        <p className="text-gray-700 mb-6">{message}</p>

        {/* Button */}
        <button
          onClick={onClose}
          className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-red-800 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
