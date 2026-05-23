import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Healthcare() {
  const { t } = useLanguage();
  const h = t.healthcarePage;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{h.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">{h.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{h.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{h.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{h.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 flex flex-col gap-16">
        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">{h.hospitalsLabel}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">Hospital</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden md:table-cell">{h.addressLabel}</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">{h.bedsLabel}</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden lg:table-cell">{h.phoneLabel}</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden xl:table-cell">{h.servicesLabel}</th>
                </tr>
              </thead>
              <tbody>
                {h.hospitals.map((hosp, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="border-b border-border hover:bg-secondary transition-colors"
                  >
                    <td className="py-3 px-4 text-sm text-primary font-medium">{hosp.name}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">{hosp.address}</td>
                    <td className="py-3 px-4 font-mono text-xs text-accent">{hosp.beds}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground hidden lg:table-cell">{hosp.phone}</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground hidden xl:table-cell">{hosp.services}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">{h.clinicsLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {h.clinics.map((clinic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="border border-border bg-background p-5"
              >
                <h3 className="font-serif text-base text-primary mb-2">{clinic.name}</h3>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{h.addressLabel}: {clinic.address}</p>
                <p className="text-xs text-muted-foreground mt-2">{h.servicesLabel}: {clinic.services}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
