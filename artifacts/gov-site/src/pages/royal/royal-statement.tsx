import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function RoyalStatement() {
  const { t } = useLanguage();
  const r = t.royal;
  const s = r.statement;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-primary border-b border-white/10 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList className="text-white/50">
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/60 hover:text-white">{r.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/royal" className="text-white/60 hover:text-white">{r.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem><BreadcrumbPage className="text-accent">{s.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-4">{s.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">{s.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-6">{s.latestLabel}</div>
          <div className="border border-border bg-background">
            <div className="border-b border-border bg-secondary/50 px-8 py-5 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">{s.latestDate}</span>
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <div className="p-8 lg:p-12">
              <h2 className="font-serif text-2xl text-primary mb-8 leading-snug">{s.latestTitle}</h2>
              <div className="border-l-4 border-accent pl-6 mb-8">
                {s.latestBody.split("\n\n").map((para, idx) => (
                  <p key={idx} className={`text-muted-foreground leading-relaxed ${idx > 0 ? "mt-4" : ""} ${idx === 0 ? "font-medium text-primary" : ""}`}>{para}</p>
                ))}
              </div>
              <div className="flex items-end justify-end">
                <div className="text-right">
                  <div className="w-16 h-px bg-accent ml-auto mb-3" />
                  <p className="font-serif text-sm text-primary italic">{s.latestSignature}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">{s.previousLabel}</h2>
          <div className="flex flex-col gap-3">
            {s.previousItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="flex items-center gap-6 border border-border bg-background p-5 group hover:border-accent/40 hover:bg-secondary/30 transition-colors cursor-pointer"
              >
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{item.date}</span>
                <div className="w-px h-8 bg-border flex-shrink-0" />
                <p className="text-sm text-primary group-hover:text-accent transition-colors flex-1">{item.title}</p>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
