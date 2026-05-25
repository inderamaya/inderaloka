import React, { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, Phone, MapPin, Clock, User } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";

export default function Directory() {
  const { t } = useLanguage();
  const d = t.directoryPage;
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filterLabels: Record<string, string> = {
    All: d.filterAll,
    Executive: d.filterExec,
    Legislative: d.filterLeg,
    Judicial: d.filterJud,
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
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{d.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{d.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">{d.pageTitle}</h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-light">{d.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        {/* Ministries */}
        <section className="mb-20">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">{d.ministriesTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {d.ministries.map((ministry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-background p-6"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">{d.portfolioLabel}</div>
                <h3 className="font-serif text-base text-primary mb-3 leading-snug">{ministry.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{ministry.portfolio}</p>
                <div className="border-t border-border pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{d.ministerLabel}</div>
                  <p className="text-xs text-primary font-medium">{ministry.minister}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section>
             <div className="flex flex-col xl:flex-row xl:items-center gap-6 mb-8">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex-1">{d.deptTitle}</h2>
              <div className="flex flex-col md:flex-row gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={d.searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                   className="pl-9 font-mono text-xs w-full md:w-64"
                  data-testid="directory-search"
                />
              </div>
                <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                {Object.entries(filterLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`px-3 py-2 font-mono text-[10px] uppercase tracking-widest border transition-colors ${filter === key ? "bg-accent text-white border-accent" : "border-border text-muted-foreground hover:border-accent/50 hover:text-primary"}`}
                    data-testid={`filter-${key.toLowerCase()}`}
                  >{label}</button>
                ))}
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="border border-border bg-secondary/30 p-12 text-center">
              <p className="font-mono text-sm text-muted-foreground">{d.noResults}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map((dept, idx) => (
                <motion.div
                  key={`${dept.name}-${idx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="border border-border bg-background p-6 grid grid-cols-1 md:grid-cols-12 gap-6"
                  data-testid={`dept-row-${idx}`}
                >
                  <div className="md:col-span-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{dept.category}</div>
                    <h3 className="font-serif text-lg text-primary">{dept.name}</h3>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <User className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-widest">{d.headLabel}</span>
                    </div>
                    <p className="text-sm text-primary">{dept.head}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-widest">{d.phoneLabel}</span>
                    </div>
                    <p className="font-mono text-xs text-accent">{dept.phone}</p>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-widest">{d.addressLabel}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{dept.address}</p>
                  </div>
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-widest">{d.hoursLabel}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{dept.hours}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
