import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { History as HistoryIcon, Quote, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function History() {
  const { t } = useLanguage();
  const h = t.history;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{h.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{h.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{h.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{h.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{h.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
            <div className="space-y-24">
              {h.eras.map((era, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={cn(
                    "flex flex-col lg:flex-row gap-12 lg:gap-24 relative",
                    idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  )}
                >
                  {/* Marker */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-10 h-10 rounded-full bg-background border-4 border-accent flex items-center justify-center z-10 hidden lg:flex shadow-2xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  </div>

                  <div className="lg:w-1/2">
                    <div className={cn("lg:text-right", idx % 2 !== 0 ? "lg:text-left" : "lg:text-right")}>
                      <span className="font-mono text-3xl font-bold text-accent mb-4 block leading-none">{era.year}</span>
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-[9px] uppercase tracking-widest font-bold mb-4 border border-primary/20">
                        {era.label}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <GlassCard className="p-10 border-transparent hover:border-accent/20 transition-all duration-500 bg-white/40 dark:bg-black/20">
                      <h3 className="font-serif text-3xl text-primary font-bold mb-6 leading-tight">{era.title}</h3>
                      <p className="text-muted-foreground leading-relaxed font-light text-lg italic lg:not-italic">
                        {era.body}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Proclamation Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative py-24"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -z-10 border border-white/5" />
            <div className="max-w-3xl mx-auto px-8 text-center">
              <Quote className="w-16 h-16 text-accent opacity-20 mx-auto mb-10" strokeWidth={1} />
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-8">{h.quoteLabel}</div>
              <p className="font-serif text-3xl lg:text-4xl text-primary font-bold italic mb-10 leading-tight">
                {h.quote}
              </p>
              <footer className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground font-bold">
                {h.quoteSource}
              </footer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
