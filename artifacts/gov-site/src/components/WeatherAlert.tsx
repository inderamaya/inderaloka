import React, { useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

export function WeatherAlert() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-50 bg-destructive/90 text-destructive-foreground backdrop-blur-md"
        >
          <div className="container mx-auto px-6 lg:px-8 py-4">
            <div className="flex items-start md:items-center gap-4">
              <div className="bg-destructive text-destructive-foreground p-2 rounded-full hidden sm:block shadow-lg">
                <AlertTriangle className="w-4 h-4" />
              </div>

              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive-foreground sm:hidden" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-destructive-foreground uppercase">
                    {t.weatherAlert.title}
                  </span>
                </div>

                <p className="text-sm text-destructive-foreground font-medium leading-tight">
                  {t.weatherAlert.description}
                </p>

              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors self-start md:self-center"
                aria-label="Close alert"
              >
                <X className="w-4 h-4 text-destructive-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
