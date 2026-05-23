import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function HouseOfRepresentatives() {
  const { t } = useLanguage();
  const g = t.government;
  const h = g.houseOfReps;

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{h.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{h.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{h.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 flex flex-col gap-16">
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{h.overviewTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed font-light max-w-3xl">{h.overviewBody}</p>
        </section>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">{h.speakerLabel}</h2>
          <div className="border border-border bg-secondary p-6 inline-block">
            <p className="font-serif text-xl text-primary">{h.speakerName}</p>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">{h.statsLabel}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {h.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-border bg-secondary p-6 text-center"
              >
                <p className="font-serif text-3xl text-accent mb-2">{stat.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{h.partiesTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {h.currentParties.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`border p-6 text-center ${idx === 0 ? "border-accent bg-accent/5" : "border-border bg-secondary"}`}
              >
                <p className={`font-serif text-4xl mb-2 ${idx === 0 ? "text-accent" : "text-primary"}`}>{p.seats}</p>
                <p className="font-serif text-lg text-primary mb-1">{p.party}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.color}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
