import React, { useState } from "react";
import { Link } from "wouter";
import { Search, FileText, Landmark, Shield, Plane, Book, Activity, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
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
    <div className="flex-1 w-full bg-background pb-20">
      <div className="bg-secondary border-b border-border py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{s.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">{s.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

             <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">{s.pageTitle}</h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-light mb-8">
                {s.pageDesc}
          </p>

          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              id="service-search"
              aria-label={s.searchPlaceholder}
              placeholder={s.searchPlaceholder}
              className="pl-12 h-14 rounded-none border-primary/20 focus-visible:ring-accent focus-visible:border-accent text-base bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-services"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 border border-border border-dashed">
            <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">{s.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => {
              const Icon = iconMap[service.id] ?? FileText;
            const href = (service.id === "healthcare" || service.id === "education") 
              ? `/services/${service.id}` 
              : `/services/${service.id}`; // Currently they follow the same pattern but explicit check is good

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                    <Link href={href} className="group block h-full border border-border p-6 lg:p-8 hover:border-accent hover:shadow-[0_0_0_1px_var(--accent)] transition-all bg-white" data-testid={`card-service-${service.id}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
