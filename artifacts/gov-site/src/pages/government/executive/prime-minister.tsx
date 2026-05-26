import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Search, History, Award, BookOpen, PenTool, ExternalLink, Filter, Shield, ArrowRight, User } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function PrimeMinister() {
  const { t } = useLanguage();
  const g = t.government;
  const p = g.pm;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPM, setSelectedPM] = useState<number | null>(null);

  const filteredArchive = p.pmArchive.filter(pm => 
    pm.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pm.years.includes(searchTerm) ||
    pm.achievements.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{p.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{p.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{p.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Current PM Highlight */}
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
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white font-bold">{p.portraitLabel}</span>
                </div>
              </div>
            </GlassCard>

            <div className="space-y-4">
              {[
                { label: p.officialTitleLabel, value: p.officialTitle },
                { label: p.bornLabel, value: p.born },
                { label: p.sinceLabel, value: p.since },
                { label: p.educationLabel, value: p.education },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start py-4 border-b border-white/10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mt-1">{item.label}</span>
                  <span className="text-sm text-primary font-medium text-right max-w-[200px] leading-relaxed">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-20"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[9px] uppercase tracking-widest mb-8 font-bold">
                <Shield className="w-3 h-3" />
                Executive Mandate
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-primary font-bold mb-8 leading-tight">{p.roleTitle}</h2>
              <p className="text-muted-foreground text-xl font-light leading-relaxed mb-12">{p.roleBody}</p>

              <GlassCard className="border-accent/30 bg-accent/5 p-10 italic rounded-[2.5rem]">
                 <div className="text-accent mb-6"><PenTool className="w-8 h-8 opacity-20" /></div>
                 <p className="text-2xl font-serif text-primary leading-tight font-medium">"{p.motto}"</p>
                 <footer className="mt-8 font-mono text-[10px] uppercase tracking-widest text-accent font-bold">{p.mottoLabel}</footer>
              </GlassCard>
            </div>

            <div className="space-y-10">
              <h3 className="font-serif text-3xl text-primary font-bold border-b border-white/10 pb-6">{p.dutiesTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {p.duties.map((duty, idx) => (
                  <GlassCard key={idx} className="p-8 border-transparent hover:border-primary/20 transition-all bg-white/40 dark:bg-black/20">
                    <span className="font-mono text-xl font-bold text-accent/20 mb-4 block">0{idx + 1}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{duty}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Historical Archive */}
        <section className="relative pt-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl lg:text-6xl text-primary font-bold mb-6">{p.archiveTitle}</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">A repository of Inderaloka's executive leadership and democratic heritage.</p>
            </div>
            <div className="relative group w-full md:w-96">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
               <Input
                placeholder={p.searchPlaceholder} 
                className="pl-12 h-14 rounded-2xl border-white/20 glass-effect bg-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArchive.map((pm, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full p-8 border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <div className="aspect-[4/3] rounded-2xl bg-primary/5 flex items-center justify-center mb-8 overflow-hidden group-hover:bg-primary/10 transition-colors">
                     <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center bg-white mx-auto mb-4">
                           <User className="w-8 h-8 text-accent opacity-20" />
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{pm.party}</span>
                     </div>
                  </div>

                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest">{pm.years}</span>
                    <h3 className="font-serif text-2xl text-primary font-bold group-hover:text-accent transition-colors leading-tight">{pm.name}</h3>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {pm.honours.slice(0, 3).map((h, i) => (
                        <Badge key={i} variant="outline" className="text-[8px] font-mono border-primary/20 text-primary/60">{h}</Badge>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedPM(selectedPM === idx ? null : idx)}
                      className="w-full mt-6 py-4 rounded-xl border border-primary/10 text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3"
                    >
                      {selectedPM === idx ? "Close Profile" : "View Leadership Profile"}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <AnimatePresence>
                    {selectedPM === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="pt-6 border-t border-white/10 space-y-8">
                          <div>
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-3 flex items-center gap-2">
                              <BookOpen className="w-3.5 h-3.5" /> {p.biographyLabel}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed font-light">{pm.bio}</p>
                          </div>
                          <div>
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-3 flex items-center gap-2">
                              <Award className="w-3.5 h-3.5" /> {p.achievementsLabel}
                            </h4>
                            <ul className="space-y-2">
                              {pm.achievements.map((a, i) => (
                                <li key={i} className="text-xs text-primary/80 flex items-start gap-3">
                                  <div className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
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

        {/* Timeline */}
        <section className="py-32">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl text-primary font-bold mb-4">{p.governanceTimelineTitle}</h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto relative">
             <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
             <div className="space-y-12">
               {(p.pmArchive.flatMap(pm => [...pm.milestones] as any[]) as any[]).map((m: any, idx: number) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className={cn(
                     "flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative",
                     idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                   )}
                 >
                   <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10 hidden lg:block shadow-[0_0_20px_rgba(var(--accent),0.5)]" />
                   <div className="lg:w-1/2 text-right">
                      <div className={idx % 2 !== 0 ? "lg:text-left" : "lg:text-right"}>
                        <span className="font-mono text-2xl font-bold text-primary/20">{m.year}</span>
                      </div>
                   </div>
                   <div className="lg:w-1/2">
                      <div className="p-6 lg:p-8 rounded-3xl border border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-xl">
                        <p className="text-sm font-serif text-primary font-bold leading-relaxed">{m.event}</p>
                      </div>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
