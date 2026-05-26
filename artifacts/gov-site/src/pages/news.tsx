import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, ArrowLeft, Calendar, Tag, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  const n = t.news;

  const filteredNews = n.items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 w-full bg-background pb-32">
      {/* Hero & Search - Museum Style */}
      <div className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{n.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">{n.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-8xl font-bold text-primary mb-8 leading-tight tracking-tighter">
              {n.pageTitle}
            </h1>
            <p className="text-muted-foreground text-xl font-light mb-12 max-w-2xl leading-relaxed">
              {n.pageDesc}
            </p>

            <div className="relative group max-w-2xl">
              <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Search className="absolute left-6 w-5 h-5 text-accent" />
                <Input
                  type="text"
                  placeholder="Search announcements..."
                  className="pl-16 h-16 rounded-2xl border-white/20 glass-effect premium-shadow focus-visible:ring-accent focus-visible:border-accent text-lg bg-white/50 dark:bg-black/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decor */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      {/* Featured News Section */}
      <div className="container mx-auto px-4 lg:px-8 -mt-16 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredNews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32 glass-effect rounded-3xl border-dashed border-2 border-white/10"
            >
              <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.3em] font-bold">No results found for your query</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-12 flex flex-col gap-12">
                {filteredNews.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Link href={`/news/${item.id}`} data-testid={`card-news-${item.id}`}>
                      <GlassCard className="p-4 lg:p-6 overflow-hidden border-transparent hover:border-accent/30 transition-all duration-700 group cursor-pointer rounded-[2.5rem]">
                        <div className="flex flex-col lg:flex-row gap-10">
                          {/* Image column */}
                          <div className="lg:w-2/5 aspect-[16/10] lg:aspect-auto relative overflow-hidden rounded-[2rem] shadow-2xl">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                              <span className="font-mono text-[9px] font-bold text-white px-4 py-1.5 bg-accent rounded-full uppercase tracking-widest shadow-lg">
                                {item.category}
                              </span>
                            </div>
                          </div>

                          {/* Content column */}
                          <div className="lg:w-3/5 py-6 flex flex-col">
                            <div className="flex items-center gap-6 mb-8 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5 text-accent" />
                                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                                  {item.date}
                                </span>
                              </div>
                              <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                              <div className="flex items-center gap-2">
                                <Tag className="w-3.5 h-3.5 text-accent" />
                                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                                  Official Release
                                </span>
                              </div>
                            </div>

                            <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-6 group-hover:text-accent transition-colors leading-tight tracking-tight">
                              {item.title}
                            </h2>

                            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-10 flex-1">
                              {item.excerpt}
                            </p>

                            <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                              <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                                {n.readStatement}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                              </div>
                              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:rotate-[360deg] transition-all duration-700">
                                <ChevronRight className="w-5 h-5 text-accent" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Pagination - Redesigned */}
        {filteredNews.length > 0 && (
          <div className="flex items-center justify-between mt-20 pt-10 border-t border-white/10">
            <Button
              variant="ghost"
              className="rounded-full font-mono uppercase tracking-[0.2em] text-[10px] font-bold h-14 px-8 opacity-50 cursor-not-allowed"
              disabled
            >
              <ArrowLeft className="w-4 h-4 mr-3" /> {n.previous}
            </Button>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="w-2 h-2 rounded-full bg-primary/10" />
              <span className="w-2 h-2 rounded-full bg-primary/10" />
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold ml-4">
                {n.pageInfo}
              </div>
            </div>

            <Button
              variant="outline"
              className="glass-effect rounded-full font-mono uppercase tracking-[0.2em] text-[10px] font-bold h-14 px-8 border-white/20 hover:bg-white/10 hover:text-primary transition-all duration-300"
              data-testid="btn-news-next"
            >
              {n.next} <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
