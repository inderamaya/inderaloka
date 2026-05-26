import React from "react";
import { Link } from "wouter";
import { ChevronRight, FileText, Landmark, Shield, Plane, Users, Map, Banknote, LineChart, MapPin, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";

const icons = [FileText, Landmark, Shield, Plane];

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex-1 flex flex-col w-full relative">
      {/* Cinematic Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-20">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
          <img
            src="/Pemandangan.jpg"
            alt="National Landscape"
            className="w-full h-full object-cover scale-110 blur-[2px] opacity-40 dark:opacity-20"
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] uppercase tracking-[0.2em] mb-6 sm:mb-8 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t.officialBanner}
              </div>

              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1] mb-6 sm:mb-8 tracking-tighter text-primary">
                {h.heroTitle1} <br />
                <span className="text-accent italic font-normal">{h.heroItalic}</span> <br />
                {h.heroTitle2}
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-10 sm:mb-12 max-w-2xl font-light leading-relaxed">
                {h.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-white rounded-full h-16 px-10 text-[11px] tracking-[0.2em] uppercase font-bold shadow-2xl transition-all duration-300">
                  <Link href="/services" data-testid="btn-access-services">
                    {h.ctaServices}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass-effect rounded-full h-16 px-10 text-[11px] tracking-[0.2em] uppercase font-bold border-white/20 hover:bg-white/10 transition-all duration-300">
                  <Link href="/news" data-testid="btn-latest-news">
                    <Play className="mr-2 w-3 h-3 fill-current" />
                    {h.ctaNews}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 w-96"
        >
          <GlassCard className="p-8 border-accent/20 bg-accent/5 backdrop-blur-3xl">
            <h3 className="font-serif text-2xl mb-4 text-primary font-bold">{h.briefingsTitle}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
              {h.briefingsDesc}
            </p>
            <div className="space-y-4">
              {h.latestNews.slice(0, 2).map((news: any, i: number) => (
                <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-mono tracking-widest text-accent mb-1">{news.dept}</div>
                    <div className="text-xs font-bold leading-tight group-hover:text-accent cursor-pointer">{news.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Modern Dashboard - Statistics */}
      <section className="py-20 sm:py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[Users, Map, Banknote, LineChart, MapPin].map((Icon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full group hover:border-accent/40 transition-colors">
                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">{h.stats[idx].label}</div>
                  <div className="text-3xl font-serif font-bold text-primary mb-4">{h.stats[idx].value}</div>
                  <div className="text-[10px] text-muted-foreground leading-relaxed italic border-t border-white/5 pt-4">
                    {h.stats[idx].sub}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Services Interface */}
      <section className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent font-bold mb-4">{h.sectionLabel}</h2>
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary font-bold">{h.sectionTitle}</h3>
            </div>
            <Link href="/services" className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary hover:text-accent flex items-center gap-2 uppercase group transition-all" data-testid="link-view-all-services">
              {h.viewAll}
              <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-accent group-hover:translate-x-1 transition-all">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {h.services.map((service, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link href="/services" data-testid={`card-service-${idx}`}>
                    <GlassCard className="h-full border-transparent hover:border-white/20 hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-500 cursor-pointer p-10">
                      <div className="w-16 h-16 rounded-3xl bg-white dark:bg-white/5 shadow-inner flex items-center justify-center mb-10 group-hover:rotate-[10deg] transition-transform duration-500">
                        <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-serif text-2xl font-bold mb-4 text-primary leading-tight">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light mb-10">
                        {service.desc}
                      </p>
                      <div className="flex items-center text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                        {h.accessPortal} <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Museum-Style Announcements */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20">
            <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
              <h2 className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent font-bold mb-4">{h.briefingsLabel}</h2>
              <h3 className="font-serif text-5xl lg:text-6xl text-primary font-bold mb-8 leading-tight">{h.briefingsTitle}</h3>
              <p className="text-muted-foreground text-lg mb-12 font-light leading-relaxed">
                {h.briefingsDesc}
              </p>
              <Button asChild variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-white uppercase font-mono tracking-widest text-[10px] h-14 px-10 font-bold transition-all duration-300">
                <Link href="/news" data-testid="btn-read-all-news">{h.readAllNews}</Link>
              </Button>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-12">
              {h.latestNews.map((news: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link href="/news" className="group flex flex-col md:flex-row gap-10 p-4 rounded-3xl hover:bg-secondary/30 transition-all duration-500" data-testid={`link-news-${idx}`}>
                    <div className="md:w-2/5 aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl relative">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                    <div className="md:w-3/5 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-[0.2em] px-3 py-1 bg-accent/5 rounded-full border border-accent/10">{news.dept}</span>
                        <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">{news.date}</span>
                      </div>
                      <h4 className="font-serif text-3xl text-primary font-bold group-hover:text-accent transition-colors leading-tight mb-6">
                        {news.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-500">
                        {t.news.readStatement} <ArrowRight className="w-3.5 h-3.5" />
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
