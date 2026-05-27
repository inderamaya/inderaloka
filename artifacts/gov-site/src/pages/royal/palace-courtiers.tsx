import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function PalaceCourtiers() {
  const { t } = useLanguage();
  const r = t.royal;
  const pc = r.palaceCourtiers;

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
              <BreadcrumbItem><BreadcrumbPage className="text-white">{pc.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-6">{pc.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">{pc.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 flex flex-col gap-16">
        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{pc.overviewTitle}</h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed font-light max-w-3xl">{pc.overviewBody}</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-primary mb-4">{pc.categoriesTitle}</h2>
          <div className="w-12 h-px bg-accent mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pc.categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-border bg-background p-6"
              >
                <h3 className="font-serif text-lg text-primary mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                <div className="border-t border-border pt-4 flex flex-col gap-3">
                  {cat.members.map((member, midx) => (
                    <div key={midx} className="flex flex-col gap-0.5">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-accent">{member.role}</p>
                      <p className="text-sm text-primary">{member.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border border-border bg-secondary p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{pc.courtLabel}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{pc.court}</p>
        </section>
      </div>
    </div>
  );
}
