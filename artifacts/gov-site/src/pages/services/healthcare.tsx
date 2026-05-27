import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { Activity, MapPin, Phone, Bed, HeartPulse } from "lucide-react";

export default function Healthcare() {
  const { t } = useLanguage();
  const h = t.healthcarePage;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{h.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">{h.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{h.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{h.pageTitle}</h1>
          <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{h.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Hospitals Table Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Activity className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{h.hospitalsLabel}</h2>
          </div>

          <GlassCard className="p-0 overflow-hidden border-white/5 bg-white/30 dark:bg-black/20">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary/5 border-b border-white/10 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    <th className="py-6 px-8 font-bold">{h.hospitalNameLabel}</th>
                    <th className="py-6 px-8 font-bold hidden md:table-cell">{h.addressLabel}</th>
                    <th className="py-6 px-8 font-bold text-center">{h.bedsLabel}</th>
                    <th className="py-6 px-8 font-bold">{h.phoneLabel}</th>
                    <th className="py-6 px-8 font-bold hidden lg:table-cell">{h.servicesLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {h.hospitals.map((hosp, idx) => (
                    <tr key={idx} className="group hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8">
                        <div className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors leading-tight">{hosp.name}</div>
                      </td>
                      <td className="py-5 px-8 hidden md:table-cell">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed">{hosp.address}</span>
                        </div>
                      </td>
                      <td className="py-5 px-8 text-center font-mono text-sm text-accent font-bold">
                        <div className="flex items-center justify-center gap-2">
                          <Bed className="w-3.5 h-3.5 opacity-50" />
                          {hosp.beds}
                        </div>
                      </td>
                      <td className="py-5 px-8 font-mono text-[11px] text-primary/80">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 opacity-50" />
                          {hosp.phone}
                        </div>
                      </td>
                      <td className="py-5 px-8 hidden lg:table-cell">
                        <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-xs">{hosp.services}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </section>

        {/* Clinics Grid Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-foreground">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-secondary-foreground font-bold">{h.clinicsLabel}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {h.clinics.map((clinic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <GlassCard className="h-full hover:border-secondary/40 transition-colors duration-500">
                  <h3 className="font-serif text-2xl text-primary font-bold mb-6">{clinic.name}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{h.addressLabel}</span>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">{clinic.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                      <Activity className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{h.servicesLabel}</span>
                        <p className="text-xs text-muted-foreground leading-relaxed font-light">{clinic.services}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
