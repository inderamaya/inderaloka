import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Scroll, Shield, FileText, CheckCircle2, ChevronRight, Gavel } from "lucide-react";

export default function Constitution() {
  const { t } = useLanguage();
  const c = t.constitution;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{c.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{c.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{c.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{c.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{c.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Facts Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden premium-shadow">
          {c.stats.map((stat, idx) => (
            <div key={idx} className="bg-background/40 p-8 text-center backdrop-blur-xl">
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-4">{stat.label}</div>
              <div className="font-serif text-2xl text-primary font-bold">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Preamble Section */}
        <section className="relative">
          <div className="max-w-4xl mx-auto text-center px-8 py-20 bg-accent/5 rounded-[3rem] border border-accent/10">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-10">
              <Scroll className="w-8 h-8" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-10">{c.preambleTitle}</h2>
            <p className="font-serif text-2xl lg:text-4xl text-primary font-bold italic leading-snug">
              "{c.preamble}"
            </p>
          </div>
        </section>

        {/* Parts Grid */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Gavel className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{c.partsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.parts.map((part, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-primary/20 transition-all duration-500 group bg-white/40 dark:bg-black/20">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <span className="font-mono text-[10px] font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-primary font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                        {part.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {part.desc}
                      </p>
                    </div>
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
