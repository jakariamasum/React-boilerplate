import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  label: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  label,
}) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={onToggle}
          aria-label={label}
        />
        <div
          className={`block w-14 h-8 rounded-full ${
            isOn ? "bg-indigo-600" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            isOn ? "transform translate-x-6" : ""
          }`}
        ></div>
      </div>
      <div className="ml-3 text-gray-700 font-medium">{label}</div>
    </label>
  );
};
