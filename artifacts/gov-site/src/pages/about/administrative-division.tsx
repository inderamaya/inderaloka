import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Map, MapPin, Users, Globe, Building2, ChevronRight } from "lucide-react";

export default function AdminDivision() {
  const { t } = useLanguage();
  const a = t.adminDivision;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{a.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{a.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{a.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{a.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{a.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview Section */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-8 border border-accent/20">{a.overviewTitle}</div>
              <p className="text-2xl leading-relaxed text-primary font-serif italic mb-10">
                {a.overviewBody}
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">13</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">Sovereign States</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-accent">3</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">Federal Territories</span>
                </div>
              </div>
            </div>
            <GlassCard className="aspect-square flex items-center justify-center border-accent/20 bg-accent/5">
              <Map className="w-32 h-32 text-accent opacity-20" strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-64 h-64 rounded-full border border-accent/10 animate-ping opacity-20" />
              </div>
            </GlassCard>
          </div>
        </section>

        {/* States Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{a.statesLabel}</h2>
          </div>

          <GlassCard className="p-0 overflow-hidden border-white/5 bg-white/30 dark:bg-black/20">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary/5 border-b border-white/10 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {a.stateColumns.map((col, i) => (
                      <th key={i} className="py-6 px-8 font-bold">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {a.states.map((state, idx) => (
                    <tr key={idx} className="group hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8 font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors">{state.name}</td>
                      <td className="py-5 px-8 text-sm text-muted-foreground">{state.capital}</td>
                      <td className="py-5 px-8 font-mono text-xs text-muted-foreground">{state.area}</td>
                      <td className="py-5 px-8 font-mono text-xs text-primary font-bold">{state.population}</td>
                      <td className="py-5 px-8 text-sm text-accent font-medium">{state.head}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </section>

        {/* Territories Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-foreground">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-secondary-foreground font-bold">{a.territoriesLabel}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.territories.map((territory, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full hover:border-secondary/40 transition-colors duration-500 bg-white/40 dark:bg-black/20">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-4 px-2 py-1 bg-accent/5 inline-block rounded border border-accent/10">{territory.type}</div>
                  <h3 className="font-serif text-2xl text-primary font-bold mb-6">{territory.name}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Area</span>
                      <span className="font-mono text-xs font-bold text-primary">{territory.area} km²</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Population</span>
                      <span className="font-mono text-xs font-bold text-primary">{territory.population}</span>
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
