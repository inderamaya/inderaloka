import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Star, ShieldCheck, ChevronRight, Landmark } from "lucide-react";

export default function OrdersAndDecorations() {
  const { t } = useLanguage();
  const r = t.royal;
  const o = r.orders;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{r.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/royal">{r.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{o.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{o.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{o.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Intro */}
        <section className="max-w-4xl mx-auto">
          <GlassCard className="p-10 lg:p-16 border-accent/20 bg-accent/5 rounded-[3rem] text-center">
             <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-10 shadow-xl">
                <Award className="w-8 h-8" />
             </div>
             <p className="text-2xl font-serif text-primary leading-relaxed italic">{o.intro}</p>
          </GlassCard>
        </section>

        {/* Orders List */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Star className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{o.ordersLabel}</h2>
          </div>

          <div className="space-y-6">
            {o.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="p-8 lg:p-12 border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-1">
                       <span className="font-mono text-4xl font-bold text-accent/20 group-hover:text-accent transition-colors">0{idx + 1}</span>
                    </div>
                    <div className="lg:col-span-7">
                       <h3 className="font-serif text-3xl text-primary font-bold mb-4 group-hover:text-accent transition-colors leading-tight">{item.name}</h3>
                       <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                    </div>
                    <div className="lg:col-span-4 border-l border-white/10 pl-10 space-y-6">
                       <div>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">{o.levelsLabel}</span>
                          <span className="text-lg font-serif text-accent font-bold">{item.levels}</span>
                       </div>
                       <div>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">{o.eligibleLabel}</span>
                          <span className="text-sm font-bold text-primary uppercase tracking-tight">{item.eligible}</span>
                       </div>
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
