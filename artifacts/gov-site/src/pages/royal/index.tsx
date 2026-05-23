import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Royal() {
  const { t } = useLanguage();
  const r = t.royal;
  const l = r.landing;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-primary border-b border-white/10 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList className="text-white/50">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-white/60 hover:text-white transition-colors">{r.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-accent">{r.breadcrumbParent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">{l.banner}</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-6">{l.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-3xl font-light leading-relaxed">{l.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border border border-border">
          {l.subpages.map((sub, idx) => (
            <motion.div key={sub.href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
              <Link href={sub.href} className="group bg-background p-8 flex flex-col h-full hover:bg-primary hover:text-white transition-colors" data-testid={`card-royal-${idx}`}>
                <div className="w-8 h-px bg-accent mb-8 group-hover:w-full transition-all duration-500" />
                <h3 className="font-serif text-lg text-primary group-hover:text-white mb-3 transition-colors">{sub.title}</h3>
                <p className="text-xs text-muted-foreground group-hover:text-white/70 leading-relaxed flex-1">{sub.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-accent">
                  <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
