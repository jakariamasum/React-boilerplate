import React from "react";
// import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: Option[];
  //   register: UseFormRegister<FieldValues>;
  //   errors: FieldErrors;
  required?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  //   register,
  //   errors,
  //   required = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={name}
        // {...register(name, { required: required && `${label} is required` })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* {errors[name] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[name]?.message as string}
        </p>
      )} */}
    </div>
  );
};
