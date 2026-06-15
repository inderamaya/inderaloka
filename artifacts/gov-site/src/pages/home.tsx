import React, { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { AlertTriangle, ChevronRight, FileText, Landmark, Shield, Plane, Users, Map, Banknote, LineChart, MapPin, Info, Gavel, Crown, Tent, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const serviceIcons = [Info, Gavel, Crown, Tent];
const serviceLinks = ["/about", "/government", "/royal", "/tourism"];

function NewsCarousel({ news }: { news: readonly any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % news.length);
  }, [news.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  }, [news.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative group focus-within:ring-2 focus-within:ring-accent outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      aria-label="News Carousel"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
      }}
    >
      <div className="relative border border-border bg-card">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 50) prevSlide();
                else if (info.offset.x < -50) nextSlide();
              }}
            >
              <Link href="/news" className="block w-full h-full relative cursor-pointer">
                <img
                  src={news[currentIndex].image}
                  alt={news[currentIndex].title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent hidden md:block" />

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 hidden md:block text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-accent text-accent-foreground text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1">
                      {news[currentIndex].category}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                      {news[currentIndex].date} • {news[currentIndex].dept}
                    </span>
                  </div>
                  <h4 className="font-serif text-3xl lg:text-4xl mb-4 max-w-3xl leading-tight">
                    {news[currentIndex].title}
                  </h4>
                  <p className="text-white/70 text-sm max-w-2xl line-clamp-2 font-light italic">
                    {news[currentIndex].excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Info (Below the image on mobile) */}
        <div className="md:hidden p-6 border-t border-border">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-accent text-accent-foreground text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5">
              {news[currentIndex].category}
            </span>
            <span className="text-[8px] font-mono uppercase tracking-widest text-muted-foreground">
              {news[currentIndex].date}
            </span>
          </div>
          <h4 className="font-serif text-xl leading-tight text-primary mb-3">
            {news[currentIndex].title}
          </h4>
          <p className="text-muted-foreground text-xs line-clamp-2 italic">
            {news[currentIndex].excerpt}
          </p>
        </div>
      </div>

      {/* Manual Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 text-white pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 text-white pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {news.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === idx ? "bg-accent w-6" : "bg-border hover:bg-accent/40"
            )}
            aria-label={`Go to slide ${idx + 1}`}
            aria-pressed={currentIndex === idx}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div className="flex-1 flex flex-col w-full">
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
              <p className="text-base sm:text-lg lg:text-xl text-white/80 dark:text-white-foreground mb-10 max-w-2xl font-light leading-relaxed">
              {h.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent/85 text-accent-foreground hover:bg-accent rounded-none h-14 px-8 text-sm tracking-widest uppercase font-mono border border-transparent">
                <Link href="/services" data-testid="btn-access-services">{h.ctaServices}</Link>
              </Button>
              <Button asChild size="lg" className="rounded-none h-14 px-8 text-sm tracking-widest uppercase font-mono border-white/20 text-white dark:text-white bg-transparent dark:hover:bg-primary/70 hover:bg-primary/70 hover:text-white">
                <Link href="/news" data-testid="btn-latest-news">{h.ctaNews}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Moving Announcement Bar */}
      <div className="h-10 bg-accent text-accent-foreground dark:bg-card dark:text-accent border-y border-accent/20 overflow-hidden flex items-center relative z-20">
        <div
          className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {h.announcements.map((item: string, idx: number) => (
                <span key={idx} className="mx-8 font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center">
                  <span className="w-1.5 h-1.5 bg-current rounded-full mr-3 opacity-50" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[t.nav.about, t.nav.government, t.nav.royal, t.nav.tourism].map((title, idx) => {
              const Icon = serviceIcons[idx];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link href={serviceLinks[idx]} className="bg-background p-8 border border-border flex flex-col h-full hover:scale-[1.02] hover:border-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 group cursor-pointer" data-testid={`card-service-${idx}`}>
                    <Icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h4 className="font-serif text-2xl text-primary mb-3">{title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                      {h.services[idx].desc}
                    </p>
                    <div className="mt-auto flex items-center text-xs font-mono uppercase tracking-widest text-accent font-bold">
                      {h.accessPortal} <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
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
      
      {/* Latest Announcements Carousel */}
      <section className="py-20 lg:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">{h.briefingsLabel}</h2>
              <h3 className="font-serif text-3xl sm:text-4xl text-primary">{h.briefingsTitle}</h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-md md:text-right leading-relaxed">
              {h.briefingsDesc}
            </p>
          </div>

          <NewsCarousel news={h.latestNews} />

          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase font-mono tracking-widest text-xs h-12 px-8">
              <Link href="/news" data-testid="btn-read-all-news">{h.readAllNews}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
