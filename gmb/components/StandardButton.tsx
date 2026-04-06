"use client";

import React from "react";

interface StandardButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

const StandardButton = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
  fullWidth = false,
}: StandardButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          bg: "bg-primary",
          text: "text-slate-900",
          fill: "bg-white",
          border: "border-transparent",
        };
      case "secondary":
        return {
          bg: "bg-[#1F2E5A]",
          text: "text-white",
          fill: "bg-primary text-slate-900",
          border: "border-white/10",
        };
      case "outline":
        return {
          bg: "bg-transparent",
          text: "text-white",
          fill: "bg-white text-slate-900",
          border: "border-white/20",
        };
      case "white":
        return {
          bg: "bg-white",
          text: "text-slate-900",
          fill: "bg-primary text-slate-900",
          border: "border-transparent",
        };
      default:
        return {
          bg: "bg-primary",
          text: "text-slate-900",
          fill: "bg-white",
          border: "border-transparent",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative overflow-hidden px-10 py-5 inline-flex items-center justify-center
        rounded-none font-black text-[10px] uppercase tracking-[0.3em] 
        transition-all duration-300 border
        ${styles.bg} ${styles.text} ${styles.border}
        ${fullWidth ? "w-full" : "w-auto"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      <span className="relative z-10 transition-colors duration-500 leading-none">
        {children}
      </span>
      <div
        className={`
          absolute inset-0 translate-y-[101%] group-hover:translate-y-0 
          transition-transform duration-500 ease-out z-0
          ${styles.fill}
        `}
      />
    </button>
  );
};

export default StandardButton;
