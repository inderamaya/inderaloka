import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight, ArrowUpRight, Landmark, Users, Shield, Scale, Crown } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const icons = [Users, Landmark, Scale, Shield];

export default function Government() {
  const { t } = useLanguage();
  const g = t.government || {} as any;
  const l = g.landing || { subpages: [] as any[] };

  const nodes = [
    { id: "sultan", label: "The Sultan", icon: Crown, x: "50%", y: "10%", color: "text-accent" },
    { id: "parliament", label: "Legislative", icon: Landmark, x: "20%", y: "45%", color: "text-blue-400" },
    { id: "executive", label: "Executive", icon: Users, x: "50%", y: "45%", color: "text-emerald-400" },
    { id: "judiciary", label: "Judiciary", icon: Scale, x: "80%", y: "45%", color: "text-purple-400" },
    { id: "agencies", label: "Ministries & Agencies", icon: Shield, x: "50%", y: "80%", color: "text-slate-400" },
  ];

  const connections = [
    { from: "sultan", to: "parliament" },
    { from: "sultan", to: "executive" },
    { from: "sultan", to: "judiciary" },
    { from: "executive", to: "agencies" },
    { from: "parliament", to: "executive" },
  ];

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
                  <Link href="/">{g.breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground">{g.breadcrumbParent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-8 tracking-tight">{l.pageTitle}</h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">{l.pageDesc}</p>
          </motion.div>
        </div>
      </div>

      {/* Neural-Network Inspired Hierarchy Visualisation */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-4">Institutional Framework</div>
          <h2 className="font-serif text-3xl text-foreground">Hierarchy of Governance</h2>
        </div>

        <GlassCard className="relative h-[600px] w-full overflow-hidden border-white/10 bg-navy/5">
          <div className="absolute inset-0 bg-[url('/Neural-Grid.png')] opacity-10 pointer-events-none" />

          {/* Animated SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((conn, i) => {
              const fromNode = nodes.find(n => n.id === conn.from)!;
              const toNode = nodes.find(n => n.id === conn.to)!;
              return (
                <motion.line
                  key={i}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="text-accent/30"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, idx) => (
            <motion.div
              key={node.id}
              style={{ left: node.x, top: node.y }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.1 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className={cn(
                  "w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-effect flex items-center justify-center border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:border-accent",
                  node.color
                )}>
                  <node.icon className="w-8 h-8" />
                </div>
                <div className="px-4 py-1.5 glass-effect rounded-full border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground whitespace-nowrap">{node.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </GlassCard>
      </div>

      {/* Modern Card Grid for Subpages */}
      <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {l.subpages.map((sub, idx) => {
            const Icon = icons[idx] || Landmark;
            return (
              <motion.div
                key={sub.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link href={sub.href} className="group block h-full">
                  <GlassCard className="p-8 h-full flex flex-col hover:border-accent/40 transition-all duration-500 hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">{sub.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1 font-light">{sub.desc}</p>
                    <div className="mt-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-accent">
                      Explore Branch
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
