import React from "react";
import { Link } from "wouter";
import {
  AlertTriangle,
  ChevronRight,
  FileText,
  Landmark,
  Shield,
  Plane,
  Users,
  Map,
  Banknote,
  LineChart,
  MapPin,
  CloudSun,
  TrendingUp,
  Calendar,
  Activity,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const icons = [FileText, Landmark, Shield, Plane];

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex-1 flex flex-col w-full bg-background relative">
      <AnimatedBackground />

      {/* Alert Strip - Integrated more elegantly */}
      <div className="relative z-20 bg-destructive/10 border-b border-destructive/20 backdrop-blur-md py-3 overflow-hidden">
        <motion.div
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="container mx-auto px-4 lg:px-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-destructive"
        >
          <AlertTriangle className="w-3 h-3 shrink-0 animate-pulse" />
          <span>{h.alertText}</span>
          <Link href="/news" className="ml-auto flex items-center gap-1 hover:underline underline-offset-4" data-testid="link-alert-advisory">
            {h.alertLink} <ChevronRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>

      {/* Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden border-b border-white/5">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-background z-10" />
          <img
            src="/Pemandangan.jpg"
            className="w-full h-full object-cover grayscale opacity-50"
            alt="National Vista"
          />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8"
              >
                <Landmark className="w-3 h-3" />
                Inderaloka Digital Gateway
              </motion.div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-8 tracking-tighter text-foreground">
                {h.heroTitle1} <br />
                <span className="text-accent italic font-normal">{h.heroItalic}</span> <br />
                {h.heroTitle2}
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-xl font-light leading-relaxed">
                {h.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="gold-gradient text-accent-foreground hover:scale-105 transition-transform rounded-xl h-16 px-10 text-xs tracking-widest uppercase font-bold shadow-[0_10px_30px_rgba(251,191,36,0.3)]">
                  <Link href="/services" data-testid="btn-access-services">{h.ctaServices}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass-effect rounded-xl h-16 px-10 text-xs tracking-widest uppercase font-bold border-white/10 hover:bg-white/10 transition-all">
                  <Link href="/news" data-testid="btn-latest-news">{h.ctaNews}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <GlassCard className="p-8 border-white/10 bg-white/5" variant="dark">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white">Smart Nation Dashboard</h4>
                      <p className="text-[10px] text-white/40 uppercase">Real-time indicators</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald/20 text-emerald text-[10px] font-bold animate-pulse">LIVE</div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Economy", value: "+4.2%", icon: Activity, trend: "up" },
                    { label: "Tourism", value: "1.2M", icon: Users, trend: "up" },
                    { label: "Weather", value: "28°C", icon: CloudSun, trend: "neutral" },
                    { label: "Events", value: "12 Today", icon: Calendar, trend: "neutral" }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="w-4 h-4 text-white/40" />
                        <ArrowUpRight className={cn("w-3 h-3", stat.trend === "up" ? "text-emerald" : "text-white/20")} />
                      </div>
                      <div className="text-xl font-serif text-white mb-1">{stat.value}</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                    <span>Parliamentary Session</span>
                    <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
                  </div>
                  <p className="text-xs text-white/80 font-light italic">"Debate on National Digital Policy 2026 underway..."</p>
                </div>
              </GlassCard>

              {/* Floating elements for depth */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 glass-effect rounded-3xl -z-10 rotate-12"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-12 w-48 h-48 glass-effect rounded-full -z-10 bg-accent/5"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Services - Glass Grid */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-4">{h.sectionLabel}</div>
              <h3 className="font-serif text-4xl sm:text-5xl text-foreground tracking-tight">{h.sectionTitle}</h3>
            </div>
            <Link href="/services" className="text-xs font-bold tracking-widest text-foreground hover:text-accent flex items-center gap-2 uppercase group transition-colors" data-testid="link-view-all-services">
              {h.viewAll} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {h.services.map((service, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link href="/services" className="block h-full group" data-testid={`card-service-${idx}`}>
                    <GlassCard className="p-8 h-full flex flex-col hover:border-accent/50 transition-all duration-500 group-hover:-translate-y-2">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                        {service.desc}
                      </p>
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
                        {h.accessPortal}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* National Dashboard Statistics - Premium Visualisation */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-navy/5 -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-4">{h.statsLabel}</div>
            <h3 className="font-serif text-4xl sm:text-5xl text-foreground">{h.statsTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[Users, Map, Banknote, LineChart, MapPin].map((Icon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 bg-white/40">
                  <div className="w-16 h-16 rounded-full bg-accent/5 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-4xl font-serif text-foreground mb-2 font-bold tracking-tighter">{h.stats[idx].value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">{h.stats[idx].label}</div>
                  <div className="text-[10px] text-muted-foreground/60 leading-relaxed italic border-t border-black/5 pt-6 w-full font-light">
                    {h.stats[idx].sub}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Immersive Announcements */}
      <section className="py-32 relative z-10 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Batik-Pattern.png')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-40">
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-6">{h.briefingsLabel}</div>
              <h3 className="font-serif text-5xl text-white mb-8 leading-tight tracking-tight">{h.briefingsTitle}</h3>
              <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
                {h.briefingsDesc}
              </p>
              <Button asChild variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 uppercase font-bold tracking-widest text-[10px] h-14 px-8">
                <Link href="/news" data-testid="btn-read-all-news">{h.readAllNews}</Link>
              </Button>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-12">
              {h.latestNews.map((news: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                >
                  <Link href="/news" className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-white/5 last:border-0 hover:border-accent/30 transition-colors" data-testid={`link-news-${idx}`}>
                    <div className="md:w-2/5 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 relative">
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                    <div className="md:w-3/5 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">{news.dept}</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">{news.date}</div>
                      </div>
                      <h4 className="font-serif text-2xl lg:text-3xl text-white group-hover:text-accent transition-colors leading-tight mb-6">
                        {news.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                        View Report <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
