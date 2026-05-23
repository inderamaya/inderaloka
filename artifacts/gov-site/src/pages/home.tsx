import React from "react";
import { Link } from "wouter";
import { AlertTriangle, ChevronRight, FileText, Landmark, Shield, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  { icon: FileText, title: "Passports & Documents", desc: "Apply for or renew official travel documents." },
  { icon: Landmark, title: "Taxes & Finance", desc: "File returns, pay fees, and review economic policies." },
  { icon: Shield, title: "Healthcare & Safety", desc: "Access national health programs and emergency guidelines." },
  { icon: Plane, title: "Transport & Infrastructure", desc: "Vehicle registration, public transit, and road updates." },
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Alert Strip */}
      <div className="bg-destructive text-destructive-foreground py-3">
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-3 text-sm font-medium">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-mono tracking-tight">OFFICIAL ADVISORY: National Weather Service has issued a severe storm warning for the coastal regions.</span>
          <Link href="/news" className="ml-auto underline underline-offset-4 hover:text-white/80 font-mono text-xs">Read Advisory</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary text-white py-24 lg:py-32 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl lg:text-7xl font-normal leading-[1.1] mb-6 tracking-tight text-white">
              Official Services <br />
              <span className="text-white/70 italic">for the</span> Citizens.
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed">
              Access government resources, read official announcements, and connect with state departments through our secure digital portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none h-14 px-8 text-sm tracking-widest uppercase font-mono border border-transparent">
                <Link href="/services">Access Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 text-sm tracking-widest uppercase font-mono border-white/20 text-primary hover:bg-white hover:text-primary">
                <Link href="/news">Latest Announcements</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className="py-20 lg:py-32 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">Directory of Services</h2>
              <h3 className="font-serif text-4xl text-primary">Essential Public Services</h3>
            </div>
            <Link href="/services" className="text-sm font-mono tracking-wide text-primary hover:text-accent flex items-center gap-1 uppercase group">
              View All Directory <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href="/services" className="bg-background p-8 lg:p-10 flex flex-col h-full hover:bg-primary hover:text-white transition-colors group cursor-pointer border border-transparent">
                  <service.icon className="w-8 h-8 text-accent mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="font-serif text-xl mb-4">{service.title}</h4>
                  <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed mb-8 flex-1">
                    {service.desc}
                  </p>
                  <div className="mt-auto flex items-center text-xs font-mono uppercase tracking-widest text-primary group-hover:text-accent">
                    Access Portal <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">Briefings</h2>
              <h3 className="font-serif text-4xl text-primary mb-6">Latest <br/>Announcements</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Official press releases, policy updates, and public notices from the state departments.
              </p>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase font-mono tracking-widest text-xs h-12 px-6">
                <Link href="/news">Read All News</Link>
              </Button>
            </div>
            
            <div className="lg:col-span-2 flex flex-col">
              {[
                { date: "23 May 2026", title: "New Economic Policy Guidelines Published for Q3", dept: "Dept. of Finance" },
                { date: "20 May 2026", title: "Infrastructure Renewal Project Breaks Ground in Capital", dept: "Dept. of Transport" },
                { date: "15 May 2026", title: "Updated Travel Advisories Issued for International Citizens", dept: "Dept. of State" },
              ].map((news, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link href="/news" className="group block py-8 border-b border-border hover:border-accent transition-colors first:pt-0">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                      <div className="font-mono text-xs text-accent uppercase tracking-widest">{news.dept}</div>
                      <div className="font-mono text-xs text-muted-foreground">{news.date}</div>
                    </div>
                    <h4 className="font-serif text-xl lg:text-2xl text-primary group-hover:text-accent transition-colors">
                      {news.title}
                    </h4>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
