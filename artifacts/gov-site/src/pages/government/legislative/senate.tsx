import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Landmark, Scale, Shield, UserCheck, ArrowRight } from "lucide-react";

export default function Senate() {
  const { t } = useLanguage();
  const g = t.government;
  const s = g.senate;

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
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/legislative">{g.legislative.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{s.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{s.pageTitle}</h1>
          <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{s.pageDesc}</p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview & President */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
               <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-8 border border-primary/20">Upper House</div>
               <h2 className="font-serif text-4xl text-primary font-bold mb-8">{s.overviewTitle}</h2>
               <p className="text-xl leading-relaxed text-muted-foreground font-light mb-10 italic">
                {s.overviewBody}
               </p>

               <GlassCard className="border-accent/20 bg-accent/5 p-8 lg:p-12 rounded-[2.5rem]">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black/20 flex items-center justify-center text-accent shrink-0 shadow-xl">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-4">{s.presidentLabel}</h3>
                      <p className="text-2xl lg:text-3xl font-serif text-primary font-bold leading-tight">{s.presidentName}</p>
                    </div>
                  </div>
               </GlassCard>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{s.compositionTitle}</h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <GlassCard className="p-8 border-transparent hover:border-accent/30 transition-all bg-white/40 dark:bg-black/20">
                      <div className="text-4xl font-serif font-bold text-accent mb-2">{s.appointedCount}</div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{s.appointed}</div>
                    </GlassCard>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <GlassCard className="p-8 border-transparent hover:border-primary/30 transition-all bg-white/40 dark:bg-black/20">
                      <div className="text-4xl font-serif font-bold text-primary mb-2">{s.electedCount}</div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{s.elected}</div>
                    </GlassCard>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Powers Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-4xl text-primary font-bold">{s.powersTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {s.powers.map((power, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-8 border-transparent hover:border-accent/30 transition-all bg-white/40 dark:bg-black/20 group">
                   <div className="flex items-start gap-6">
                      <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-inner">
                         <span className="font-mono text-xs font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-lg text-primary font-medium leading-relaxed">{power}</p>
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
