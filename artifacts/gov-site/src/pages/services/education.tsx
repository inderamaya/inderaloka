import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Education() {
  const { t } = useLanguage();
  const e = t.educationPage;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{e.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">{e.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{e.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{e.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{e.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 flex flex-col gap-16">
        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">{e.uniLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {e.universities.map((uni, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="border border-border bg-background p-6"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 bg-accent/5 px-2 py-0.5 text-nowrap">{uni.ranking}</span>
                </div>
                <h3 className="font-serif text-base text-primary mb-2">{uni.name}</h3>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{e.locationLabel}: {uni.location}</p>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">{e.enrollmentLabel}: {uni.enrollment}</p>
                <p className="text-xs text-muted-foreground">{e.programsLabel}: {uni.programs}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">{e.schoolsSecLabel}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">Sekolah</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden md:table-cell">{e.locationLabel}</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">{e.enrollmentLabel}</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden lg:table-cell">{e.typeLabel}</th>
                </tr>
              </thead>
              <tbody>
                {e.secondarySchools.map((school, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="border-b border-border hover:bg-secondary transition-colors"
                  >
                    <td className="py-3 px-4 text-sm text-primary font-medium">{school.name}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">{school.location}</td>
                    <td className="py-3 px-4 font-mono text-xs text-muted-foreground">{school.enrollment}</td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <span className="font-mono text-[10px] bg-secondary border border-border px-2 py-0.5 text-muted-foreground">{school.type}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">{e.schoolsPriLabel}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">Sekolah</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden md:table-cell">{e.locationLabel}</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent">{e.enrollmentLabel}</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-widest text-accent hidden lg:table-cell">{e.typeLabel}</th>
                </tr>
              </thead>
              <tbody>
                {e.primarySchools.map((school, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="border-b border-border hover:bg-secondary transition-colors"
                  >
                    <td className="py-3 px-4 text-sm text-primary font-medium">{school.name}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">{school.location}</td>
                    <td className="py-3 px-4 font-mono text-xs text-muted-foreground">{school.enrollment}</td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <span className="font-mono text-[10px] bg-secondary border border-border px-2 py-0.5 text-muted-foreground">{school.type}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
