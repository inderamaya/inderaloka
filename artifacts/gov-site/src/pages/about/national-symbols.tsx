import React, { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Play, Pause, Music, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function NationalSymbols() {
  const { t, language } = useLanguage();
  const ns = t.nationalSymbols;
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{ns.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/about">{ns.breadcrumbAbout}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{ns.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{ns.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{ns.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-10">{ns.symbolsLabel}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ns.symbols.map((symbol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
              className="border border-border bg-background hover:border-accent/50 transition-colors group"
            >
              <div className="border-b border-border p-6 flex items-start justify-between gap-4">
                <div className="w-10 h-10 border border-accent/40 flex items-center justify-center bg-secondary flex-shrink-0">
                  <span className="font-mono text-sm font-bold text-accent">{(idx + 1).toString().padStart(2, "0")}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">{ns.sinceLabel}</span>
                  <span className="font-serif text-lg text-accent">{symbol.since}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-primary mb-3 group-hover:text-accent transition-colors">{symbol.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{symbol.desc}</p>

                {symbol.id === "anthem" && (
                  <div className="mt-8 border-t border-border pt-6">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="w-24 h-24 bg-secondary flex items-center justify-center border border-accent/20 flex-shrink-0 relative group/cover overflow-hidden">
                        <Music className="w-10 h-10 text-accent/40 group-hover/cover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover/cover:opacity-100 transition-opacity" />
                        <span className="absolute bottom-1 left-0 right-0 text-[8px] font-mono uppercase tracking-tighter text-center text-accent/60 opacity-0 group-hover/cover:opacity-100 transition-opacity">Nusa Bertuah</span>
                      </div>

                      <div className="flex-1 w-full">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="font-serif text-base text-primary">Nusa Bertuah</p>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{ns.anthemLabel}</p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full w-12 h-12 border-accent text-accent hover:bg-accent hover:text-white transition-all"
                            onClick={togglePlay}
                          >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                          </Button>
                        </div>

                        <audio 
                          ref={audioRef} 
                          src="/Nusa-Bertuah.mp3" 
                          onEnded={() => setIsPlaying(false)}
                        />

                        <button 
                          onClick={() => setShowLyrics(!showLyrics)}
                          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent hover:text-primary transition-colors mt-2"
                        >
                          {showLyrics ? (
                            <>{ns.hideLyricsLabel} <ChevronUp className="w-3 h-3" /></>
                          ) : (
                            <>{ns.showLyricsLabel} <ChevronDown className="w-3 h-3" /></>
                          )}
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {showLyrics && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 p-6 bg-secondary/50 border border-border italic text-sm text-primary leading-relaxed text-center font-serif">
                            {ns.anthemLyrics.map((line, i) => (
                              <p key={i} className={line === "" ? "h-3" : ""}>{line}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
