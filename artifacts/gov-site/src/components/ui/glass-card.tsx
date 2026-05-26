import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "gold";
}

export function GlassCard({ children, className, variant = "light", ...props }: GlassCardProps) {
  const variants = {
    light: "bg-white/10 border-white/20",
    dark: "bg-black/20 border-white/10",
    gold: "bg-accent/10 border-accent/20",
  };

  return (
    <motion.div
      className={cn(
        "backdrop-blur-md border rounded-xl shadow-2xl overflow-hidden",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
