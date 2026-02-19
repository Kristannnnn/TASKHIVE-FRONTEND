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

const NotifOnlyModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-container w-96 rounded-xl p-8 text-center shadow-lg">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-red-700 text-white rounded-full text-2xl animate-pop">
            {icon}
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2 font-cursive">{title}</h2>

        <p className="text-gray-700 mb-6 font-cursive">{message}</p>
      </div>
    </div>
  );
};

export default NotifOnlyModal;
