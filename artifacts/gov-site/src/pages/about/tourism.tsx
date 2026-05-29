import React from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Camera } from "lucide-react";

const BatikPattern = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-10 pointer-events-none fixed inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <pattern id="batik" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M20 20 Q50 0 80 20 T80 80 Q50 100 20 80 T20 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#batik)" />
  </svg>
);

export default function Tourism() {
  const { t } = useLanguage();
  const tr = t.tourism;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="flex-1 w-full bg-background relative overflow-hidden">
      <BatikPattern />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1544945582-3b466d874eac?q=80&w=2000" 
            alt="Tourism Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-background"></div>
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-widest text-[10px] text-white/70">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{tr.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{tr.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem><BreadcrumbPage className="text-white">{tr.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-6xl lg:text-8xl mb-6 leading-tight">
              {tr.pageTitle.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "italic text-accent" : ""}>{word} </span>
              ))}
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-10">
              {tr.pageDesc}
            </p>
            <Button size="lg" className="rounded-none h-16 px-10 bg-accent text-white hover:bg-accent/90 border-none font-mono tracking-widest uppercase text-sm">
              {tr.exploreLabel} <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Decorative Motif */}
        <div className="absolute bottom-0 right-0 p-12 opacity-20 hidden lg:block">
           <svg width="300" height="300" viewBox="0 0 100 100" className="text-white animate-spin-slow">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" />
           </svg>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">{tr.exploreLabel}</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary">{tr.exploreLabel}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {tr.destinations.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden relative mb-6">
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur p-2 border border-accent/20">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3 group-hover:text-accent transition-colors">{dest.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {dest.desc}
                </p>
                <Link href="#" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-accent hover:text-primary transition-colors">
                  {tr.viewDetails} <ChevronRight className="ml-1 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-24 bg-secondary relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 border-2 border-accent/30 translate-x-6 translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000" 
                alt="Culture" 
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent text-white p-10 z-20 hidden md:block">
                <Camera className="w-8 h-8 mb-4" />
                <span className="font-serif text-2xl italic">{tr.cultureLabel}</span>
              </div>
            </motion.div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">{tr.cultureLabel}</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-12">{tr.cultureLabel}</h2>

              <div className="space-y-10">
                {tr.culturalSections.map((sec, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 pb-8 border-b border-border last:border-0"
                  >
                    <span className="font-mono text-xl text-accent/40">0{idx + 1}</span>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-2">{sec.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <BatikPattern />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-serif text-4xl lg:text-6xl mb-8 italic">{tr.ctaTitle}</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-12 font-light">
            {tr.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="outline" className="rounded-none border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 h-14 font-mono uppercase tracking-widest text-xs">
                {tr.ctaButton1}
             </Button>
             <Button className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-14 font-mono uppercase tracking-widest text-xs">
                {tr.ctaButton2}
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
