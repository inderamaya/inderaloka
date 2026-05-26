import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { GraduationCap, MapPin, Users, BookOpen, School } from "lucide-react";

export default function Education() {
  const { t } = useLanguage();
  const e = t.educationPage;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{e.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">{e.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{e.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{e.pageTitle}</h1>
          <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{e.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Universities Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{e.uniLabel}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {e.universities.map((uni, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full group hover:border-accent/30 transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent font-bold bg-accent/5 px-2 py-1 rounded border border-accent/10">{uni.ranking}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-primary font-bold mb-6 group-hover:text-accent transition-colors leading-tight">{uni.name}</h3>
                    <div className="space-y-4 mb-8 flex-1">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">{uni.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">{uni.enrollment}</span>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                      <div className="flex items-start gap-3">
                        <BookOpen className="w-3.5 h-3.5 text-accent shrink-0 mt-1" />
                        <p className="text-xs text-muted-foreground leading-relaxed">{uni.programs}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Schools Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <School className="w-4 h-4" />
              </div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{e.schoolsSecLabel}</h2>
            </div>

            <GlassCard className="p-0 overflow-hidden border-white/5 bg-white/30 dark:bg-black/20">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary/5 border-b border-white/10 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      <th className="py-5 px-6 font-bold">{e.schoolNameLabel}</th>
                      <th className="py-5 px-6 font-bold">{e.enrollmentLabel}</th>
                      <th className="py-5 px-6 font-bold">{e.typeLabel}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {e.secondarySchools.map((school, idx) => (
                      <tr key={idx} className="group hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-serif text-sm font-bold text-primary group-hover:text-accent transition-colors">{school.name}</div>
                          <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{school.location}</div>
                        </td>
                        <td className="py-4 px-6 font-mono text-xs text-muted-foreground">{school.enrollment}</td>
                        <td className="py-4 px-6">
                          <span className="font-mono text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded uppercase font-bold">{school.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary-foreground">
                <School className="w-4 h-4" />
              </div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-secondary-foreground font-bold">{e.schoolsPriLabel}</h2>
            </div>

            <GlassCard className="p-0 overflow-hidden border-white/5 bg-white/30 dark:bg-black/20">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-secondary/5 border-b border-white/10 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      <th className="py-5 px-6 font-bold">{e.schoolNameLabel}</th>
                      <th className="py-5 px-6 font-bold">{e.enrollmentLabel}</th>
                      <th className="py-5 px-6 font-bold">{e.typeLabel}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {e.primarySchools.map((school, idx) => (
                      <tr key={idx} className="group hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-serif text-sm font-bold text-primary group-hover:text-accent transition-colors">{school.name}</div>
                          <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{school.location}</div>
                        </td>
                        <td className="py-4 px-6 font-mono text-xs text-muted-foreground">{school.enrollment}</td>
                        <td className="py-4 px-6">
                          <span className="font-mono text-[9px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded uppercase font-bold">{school.type}</span>
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
    </div>
  );
}
