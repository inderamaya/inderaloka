import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function RoyalRegalia() {
  const { t } = useLanguage();
  const r = t.royal;
  const reg = r.regalia;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      {/* Hero Section */}
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="hover:text-primary transition-colors">{r.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/royal" className="hover:text-primary transition-colors">{r.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-accent font-bold">{reg.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-4">{reg.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-3xl font-light leading-relaxed whitespace-pre-line">{reg.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-16 max-w-5xl">
        <section>
          <div className="mb-12 flex items-center gap-4">
            <h2 className="font-serif text-3xl text-primary">{reg.regaliaTitle}</h2>
            <div className="h-px bg-border flex-1" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {reg.regaliaItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-card border border-border p-8 hover:border-accent/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-accent group-hover:h-full transition-all duration-500" />
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-accent transition-colors">{item.name}</h3>
                    <p className="text-muted-foreground leading-relaxed italic">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 text-accent font-serif text-xl border border-border/50">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
