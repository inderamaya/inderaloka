import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Flag, Music, ChevronRight, Star, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NationalSymbols() {
  const { t } = useLanguage();
  const s = t.nationalSymbols;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{s.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{s.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{s.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{s.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{s.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Symbols Grid */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{s.symbolsLabel}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {s.symbols.map((symbol, idx) => (
              <motion.div
                key={symbol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-10 flex flex-col border-transparent hover:border-accent/20 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <Star className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{s.sinceLabel}</div>
                      <div className="font-mono text-xs font-bold text-accent">{symbol.since}</div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-primary font-bold mb-6 leading-tight">{symbol.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light flex-1">
                    {symbol.desc}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-accent">
                    Institutional Identity <ChevronRight className="w-3 h-3" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Anthem Section */}
        <section className="relative">
          <GlassCard className="max-w-4xl mx-auto p-12 lg:p-20 border-accent/20 bg-accent/5 rounded-[3rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] uppercase tracking-widest mb-8 font-bold">
                  <Music className="w-3 h-3" />
                  {s.anthemLabel}
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-primary font-bold mb-8 leading-tight">Indera Mulia</h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
                  The national anthem reflects the shared history and aspirations of the people, invoking divine protection for the Sovereign and the State.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center animate-spin-slow">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary/60 font-bold">Sacred National Treasure</span>
                </div>
              </div>

              <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 shadow-2xl">
                <div className="space-y-4 text-center">
                  {s.anthemLyrics.map((line, i) => (
                    <p key={i} className={cn(
                      "font-serif text-lg text-primary",
                      line === "" ? "h-4" : "",
                      i === s.anthemLyrics.length - 1 ? "font-bold text-accent" : ""
                    )}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
