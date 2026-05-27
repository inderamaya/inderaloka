import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Landmark, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export default function Parliament() {
  const { t } = useLanguage();
  const g = t.government;
  const p = g.parliament;

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
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/legislative">{g.legislative.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{p.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{p.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{p.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview */}
        <section className="max-w-5xl mx-auto">
          <div className="glass-effect p-12 lg:p-20 rounded-[3rem] bg-white/40 dark:bg-black/20 border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
                <Landmark className="w-48 h-48 text-primary" />
             </div>
             <h2 className="font-serif text-3xl lg:text-4xl text-primary font-bold mb-8">{p.overviewTitle}</h2>
             <p className="text-xl leading-relaxed text-muted-foreground font-light italic">
                {p.overviewBody}
             </p>
          </div>
        </section>

        {/* Stats */}
        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-12 text-center">{p.statsLabel}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {p.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="text-center py-10 border-transparent hover:border-accent/20 transition-all">
                  <div className="font-serif text-4xl text-primary font-bold mb-4">{stat.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Legislative Process */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-4xl text-primary font-bold">{p.processTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {p.processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-primary/20 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <span className="font-mono text-4xl font-bold text-accent/10 mb-8 block group-hover:text-accent/20 transition-colors">{step.step}</span>
                  <h3 className="font-serif text-2xl text-primary font-bold mb-4 leading-tight">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
