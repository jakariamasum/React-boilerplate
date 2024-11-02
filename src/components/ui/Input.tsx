import React from "react";
// import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  // errors: FieldErrors;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  // errors,
  // required = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        // {...register(name, { required: required && `${label} is required` })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {/* {errors[name] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[name]?.message as string}
        </p>
      )} */}
    </div>
  );
};
