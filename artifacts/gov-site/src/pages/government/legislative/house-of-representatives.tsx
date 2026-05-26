import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Landmark, UserCheck, ShieldCheck, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HouseOfRepresentatives() {
  const { t } = useLanguage();
  const g = t.government;
  const h = g.houseOfReps;

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{h.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{h.pageTitle}</h1>
          <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{h.pageDesc}</p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview & Speaker */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
               <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-8 border border-primary/20">Lower House</div>
               <h2 className="font-serif text-4xl text-primary font-bold mb-8">{h.overviewTitle}</h2>
               <p className="text-xl leading-relaxed text-muted-foreground font-light mb-10 italic">
                {h.overviewBody}
               </p>

               <GlassCard className="border-accent/20 bg-accent/5 p-8 lg:p-12 rounded-[2.5rem]">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black/20 flex items-center justify-center text-accent shrink-0 shadow-xl">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-4">{h.speakerLabel}</h3>
                      <p className="text-2xl lg:text-3xl font-serif text-primary font-bold leading-tight">{h.speakerName}</p>
                    </div>
                  </div>
               </GlassCard>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{h.statsLabel}</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {h.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <GlassCard className="text-center py-8 border-transparent hover:border-accent/30 transition-all bg-white/40 dark:bg-black/20">
                        <div className="font-serif text-3xl text-primary font-bold mb-2">{stat.value}</div>
                        <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Party Strength */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-4xl text-primary font-bold">{h.partiesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {h.currentParties.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className={cn(
                  "h-full p-10 border-transparent transition-all duration-500 bg-white/40 dark:bg-black/20 group",
                  p.color.toLowerCase().includes("govern") || p.color.toLowerCase().includes("pemerintah") ? "hover:border-accent/30" : "hover:border-primary/30"
                )}>
                  <div className="flex justify-between items-center mb-8">
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold px-3 py-1 rounded-full border border-white/10">
                      {p.color}
                    </div>
                    <div className="text-6xl font-serif font-bold text-primary/10 group-hover:text-accent/10 transition-colors">
                      {p.seats}
                    </div>
                  </div>
                  <h3 className="font-serif text-4xl text-primary font-bold mb-4">{p.party}</h3>
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                    Chamber Mandate <ChevronRight className="w-3.5 h-3.5" />
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
