import React from "react";
import { Link } from "wouter";
import { AlertTriangle, ChevronRight, FileText, Landmark, Shield, Plane, Users, Map, Banknote, LineChart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [FileText, Landmark, Shield, Plane];

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Alert Strip */}
      <div className="bg-destructive text-destructive-foreground py-3">
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-3 text-sm font-medium">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span className="font-mono tracking-tight">{h.alertText}</span>
          <Link href="/news" className="ml-auto underline underline-offset-4 hover:text-white/80 font-mono text-xs whitespace-nowrap" data-testid="link-alert-advisory">
            {h.alertLink}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="text-white py-24 lg:py-32 relative overflow-hidden border-b border-border bg-cover bg-center"
        style={{ backgroundImage: "url('/Pemandangan.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
                           <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.1] mb-6 tracking-tight text-white">
              {h.heroTitle1} <br />
              <span className="text-white/70 italic">{h.heroItalic}</span> {h.heroTitle2}
            </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed">
              {h.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none h-14 px-8 text-sm tracking-widest uppercase font-mono border border-transparent cursor-pointer">
                <Link href="/services" data-testid="btn-access-services">{h.ctaServices}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 text-sm tracking-widest uppercase font-mono border-white/20 text-white hover:bg-white hover:text-primary transition-colors cursor-pointer">
                <Link href="/news" data-testid="btn-latest-news">{h.ctaNews}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className="py-20 lg:py-32 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">{h.sectionLabel}</h2>
              <h3 className="font-serif text-3xl sm:text-4xl text-primary">{h.sectionTitle}</h3>
            </div>
            <Link href="/services" className="text-sm font-mono tracking-wide text-primary hover:text-accent flex items-center gap-1 uppercase group" data-testid="link-view-all-services">
              {h.viewAll} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
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
                  <Link href="/services" className="bg-background p-8 lg:p-10 flex flex-col h-full hover:bg-primary hover:text-primary-foreground transition-colors group cursor-pointer border border-transparent" data-testid={`card-service-${idx}`}>
                    <Icon className="w-8 h-8 text-accent mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h4 className="font-serif text-xl mb-4">{service.title}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed mb-8 flex-1">
                      {service.desc}
                    </p>
                    <div className="mt-auto flex items-center text-xs font-mono uppercase tracking-widest text-primary group-hover:text-accent">
                      {h.accessPortal} <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="py-20 lg:py-32 bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">{h.statsLabel}</h2>
            <h3 className="font-serif text-4xl text-primary">{h.statsTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[Users, Map, Banknote, LineChart, MapPin].map((Icon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background p-8 border border-border flex flex-col items-center text-center group hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-none flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-serif text-primary mb-2">{h.stats[idx].value}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{h.stats[idx].label}</div>
                <div className="text-[10px] text-muted-foreground/60 leading-relaxed italic border-t border-border pt-4 w-full">
                  {h.stats[idx].sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Announcements */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">{h.briefingsLabel}</h2>
              <h3 className="font-serif text-4xl text-primary mb-6 whitespace-pre-line">{h.briefingsTitle}</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                {h.briefingsDesc}
              </p>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase font-mono tracking-widest text-xs h-12 px-6">
                <Link href="/news" data-testid="btn-read-all-news">{h.readAllNews}</Link>
              </Button>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-8">
              {h.latestNews.map((news: any, idx: number) => (
                           <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                      <Link href="/news" className="group flex flex-col md:flex-row gap-6 pb-8 border-b border-border hover:border-accent transition-colors last:border-0 last:pb-0" data-testid={`link-news-${idx}`}>
                        <div className="md:w-1/3 aspect-[16/9] overflow-hidden border border-border">
                          <img 
                            src={news.image} 
                            alt={news.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                    </div>
                                       <div className="md:w-2/3">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-2">
                          <div className="font-mono text-[10px] text-accent uppercase tracking-widest">{news.dept}</div>
                          <div className="font-mono text-[10px] text-muted-foreground">{news.date}</div>
                        </div>
                        <h4 className="font-serif text-xl lg:text-2xl text-primary group-hover:text-accent transition-colors leading-snug">
                      {news.title}
                    </h4>
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
