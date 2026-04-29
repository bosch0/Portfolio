import React from "react";
import type { ButtonProps } from "../../types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className,
  type = "button",
  ...rest
}) => {
  const variantStyle = {
    primary: "bg-linear-to-br from-orange-400 to-orange-700 hover:to-orange-400 text-white ring-inset ring-3 dark:ring-stone-50/20 ring-stone-900/8",
    secondary: "bg-linear-to-br from-gray-500 to-gray-600 hover:to-gray-500 text-white ring-inset ring-3 dark:ring-stone-50/20 ring-stone-900/8",
    outline: "ring-inset ring-2 ring-stone-900/10 dark:ring-stone-50/20 text-stone-700 dark:text-stone-300 hover:bg-stone-50/10 dark:hover:bg-stone-900/10 font-medium",
  }[variant];

  const sizeStyle = {
    sm: "px-2 py-1 text-sm",
    md: "xl:px-4 xl:py-2 p-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[size];

  return (
    <button
      className={`${variantStyle} ${sizeStyle} rounded-2xl hover:cursor-pointer transition-colors ${className ?? ''}`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
