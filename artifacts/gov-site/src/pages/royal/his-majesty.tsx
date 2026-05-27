import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, History, Award, Users, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";

export default function HisMajesty() {
  const { t } = useLanguage();
  const r = t.royal;
  const m = r.hisMajesty;
  const [expandedMonarch, setExpandedMonarch] = useState<number | null>(null);

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
              <BreadcrumbItem><BreadcrumbPage className="text-accent">{m.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-3xl lg:text-4xl text-white mb-4">{m.pageTitle}</h1>
          <p className="text-accent font-mono text-sm tracking-widest">{m.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              {/* Institutional Framing for Portrait */}
              <div className="relative p-2 border border-border bg-white shadow-xl mb-6">
                <div className="aspect-[3/4] bg-primary/5 border border-border flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 border-[12px] border-double border-primary/10 pointer-events-none" />
                  <div className="absolute top-4 right-4 flex flex-col items-center gap-1 opacity-40">
                    <Shield className="w-8 h-8 text-primary" />
                    <span className="text-[6px] font-mono uppercase tracking-tighter text-primary">Verified State Portrait</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest text-center whitespace-pre-line z-10">{m.portraitLabel}</span>
                </div>
              </div>

              <div className="border border-border divide-y divide-border bg-white">
                {[
                  [m.officialTitleLabel, m.officialTitle],
                  [m.bornLabel, m.born],
                  [m.accessionLabel, m.accession],
                  [m.mottoLabel, m.motto],
                ].map(([label, value], idx) => (
                  <div key={idx} className="p-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">{label}</span>
                    <span className="text-sm text-primary font-medium">{value}</span>
                  </div>
                ))}
                <div className="p-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">{m.educationLabel}</span>
                  <span className="text-sm text-primary leading-relaxed">{m.education}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
              <h2 className="font-serif text-2xl text-primary mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                {m.roleTitle}
              </h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <p className="text-muted-foreground leading-relaxed text-lg italic">{m.roleBody}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="font-serif text-2xl text-primary mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />
                {m.dutiesTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {m.duties.map((duty, idx) => (
                  <div key={idx} className="flex gap-4 items-start border border-border p-4 bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <span className="font-mono text-xs text-accent font-bold flex-shrink-0 pt-1">{(idx + 1).toString().padStart(2, "0")}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{duty}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Historical Timeline Section */}
        <div className="border-t border-border pt-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 font-mono uppercase tracking-widest text-[10px] py-1 px-3">Archive & History</Badge>
            <h2 className="font-serif text-4xl text-primary mb-4">{m.timelineTitle}</h2>
            <div className="w-24 h-px bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">Meneroka warisan kepimpinan dan kedaulatan melalui pemerintahan Yang di-Pertuan Agong terdahulu.</p>
          </div>

          <div className="relative">
            {/* Vertical Line for Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden lg:block" />

            <div className="space-y-12">
              {m.formerMonarchs.map((monarch, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background z-10 hidden lg:block" />

                  <div className="w-full lg:w-1/2 px-4 lg:px-12">
                    <div className={`p-6 border border-border bg-white shadow-sm hover:shadow-md transition-shadow ${expandedMonarch === idx ? "border-accent/50 ring-1 ring-accent/20" : ""}`}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 block">Yang di-Pertuan Agong {monarch.order}</span>
                          <h3 className="font-serif text-2xl text-primary">{monarch.name}</h3>
                          <span className="text-sm text-muted-foreground font-mono">{monarch.reign}</span>
                        </div>
                        <button
                          onClick={() => setExpandedMonarch(expandedMonarch === idx ? null : idx)}
                          className="p-2 hover:bg-secondary rounded-full transition-colors"
                        >
                          {expandedMonarch === idx ? <ChevronUp className="w-5 h-5 text-accent" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {monarch.honours.slice(0, 3).map((h, i) => (
                          <Badge key={i} variant="secondary" className="text-[9px] font-mono font-normal">{h}</Badge>
                        ))}
                        {monarch.honours.length > 3 && <span className="text-[9px] text-muted-foreground font-mono">+{monarch.honours.length - 3}</span>}
                      </div>

                      <AnimatePresence>
                        {expandedMonarch === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 border-t border-border mt-6 space-y-8">
                              <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
                                  <History className="w-3 h-3" />
                                  {m.biographyLabel}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{monarch.bio}</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
                                    <Award className="w-3 h-3" />
                                    {m.achievementsLabel}
                                  </h4>
                                  <ul className="space-y-2">
                                    {monarch.achievements.map((item, i) => (
                                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                                        <div className="w-1 h-1 bg-accent rounded-full" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
                                    <Users className="w-3 h-3" />
                                    {m.consortLabel}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">{monarch.consort}</p>
                                  <div className="mt-4">
                                    <h5 className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">Pewaris Takhta</h5>
                                    <p className="text-xs text-primary font-medium">{monarch.heir}</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
                                  <History className="w-3 h-3" />
                                  Peristiwa Penting
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {monarch.events.map((event, i) => (
                                    <Badge key={i} variant="outline" className="text-[10px] font-normal border-border bg-secondary/20">
                                      {event}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-3 bg-secondary/50 border border-border rounded-sm">
                                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">Portrait</span>
                                  <div className="aspect-[3/4] bg-primary/5 border border-border flex items-center justify-center text-[10px] font-mono text-muted-foreground text-center">
                                    Institutional<br />Portrait
                                  </div>
                                </div>
                                <div className="p-3 bg-secondary/50 border border-border rounded-sm">
                                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">{m.standardLabel}</span>
                                  <div className="aspect-[3/4] bg-primary/5 border border-border flex items-center justify-center text-[10px] font-mono text-muted-foreground text-center">
                                    Royal<br />Standard
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
