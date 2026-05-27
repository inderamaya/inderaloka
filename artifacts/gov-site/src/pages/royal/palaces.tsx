import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Palaces() {
  const { t } = useLanguage();
  const r = t.royal;
  const p = r.palaces;

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
              <BreadcrumbItem><BreadcrumbPage className="text-accent">{p.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-4">{p.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">{p.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {p.items.map((palace, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-border bg-background group hover:border-accent/40 transition-colors"
            >
              <div className="aspect-[16/9] bg-secondary border-b border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-5 group-hover:opacity-10 transition-opacity" />
                <div className="text-center z-10">
                  <div className="w-16 h-16 border border-accent/30 bg-accent/5 flex items-center justify-center mx-auto mb-3">
                    <span className="font-mono text-xl font-bold text-accent">{(idx + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{palace.type}</span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">{palace.type}</div>
                <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-accent transition-colors">{palace.name}</h3>
                <div className="flex items-start gap-2 mb-5">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{palace.location}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{palace.desc}</p>
                <div className="border-t border-border pt-5">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">{p.visitingLabel}</span>
                      <p className="text-xs text-muted-foreground">{palace.visiting}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
