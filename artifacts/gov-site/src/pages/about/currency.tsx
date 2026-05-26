import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Coins, Landmark, TrendingUp, History, ArrowRight, Wallet } from "lucide-react";

export default function Currency() {
  const { t } = useLanguage();
  const c = t.currency;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-32 overflow-hidden">
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview & Exchange Rates */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-8 border border-primary/20">{c.overviewTitle}</div>
              <h2 className="font-serif text-4xl text-primary font-bold mb-8">{c.fullName} ({c.code})</h2>
              <div className="glass-effect p-10 rounded-[2.5rem] bg-white/40 dark:bg-black/20 border-white/5 mb-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-4">{c.centralBankLabel}</h3>
                    <p className="text-2xl font-serif text-primary font-bold mb-4">{c.centralBank}</p>
                    <p className="text-muted-foreground leading-relaxed font-light">{c.centralBankDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <GlassCard className="h-full border-accent/20 bg-accent/5">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-8 flex items-center gap-3">
                  <TrendingUp className="w-4 h-4" />
                  {c.exchangeLabel}
                </h3>
                <div className="space-y-6">
                  {c.exchangeRates.map((rate, i) => (
                    <div key={i} className="flex justify-between items-center pb-6 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center font-mono text-[10px] font-bold border border-white/10">{rate.currency.split(' ')[0]}</div>
                        <span className="text-sm font-medium text-primary">{rate.currency}</span>
                      </div>
                      <span className="font-mono text-lg font-bold text-accent">{rate.rate}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Banknotes Grid */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Wallet className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{c.banknotesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.banknotes.map((note, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full group hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-4xl font-serif font-bold text-primary">{note.value}</div>
                    <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[9px] font-bold uppercase tracking-widest">{note.color}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{note.desc}</p>
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all">
                    Legal Tender <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Currency History */}
        <section className="relative">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 rounded-[3rem] -z-10 border border-white/5" />
          <div className="py-24 px-8 lg:px-20">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <History className="w-5 h-5" />
              </div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{c.historyTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {c.historyEvents.map((event, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-3xl font-serif font-bold text-primary">{event.year}</div>
                  <div className="w-8 h-1 bg-accent rounded-full" />
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{event.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
