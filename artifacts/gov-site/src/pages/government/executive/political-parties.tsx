import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Landmark, Award, ShieldCheck, ChevronRight } from "lucide-react";

export default function PoliticalParties() {
  const { t } = useLanguage();
  const g = t.government;
  const p = g.parties;

  const governing = p.items.filter((i) => i.coalition !== "Pembangkang");
  const opposition = p.items.filter((i) => i.coalition === "Pembangkang");

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
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/executive">{g.executive.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{p.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{p.pageTitle}</h1>
          <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{p.pageDesc}</p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Governing Parties */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{p.governingLabel}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governing.map((party, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Seats</div>
                      <div className="font-mono text-lg font-bold text-accent">{party.seats}</div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-primary font-bold mb-6 leading-tight group-hover:text-accent transition-colors">{party.name}</h3>

                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-center gap-3">
                      <Users className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold font-mono">{p.leaderLabel}: <span className="text-primary">{party.leader}</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold font-mono">{p.foundedLabel}: <span className="text-primary">{party.founded}</span></span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{party.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Opposition Parties */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{p.oppositionLabel}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opposition.map((party, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-primary/20 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <div className="flex justify-between items-start mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Seats</div>
                      <div className="font-mono text-lg font-bold text-primary">{party.seats}</div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-primary font-bold mb-6 leading-tight">{party.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light mb-8 flex-1">{party.desc}</p>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                     <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{party.leader}</span>
                     <ChevronRight className="w-4 h-4 text-primary/20 group-hover:text-accent transition-colors" />
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
