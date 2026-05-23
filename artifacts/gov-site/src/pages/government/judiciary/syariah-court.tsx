import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function SyariahCourt() {
  const { t } = useLanguage();
  const g = t.government;
  const sc = g.syariahCourt;

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
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/judiciary">{g.judiciary.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{sc.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{sc.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{sc.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 flex flex-col gap-16">
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{sc.overviewTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed font-light max-w-3xl">{sc.overviewBody}</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{sc.levelsTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <div className="flex flex-col gap-4">
            {sc.levels.map((level, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="flex items-start gap-6 border border-border p-6"
              >
                <span className="font-mono text-[10px] text-accent font-bold flex-shrink-0 pt-0.5">{String(idx + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-base text-primary mb-1">{level.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{level.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{sc.jurisdictionTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <ul className="flex flex-col gap-3">
            {sc.jurisdictions.map((j, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start gap-4 p-4 border border-border"
              >
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest flex-shrink-0 pt-0.5">—</span>
                <span className="text-muted-foreground text-sm leading-relaxed">{j}</span>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
