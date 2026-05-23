import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function CustomsAndRegalia() {
  const { t } = useLanguage();
  const r = t.royal;
  const c = r.customs;

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
              <BreadcrumbItem><BreadcrumbPage className="text-accent">{c.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-4">{c.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">{c.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">{c.regaliaTitle}</h2>
            <div className="flex flex-col gap-4">
              {c.regaliaItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="border border-border bg-background p-5 flex gap-4"
                >
                  <div className="w-1 bg-accent flex-shrink-0 self-stretch" />
                  <div>
                    <h3 className="font-serif text-base text-primary mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">{c.ceremoniesTitle}</h2>
            <div className="flex flex-col gap-6">
              {c.ceremonies.map((ceremony, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="border border-border bg-background p-6"
                >
                  <div className="w-8 h-px bg-accent mb-4" />
                  <h3 className="font-serif text-lg text-primary mb-3">{ceremony.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ceremony.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-8">{c.protocolTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.protocols.map((protocol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="border border-border bg-secondary/30 p-5 flex gap-3"
              >
                <span className="font-mono text-xs text-accent font-bold mt-0.5 flex-shrink-0">{(idx + 1).toString().padStart(2, "0")}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{protocol}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
