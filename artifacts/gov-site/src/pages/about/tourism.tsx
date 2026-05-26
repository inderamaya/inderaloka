import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { MapPin, Compass, Camera, ArrowRight, Download, Phone, Heart, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Tourism() {
  const { t } = useLanguage();
  const tr = t.tourism;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img src="https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=1600" className="w-full h-full object-cover" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{tr.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{tr.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{tr.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-8xl font-bold text-primary mb-8 leading-tight tracking-tighter">{tr.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-3xl leading-relaxed">{tr.pageDesc}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Destination Carousel / Grid */}
        <section>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-4">{tr.exploreLabel}</h2>
              <div className="flex items-center gap-4">
                <Compass className="w-8 h-8 text-primary opacity-20" />
                <h3 className="font-serif text-4xl text-primary font-bold">Iconic Destinations</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tr.destinations.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <h4 className="font-serif text-3xl text-white font-bold mb-4">{dest.title}</h4>
                    <p className="text-white/70 text-sm font-light leading-relaxed mb-8 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {dest.desc}
                    </p>
                    <button className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                      {tr.viewDetails} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Heritage Sections */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-4">{tr.cultureLabel}</h2>
                <h3 className="font-serif text-5xl text-primary font-bold leading-tight">A Living Legacy</h3>
              </div>

              <div className="space-y-8">
                {tr.culturalSections.map((sec, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary-foreground shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary font-bold mb-2">{sec.title}</h4>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{sec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="aspect-square p-4 bg-white/40 dark:bg-black/20 border-white/10 rounded-[3rem]">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800" className="w-full h-full object-cover" alt="Culture" />
                 <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Experience Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlassCard className="p-8 h-full hover:border-accent/30 transition-all duration-500 group">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative">
                   <img src={card.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={card.title} />
                   <div className="absolute inset-0 bg-primary/10" />
                </div>
                <h4 className="font-serif text-2xl text-primary font-bold mb-4">{card.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{card.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <GlassCard className="max-w-4xl mx-auto p-12 lg:p-20 text-center border-accent/30 bg-accent/5 rounded-[3.5rem] overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Palmtree className="w-32 h-32 text-accent" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary font-bold mb-8 leading-tight">{tr.ctaTitle}</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">{tr.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="rounded-full bg-primary text-white h-14 px-10 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all">
                <Download className="mr-2 w-4 h-4" /> {tr.ctaButton1}
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 h-14 px-10 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                <Phone className="mr-2 w-4 h-4" /> {tr.ctaButton2}
              </Button>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
