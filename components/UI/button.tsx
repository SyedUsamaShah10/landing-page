import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  variant?: "filled" | "outlined";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  variant = "filled",
  className = "",
}) => {
  const baseClasses = "text-bg-100 w-[140px] h-[40px] px-4 py-0 gap-0";

  const variantClasses =
    variant === "filled" ? "bg-primary-600" : "border-2 border-primary-600";

  const borderRadius = variant === "outlined" ? "rounded-xl" : "rounded-md";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${borderRadius} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
