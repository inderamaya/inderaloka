import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ShieldAlert, ChevronRight, Headphones, ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <div className="flex-1 w-full bg-background pb-32">
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb className="mb-8 font-mono uppercase tracking-[0.3em] text-[10px] font-bold text-accent">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href="/">{c.breadcrumbHome}</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">{c.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-8xl font-bold text-primary mb-8 leading-tight tracking-tighter">{c.pageTitle}</h1>
            <p className="text-muted-foreground text-xl font-light max-w-2xl leading-relaxed">{c.pageDesc}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Send className="w-5 h-5" />
               </div>
               <h2 className="font-serif text-3xl text-primary font-bold">{c.inquiryTitle}</h2>
            </div>

            <GlassCard className="p-8 lg:p-12 border-transparent bg-white/40 dark:bg-black/20 rounded-[2.5rem]">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">{c.form.firstName}</Label>
                    <Input id="firstName" className="h-14 rounded-xl bg-white/50 border-white/20 focus-visible:ring-accent" data-testid="input-first-name" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">{c.form.lastName}</Label>
                    <Input id="lastName" className="h-14 rounded-xl bg-white/50 border-white/20 focus-visible:ring-accent" data-testid="input-last-name" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">{c.form.email}</Label>
                  <Input id="email" type="email" className="h-14 rounded-xl bg-white/50 border-white/20 focus-visible:ring-accent" data-testid="input-email" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="department" className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">{c.form.directTo}</Label>
                  <select id="department" data-testid="select-department" className="flex h-14 w-full rounded-xl border border-white/20 bg-white/50 px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-sans shadow-inner appearance-none">
                    <option value="">{c.form.selectDept}</option>
                    <option value="state">{c.form.deptState}</option>
                    <option value="finance">{c.form.deptFinance}</option>
                    <option value="health">{c.form.deptHealth}</option>
                    <option value="transport">{c.form.deptTransport}</option>
                    <option value="other">{c.form.deptOther}</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">{c.form.message}</Label>
                  <Textarea id="message" rows={6} className="rounded-xl bg-white/50 border-white/20 focus-visible:ring-accent resize-none p-4" data-testid="textarea-message" />
                </div>

                <Button type="submit" className="w-full rounded-xl h-16 bg-primary text-white hover:bg-accent font-mono uppercase tracking-[0.2em] text-[11px] font-bold transition-all shadow-2xl group" data-testid="btn-submit-inquiry">
                  {c.form.submit}
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-16"
          >
            <div className="space-y-10">
              <h2 className="font-serif text-3xl text-primary font-bold border-b border-white/10 pb-6">{c.directoryTitle}</h2>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-3">{c.hq}</h4>
                    <p className="text-lg text-primary font-serif leading-tight">
                      1 Capital Plaza, Government District<br />
                      Republic City, 10001
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-3">{c.hours}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-light">
                      {c.hoursDetail}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-3">Communication Hub</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-[10px] font-mono text-muted-foreground font-bold uppercase">{c.switchboard}</span>
                        <span className="text-sm font-mono font-bold text-primary group-hover:text-accent transition-colors">1-800-GOV-INFO</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-muted-foreground font-bold uppercase">{c.generalEmail}</span>
                        <span className="text-sm font-mono font-bold text-primary group-hover:text-accent transition-colors">contact@republic.gov</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <GlassCard className="border-destructive/20 bg-destructive/5 rounded-[2.5rem] p-10">
              <div className="flex items-center gap-4 mb-8">
                 <ShieldAlert className="w-8 h-8 text-destructive animate-pulse" />
                 <h3 className="font-serif text-3xl text-destructive font-bold">{c.emergencyTitle}</h3>
              </div>
              <ul className="space-y-6">
                {c.emergencyItems.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center group/item">
                    <span className="text-primary font-mono text-[10px] uppercase tracking-widest font-bold group-hover/item:text-destructive transition-colors">{item.label}</span>
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-px bg-destructive/20" />
                       <strong className="text-3xl font-mono font-bold text-destructive tracking-tighter">{item.number}</strong>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-6 border-t border-destructive/10 flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-destructive/60">
                 24/7 National Response Service <ChevronRight className="w-3 h-3" />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
