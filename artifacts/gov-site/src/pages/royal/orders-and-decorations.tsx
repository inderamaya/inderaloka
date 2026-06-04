import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export default function OrdersAndDecorations() {
  const { t } = useLanguage();
  const r = t.royal;
  const o = r.orders;

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
              <BreadcrumbItem><BreadcrumbPage className="text-accent font-bold">{o.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-4">{o.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-3xl font-light leading-relaxed">{o.pageDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-16 max-w-5xl">
        {/* Intro */}
        <section className="mb-20">
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-3xl whitespace-pre-line">{o.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-12">
            <div>
              <h2 className="font-serif text-2xl text-primary mb-6">{o.purposeTitle}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.purposeBody}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-primary mb-6">{o.generalProvisionsTitle}</h2>
              <div className="space-y-6">
                {o.generalProvisions.map((provision, idx) => (
                  <div key={idx}>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{provision.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed whitespace-pre-line">{provision.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Parts */}
        <div className="space-y-24">
          {o.parts.map((part, pIdx) => (
            <section key={part.id}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-border flex-1" />
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">{part.title}</h2>
                <div className="h-px bg-border flex-1" />
              </div>

              <div className="space-y-8">
                {part.items.map((item: any, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: iIdx * 0.05 }}
                    className="group border border-border bg-card p-8 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-[10px] text-accent font-bold px-2 py-1 bg-accent/10 border border-accent/20">
                            {item.status}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl text-primary mb-4">{item.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>

                        {/* Details Grid (e.g. for BMPP) */}
                        {item.details && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-border/50">
                            {item.details.map((detail: any, dIdx: number) => (
                              <div key={dIdx}>
                                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">{detail.label}</span>
                                <span className="text-xs font-medium text-primary">{detail.value}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Ribbon Info */}
                        {item.ribbon && !item.details && (
                          <div className="pt-4 flex items-center gap-3">
                             <div className="w-4 h-4 rounded-full border border-border bg-muted flex-shrink-0" />
                             <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider italic">
                               Ribbon: <span className="text-primary not-italic">{item.ribbon}</span>
                             </p>
                          </div>
                        )}

                        {/* Ranks Table */}
                        {item.ranks && (
                          <div className="mt-8 overflow-hidden border border-border/60">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead className="bg-muted/50 border-b border-border/60">
                                <tr>
                                  <th className="px-4 py-3 font-mono font-medium uppercase tracking-tighter text-muted-foreground">Class / Rank</th>
                                  <th className="px-4 py-3 font-mono font-medium uppercase tracking-tighter text-muted-foreground">Title / Reward</th>
                                  <th className="px-4 py-3 font-mono font-medium uppercase tracking-tighter text-muted-foreground">Limit / Eligibility</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40">
                                {item.ranks.map((rank: any, rIdx: number) => (
                                  <tr key={rIdx} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-4 py-3 font-medium text-primary">{rank.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                      {rank.title || rank.reward || "-"}
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                      {rank.limit || rank.eligible || "-"}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Service Categories (e.g. for Laskar) */}
                        {item.categories && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                            {item.categories.map((cat: any, cIdx: number) => (
                              <div key={cIdx} className="bg-muted/30 p-3 border border-border/40">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">{cat.label}</span>
                                <span className="text-xs font-bold text-primary">{cat.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Order of Precedence */}
        <section className="mt-32">
          <div className="mb-12">
            <h2 className="font-serif text-3xl text-primary mb-4">{o.precedenceTitle}</h2>
            <div className="h-1 w-20 bg-accent" />
          </div>

          <div className="overflow-x-auto border border-border">
            <table className="w-full text-left text-sm min-w-[700px]">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  {o.precedenceHeaders.map((header, idx) => (
                    <th key={idx} className={cn("px-6 py-4 font-mono uppercase tracking-widest text-[10px]", idx === 0 && "w-16")}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {o.precedenceItems.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-secondary/50 transition-colors odd:bg-secondary/20">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className={cn("px-6 py-4", cIdx === 0 && "font-mono font-bold text-accent", cIdx === 2 && "font-mono text-xs")}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-muted/30 border border-border rounded-sm">
            <p className="text-xs text-muted-foreground italic leading-relaxed">
              <strong>Note:</strong> {o.footerNote}
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-24 pt-12 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl italic">
            {o.closing}
          </p>
        </section>
      </div>
    </div>
  );
}
