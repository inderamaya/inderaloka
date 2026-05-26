import React, { useState } from "react";
import { AlertTriangle, X, ArrowRight } from "lucide-react";
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
          className="bg-destructive/10 dark:bg-destructive/20 border-b border-destructive/20 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 lg:px-8 py-3">
            <div className="flex items-start md:items-center gap-4">
              <div className="bg-destructive text-destructive-foreground p-2 rounded-full hidden sm:block">
                <AlertTriangle className="w-4 h-4" />
              </div>

              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive sm:hidden" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-destructive uppercase">
                    {t.weatherAlert.title}
                  </span>
                </div>

                <p className="text-sm text-foreground/90 font-medium leading-tight">
                  {t.weatherAlert.description}
                </p>

                <Link
                  href="/news"
                  className="text-[10px] font-mono font-bold uppercase tracking-widest text-destructive hover:text-destructive/80 transition-colors flex items-center gap-1 group"
                >
                  {t.weatherAlert.link}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-destructive/10 rounded-full transition-colors self-start md:self-center"
                aria-label="Close alert"
              >
                <X className="w-4 h-4 text-destructive" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
