import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Building2, Calendar, Shield, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StateOfficials() {
  const { t } = useLanguage();
  const g = t.government;
  const so = g.stateOfficials;
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{g.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government">{g.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{so.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{so.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{so.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-6 max-w-6xl mx-auto">
          {so.officials.map((official, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <GlassCard className="p-0 overflow-hidden border-transparent hover:border-accent/20 transition-all duration-300 bg-white/40 dark:bg-black/20">
                <button
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  className="w-full text-left p-8 lg:p-10 flex items-center justify-between gap-8 group"
                >
                  <div className="flex items-center gap-8 min-w-0">
                    <span className="font-mono text-xl font-bold text-accent/20 group-hover:text-accent transition-colors shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-2">{official.role}</div>
                      <h2 className="font-serif text-2xl lg:text-3xl text-primary font-bold truncate group-hover:text-accent transition-colors">{official.name}</h2>
                    </div>
                  </div>
                  <div className={cn(
                    "w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center transition-all duration-300",
                    expanded === idx ? "bg-accent border-accent text-white rotate-180" : "group-hover:border-accent group-hover:text-accent"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {expanded === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 lg:px-10 pb-10 pt-4 border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                          <div className="lg:col-span-4 space-y-8">
                            <div>
                              <div className="flex items-center gap-3 mb-3">
                                <Building2 className="w-4 h-4 text-accent" />
                                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Office</span>
                              </div>
                              <p className="text-lg font-serif text-primary font-bold">{official.office}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-3">
                                <Calendar className="w-4 h-4 text-accent" />
                                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Appointed</span>
                              </div>
                              <p className="text-sm text-primary font-medium">{official.since}</p>
                            </div>
                          </div>

                          <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-4">
                              <Shield className="w-4 h-4 text-accent" />
                              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Constitutional Role</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed font-light">{official.desc}</p>
                          </div>

                          <div className="lg:col-span-4 bg-accent/5 rounded-3xl p-8 border border-accent/10">
                            <div className="flex items-center gap-3 mb-6">
                              <Users className="w-4 h-4 text-accent" />
                              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">Key Responsibilities</span>
                            </div>
                            <ul className="space-y-4">
                              {official.duties.map((duty, didx) => (
                                <li key={didx} className="flex items-start gap-3 text-xs text-primary/80 leading-relaxed">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                  <span>{duty}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
