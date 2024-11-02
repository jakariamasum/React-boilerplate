import React from "react";
import { BiXCircle } from "react-icons/bi";

type AlertType = "success" | "warning" | "error" | "info";

interface AlertProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const alertStyles: Record<AlertType, string> = {
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <div className={`rounded-md p-4 ${alertStyles[type]}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {/* You can add icons here based on the alert type */}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                onClick={onClose}
                className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${alertStyles[type]}`}
              >
                <span className="sr-only">Dismiss</span>
                <BiXCircle className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
