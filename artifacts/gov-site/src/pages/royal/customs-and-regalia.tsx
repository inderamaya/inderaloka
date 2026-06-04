import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function CustomsAndRegalia() {
  const { t } = useLanguage();
  const r = t.royal;
  const c = r.customs;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      {/* Hero Section */}
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="hover:text-primary transition-colors">{r.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/royal" className="hover:text-primary transition-colors">{r.breadcrumbParent}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-accent font-bold">{c.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-4">{c.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-3xl font-light leading-relaxed">{c.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-16 max-w-5xl">
        {/* Terasul Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-serif text-3xl text-primary">{c.terasulTitle}</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="space-y-16">
            {(c.terasulSections as any[]).map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative pl-8 border-l border-border"
              >
                <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-accent" />

                <div className="flex items-start gap-4 mb-6">
                  <span className="font-mono text-sm text-accent font-bold mt-1">{section.id}.</span>
                  <h3 className="font-serif text-xl text-primary">{section.title}</h3>
                </div>

                {section.content && (
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-6 max-w-3xl italic">
                    {section.content}
                  </p>
                )}

                {section.info && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {section.info.map((item: any, iIdx: number) => (
                      <div key={iIdx} className="bg-muted/30 p-4 border border-border/50">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block mb-2">{item.label}</span>
                        <span className="text-xs font-medium text-primary">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {section.table && (
                  <div className="mb-6 overflow-hidden border border-border rounded-sm">
                    <Table>
                      <TableHeader className="bg-muted/50">
                        <TableRow>
                          {section.table.headers.map((header: string, hIdx: number) => (
                            <TableHead key={hIdx} className="font-mono text-[10px] uppercase tracking-widest py-3">{header}</TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {section.table.rows.map((row: string[], rIdx: number) => (
                          <TableRow key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <TableCell key={cIdx} className="text-xs text-muted-foreground py-4">{cell}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}

                {section.subTable && (
                  <div className="mt-8 mb-6">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">{section.subTable.title}</h4>
                    <div className="overflow-hidden border border-border/60 rounded-sm">
                      <Table>
                        <TableHeader className="bg-muted/30">
                          <TableRow>
                            {section.subTable.headers.map((header: string, hIdx: number) => (
                              <TableHead key={hIdx} className="font-mono text-[9px] uppercase tracking-wider py-2">{header}</TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {section.subTable.rows.map((row: string[], rIdx: number) => (
                            <TableRow key={rIdx}>
                              {row.map((cell, cIdx) => (
                                <TableCell key={cIdx} className="text-[11px] text-muted-foreground py-3">{cell}</TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}

                {section.footer && (
                  <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-3xl">
                    {section.footer}
                  </p>
                )}

                {section.list && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                    {section.list.map((item: string, lIdx: number) => (
                      <li key={lIdx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent/40 rounded-full flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.additionalInfo && (
                  <p className="text-xs text-muted-foreground italic leading-relaxed mt-6 p-4 bg-muted/20 border-l-2 border-accent/30">
                    {section.additionalInfo}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <section>
            <div className="mb-10">
              <h2 className="font-serif text-2xl text-primary mb-2">{c.regaliaTitle}</h2>
              <div className="h-1 w-12 bg-accent" />
            </div>
            <div className="flex flex-col gap-4">
              {c.regaliaItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="border border-border bg-card p-5 flex gap-4 hover:border-accent/50 transition-colors group"
                >
                  <div className="w-1 bg-accent/20 group-hover:bg-accent flex-shrink-0 self-stretch transition-colors" />
                  <div>
                    <h3 className="font-serif text-base text-primary mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-10">
              <h2 className="font-serif text-2xl text-primary mb-2">{c.ceremoniesTitle}</h2>
              <div className="h-1 w-12 bg-accent" />
            </div>
            <div className="flex flex-col gap-6">
              {c.ceremonies.map((ceremony, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <div className="w-8 h-px bg-accent mb-4" />
                  <h3 className="font-serif text-lg text-primary mb-3">{ceremony.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ceremony.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <section>
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-primary mb-2">{c.protocolTitle}</h2>
            <div className="h-1 w-12 bg-accent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.protocols.map((protocol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="border border-border bg-secondary/30 p-5 flex gap-3 group hover:bg-secondary/50 transition-colors"
              >
                <span className="font-mono text-xs text-accent font-bold mt-0.5 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">{(idx + 1).toString().padStart(2, "0")}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{protocol}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
