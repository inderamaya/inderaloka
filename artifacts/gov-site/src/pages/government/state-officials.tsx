import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function StateOfficials() {
  const { t } = useLanguage();
  const g = t.government;
  const so = g.stateOfficials;
  const [expanded, setExpanded] = useState<number | null>(0);

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{so.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{so.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{so.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="flex flex-col gap-2">
          {so.officials.map((official, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="border border-border"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent flex-shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">{official.role}</p>
                    <p className="font-serif text-lg text-primary truncate">{official.name}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Pejabat / Office</p>
                        <p className="text-sm text-primary mb-4">{official.office}</p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Sejak / Since</p>
                        <p className="text-sm text-muted-foreground">{official.since}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Peranan / Role</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{official.desc}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">Tanggungjawab / Duties</p>
                        <ul className="flex flex-col gap-2">
                          {official.duties.map((duty, didx) => (
                            <li key={didx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent flex-shrink-0 mt-0.5">—</span>
                              <span>{duty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
