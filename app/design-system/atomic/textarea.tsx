import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  invalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, invalid, disabled, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            className={`
              text-sm font-medium 
              ${disabled 
                ? "text-gray-400 dark:text-gray-600" 
                : "text-gray-700 dark:text-gray-200"}
            `}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={`
            px-3 py-2 rounded border
            transition
            outline-none
            resize-none
            bg-white dark:bg-gray-900
            ${disabled 
              ? "bg-gray-100 text-gray-400 border-gray-200 dark:bg-gray-800 dark:text-gray-600 dark:border-gray-700" 
              : ""}
            ${invalid 
              ? "border-red-500 focus:border-red-600 dark:border-red-400 dark:focus:border-red-500" 
              : "border-gray-300 focus:border-blue-500 dark:border-gray-700 dark:focus:border-blue-400"}
            ${!disabled && !invalid 
              ? "focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900" 
              : ""}
            text-gray-900 dark:text-gray-100
          `}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 dark:text-red-400">{error}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;