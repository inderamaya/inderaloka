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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {c.members.map((member: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              className="bg-card border border-border overflow-hidden group hover:border-accent transition-colors"
            >
              <div className="p-6 lg:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4 border-b border-border pb-2 inline-block">
                  {member.portfolio}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Minister */}
                  <div className="flex flex-col gap-4">
                    <div className="aspect-[3/4] overflow-hidden border border-border bg-secondary">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">{c.ministerLabel}</div>
                      <h3 className="font-serif text-lg text-primary leading-tight mb-1">{member.name}</h3>
                      <div className="flex gap-2">
                        <span className="font-mono text-[9px] bg-secondary border border-border px-1.5 py-0.5 text-muted-foreground">{member.party}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deputy Minister */}
                  <div className="flex flex-col gap-4">
                    <div className="aspect-[3/4] overflow-hidden border border-border bg-secondary">
                      <img 
                        src={member.deputyImage} 
                        alt={member.deputy} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">{c.deputyMinisterLabel}</div>
                      <h3 className="font-serif text-lg text-primary leading-tight mb-1">{member.deputy}</h3>
                      <div className="flex gap-2">
                        <span className="font-mono text-[9px] bg-secondary border border-border px-1.5 py-0.5 text-muted-foreground">{member.party}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary px-6 lg:px-8 py-3 border-t border-border flex justify-between items-center">
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">{c.sinceLabel}: {member.since}</span>
                <span className="font-mono text-[9px] text-accent uppercase tracking-widest">ID: {String(idx + 1).padStart(2, "0")}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
