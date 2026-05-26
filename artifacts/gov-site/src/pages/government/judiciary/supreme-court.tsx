import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Landmark, Scale, Shield, History, ArrowRight } from "lucide-react";

export default function SupremeCourt() {
  const { t } = useLanguage();
  const g = t.government;
  const sc = g.supremeCourt;

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{sc.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{sc.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{sc.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview */}
        <section className="max-w-5xl mx-auto">
          <div className="glass-effect p-12 lg:p-20 rounded-[3rem] bg-white/40 dark:bg-black/20 border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
                <Scale className="w-48 h-48 text-primary" />
             </div>
             <h2 className="font-serif text-3xl lg:text-4xl text-primary font-bold mb-8">{sc.overviewTitle}</h2>
             <p className="text-xl leading-relaxed text-muted-foreground font-light italic">
                {sc.overviewBody}
             </p>
          </div>
        </section>

        {/* Composition */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[9px] uppercase tracking-widest font-bold">
                <Landmark className="w-3 h-3" />
                Apex Court
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-primary font-bold">{sc.compositionTitle}</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {sc.composition}
              </p>
            </div>
            <GlassCard className="p-12 border-accent/20 bg-accent/5 aspect-video flex items-center justify-center">
               <Shield className="w-24 h-24 text-accent opacity-20" />
            </GlassCard>
          </div>
        </section>

        {/* Jurisdiction Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sc.jurisdictions.map((j, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-accent/30 transition-all bg-white/40 dark:bg-black/20">
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent font-bold mb-6">{j.type}</div>
                  <p className="text-sm text-primary font-medium leading-relaxed">{j.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Landmark Cases */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <History className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-4xl text-primary font-bold">{sc.landmarkTitle}</h2>
          </div>

          <div className="space-y-6">
            {sc.landmarkCases.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard className="p-8 border-transparent hover:border-primary/20 transition-all bg-white/40 dark:bg-black/20 group">
                  <div className="flex items-center gap-10">
                    <span className="font-mono text-3xl font-bold text-accent/20 group-hover:text-accent transition-colors shrink-0">{c.year}</span>
                    <p className="text-lg text-primary font-medium leading-relaxed">{c.title}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
