import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Shield, Star, Crown, Landmark, ChevronRight, ArrowRight } from "lucide-react";

export default function CustomsAndRegalia() {
  const { t } = useLanguage();
  const r = t.royal;
  const c = r.customs;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{r.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/royal">{r.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{c.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{c.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{c.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Regalia & Ceremonies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Regalia Section */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Crown className="w-5 h-5" />
              </div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{c.regaliaTitle}</h2>
            </div>

            <div className="space-y-6">
              {c.regaliaItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <GlassCard className="p-8 border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                    <div className="flex items-start gap-6">
                       <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                          <Star className="w-4 h-4" />
                       </div>
                       <div>
                          <h3 className="font-serif text-xl text-primary font-bold mb-3">{item.name}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                       </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ceremonies Section */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Landmark className="w-5 h-5" />
              </div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{c.ceremoniesTitle}</h2>
            </div>

            <div className="space-y-6">
              {c.ceremonies.map((ceremony, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-10 border-transparent hover:border-primary/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-4">Official Event</div>
                    <h3 className="font-serif text-2xl text-primary font-bold mb-4 group-hover:text-accent transition-colors leading-tight">{ceremony.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8">{ceremony.desc}</p>
                    <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                       View Calendar <ChevronRight className="w-3 h-3" />
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Protocol Section - Museum Grid */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-4xl text-primary font-bold">{c.protocolTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.protocols.map((protocol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-accent/20 transition-all duration-500 bg-accent/5 flex items-start gap-6 group">
                   <span className="font-mono text-xl font-bold text-accent/20 group-hover:text-accent transition-colors">0{idx + 1}</span>
                   <p className="text-lg text-primary font-medium leading-relaxed font-serif italic">"{protocol}"</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
