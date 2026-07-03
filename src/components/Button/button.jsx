"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import "../../theme.css"


const sizeClasses = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
}

const variantClasses = {
  primary:
    "bg-[var(--primary)] text-[var(--surface)] border border-[var(--primary)] hover:bg-[var(--primary-hover)] hover:border-[var(--primary-hover)]",
  gold:
    "bg-gradient-to-br from-[var(--gold)] to-[var(--gold-hover)] text-[var(--primary)] border border-[var(--gold)] hover:shadow-[var(--shadow-md)] hover:brightness-105",
  outline:
    "bg-transparent text-[var(--heading)] border border-[var(--border)] hover:border-[var(--gold)] hover:text-[var(--gold)]",
  ghost:
    "bg-transparent text-[var(--text)] border border-transparent hover:text-[var(--gold)]",
  danger:
    "bg-[rgba(178,58,72,0.08)] text-[var(--danger)] border border-[rgba(178,58,72,0.25)] hover:bg-[rgba(178,58,72,0.14)] hover:border-[var(--danger)]",
}

export const Button = forwardRef(function Button(
  { variant = "primary", size = "md", fullWidth, className = "", children, ...props },
  ref
) {
  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={[
        "inline-flex items-center justify-center font-medium",
        "rounded-[var(--radius-xl)] transition-[background,color,border,box-shadow] duration-300",
        "cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </motion.button>
  )
})

export default Button