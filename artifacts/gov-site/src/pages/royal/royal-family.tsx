import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function RoyalFamily() {
  const { t } = useLanguage();
  const r = t.royal;
  const f = r.royalFamily;

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
              <BreadcrumbItem><BreadcrumbPage className="text-accent">{f.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-4">{f.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">{f.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {f.members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="border border-border bg-background group hover:border-accent/40 transition-colors"
            >
              <div className="aspect-[4/3] bg-secondary border-b border-border flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-border flex items-center justify-center">
                    <span className="font-serif text-xl text-accent">{member.name.charAt(member.name.lastIndexOf(" ") + 1)}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{member.title}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">{member.role}</div>
                <h3 className="font-serif text-xl text-primary mb-3 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
