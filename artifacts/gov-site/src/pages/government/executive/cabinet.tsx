import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Cabinet() {
  const { t } = useLanguage();
  const g = t.government;
  const c = g.cabinet;

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{c.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-4">{c.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{c.pageDesc}</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {c.lastUpdated}: {c.lastUpdatedDate}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-accent">
                <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">#</th>
                <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">Nama</th>
                <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">{c.portfolioLabel}</th>
                <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden md:table-cell">{c.partyLabel}</th>
                <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden lg:table-cell">{c.sinceLabel}</th>
              </tr>
            </thead>
            <tbody>
              {c.members.map((member, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="border-b border-border hover:bg-secondary transition-colors"
                >
                  <td className="py-3 px-4 font-mono text-[10px] text-muted-foreground">{String(idx + 1).padStart(2, "0")}</td>
                  <td className="py-3 px-4 text-sm text-primary font-medium">{member.name}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{member.portfolio}</td>
                  <td className="py-3 px-4 hidden md:table-cell">
                    <span className="font-mono text-[10px] bg-secondary border border-border px-2 py-0.5 text-muted-foreground">{member.party}</span>
                  </td>
                  <td className="py-3 px-4 font-mono text-[10px] text-muted-foreground hidden lg:table-cell">{member.since}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
