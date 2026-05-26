import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, ChevronRight, Landmark } from "lucide-react";

export default function Government() {
  const { t } = useLanguage();
  const g = t.government || {} as any;
  const l = g.landing || { subpages: [] as any[] };

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{g.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{g.breadcrumbParent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-8xl font-bold text-primary mb-8 leading-tight tracking-tighter">
              {l.pageTitle}
            </h1>
            <p className="text-muted-foreground text-xl font-light max-w-2xl leading-relaxed mb-12">
              {l.pageDesc}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60">Governance & Institutional Integrity</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {l.subpages.map((sub, idx) => (
            <motion.div
              key={sub.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={sub.href}>
                <GlassCard className="h-full p-10 cursor-pointer border-transparent hover:border-primary/20 transition-all duration-500 group relative overflow-hidden bg-white/40 dark:bg-black/20">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-4xl font-bold text-primary/5 tracking-tighter group-hover:text-accent/10 transition-colors">0{idx + 1}</span>
                    <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl text-primary font-bold mb-4 group-hover:text-accent transition-colors leading-tight">{sub.title}</h2>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">{sub.desc}</p>

                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all">
                    Explore Branch <ChevronRight className="w-3 h-3" />
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
