import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { FileText, Eye, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Constitution() {
  const { t } = useLanguage();
  const c = t.constitution;
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{c.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{c.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{c.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{c.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{c.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 max-w-5xl">
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.statsLabel}</h2>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="rounded-none font-mono text-[10px] uppercase tracking-widest border-accent text-accent hover:bg-accent hover:text-white transition-all h-9"
                onClick={() => setShowViewer(true)}
              >
                <Eye className="w-3.5 h-3.5 mr-2" /> View Full PDF
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="rounded-none font-mono text-[10px] uppercase tracking-widest border-primary text-primary hover:bg-primary hover:text-white transition-all h-9"
              >
                <a href="/constitution.pdf" download>
                  <Download className="w-3.5 h-3.5 mr-2" /> Download
                </a>
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {showViewer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-12 border border-border bg-secondary/30 p-2 relative"
              >
                <div className="bg-background flex items-center justify-between p-4 border-b border-border mb-2">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-accent" />
                    <span className="font-serif text-sm text-primary">constitution.pdf</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowViewer(false)}
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="aspect-[1/1.4] w-full bg-muted flex items-center justify-center overflow-hidden">
                  <iframe 
                    src="/constitution.pdf#toolbar=0" 
                    className="w-full h-full border-none"
                    title="Constitution PDF Viewer"
                  />
                </div>
                <p className="font-mono text-[9px] text-center mt-4 text-muted-foreground uppercase tracking-[0.2em]">Official Document of the Republic of Inderaloka</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {c.stats.map((stat, idx) => (
              <div key={idx} className="bg-background p-6 flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                <span className="font-serif text-2xl text-accent font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl text-primary mb-6">{c.preambleTitle}</h2>
          <div className="bg-primary text-white p-8 lg:p-12 border-l-4 border-accent">
            <p className="font-serif text-lg leading-relaxed italic">{c.preamble}</p>
          </div>
        </motion.div>

        <div>
          <h2 className="font-serif text-2xl text-primary mb-8">{c.partsTitle}</h2>
          <div className="flex flex-col gap-4">
            {c.parts.map((part, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-border bg-background p-6 flex gap-6"
              >
                <div className="font-mono text-2xl text-accent/30 font-bold w-8 flex-shrink-0">{(idx + 1).toString().padStart(2, "0")}</div>
                <div>
                  <h3 className="font-serif text-base text-primary mb-2">{part.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{part.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
