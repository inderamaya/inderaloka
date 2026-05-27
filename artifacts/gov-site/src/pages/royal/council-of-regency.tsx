import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function CouncilOfRegency() {
  const { t } = useLanguage();
  const r = t.royal;
  const c = r.councilOfRegency;

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

      <div className="container mx-auto px-4 lg:px-8 pt-16 max-w-4xl">
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="font-serif text-2xl text-primary mb-4">{c.overviewTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-6">{c.overviewBody}</p>
          <div className="border border-accent/30 bg-accent/5 p-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mb-2">{c.basisLabel}</span>
            <p className="text-sm text-primary font-medium">{c.basis}</p>
          </div>
        </motion.section>

        <section className="mb-12">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">{c.membersTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.members.map((member, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="border border-border bg-background p-6">
                <div className="w-14 h-14 bg-secondary border border-border flex items-center justify-center mb-4">
                  <span className="font-mono text-lg font-bold text-accent">{(idx + 1).toString().padStart(2, "0")}</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{member.role}</div>
                <h3 className="font-serif text-lg text-primary mb-1">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-6">{c.whenTitle}</h2>
          <div className="flex flex-col gap-3">
            {c.whenItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 border border-border">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
