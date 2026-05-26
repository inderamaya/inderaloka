import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, ChevronRight, User, Users, ShieldCheck, Landmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Cabinet() {
  const { t } = useLanguage();
  const g = t.government;
  const c = g.cabinet;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{g.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government">{g.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/executive">{g.executive.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{c.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{c.pageTitle}</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <p className="text-muted-foreground text-xl font-light max-w-2xl leading-relaxed">{c.pageDesc}</p>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mb-1">{c.lastUpdated}</span>
              <span className="font-mono text-xs font-bold text-primary">{c.lastUpdatedDate}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {c.members.map((member: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
            >
              <GlassCard className="h-full p-8 lg:p-10 border-transparent hover:border-accent/30 transition-all duration-500 group bg-white/40 dark:bg-black/20 overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Landmark className="w-5 h-5" />
                   </div>
                   <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold bg-white/50 px-3 py-1 rounded-full border border-white/10 shadow-sm">
                    {member.portfolio}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Minister */}
                  <div className="space-y-6">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-2">{c.ministerLabel}</div>
                      <h3 className="font-serif text-xl text-primary font-bold leading-tight mb-2 group-hover:text-accent transition-colors">{member.name}</h3>
                      <Badge variant="outline" className="text-[8px] font-mono border-primary/20 text-primary/60 font-bold tracking-widest">{member.party}</Badge>
                    </div>
                  </div>

                  {/* Deputy Minister */}
                  <div className="space-y-6">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-xl opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700">
                      <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={member.deputyImage} 
                        alt={member.deputy} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-2">{c.deputyMinisterLabel}</div>
                      <h3 className="font-serif text-xl text-primary font-bold leading-tight mb-2 group-hover:text-accent transition-colors">{member.deputy}</h3>
                      <Badge variant="outline" className="text-[8px] font-mono border-primary/20 text-primary/60 font-bold tracking-widest">{member.party}</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent opacity-50" />
                    <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest font-bold">{c.sinceLabel}: {member.since}</span>
                  </div>
                  <span className="font-mono text-[9px] text-primary/20 font-bold uppercase tracking-widest">RANK 0{idx + 1}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
