import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, invalid, disabled, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            className={`text-sm font-medium ${disabled ? "text-gray-400" : "text-gray-700"}`}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={`
            px-3 py-2 rounded border
            transition
            outline-none
            ${disabled ? "bg-gray-100 text-gray-400 border-gray-200" : ""}
            ${invalid ? "border-red-500 focus:border-red-600" : "border-gray-300 focus:border-blue-500"}
            ${!disabled && !invalid ? "focus:ring-2 focus:ring-blue-100" : ""}
          `}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;