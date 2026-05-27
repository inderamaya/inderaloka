import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function RoyalAdvisoryCouncil() {
  const { t } = useLanguage();
  const r = t.royal;
  const rac = r.royalAdvisoryCouncil;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-primary border-b border-white/10 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList className="text-white/50">
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/50 hover:text-white">{r.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/royal" className="text-white/50 hover:text-white">{r.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem><BreadcrumbPage className="text-white">{rac.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-6">{rac.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">{rac.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 flex flex-col gap-16">
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{rac.overviewTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed font-light">{rac.overviewBody}</p>
            </div>
            <div className="border border-border bg-secondary p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{rac.basisLabel}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{rac.basis}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{rac.membersTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rac.members.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="border border-border bg-background p-6"
              >
                <div className="w-12 h-12 border border-accent/30 bg-accent/5 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">{member.role}</p>
                <h3 className="font-serif text-base text-primary mb-1">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{rac.functionsTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <ul className="flex flex-col gap-3">
            {rac.functions.map((fn, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start gap-4 p-4 border border-border"
              >
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest flex-shrink-0 pt-0.5">—</span>
                <span className="text-muted-foreground text-sm leading-relaxed">{fn}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="border border-accent/30 bg-accent/5 p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{rac.meetingLabel}</p>
          <p className="text-muted-foreground leading-relaxed">{rac.meeting}</p>
        </section>
      </div>
    </div>
  );
}
