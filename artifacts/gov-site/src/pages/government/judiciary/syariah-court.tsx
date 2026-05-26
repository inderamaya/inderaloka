import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Landmark, Scale, Shield, ArrowRight, BookOpen } from "lucide-react";

export default function SyariahCourt() {
  const { t } = useLanguage();
  const g = t.government;
  const sc = g.syariahCourt;

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
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/judiciary">{g.judiciary.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{sc.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{sc.pageTitle}</h1>
          <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{sc.pageDesc}</p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview */}
        <section className="max-w-5xl mx-auto">
          <div className="glass-effect p-12 lg:p-20 rounded-[3rem] bg-white/40 dark:bg-black/20 border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
                <BookOpen className="w-48 h-48 text-accent" />
             </div>
             <h2 className="font-serif text-3xl lg:text-4xl text-primary font-bold mb-8">{sc.overviewTitle}</h2>
             <p className="text-xl leading-relaxed text-muted-foreground font-light italic">
                {sc.overviewBody}
             </p>
          </div>
        </section>

        {/* Levels Section */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-4xl text-primary font-bold">{sc.levelsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sc.levels.map((level, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <span className="font-mono text-4xl font-bold text-accent/10 mb-8 block group-hover:text-accent/20 transition-colors">0{idx + 1}</span>
                  <h3 className="font-serif text-2xl text-primary font-bold mb-4 leading-tight">{level.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{level.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Jurisdiction Section */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-4xl text-primary font-bold">{sc.jurisdictionTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sc.jurisdictions.map((j, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard className="p-8 border-transparent hover:border-primary/20 transition-all bg-white/40 dark:bg-black/20 group">
                   <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                         <ArrowRight className="w-4 h-4" />
                      </div>
                      <p className="text-lg text-primary font-medium">{j}</p>
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
