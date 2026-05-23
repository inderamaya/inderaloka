import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Constitution() {
  const { t } = useLanguage();
  const c = t.constitution;

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

      <div className="container mx-auto px-4 lg:px-8 pt-16 max-w-5xl">
        <div className="mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">{c.statsLabel}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {c.stats.map((stat, idx) => (
              <div key={idx} className="bg-background p-6 flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                <span className="font-serif text-2xl text-accent font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl text-primary mb-6">{c.preambleTitle}</h2>
          <div className="bg-primary text-white p-8 lg:p-12 border-l-4 border-accent">
            <p className="font-serif text-lg leading-relaxed italic">{c.preamble}</p>
          </div>
        </motion.div>

        <div>
          <h2 className="font-serif text-2xl text-primary mb-8">{c.partsTitle}</h2>
          <div className="flex flex-col gap-4">
            {c.parts.map((part, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-border bg-background p-6 flex gap-6"
              >
                <div className="font-mono text-2xl text-accent/30 font-bold w-8 flex-shrink-0">{(idx + 1).toString().padStart(2, "0")}</div>
                <div>
                  <h3 className="font-serif text-base text-primary mb-2">{part.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{part.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
