import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Crown, Users, GraduationCap, Medal, ShieldCheck } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function RoyalFamily() {
  const { t } = useLanguage();
  const r = t.royal || {} as any;
  const f = r.royalFamily || {} as any;

  return (
    <div className="flex-1 w-full bg-background pb-32 relative overflow-hidden">
      <AnimatedBackground />

      {/* Header Section */}
      <div className="relative pt-12 pb-24 border-b border-black/5">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-12 font-mono uppercase tracking-[0.2em] text-[10px] opacity-50">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{r.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/royal">{r.breadcrumbParent}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground">{f.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-8 tracking-tight">{f.pageTitle}</h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">{f.pageDesc}</p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Family Tree / Hierarchy Visualisation */}
      <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-4">Lineage of Sovereignty</div>
          <h2 className="font-serif text-3xl text-foreground">Royal Hierarchy</h2>
        </div>

        <div className="relative">
          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-20" preserveAspectRatio="none">
            <motion.path
              d="M 50% 100 L 50% 300"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-accent"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
            />
            <motion.path
              d="M 25% 300 L 75% 300"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-accent"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
            />
          </svg>

          {/* Sultan (Root) */}
          <div className="flex justify-center mb-32">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-accent animate-bounce">
                <Crown className="w-8 h-8" />
              </div>
              <GlassCard className="p-8 text-center w-72 border-accent/30 shadow-[0_0_50px_rgba(251,191,36,0.2)]">
                <div className="w-24 h-24 rounded-full bg-accent/10 mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-accent/20">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Sultan" />
                </div>
                <h3 className="font-serif text-xl mb-1">{f.members[0].name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{f.members[0].role}</p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Immediate Family */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {f.detailedMembers.slice(1).map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <GlassCard className="p-8 group hover:border-accent/40 transition-colors">
                  <div className="flex gap-6 items-start">
                    <div className="w-20 h-20 rounded-2xl bg-accent/5 overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt={member.name} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg mb-1 leading-tight">{member.name}</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">{member.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.honours.map((h, i) => (
                          <span key={i} className="text-[8px] font-mono border border-accent/20 px-1.5 py-0.5 rounded text-accent/60">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Royal Household Section - Premium Cards */}
      <div className="bg-navy/5 py-32 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-4">Official Governance</div>
            <h2 className="font-serif text-4xl text-foreground">{f.householdDirectoryTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {f.householdDirectory.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="p-10 h-full hover:bg-white/40 transition-all group">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6">{item.office}</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-muted-foreground opacity-40" />
                      <span className="text-sm font-serif">{item.head}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4 text-muted-foreground opacity-40" />
                      <span className="text-xs font-mono text-muted-foreground">{item.contact}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Line of Succession - Elegant List */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px bg-accent/20 flex-1" />
            <h2 className="font-serif text-3xl text-foreground whitespace-nowrap">{f.lineOfSuccessionTitle}</h2>
            <div className="h-px bg-accent/20 flex-1" />
          </div>

          <div className="space-y-4">
            {f.successionList.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center gap-8 p-6 rounded-2xl hover:bg-accent/5 transition-all border border-transparent hover:border-accent/10"
              >
                <div className="text-2xl font-serif text-accent/20 group-hover:text-accent transition-colors italic w-8">{person.position}</div>
                <div>
                  <h4 className="font-serif text-xl text-foreground">{person.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{person.title}</p>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
