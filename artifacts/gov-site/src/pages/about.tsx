import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Scroll, Flag, Map, Coins } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";

const subpageIcons = [BookOpen, Scroll, Flag, Map, Coins];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{a.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{a.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{a.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">{a.pageDesc}</p>
        </div>
      </div>

      {/* Subpages */}
      <section className="py-16 border-b border-border bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-3">{a.exploreLabel}</h2>
            <p className="text-sm text-muted-foreground">{a.exploreDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {a.subpages.map((sub, idx) => {
              const Icon = subpageIcons[idx];
              return (
                <motion.div key={sub.href} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
                  <Link href={sub.href} className="group bg-background p-6 lg:p-8 flex flex-col h-full hover:bg-primary hover:text-white transition-colors" data-testid={`card-about-${idx}`}>
                    <Icon className="w-7 h-7 text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h3 className="font-serif text-lg text-primary group-hover:text-white mb-3 transition-colors">{sub.title}</h3>
                    <p className="text-xs text-muted-foreground group-hover:text-white/70 leading-relaxed flex-1">{sub.desc}</p>
                    <div className="mt-6 flex items-center text-[10px] font-mono uppercase tracking-widest text-accent group-hover:text-accent">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">{a.contentsLabel}</h3>
              <ul className="flex flex-col gap-3 font-mono text-sm text-primary">
                <li><a href="#mission" className="hover:text-accent transition-colors">{a.contents.mission}</a></li>
                <li><a href="#structure" className="hover:text-accent transition-colors">{a.contents.structure}</a></li>
                <li><a href="#leadership" className="hover:text-accent transition-colors">{a.contents.leadership}</a></li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-20">
            <section id="mission" className="scroll-mt-32">
              <h2 className="font-serif text-3xl text-primary mb-6">{a.missionTitle}</h2>
              <p className="text-lg leading-relaxed mb-6 font-medium text-primary">{a.missionStatement}</p>
              <p className="leading-relaxed text-muted-foreground">{a.missionBody}</p>
            </section>
            <section id="structure" className="scroll-mt-32 border-t border-border pt-16">
              <h2 className="font-serif text-3xl text-primary mb-6">{a.structureTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {a.branches.map((branch, idx) => (
                  <div key={idx} className="border border-border p-6 bg-white">
                    <h4 className="font-serif text-xl text-primary mb-3">{branch.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{branch.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <section id="leadership" className="scroll-mt-32 border-t border-border pt-16">
              <h2 className="font-serif text-3xl text-primary mb-8">{a.leadershipTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {a.leaders.map((leader, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest text-center whitespace-pre-line">{a.portraitPending}</span>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">{leader.role}</div>
                      <h4 className="font-serif text-lg text-primary">{leader.name}</h4>
                      <p className="text-sm text-muted-foreground">{leader.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
