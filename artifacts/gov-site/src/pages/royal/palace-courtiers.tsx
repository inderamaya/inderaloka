import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Landmark, Award, ShieldCheck, ChevronRight, User } from "lucide-react";

export default function PalaceCourtiers() {
  const { t } = useLanguage();
  const r = t.royal;
  const pc = r.palaceCourtiers;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{r.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/royal">{r.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{pc.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{pc.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{pc.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview */}
        <section className="max-w-5xl mx-auto">
          <div className="glass-effect p-12 lg:p-20 rounded-[3rem] bg-white/40 dark:bg-black/20 border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
                <Users className="w-48 h-48 text-primary" />
             </div>
             <h2 className="font-serif text-3xl lg:text-4xl text-primary font-bold mb-8">{pc.overviewTitle}</h2>
             <p className="text-xl leading-relaxed text-muted-foreground font-light italic">
                {pc.overviewBody}
             </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{pc.categoriesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pc.categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <h3 className="font-serif text-2xl text-primary font-bold mb-4 leading-tight group-hover:text-accent transition-colors">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-10">{cat.desc}</p>

                  <div className="space-y-6 pt-8 border-t border-white/5">
                    {cat.members.map((member, midx) => (
                      <div key={midx} className="flex items-center gap-4 group/member">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover/member:bg-accent/10 transition-colors">
                           <User className="w-4 h-4 text-primary/40 group-hover/member:text-accent" />
                        </div>
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-0.5">{member.role}</p>
                          <p className="text-sm text-primary font-medium">{member.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Court Information */}
        <section className="relative">
          <GlassCard className="max-w-4xl mx-auto p-12 border-primary/20 bg-primary/5 rounded-[3rem] text-center overflow-hidden">
             <div className="absolute top-0 left-0 p-8 opacity-5">
                <Landmark className="w-32 h-32 text-primary" />
             </div>
             <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-8">{pc.courtLabel}</h3>
             <p className="text-2xl font-serif text-primary font-bold leading-relaxed">{pc.court}</p>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
