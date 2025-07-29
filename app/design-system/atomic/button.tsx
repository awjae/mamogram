import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
  outline:
    "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-2 focus:ring-blue-400 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-900/10",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm rounded",
  md: "px-4 py-2 text-base rounded-md",
  lg: "px-6 py-3 text-lg rounded-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        "font-semibold transition duration-200 focus:outline-none",
        variantClasses[variant],
        sizeClasses[size],
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:scale-[1.03] active:scale-100",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}