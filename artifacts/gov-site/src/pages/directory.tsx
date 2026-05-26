import React, { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Phone, MapPin, Clock, User, Landmark, Building2, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function Directory() {
  const { t } = useLanguage();
  const d = t.directoryPage || { departments: [], filterAll: "", filterExec: "", filterLeg: "", filterJud: "", filterDept: "" } as any;
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filterLabels: Record<string, string> = {
    All: d.filterAll || "All",
    Executive: d.filterExec || "Executive",
    Legislative: d.filterLeg || "Legislative",
    Judicial: d.filterJud || "Judicial",
    Departments: d.filterDept || "Departments",
  };

  const filtered = useMemo(() => {
    return d.departments.filter((dept) => {
      const matchesSearch =
        search.trim() === "" ||
        dept.name.toLowerCase().includes(search.toLowerCase()) ||
        dept.head.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "All" || dept.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter, d.departments]);

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{d.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{d.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tighter">
              {d.pageTitle}
            </h1>
            <p className="text-muted-foreground text-xl font-light max-w-2xl leading-relaxed">
              {d.pageDesc}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 space-y-32">
        {/* Ministries - Smart Cards */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{d.ministriesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {d.ministries.map((ministry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full p-8 border-transparent hover:border-accent/30 transition-all duration-500 group bg-white/40 dark:bg-black/20">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-4">{d.portfolioLabel}</div>
                  <h3 className="font-serif text-xl text-primary font-bold mb-4 leading-tight group-hover:text-accent transition-colors">{ministry.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light mb-8 line-clamp-3">{ministry.portfolio}</p>

                  <div className="pt-6 border-t border-white/5 space-y-1">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{d.ministerLabel}</div>
                    <p className="text-sm text-primary font-bold">{ministry.minister}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Departments - Searchable Dashboard */}
        <section>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Landmark className="w-5 h-5" />
                </div>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{d.deptTitle}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(filterLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={cn(
                      "px-6 py-2 rounded-full font-mono text-[9px] uppercase tracking-widest font-bold border transition-all",
                      filter === key
                        ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                        : "border-white/10 text-muted-foreground hover:border-accent/30 hover:text-primary bg-white/50 dark:bg-black/20"
                    )}
                    data-testid={`filter-${key.toLowerCase()}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group w-full lg:w-96">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-4 h-4 text-accent" />
                <Input
                  type="text"
                  placeholder={d.searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-12 h-14 rounded-xl border-white/20 glass-effect bg-white/50 dark:bg-black/20 text-sm font-mono"
                  data-testid="directory-search"
                />
              </div>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-32 glass-effect rounded-3xl border-dashed border-2 border-white/10"
              >
                <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.3em] font-bold">{d.noResults}</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filtered.map((dept, idx) => (
                  <motion.div
                    key={`${dept.name}-${idx}`}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                  >
                    <GlassCard className="p-0 overflow-hidden border-transparent hover:border-accent/30 transition-all duration-300 bg-white/40 dark:bg-black/20 group">
                      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                         <div className="lg:col-span-4 p-8 lg:p-10 lg:border-r border-white/5">
                            <div className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-3">{dept.category}</div>
                            <h3 className="font-serif text-2xl text-primary font-bold group-hover:text-accent transition-colors leading-tight">{dept.name}</h3>
                         </div>

                         <div className="lg:col-span-8 p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-1">
                               <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                  <User className="w-3 h-3 text-accent" />
                                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold">{d.headLabel}</span>
                               </div>
                               <p className="text-sm text-primary font-medium">{dept.head}</p>
                            </div>

                            <div className="space-y-1">
                               <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                  <Phone className="w-3 h-3 text-accent" />
                                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold">{d.phoneLabel}</span>
                               </div>
                               <p className="text-sm font-mono font-bold text-primary">{dept.phone}</p>
                            </div>

                            <div className="space-y-1">
                               <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                  <MapPin className="w-3 h-3 text-accent" />
                                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold">{d.addressLabel}</span>
                               </div>
                               <p className="text-[11px] text-muted-foreground leading-tight">{dept.address}</p>
                            </div>

                            <div className="flex items-center justify-between lg:justify-end">
                               <div className="space-y-1 text-right">
                                  <div className="flex items-center justify-end gap-2 text-muted-foreground mb-1">
                                     <Clock className="w-3 h-3 text-accent" />
                                     <span className="font-mono text-[9px] uppercase tracking-widest font-bold">{d.hoursLabel}</span>
                                  </div>
                                  <p className="text-[10px] text-muted-foreground font-medium">{dept.hours}</p>
                               </div>
                               <div className="lg:hidden w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center">
                                  <ArrowRight className="w-4 h-4 text-accent" />
                               </div>
                            </div>
                         </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
