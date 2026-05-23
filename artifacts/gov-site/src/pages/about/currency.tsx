import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Currency() {
  const { t } = useLanguage();
  const c = t.currency;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{c.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{c.breadcrumbAbout}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{c.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{c.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{c.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-primary mb-6">{c.overviewTitle}</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-border p-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">{c.centralBankLabel}</span>
                <span className="font-serif text-lg text-primary">{c.centralBank}</span>
              </div>
              <div className="border border-border p-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">ISO Code</span>
                <span className="font-serif text-3xl text-accent font-semibold">{c.code}</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{c.centralBankDesc}</p>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">{c.exchangeLabel}</h3>
            <div className="flex flex-col gap-2">
              {c.exchangeRates.map((rate, idx) => (
                <div key={idx} className="flex items-center justify-between border border-border p-3 bg-background">
                  <span className="text-sm text-muted-foreground">{rate.currency}</span>
                  <span className="font-mono text-sm font-semibold text-accent">{rate.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">{c.banknotesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.banknotes.map((note, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.07 }} className="border border-border bg-background p-5 flex gap-4 items-start">
                <div className="w-14 h-8 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-accent">{note.value}</span>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{note.color}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{note.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">{c.coinsTitle}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {c.coins.map((coin, idx) => (
              <div key={idx} className="border border-border bg-background p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary border-2 border-accent/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-accent">{coin.value}</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{coin.material}</div>
                <p className="text-xs text-muted-foreground">{coin.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-8">{c.historyTitle}</h2>
          <div className="relative pl-8 border-l border-border flex flex-col gap-0">
            {c.historyEvents.map((event, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }} className="pb-10 relative">
                <div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
                <span className="font-mono text-sm font-bold text-accent block mb-2">{event.year}</span>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.event}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
