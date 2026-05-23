import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function HisMajesty() {
  const { t } = useLanguage();
  const r = t.royal;
  const m = r.hisMajesty;

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
              <BreadcrumbItem><BreadcrumbPage className="text-accent">{m.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-3xl lg:text-4xl text-white mb-4">{m.pageTitle}</h1>
          <p className="text-accent font-mono text-sm tracking-widest">{m.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="aspect-[3/4] bg-primary/5 border border-border flex items-center justify-center mb-6">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest text-center whitespace-pre-line">{m.portraitLabel}</span>
              </div>
              <div className="border border-border divide-y divide-border">
                {[
                  [m.officialTitleLabel, m.officialTitle],
                  [m.bornLabel, m.born],
                  [m.accessionLabel, m.accession],
                  [m.mottoLabel, m.motto],
                ].map(([label, value], idx) => (
                  <div key={idx} className="p-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">{label}</span>
                    <span className="text-sm text-primary font-medium">{value}</span>
                  </div>
                ))}
                <div className="p-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">{m.educationLabel}</span>
                  <span className="text-sm text-primary leading-relaxed">{m.education}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
              <h2 className="font-serif text-2xl text-primary mb-4">{m.roleTitle}</h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <p className="text-muted-foreground leading-relaxed">{m.roleBody}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="font-serif text-2xl text-primary mb-6">{m.dutiesTitle}</h2>
              <div className="flex flex-col gap-3">
                {m.duties.map((duty, idx) => (
                  <div key={idx} className="flex gap-4 items-start border border-border p-4 bg-secondary/30">
                    <span className="font-mono text-xs text-accent font-bold flex-shrink-0">{(idx + 1).toString().padStart(2, "0")}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{duty}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
