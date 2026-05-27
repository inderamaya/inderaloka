import React, { useState } from "react";
import { Link } from "wouter";
import { Search, FileText, Landmark, Shield, Plane, Book, Activity, GraduationCap, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap: Record<string, React.ElementType> ={
  s1: FileText, s2: FileText,
  s3: Landmark, s4: Landmark,
  s5: Shield, s6: Shield,
  s7: Plane, s8: Plane,
  s9: Book,
  healthcare: Activity,
  education: GraduationCap,
};

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  const s = t.services;

  const filteredServices = s.items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{s.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">{s.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">
              {s.pageTitle}
            </h1>
            <p className="text-muted-foreground text-xl font-light mb-12 leading-relaxed">
              {s.pageDesc}
            </p>

            <div className="relative group max-w-2xl">
              <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Search className="absolute left-6 w-5 h-5 text-accent" />
                <Input
                  type="text"
                  id="service-search"
                  aria-label={s.searchPlaceholder}
                  placeholder={s.searchPlaceholder}
                  className="pl-16 h-16 rounded-2xl border-white/20 glass-effect premium-shadow focus-visible:ring-accent focus-visible:border-accent text-lg bg-white/50 dark:bg-black/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search-services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <AnimatePresence mode="popLayout">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32 glass-effect rounded-3xl border-dashed border-2 border-white/10"
            >
              <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.3em] font-bold">{s.noResults}</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, idx) => {
                const Icon = iconMap[service.id] ?? FileText;
                const href = (service.id === "healthcare" || service.id === "education")
                  ? `/services/${service.id}`
                  : `/services/${service.id}`;

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <Link href={href} data-testid={`card-service-${service.id}`}>
                      <GlassCard className="h-full p-10 cursor-pointer border-transparent hover:border-accent/30 transition-all duration-500 group">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center justify-between mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-bold bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                              {service.category}
                            </span>
                          </div>

                          <h3 className="font-serif text-2xl text-primary font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                            {service.title}
                          </h3>

                          <p className="text-sm text-muted-foreground leading-relaxed font-light mb-10 flex-1">
                            {service.desc}
                          </p>

                          <div className="flex items-center text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors">
                            {t.home.accessPortal} <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </GlassCard>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
