import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Award, Scroll, Info, CameraOff } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function CustomsAndRegalia() {
  const { t } = useLanguage();
  const r = t.royal || {} as any;
  const c = r.customs || {} as any;

  return (
    <div className="flex-1 w-full bg-background pb-32 relative overflow-hidden">
      <AnimatedBackground />

      {/* Header Section */}
      <div className="relative pt-12 pb-24 border-b border-black/5">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-12 font-mono uppercase tracking-[0.2em] text-[10px] opacity-50">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{r.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/royal">{r.breadcrumbParent}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground">{c.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-8 tracking-tight">{c.pageTitle}</h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">{c.pageDesc}</p>
          </motion.div>
        </div>
      </div>

      {/* Regalia Archive - Museum Gallery Style */}
      <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="font-serif text-3xl text-foreground whitespace-nowrap">{c.regaliaTitle}</h2>
          <div className="h-px bg-accent/20 flex-1" />
          <Shield className="w-6 h-6 text-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {c.regaliaItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="group h-full overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 aspect-square md:aspect-auto relative overflow-hidden bg-navy/20">
                    <img
                      src={`https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=400&auto=format&fit=crop&sig=${idx}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent md:bg-gradient-to-t md:from-navy/60" />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4">Royal Insignia</div>
                    <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-accent transition-colors">{item.name}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ceremonies - Luxury Timeline Style */}
      <div className="bg-navy/5 py-32 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-4">Timeless Traditions</div>
            <h2 className="font-serif text-4xl text-foreground">{c.ceremoniesTitle}</h2>
          </div>

          <div className="space-y-12">
            {c.ceremonies.map((ceremony, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-serif text-3xl text-foreground group-hover:text-accent transition-colors">{ceremony.name}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed">{ceremony.desc}</p>
                    </div>
                    <div className="lg:col-span-4 flex justify-end">
                      <div className="w-32 h-32 rounded-2xl border border-accent/20 flex items-center justify-center p-4 rotate-3 group-hover:rotate-0 transition-transform">
                        <Scroll className="w-16 h-16 text-accent/20" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Protocols - Refined List */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 border-accent/20 bg-accent/5">
            <div className="flex items-center gap-4 mb-12">
              <Info className="w-6 h-6 text-accent" />
              <h2 className="font-serif text-3xl text-foreground tracking-tight">{c.protocolTitle}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {c.protocols.map((protocol, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed font-light">{protocol}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-accent/10 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-accent/60">
              <CameraOff className="w-4 h-4" />
              Strict Confidentiality & Respect Observed
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
