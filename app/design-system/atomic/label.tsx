import React from "react";

type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
  state?: "default" | "error" | "disabled";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const stateColor = {
  default: "text-gray-800 dark:text-gray-200",
  error: "text-red-600 dark:text-red-400",
  disabled: "text-gray-400 dark:text-gray-600",
};

const sizeStyle = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

export function Label({
  htmlFor,
  children,
  state = "default",
  size = "md",
  className = "",
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${stateColor[state]} ${sizeStyle[size]} font-medium ${className} ${state === "disabled" ? "cursor-not-allowed" : ""}`}
      aria-disabled={state === "disabled"}
    >
      {children}
    </label>
  );
}

type DescriptionProps = {
  children: React.ReactNode;
  state?: "default" | "error" | "disabled";
  className?: string;
};

export function Description({
  children,
  state = "default",
  className = "",
}: DescriptionProps) {
  const color = state === "error"
    ? "text-red-500 dark:text-red-400"
    : "text-gray-500 dark:text-gray-400";
  return (
    <p className={`${color} text-xs mt-1 ${className}`}>
      {children}
    </p>
  );
}