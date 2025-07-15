import { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export function Display({ children, className = "" }: TypographyProps) {
  return (
    <h1 className={`text-5xl md:text-6xl font-extrabold ${className}`}>{children}</h1>
  );
}

export function Headline1({ children, className = "" }: TypographyProps) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold ${className}`}>{children}</h2>
  );
}

export function Headline2({ children, className = "" }: TypographyProps) {
  return (
    <h3 className={`text-2xl md:text-3xl font-semibold ${className}`}>{children}</h3>
  );
}

export function Subtitle1({ children, className = "" }: TypographyProps) {
  return (
    <h4 className={`text-xl font-medium ${className}`}>{children}</h4>
  );
}

export function Subtitle2({ children, className = "" }: TypographyProps) {
  return (
    <h5 className={`text-lg font-medium ${className}`}>{children}</h5>
  );
}

export function BodyLarge({ children, className = "" }: TypographyProps) {
  return (
    <p className={`text-lg font-normal ${className}`}>{children}</p>
  );
}

export function Body({ children, className = "" }: TypographyProps) {
  return (
    <p className={`text-base font-normal ${className}`}>{children}</p>
  );
}

export function BodySmall({ children, className = "" }: TypographyProps) {
  return (
    <span className={`text-sm font-normal ${className}`}>{children}</span>
  );
}

export function Caption({ children, className = "" }: TypographyProps) {
  return (
    <span className={`text-xs font-medium text-gray-500 ${className}`}>{children}</span>
  );
}

export function Overline({ children, className = "" }: TypographyProps) {
  return (
    <span className={`text-xs font-bold uppercase tracking-widest ${className}`}>{children}</span>
  );
}

export function Label({ children, className = "" }: TypographyProps) {
  return (
    <label className={`text-sm font-medium text-gray-700 ${className}`}>{children}</label>
  );
}