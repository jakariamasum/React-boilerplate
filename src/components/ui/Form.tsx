/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, FieldValues, UseFormRegister } from "react-hook-form";

interface FormProps {
  onSubmit: (data: FieldValues) => void;
  children: React.ReactNode;
}

interface FormFieldProps {
  register?: UseFormRegister<FieldValues>;
  errors?: Record<string, any>;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<FormFieldProps>(child)) {
          return React.cloneElement(child, { register, errors });
        }
        return child;
      })}
    </form>
  );
};
