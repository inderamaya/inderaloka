import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function PoliticalParties() {
  const { t } = useLanguage();
  const g = t.government;
  const p = g.parties;

  const governing = p.items.filter((i) => i.coalition !== "Pembangkang");
  const opposition = p.items.filter((i) => i.coalition === "Pembangkang");

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
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/executive">{g.executive.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{p.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{p.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{p.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 flex flex-col gap-16">
        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-8">{p.governingLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {governing.map((party, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="border border-border bg-background p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 bg-accent/5 px-2 py-0.5">{party.seats} kerusi</span>
                </div>
                <h3 className="font-serif text-lg text-primary mb-2">{party.name}</h3>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{p.leaderLabel}: {party.leader}</p>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">{p.foundedLabel}: {party.founded}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{party.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-8">{p.oppositionLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {opposition.map((party, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="border border-border bg-background p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">{party.seats} kerusi</span>
                </div>
                <h3 className="font-serif text-lg text-primary mb-2">{party.name}</h3>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{p.leaderLabel}: {party.leader}</p>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">{p.foundedLabel}: {party.founded}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{party.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
