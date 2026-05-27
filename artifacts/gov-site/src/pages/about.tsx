import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Scroll, Flag, Map, Coins, Plane, Landmark, Users, Globe } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";

const subpageIcons = [BookOpen, Scroll, Flag, Map, Coins, Plane];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">{a.breadcrumbHome}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary">{a.breadcrumbCurrent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-8xl font-bold text-primary mb-8 leading-tight tracking-tighter">
              {a.pageTitle}
            </h1>
            <p className="text-muted-foreground text-xl font-light max-w-2xl leading-relaxed mb-12">
              {a.pageDesc}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent animate-bounce">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60">Exploring the National Identity</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full -z-10" />
      </div>

      {/* Subpages Dashboard */}
      <section className="py-24 relative z-10 -mt-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent font-bold mb-4">{a.exploreLabel}</h2>
              <p className="text-lg text-muted-foreground font-light">{a.exploreDesc}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {a.subpages.map((sub, idx) => {
              const Icon = subpageIcons[idx] || Landmark;
              return (
                <motion.div
                  key={sub.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link href={sub.href} className="group block h-full">
                    <GlassCard className="h-full p-8 border-transparent hover:border-accent/30 transition-all duration-500 cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-lg text-primary font-bold mb-3 group-hover:text-accent transition-colors">{sub.title}</h3>
                      <p className="text-[11px] text-muted-foreground group-hover:text-primary/70 leading-relaxed font-light line-clamp-3">{sub.desc}</p>
                      <div className="mt-6 flex items-center text-[9px] font-mono font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ChevronRight className="w-3 h-3 ml-1" />
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 h-fit lg:sticky lg:top-40">
            <GlassCard className="p-8 border-accent/20 bg-accent/5">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-8 pb-4 border-b border-accent/10">{a.contentsLabel}</h3>
              <nav className="space-y-4">
                {[
                  { id: "mission", label: a.contents.mission, icon: Globe },
                  { id: "structure", label: a.contents.structure, icon: Landmark },
                  { id: "leadership", label: a.contents.leadership, icon: Users }
                ].map(item => (
                  <a key={item.id} href={`#${item.id}`} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-white/50 dark:bg-black/20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-primary group-hover:text-accent transition-colors">{item.label}</span>
                  </a>
                ))}
              </nav>
            </GlassCard>
          </div>

          <div className="lg:col-span-8 space-y-40">
            <motion.section
              id="mission"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="scroll-mt-40"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-8 border border-accent/20">National System</div>
              <h2 className="font-serif text-5xl lg:text-6xl text-primary font-bold mb-10 leading-tight tracking-tight">{a.missionTitle}</h2>
              <div className="glass-effect p-10 rounded-[2.5rem] border-accent/10 bg-accent/5 mb-10">
                <p className="text-3xl font-serif text-primary mb-8 leading-tight italic">"{a.missionStatement}"</p>
                <p className="text-xl leading-relaxed text-muted-foreground font-light">{a.missionBody}</p>
              </div>
            </motion.section>

            <motion.section
              id="structure"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="scroll-mt-40"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-8 border border-primary/20">Institutional Framework</div>
              <h2 className="font-serif text-5xl lg:text-6xl text-primary font-bold mb-12 leading-tight tracking-tight">{a.structureTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {a.branches.map((branch, idx) => (
                  <GlassCard key={idx} className="p-10 border-transparent hover:border-primary/20 transition-all duration-500 bg-white/40 dark:bg-black/20">
                    <h4 className="font-serif text-2xl text-primary font-bold mb-6">{branch.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{branch.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="leadership"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="scroll-mt-40"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-8 border border-accent/20">Current Administration</div>
              <h2 className="font-serif text-5xl lg:text-6xl text-primary font-bold mb-12 leading-tight tracking-tight">{a.leadershipTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {a.leaders.map((leader, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-32 h-40 bg-secondary/50 rounded-2xl border border-white/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10" />
                      <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest text-center whitespace-pre-line relative z-20 font-bold opacity-40">{a.portraitPending}</span>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2 font-bold">{leader.role}</div>
                      <h4 className="font-serif text-2xl text-primary font-bold mb-2 group-hover:text-accent transition-colors leading-tight">{leader.name}</h4>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold font-mono">{leader.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
