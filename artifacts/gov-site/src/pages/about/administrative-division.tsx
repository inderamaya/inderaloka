import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function AdminDivision() {
  const { t } = useLanguage();
  const ad = t.adminDivision;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{ad.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{ad.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{ad.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{ad.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{ad.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-12 max-w-3xl">
          <h2 className="font-serif text-2xl text-primary mb-4">{ad.overviewTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{ad.overviewBody}</p>
        </motion.div>

        <section className="mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">{ad.statesLabel}</h2>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  {ad.stateColumns.map((col, idx) => (
                    <th key={idx} className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ad.states.map((state, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className={`border-b border-border ${idx % 2 === 0 ? "bg-background" : "bg-secondary/30"} hover:bg-secondary transition-colors`}
                  >
                    <td className="px-4 py-3 font-medium text-primary">{state.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{state.capital}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{state.area}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{state.population}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{state.head}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">{ad.territoriesLabel}</h2>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent text-white">
                  {ad.territoriesColumns.map((col, idx) => (
                    <th key={idx} className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ad.territories.map((territory, idx) => (
                  <tr key={idx} className={`border-b border-border ${idx % 2 === 0 ? "bg-background" : "bg-secondary/30"}`}>
                    <td className="px-4 py-3 font-medium text-primary">{territory.name}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{territory.area}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{territory.population}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{territory.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
