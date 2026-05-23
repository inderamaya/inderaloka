import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-secondary border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{a.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">{a.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-6">{a.pageTitle}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">
            {a.pageDesc}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-8">
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
              <div className="prose prose-blue max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6 font-medium text-primary">
                  {a.missionStatement}
                </p>
                <p className="leading-relaxed">
                  {a.missionBody}
                </p>
              </div>
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
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
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
