/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from "react";
import { FaX } from "react-icons/fa6";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose?: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  message,
  type = "info",
  duration = 5000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const bgColors = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed top-4 right-4 w-64 p-4 rounded-md text-white ${bgColors[type]}`}
    >
      <div className="flex justify-between items-center">
        <p className="font-medium">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose && onClose();
          }}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          <FaX className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
