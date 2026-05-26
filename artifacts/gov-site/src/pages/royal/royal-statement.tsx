import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Quote, Calendar, PenTool } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function RoyalStatement() {
  const { t } = useLanguage();
  const r = t.royal;
  const s = r.statement;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{r.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/royal">{r.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{s.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{s.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{s.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Latest Statement - Cinematic */}
        <section>
          <div className="max-w-5xl mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-10 text-center">{s.latestLabel}</div>

            <GlassCard className="p-10 lg:p-20 border-accent/20 bg-accent/5 rounded-[3rem] relative overflow-hidden">
               <div className="absolute top-0 left-0 p-12 opacity-5">
                  <Quote className="w-48 h-48 text-accent" />
               </div>

               <div className="relative z-10">
                  <div className="flex items-center justify-center gap-6 mb-12">
                     <div className="w-12 h-px bg-accent/30" />
                     <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold">{s.latestDate}</span>
                     </div>
                     <div className="w-12 h-px bg-accent/30" />
                  </div>

                  <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold text-center mb-16 leading-tight tracking-tight max-w-4xl mx-auto">
                    {s.latestTitle}
                  </h2>

                  <div className="max-w-3xl mx-auto space-y-8">
                    {s.latestBody.split("\n\n").map((para, idx) => (
                      <p key={idx} className={cn(
                        "text-xl leading-relaxed text-muted-foreground font-light",
                        idx === 0 ? "text-2xl text-primary italic font-medium" : ""
                      )}>
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mt-20 flex flex-col items-center">
                    <div className="w-24 h-px bg-accent mb-6" />
                    <div className="text-accent mb-4"><PenTool className="w-6 h-6 opacity-30" /></div>
                    <p className="font-serif text-lg lg:text-xl text-primary font-bold text-center italic">{s.latestSignature}</p>
                  </div>
               </div>
            </GlassCard>
          </div>
        </section>

        {/* Archive Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-primary font-bold mb-4">{s.previousLabel}</h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {s.previousItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard className="p-8 border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group cursor-pointer">
                  <div className="flex items-center gap-10">
                    <div className="text-right shrink-0 w-24">
                       <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{item.date.split(' ').slice(-1)}</span>
                       <div className="font-mono text-xs font-bold text-accent">{item.date.split(' ').slice(0, 2).join(' ')}</div>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <h3 className="text-lg font-serif text-primary font-bold group-hover:text-accent transition-colors flex-1 leading-tight">{item.title}</h3>
                    <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                       <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
