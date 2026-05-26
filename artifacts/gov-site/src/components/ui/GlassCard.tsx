import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "gold" | "navy" | "emerald";
  interactive?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "light",
  interactive = true,
  ...props
}: GlassCardProps) {
  const variants = {
    light: "bg-white/70 dark:bg-white/10 border-white/20",
    dark: "bg-black/60 dark:bg-black/40 border-white/10",
    gold: "bg-accent/20 dark:bg-accent/10 border-accent/30",
    navy: "bg-primary/20 dark:bg-primary/10 border-primary/30",
    emerald: "bg-secondary/30 dark:bg-secondary/10 border-secondary/30",
  };

  return (
    <motion.div
      whileHover={interactive ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "glass-effect premium-shadow p-6 relative overflow-hidden group",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      {interactive && (
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </motion.div>
  );
}
