import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Gavel, Award, Shield, User, GraduationCap, ArrowRight, PenTool } from "lucide-react";

export default function ChiefJustice() {
  const { t } = useLanguage();
  const g = t.government;
  const cj = g.chiefJustice;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{g.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government">{g.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/judiciary">{g.judiciary.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{cj.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{cj.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{cj.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <GlassCard className="p-2 border-accent/20 bg-white/40 dark:bg-black/20 rounded-[2.5rem] mb-12">
              <div className="aspect-[3/4] bg-primary/5 rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10" />
                <div className="text-center z-20">
                  <div className="w-20 h-20 rounded-full border-2 border-accent mx-auto mb-6 flex items-center justify-center bg-white shadow-2xl">
                    <User className="w-10 h-10 text-accent" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white font-bold">{cj.portraitLabel}</span>
                </div>
              </div>
            </GlassCard>

            <div className="space-y-4">
              {[
                { label: cj.officialTitleLabel, icon: Shield, value: cj.officialTitle },
                { label: cj.appointedLabel, icon: Award, value: cj.appointed },
                { label: cj.educationLabel, icon: GraduationCap, value: cj.education },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-accent" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mt-1">{item.label}</span>
                  </div>
                  <span className="text-sm text-primary font-medium text-right max-w-[200px] leading-relaxed">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-24"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[9px] uppercase tracking-widest mb-8 font-bold">
                <Gavel className="w-3 h-3" />
                Judicial Supremacy
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-primary font-bold mb-8 leading-tight">{cj.roleTitle}</h2>
              <p className="text-muted-foreground text-xl font-light leading-relaxed mb-12">{cj.roleBody}</p>
            </div>

            <div className="space-y-12">
              <h3 className="font-serif text-3xl text-primary font-bold border-b border-white/10 pb-6">{cj.dutiesTitle}</h3>
              <div className="grid grid-cols-1 gap-4">
                {cj.duties.map((duty, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <GlassCard className="p-8 border-transparent hover:border-accent/20 transition-all bg-white/40 dark:bg-black/20 group">
                      <div className="flex items-start gap-6">
                        <span className="font-mono text-xl font-bold text-accent/20 group-hover:text-accent transition-colors shrink-0">0{idx + 1}</span>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">{duty}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
