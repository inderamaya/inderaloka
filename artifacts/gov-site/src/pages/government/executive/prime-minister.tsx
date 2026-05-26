import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Search, History, Award, BookOpen, PenTool, ExternalLink, Filter, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

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
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{g.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government">{g.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/government/executive">{g.executive.breadcrumbCurrent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{p.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-4">{p.pageTitle}</h1>
          <p className="text-muted-foreground text-base font-light">{p.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        {/* Current PM Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="relative p-2 border border-border bg-card shadow-xl mb-6">
              <div className="aspect-[3/4] bg-primary/5 border border-border flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 border-[12px] border-double border-primary/10 pointer-events-none" />
                <div className="absolute top-4 right-4 flex items-center gap-1 opacity-40">
                  <Badge variant="outline" className="text-[8px] font-mono border-primary text-primary">STATE OFFICIAL</Badge>
                </div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 border border-accent mx-auto mb-3 flex items-center justify-center bg-background">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground whitespace-pre-line">{p.portraitLabel}</p>
                </div>
              </div>
            </div>

            <div className="border border-border divide-y divide-border bg-card">
              {[
                { label: p.officialTitleLabel, value: p.officialTitle },
                { label: p.bornLabel, value: p.born },
                { label: p.sinceLabel, value: p.since },
                { label: p.educationLabel, value: p.education },
              ].map((item) => (
                <div key={item.label} className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">{item.label}</p>
                  <p className="text-sm text-primary font-medium leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 border border-accent/30 bg-accent/5 p-4 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
                <PenTool className="w-24 h-24 text-accent" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{p.mottoLabel}</p>
              <p className="text-sm text-primary font-light italic leading-relaxed z-10 relative">"{p.motto}"</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="mb-12">
              <h2 className="font-serif text-2xl text-primary mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />
                {p.roleTitle}
              </h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <p className="text-muted-foreground leading-relaxed text-lg font-light">{p.roleBody}</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-primary mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                {p.dutiesTitle}
              </h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {p.duties.map((duty, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-4 p-5 border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors"
                  >
                    <span className="font-mono text-xs text-accent font-bold flex-shrink-0 pt-0.5">{(idx + 1).toString().padStart(2, "0")}</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{duty}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* PM Historical Archive */}
        <div className="border-t border-border pt-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <Badge variant="outline" className="mb-4 font-mono uppercase tracking-widest text-[10px] py-1 px-3">Archive & Governance</Badge>
              <h2 className="font-serif text-4xl text-primary mb-4">{p.archiveTitle}</h2>
              <p className="text-muted-foreground">Menelusuri sejarah kepemimpinan eksekutif Inderaloka sejak kemerdekaan sehingga kini.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder={p.searchPlaceholder} 
                className="pl-10 border-border bg-background focus:ring-accent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredArchive.map((pm, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-border bg-card group hover:border-accent/40 transition-all shadow-sm hover:shadow-md overflow-hidden"
              >
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden border-b border-border">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="z-10 text-center">
                    <div className="w-14 h-14 border border-accent/40 mx-auto mb-3 flex items-center justify-center bg-background rounded-full">
                      <span className="font-serif text-lg text-accent">{pm.name.charAt(pm.name.lastIndexOf(" ") + 1)}</span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{pm.party}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-mono text-[10px] text-accent mb-2 block">{pm.years}</span>
                  <h3 className="font-serif text-xl text-primary mb-4 group-hover:text-accent transition-colors">{pm.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pm.honours.slice(0, 3).map((h, i) => (
                      <Badge key={i} variant="secondary" className="text-[8px] font-mono font-normal">{h}</Badge>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedPM(selectedPM === idx ? null : idx)}
                    className="w-full py-2 border border-border text-[10px] font-mono uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2"
                  >
                    {selectedPM === idx ? "Tutup Arkib" : "Lihat Profil Arkib"}
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <AnimatePresence>
                  {selectedPM === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="bg-secondary/30 overflow-hidden"
                    >
                      <div className="p-6 border-t border-border space-y-6">
                        <div>
                          <h4 className="font-mono text-[9px] uppercase tracking-widest text-accent mb-2 flex items-center gap-2">
                            <BookOpen className="w-3 h-3" />
                            {p.biographyLabel}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{pm.bio}</p>
                        </div>
                        <div>
                          <h4 className="font-mono text-[9px] uppercase tracking-widest text-accent mb-2 flex items-center gap-2">
                            <Award className="w-3 h-3" />
                            {p.achievementsLabel}
                          </h4>
                          <ul className="space-y-1">
                            {pm.achievements.map((a, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                                <div className="w-1 h-1 bg-accent rounded-full" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-border/50">
                          <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-4">Official Signature Archive</h4>
                          <div className="h-16 bg-background/50 border border-dashed border-border flex items-center justify-center italic text-muted-foreground/30 font-serif text-sm">
                            [ Signature: {pm.name} ]
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Governance Timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-primary mb-4">{p.governanceTimelineTitle}</h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border" />

            <div className="space-y-12">
      {(p.pmArchive.flatMap(pm => [...pm.milestones] as any[]) as any[]).map((m: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-accent z-10" />

                  <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="p-5 border border-border bg-card shadow-sm relative">
                      <span className="font-mono text-xs font-bold text-accent mb-1 block">{m.year}</span>
                      <p className="text-sm text-primary font-medium">{m.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
