import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function NationalSymbols() {
  const { t } = useLanguage();
  const ns = t.nationalSymbols;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{ns.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{ns.breadcrumbAbout}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{ns.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{ns.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{ns.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-10">{ns.symbolsLabel}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ns.symbols.map((symbol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
              className="border border-border bg-background hover:border-accent/50 transition-colors group"
            >
              <div className="border-b border-border p-6 flex items-start justify-between gap-4">
                <div className="w-10 h-10 border border-accent/40 flex items-center justify-center bg-secondary flex-shrink-0">
                  <span className="font-mono text-sm font-bold text-accent">{(idx + 1).toString().padStart(2, "0")}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">{ns.sinceLabel}</span>
                  <span className="font-serif text-lg text-accent">{symbol.since}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-primary mb-3 group-hover:text-accent transition-colors">{symbol.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{symbol.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
