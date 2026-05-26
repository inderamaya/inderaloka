import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Landmark, Shield } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Royal() {
  const { t } = useLanguage();
  const r = t.royal || {} as any;
  const l = r.landing || { subpages: [] as any[] };

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{r.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">{r.breadcrumbParent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[9px] uppercase tracking-widest mb-8 font-bold">
              <Shield className="w-3 h-3" />
              {l.banner}
            </div>
            <h1 className="font-serif text-5xl lg:text-8xl font-bold text-primary mb-8 leading-tight tracking-tighter">
              {l.pageTitle}
            </h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">
              {l.pageDesc}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {l.subpages.map((sub, idx) => (
            <motion.div
              key={sub.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Link href={sub.href}>
                <GlassCard className="h-full p-10 cursor-pointer border-transparent hover:border-accent/30 transition-all duration-500 group bg-white/40 dark:bg-black/20 overflow-hidden">
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-primary font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8 line-clamp-3">
                    {sub.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all">
                    Explore Institution <ChevronRight className="w-3 h-3" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
