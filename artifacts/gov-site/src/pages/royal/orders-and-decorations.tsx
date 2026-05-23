import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function OrdersAndDecorations() {
  const { t } = useLanguage();
  const r = t.royal;
  const o = r.orders;

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
              <BreadcrumbItem><BreadcrumbPage className="text-accent">{o.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-4">{o.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">{o.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 max-w-5xl">
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-3xl">{o.intro}</p>

        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">{o.ordersLabel}</h2>
        <div className="flex flex-col gap-6">
          {o.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="border border-border bg-background p-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-1 flex items-start justify-center">
                <div className="w-10 h-10 border-2 border-accent flex items-center justify-center bg-accent/10 flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-accent">{(idx + 1).toString().padStart(2, "0")}</span>
                </div>
              </div>
              <div className="lg:col-span-11">
                <div className="flex flex-wrap gap-4 items-start mb-3">
                  <h3 className="font-serif text-xl text-primary flex-1">{item.name}</h3>
                  <div className="flex gap-4">
                    <div className="text-right">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">{o.levelsLabel}</span>
                      <span className="text-sm text-accent font-medium">{item.levels}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">{o.eligibleLabel}</span>
                      <span className="text-sm text-primary font-medium">{item.eligible}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
