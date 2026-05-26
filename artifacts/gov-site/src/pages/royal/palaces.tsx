import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Clock, Landmark, ArrowRight, ChevronRight, Compass } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Palaces() {
  const { t } = useLanguage();
  const r = t.royal;
  const p = r.palaces;

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
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{p.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">{p.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{p.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {p.items.map((palace, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full p-2 border-transparent hover:border-accent/30 transition-all duration-700 bg-white/40 dark:bg-black/20 rounded-[2.5rem] group overflow-hidden">
                <div className="aspect-video lg:aspect-[16/10] rounded-[2rem] overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Landmark className="w-20 h-20 text-white opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="absolute top-6 left-6 z-20">
                     <span className="font-mono text-[9px] font-bold text-white px-3 py-1 bg-accent/80 backdrop-blur-md rounded-full uppercase tracking-widest shadow-lg">
                        {palace.type}
                     </span>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h3 className="font-serif text-3xl text-primary font-bold mb-2 group-hover:text-accent transition-colors leading-tight">{palace.name}</h3>
                      <p className="text-[10px] text-muted-foreground font-mono font-bold uppercase tracking-widest">{palace.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-10 line-clamp-3">
                    {palace.desc}
                  </p>

                  <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-3">
                       <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                       <div>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">{p.visitingLabel}</span>
                          <p className="text-xs text-primary/80 font-medium">{palace.visiting}</p>
                       </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                       <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Global Access Section */}
        <section className="relative py-24">
          <GlassCard className="max-w-4xl mx-auto p-12 lg:p-20 text-center border-accent/20 bg-accent/5 rounded-[3.5rem] overflow-hidden">
            <div className="absolute top-0 left-0 p-12 opacity-5">
              <Compass className="w-48 h-48 text-accent" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary font-bold mb-8 leading-tight">Preserving Royal Legacy</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto italic">
              "The Royal Palaces are more than mere residences; they are the living repositories of our national identity, where history and governance converge under the shadow of the Throne."
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-accent rounded-full animate-pulse" />
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
