import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Award, BookOpen, Shield, Users, Briefcase, GraduationCap, Phone, User, Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function RoyalFamily() {
  const { t } = useLanguage();
  const r = t.royal;
  const f = r.royalFamily;
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{f.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{f.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{f.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Senior Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {f.detailedMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <GlassCard className={cn(
                "h-full p-2 border-transparent transition-all duration-700 bg-white/40 dark:bg-black/20 rounded-[2.5rem] group overflow-hidden",
                selectedMember === idx ? "border-accent/30" : "hover:border-primary/20"
              )}>
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="w-full lg:w-2/5 aspect-[3/4] lg:aspect-auto rounded-[2rem] overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <User className="w-16 h-16 text-white opacity-20" />
                    </div>
                    <div className="absolute bottom-6 left-6 z-20">
                      <Badge variant="outline" className="text-[8px] font-mono border-white/50 text-white bg-black/20 backdrop-blur-md px-3 py-1 font-bold tracking-widest uppercase">Verified Royal Profile</Badge>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col">
                    <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-4">{member.role}</div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-primary font-bold mb-2 group-hover:text-accent transition-colors leading-tight">{member.name}</h3>
                    <p className="text-[10px] text-muted-foreground font-mono font-bold uppercase tracking-widest mb-8 pb-4 border-b border-white/5">{member.title}</p>

                    <p className="text-sm text-muted-foreground leading-relaxed font-light mb-10 flex-1 line-clamp-4 italic">
                      "{member.bio}"
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {member.honours.slice(0, 3).map((h, i) => (
                        <Badge key={i} variant="outline" className="text-[8px] font-mono border-accent/20 text-accent/60 font-bold">{h}</Badge>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedMember(selectedMember === idx ? null : idx)}
                      className="mt-8 flex items-center justify-between w-full p-4 rounded-xl border border-primary/10 text-[10px] font-mono font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all group/btn"
                    >
                      <span>{selectedMember === idx ? "Close Profile" : "View Detailed Dossier"}</span>
                      <ChevronRight className={cn("w-4 h-4 transition-transform duration-500", selectedMember === idx ? "rotate-90" : "group-hover/btn:translate-x-2")} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Detailed Bio Panels */}
        <AnimatePresence>
          {selectedMember !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="mt-12"
            >
              <GlassCard className="p-10 lg:p-16 border-accent/30 bg-accent/5 rounded-[3rem]">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="bg-white/10 dark:bg-black/20 border border-white/10 w-fit rounded-full h-auto p-1 mb-12 flex-nowrap overflow-x-auto">
                    {["overview", "education", "duties"].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="data-[state=active]:bg-accent data-[state=active]:text-white rounded-full font-mono text-[9px] uppercase tracking-widest font-bold px-8 py-3 transition-all"
                      >
                        {tab === "overview" ? "Profile" : tab === "education" ? "Credentials" : "Assignments"}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="overview" className="mt-0 focus-visible:outline-none">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><BookOpen className="w-5 h-5" /></div>
                           <h4 className="font-serif text-2xl text-primary font-bold">Personal Profile</h4>
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground font-light">{f.detailedMembers[selectedMember].bio}</p>
                      </div>
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Star className="w-5 h-5" /></div>
                           <h4 className="font-serif text-2xl text-primary font-bold">State Honours</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {f.detailedMembers[selectedMember].honours.map((h, i) => (
                            <div key={i} className="p-4 rounded-xl border border-accent/10 bg-white/50 dark:bg-black/20 backdrop-blur-xl flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="education" className="mt-0 focus-visible:outline-none">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><GraduationCap className="w-5 h-5" /></div>
                           <h4 className="font-serif text-2xl text-primary font-bold">Academic Background</h4>
                        </div>
                        <GlassCard className="p-8 border-primary/10 bg-white/40 dark:bg-black/20 italic text-muted-foreground font-light">
                          {f.detailedMembers[selectedMember].education}
                        </GlassCard>
                      </div>
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Shield className="w-5 h-5" /></div>
                           <h4 className="font-serif text-2xl text-primary font-bold">Military Affiliation</h4>
                        </div>
                        <GlassCard className="p-8 border-primary/10 bg-white/40 dark:bg-black/20 font-mono text-sm text-primary font-bold tracking-tight">
                          {f.detailedMembers[selectedMember].military}
                        </GlassCard>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="duties" className="mt-0 focus-visible:outline-none">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Briefcase className="w-5 h-5" /></div>
                           <h4 className="font-serif text-2xl text-primary font-bold">Official Duties</h4>
                        </div>
                        <ul className="space-y-4">
                          {f.detailedMembers[selectedMember].duties.map((duty, i) => (
                            <li key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/20 dark:bg-black/10">
                              <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                              <span className="text-sm text-muted-foreground font-light">{duty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Users className="w-5 h-5" /></div>
                           <h4 className="font-serif text-2xl text-primary font-bold">Patronages</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {f.detailedMembers[selectedMember].patronages.map((p, i) => (
                            <Badge key={i} variant="secondary" className="bg-primary text-white py-3 px-6 rounded-xl text-[10px] font-bold uppercase tracking-widest border-none shadow-lg">{p}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Line of Succession */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl text-primary font-bold mb-4">{f.lineOfSuccessionTitle}</h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {f.successionList.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <GlassCard className="p-10 text-center border-transparent hover:border-accent/30 transition-all duration-500 bg-white/40 dark:bg-black/20 group">
                  <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl">
                    <span className="font-mono text-xl font-bold text-accent group-hover:text-white">{item.position}</span>
                  </div>
                  <h4 className="font-serif text-2xl text-primary font-bold mb-2 transition-colors group-hover:text-accent">{item.name}</h4>
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold">{item.title}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Royal Household Directory */}
        <section>
           <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-4xl text-primary font-bold">{f.householdDirectoryTitle}</h2>
          </div>

          <GlassCard className="p-0 overflow-hidden border-white/5 bg-white/30 dark:bg-black/20 rounded-[2.5rem]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary/5 border-b border-white/10 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                    <th className="py-8 px-10">Department</th>
                    <th className="py-8 px-10">Head of Office</th>
                    <th className="py-8 px-10">Communication</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {f.householdDirectory.map((entry, idx) => (
                    <tr key={idx} className="group hover:bg-white/40 dark:hover:bg-white/5 transition-all">
                      <td className="py-6 px-10">
                        <div className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors">{entry.office}</div>
                      </td>
                      <td className="py-6 px-10">
                        <div className="text-sm text-primary/80 font-medium">{entry.head}</div>
                      </td>
                      <td className="py-6 px-10">
                        <div className="flex items-center gap-3 text-accent font-mono text-xs font-bold">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          {entry.contact}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
