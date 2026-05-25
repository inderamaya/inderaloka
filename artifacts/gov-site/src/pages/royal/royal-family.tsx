import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Award, BookOpen, Shield, Users, Briefcase, GraduationCap, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RoyalFamily() {
  const { t } = useLanguage();
  const r = t.royal;
  const f = r.royalFamily;
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

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
              <BreadcrumbItem><BreadcrumbPage className="text-accent">{f.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-4">{f.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">{f.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        {/* Senior Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          {f.detailedMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`border border-border bg-background flex flex-col lg:flex-row overflow-hidden group hover:border-accent/40 transition-colors ${selectedMember === idx ? "ring-2 ring-accent/20 border-accent/40" : ""}`}
            >
              <div className="w-full lg:w-2/5 aspect-[3/4] bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 border-[8px] border-double border-primary/5 pointer-events-none" />
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <div className="w-24 h-24 rounded-full bg-primary/10 border border-border flex items-center justify-center">
                    <span className="font-serif text-2xl text-accent">{member.name.charAt(member.name.lastIndexOf(" ") + 1)}</span>
                  </div>
                  <div className="text-center px-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">Official Portrait</span>
                    <Badge variant="outline" className="text-[8px] font-mono border-accent/30 text-accent">VERIFIED</Badge>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5 p-8 flex flex-col">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">{member.role}</div>
                <h3 className="font-serif text-2xl text-primary mb-2">{member.name}</h3>
                <p className="text-xs text-muted-foreground font-mono mb-6 italic">{member.title}</p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {member.honours.map((h, i) => (
                    <Badge key={i} variant="secondary" className="text-[9px] font-mono font-normal bg-accent/5 text-accent border-accent/10">{h}</Badge>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedMember(selectedMember === idx ? null : idx)}
                  className="mt-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary hover:text-accent transition-colors"
                >
                  {selectedMember === idx ? "Tutup Biografi" : "Lihat Biografi Penuh"}
                  <ChevronRight className={`w-3 h-3 transition-transform ${selectedMember === idx ? "rotate-90" : ""}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Bio Panels */}
        <AnimatePresence>
          {selectedMember !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-24"
            >
              <div className="p-8 lg:p-12 border border-accent/30 bg-accent/5 rounded-sm">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="bg-transparent border-b border-accent/20 w-full justify-start rounded-none h-auto p-0 mb-8 overflow-x-auto flex-nowrap">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none border-0 font-mono text-[10px] uppercase tracking-widest px-6 py-4">Gambaran</TabsTrigger>
                    <TabsTrigger value="education" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none border-0 font-mono text-[10px] uppercase tracking-widest px-6 py-4">Pendidikan & Tentera</TabsTrigger>
                    <TabsTrigger value="duties" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none border-0 font-mono text-[10px] uppercase tracking-widest px-6 py-4">Tugas & Naungan</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="font-serif text-xl text-primary mb-4 flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-accent" />
                          Profil Peribadi
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{f.detailedMembers[selectedMember].bio}</p>
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-primary mb-4 flex items-center gap-3">
                          <Award className="w-5 h-5 text-accent" />
                          Darjah Kebesaran
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {f.detailedMembers[selectedMember].honours.map((h, i) => (
                            <div key={i} className="p-3 border border-accent/10 bg-white flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-accent" />
                              <span className="text-[10px] font-mono text-primary font-bold">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="education" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="font-serif text-xl text-primary mb-4 flex items-center gap-3">
                          <GraduationCap className="w-5 h-5 text-accent" />
                          Latar Belakang Pendidikan
                        </h4>
                        <div className="p-6 border border-border bg-white italic text-sm text-muted-foreground leading-relaxed">
                          {f.detailedMembers[selectedMember].education}
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h4 className="font-serif text-xl text-primary mb-4 flex items-center gap-3">
                          <Shield className="w-5 h-5 text-accent" />
                          Afiliasi Ketenteraan
                        </h4>
                        <div className="p-6 border border-border bg-white font-mono text-xs text-primary tracking-wide">
                          {f.detailedMembers[selectedMember].military}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="duties" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="font-serif text-xl text-primary mb-4 flex items-center gap-3">
                          <Briefcase className="w-5 h-5 text-accent" />
                          Tanggungjawab Rasmi
                        </h4>
                        <ul className="space-y-3">
                          {f.detailedMembers[selectedMember].duties.map((duty, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                              <span className="text-accent font-mono text-xs pt-0.5">—</span>
                              {duty}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-primary mb-4 flex items-center gap-3">
                          <Users className="w-5 h-5 text-accent" />
                          Penaung & Yayasan
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {f.detailedMembers[selectedMember].patronages.map((p, i) => (
                            <Badge key={i} variant="outline" className="bg-white border-border text-primary py-2 px-4 text-[10px] font-normal">{p}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Line of Succession */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl text-primary whitespace-nowrap">{f.lineOfSuccessionTitle}</h2>
            <div className="h-px bg-border w-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
            {f.successionList.map((item, idx) => (
              <div key={idx} className="bg-background p-8 group hover:bg-primary transition-colors">
                <div className="w-10 h-10 border border-accent flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <span className="font-mono text-sm font-bold text-accent group-hover:text-primary">{item.position}</span>
                </div>
                <h4 className="font-serif text-lg text-primary group-hover:text-white mb-1 transition-colors">{item.name}</h4>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-white/60 transition-colors">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Royal Household Directory */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl text-primary whitespace-nowrap">{f.householdDirectoryTitle}</h2>
            <div className="h-px bg-border w-full" />
          </div>
          <div className="overflow-hidden border border-border rounded-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Jabatan / Pejabat</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Ketua Pegawai</th>
                  <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Hubungi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {f.householdDirectory.map((entry, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-5 text-sm text-primary font-medium">{entry.office}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{entry.head}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-accent" />
                        {entry.contact}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
