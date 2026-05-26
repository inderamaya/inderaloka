import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Users, Award, Landmark, ArrowRight, ChevronRight, Gavel, Calendar } from "lucide-react";

export default function RoyalAdvisoryCouncil() {
  const { t } = useLanguage();
  const r = t.royal;
  const rac = r.royalAdvisoryCouncil;

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{rac.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{rac.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{rac.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Overview Section */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
               <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-8 border border-primary/20">Supreme Advisory Body</div>
               <h2 className="font-serif text-4xl text-primary font-bold mb-8">{rac.overviewTitle}</h2>
               <p className="text-xl leading-relaxed text-muted-foreground font-light mb-10 italic">
                {rac.overviewBody}
               </p>

               <GlassCard className="border-accent/20 bg-accent/5 p-8 lg:p-12 rounded-[2.5rem]">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black/20 flex items-center justify-center text-accent shrink-0 shadow-xl">
                      <Gavel className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-4">{rac.basisLabel}</h3>
                      <p className="text-lg lg:text-xl font-serif text-primary font-bold leading-relaxed">{rac.basis}</p>
                    </div>
                  </div>
               </GlassCard>
            </div>

            <div className="lg:col-span-5">
              <GlassCard className="h-full aspect-square flex items-center justify-center border-accent/20 bg-accent/5">
                <Shield className="w-32 h-32 text-accent opacity-10" strokeWidth={1} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-64 h-64 rounded-full border border-accent/10 animate-ping opacity-10" />
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{rac.membersTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rac.members.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-10 border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                   <div className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-4 px-2 py-1 bg-accent/5 inline-block rounded border border-accent/10">{member.role}</div>
                   <h3 className="font-serif text-2xl text-primary font-bold mb-2 group-hover:text-accent transition-colors leading-tight">{member.name}</h3>
                   <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest font-mono pt-4 border-t border-white/5">{member.title}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Functions & Meetings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <section className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-4xl text-primary font-bold">{rac.functionsTitle}</h2>
            </div>

            <div className="space-y-4">
              {rac.functions.map((fn, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <GlassCard className="p-6 border-transparent hover:border-primary/20 transition-all bg-white/40 dark:bg-black/20 group">
                    <div className="flex items-start gap-6">
                       <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                          <ArrowRight className="w-4 h-4 text-primary/40 group-hover:text-accent transition-colors" />
                       </div>
                       <p className="text-lg text-primary font-medium font-serif">{fn}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="lg:col-span-4 h-fit lg:sticky lg:top-40">
             <GlassCard className="p-10 border-accent/30 bg-accent/5 rounded-[2.5rem]">
                <Calendar className="w-12 h-12 text-accent opacity-20 mb-8" />
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6">{rac.meetingLabel}</h3>
                <p className="text-lg text-primary font-light leading-relaxed italic">"{rac.meeting}"</p>
                <div className="mt-8 w-12 h-1 bg-accent/30 rounded-full" />
             </GlassCard>
          </section>
        </div>
      </div>
    </div>
  );
}
