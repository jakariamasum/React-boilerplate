/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

interface Step {
  id: string;
  title: string;
  fields: {
    name: string;
    label: string;
    type: string;
    required?: boolean;
  }[];
}

interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (data: any) => void;
}

export default function MultiStepForm({ steps, onSubmit }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm();

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = methods.handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={`flex items-center ${
                  index <= currentStep ? "text-primary" : "text-gray-500"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border ${
                    index <= currentStep ? "border-primary" : "border-gray-500"
                  } rounded-full shrink-0`}
                >
                  {index + 1}
                </span>
                {step.title}
                {index < steps.length - 1 && (
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 sm:ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    ></path>
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div>
          {steps[currentStep].fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                {...methods.register(field.name, { required: field.required })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
              {methods.formState.errors[field.name] && (
                <p className="mt-1 text-sm text-red-600">
                  This field is required
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            Previous
          </button>
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
