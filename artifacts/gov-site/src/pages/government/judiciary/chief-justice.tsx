import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function ChiefJustice() {
  const { t } = useLanguage();
  const g = t.government;
  const cj = g.chiefJustice;

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{cj.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-4">{cj.pageTitle}</h1>
          <p className="text-muted-foreground text-base font-light">{cj.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="border border-border bg-secondary aspect-[3/4] flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-16 h-16 border border-accent mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground whitespace-pre-line">{cj.portraitLabel}</p>
              </div>
            </div>

            <div className="border border-border divide-y divide-border">
              {[
                { label: cj.officialTitleLabel, value: cj.officialTitle },
                { label: cj.appointedLabel, value: cj.appointed },
                { label: cj.educationLabel, value: cj.education },
              ].map((item) => (
                <div key={item.label} className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">{item.label}</p>
                  <p className="text-sm text-primary font-light leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="mb-12">
              <h2 className="font-serif text-2xl text-primary mb-4">{cj.roleTitle}</h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <p className="text-muted-foreground leading-relaxed font-light">{cj.roleBody}</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-primary mb-4">{cj.dutiesTitle}</h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <ul className="flex flex-col gap-3">
                {cj.duties.map((duty, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-4 p-4 border border-border"
                  >
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest flex-shrink-0 pt-0.5">—</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{duty}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
