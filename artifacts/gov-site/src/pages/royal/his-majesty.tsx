import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, History, Award, Users, Shield, User, GraduationCap, Calendar, Crown, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function HisMajesty() {
  const { t } = useLanguage();
  const r = t.royal;
  const m = r.hisMajesty;
  const [expandedMonarch, setExpandedMonarch] = useState<number | null>(null);

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{m.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{m.pageTitle}</h1>
            <p className="text-accent font-mono text-[11px] uppercase tracking-[0.4em] font-bold">{m.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <GlassCard className="p-2 border-accent/20 bg-white/40 dark:bg-black/20 rounded-[2.5rem] mb-12">
              <div className="aspect-[3/4] bg-primary/5 rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10" />
                <div className="text-center z-20">
                  <div className="w-20 h-20 rounded-full border-2 border-accent mx-auto mb-6 flex items-center justify-center bg-white shadow-2xl">
                    <User className="w-10 h-10 text-accent" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white font-bold">{m.portraitLabel}</span>
                </div>
              </div>
            </GlassCard>

            <div className="space-y-4">
              {[
                { label: m.officialTitleLabel, icon: Crown, value: m.officialTitle },
                { label: m.bornLabel, icon: Calendar, value: m.born },
                { label: m.accessionLabel, icon: Star, value: m.accession },
                { label: m.educationLabel, icon: GraduationCap, value: m.education },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-accent" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mt-1">{item.label}</span>
                  </div>
                  <span className="text-sm text-primary font-medium text-right max-w-[250px] leading-relaxed">{item.value}</span>
                </div>
              ))}
            </div>

            <GlassCard className="mt-12 border-accent/30 bg-accent/5 p-8 italic rounded-3xl">
               <div className="text-accent mb-4 font-mono text-[10px] uppercase tracking-widest font-bold">{m.mottoLabel}</div>
               <p className="text-xl font-serif text-primary leading-tight font-medium">"{m.motto}"</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-24"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[9px] uppercase tracking-widest mb-8 font-bold">
                <Shield className="w-3 h-3" />
                Constitutional Mandate
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-primary font-bold mb-8 leading-tight">{m.roleTitle}</h2>
              <p className="text-muted-foreground text-xl font-light leading-relaxed mb-12 italic">{m.roleBody}</p>
            </div>

            <div className="space-y-12">
              <h3 className="font-serif text-3xl text-primary font-bold border-b border-white/10 pb-6">{m.dutiesTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {m.duties.map((duty, idx) => (
                  <GlassCard key={idx} className="p-8 border-transparent hover:border-accent/20 transition-all bg-white/40 dark:bg-black/20 group">
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-xl font-bold text-accent/20 group-hover:text-accent transition-colors shrink-0">0{idx + 1}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">{duty}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Historical Timeline Section */}
        <section className="relative pt-32">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl lg:text-6xl text-primary font-bold mb-6">{m.timelineTitle}</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {m.formerMonarchs.map((monarch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-0 overflow-hidden border-transparent hover:border-accent/20 transition-all duration-300 bg-white/40 dark:bg-black/20">
                  <button
                    onClick={() => setExpandedMonarch(expandedMonarch === idx ? null : idx)}
                    className="w-full text-left p-8 lg:p-10 flex items-center justify-between gap-8 group"
                  >
                    <div className="flex items-center gap-10 min-w-0">
                      <div className="hidden sm:block w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                        <Crown className="w-8 h-8 text-accent/30 group-hover:text-accent transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-2">Yang di-Pertuan Agong {monarch.order}</div>
                        <h2 className="font-serif text-2xl lg:text-3xl text-primary font-bold truncate group-hover:text-accent transition-colors">{monarch.name}</h2>
                        <span className="text-sm text-muted-foreground font-mono font-bold tracking-widest">{monarch.reign}</span>
                      </div>
                    </div>
                    <div className={cn(
                      "w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center transition-all duration-300",
                      expandedMonarch === idx ? "bg-accent border-accent text-white rotate-180" : "group-hover:border-accent group-hover:text-accent"
                    )}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedMonarch === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 lg:px-10 pb-10 pt-4 border-t border-white/5">
                           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                              <div className="lg:col-span-8 space-y-12">
                                 <div>
                                   <div className="flex items-center gap-3 mb-4">
                                     <History className="w-4 h-4 text-accent" />
                                     <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{m.biographyLabel}</span>
                                   </div>
                                   <p className="text-lg text-primary font-light leading-relaxed italic">"{monarch.bio}"</p>
                                 </div>

                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-accent/5 rounded-3xl p-8 border border-accent/10">
                                      <div className="flex items-center gap-3 mb-6">
                                        <Award className="w-4 h-4 text-accent" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">{m.achievementsLabel}</span>
                                      </div>
                                      <ul className="space-y-4">
                                        {monarch.achievements.map((item, i) => (
                                          <li key={i} className="flex items-start gap-3 text-xs text-primary font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                                      <div className="flex items-center gap-3 mb-6">
                                        <Users className="w-4 h-4 text-primary" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">{m.consortLabel}</span>
                                      </div>
                                      <p className="text-sm text-primary font-bold mb-6">{monarch.consort}</p>
                                      <div className="pt-6 border-t border-primary/10">
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold block mb-2">Pewaris Takhta</span>
                                        <p className="text-sm font-serif text-primary font-bold">{monarch.heir}</p>
                                      </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="lg:col-span-4 space-y-8">
                                 <div className="aspect-[3/4] rounded-2xl bg-background border border-white/5 flex items-center justify-center p-4">
                                    <div className="text-center">
                                       <User className="w-12 h-12 text-accent opacity-20 mx-auto mb-4" />
                                       <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Institutional Portrait</span>
                                    </div>
                                 </div>
                                 <div className="p-6 rounded-2xl border border-white/5 bg-accent/5">
                                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold block mb-4">{m.standardLabel}</span>
                                    <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                                       <Star className="w-8 h-8 text-accent opacity-20" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
