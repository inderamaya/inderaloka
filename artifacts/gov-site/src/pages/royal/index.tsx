import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Crown } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Royal() {
  const { t } = useLanguage();
  const r = t.royal || {} as any;
  const l = r.landing || { subpages: [] as any[] };

  return (
    <div className="flex-1 w-full bg-background pb-32 relative overflow-hidden">
      <AnimatedBackground />

      {/* Premium Hero Section */}
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
                <BreadcrumbPage className="text-foreground">{r.breadcrumbParent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8"
              >
                <Crown className="w-3 h-3" />
                {l.banner}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground mb-8 tracking-tight leading-tight"
              >
                {l.pageTitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg sm:text-xl max-w-2xl font-light leading-relaxed mb-12"
              >
                {l.pageDesc}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <GlassCard className="aspect-[4/5] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-navy/40 z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop"
                    alt="Royal Palace"
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Heritage & Sovereign</div>
                    <div className="text-2xl font-serif text-white">Istana Negara</div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Museum-Style Subpages Grid */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {l.subpages.map((sub, idx) => (
            <motion.div
              key={sub.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Link href={sub.href} className="group block h-full">
                <GlassCard className="p-10 h-full flex flex-col hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                  <div className="mb-12 flex justify-between items-start">
                    <div className="w-12 h-px bg-accent/30 group-hover:w-20 transition-all duration-500" />
                    <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300 tracking-tight">{sub.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-light">{sub.desc}</p>
                  <div className="mt-12 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent group-hover:gap-5 transition-all">
                    Explore Archive
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy/5 blur-[150px] rounded-full translate-x-1/4 pointer-events-none" />
    </div>
  );
}
