import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Senate() {
  const { t } = useLanguage();
  const g = t.government;
  const s = g.senate;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{g.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government">{g.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/legislative">{g.legislative.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{s.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{s.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{s.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 flex flex-col gap-16">
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{s.overviewTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed font-light max-w-3xl">{s.overviewBody}</p>
        </section>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">{s.presidentLabel}</h2>
          <div className="border border-border bg-secondary p-6 inline-block">
            <p className="font-serif text-xl text-primary">{s.presidentName}</p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{s.compositionTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-accent bg-accent/5 p-8 text-center"
            >
              <p className="font-serif text-5xl text-accent mb-3">{s.appointedCount}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.appointed}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-border bg-secondary p-8 text-center"
            >
              <p className="font-serif text-5xl text-primary mb-3">{s.electedCount}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.elected}</p>
            </motion.div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{s.powersTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <ul className="flex flex-col gap-3">
            {s.powers.map((power, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start gap-4 p-4 border border-border"
              >
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest flex-shrink-0 pt-0.5">—</span>
                <span className="text-muted-foreground text-sm leading-relaxed">{power}</span>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
