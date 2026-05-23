import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function History() {
  const { t } = useLanguage();
  const h = t.history;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{h.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{h.breadcrumbAbout}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{h.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{h.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{h.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32">
              <div className="w-px bg-border absolute left-0 top-0 bottom-0" />
              <div className="pl-6 flex flex-col gap-6">
                {h.eras.map((era, idx) => (
                  <a key={idx} href={`#era-${idx}`} className="group flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{era.label}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{era.year}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border" />
              <div className="lg:pl-12 flex flex-col gap-0">
                {h.eras.map((era, idx) => (
                  <motion.div
                    key={idx}
                    id={`era-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="scroll-mt-32 pb-16 relative"
                  >
                    <div className="hidden lg:block absolute -left-12 top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-background" />
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{era.label} — {era.year}</span>
                      <h2 className="font-serif text-3xl text-primary">{era.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">{era.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-4 border-accent bg-secondary p-8 lg:ml-12 mt-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">{h.quoteLabel}</div>
              <blockquote className="font-serif text-xl text-primary leading-relaxed mb-4 italic">"{h.quote}"</blockquote>
              <cite className="font-mono text-xs text-muted-foreground">{h.quoteSource}</cite>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
