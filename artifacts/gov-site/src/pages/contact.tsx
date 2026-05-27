import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white/60 hover:text-white">{c.breadcrumbHome}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{c.breadcrumbCurrent}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-serif text-4xl lg:text-5xl mb-6">{c.pageTitle}</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">
            {c.pageDesc}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl text-primary mb-8">{c.inquiryTitle}</h2>
            <form className="space-y-6 bg-secondary p-8 border border-border" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-mono text-xs uppercase tracking-widest text-primary">{c.form.firstName}</Label>
                  <Input id="firstName" className="rounded-none bg-white border-border focus-visible:ring-accent" data-testid="input-first-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-mono text-xs uppercase tracking-widest text-primary">{c.form.lastName}</Label>
                  <Input id="lastName" className="rounded-none bg-white border-border focus-visible:ring-accent" data-testid="input-last-name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-primary">{c.form.email}</Label>
                <Input id="email" type="email" className="rounded-none bg-white border-border focus-visible:ring-accent" data-testid="input-email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department" className="font-mono text-xs uppercase tracking-widest text-primary">{c.form.directTo}</Label>
                <select id="department" data-testid="select-department" className="flex h-10 w-full rounded-none border border-border bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 font-sans">
                  <option value="">{c.form.selectDept}</option>
                  <option value="state">{c.form.deptState}</option>
                  <option value="finance">{c.form.deptFinance}</option>
                  <option value="health">{c.form.deptHealth}</option>
                  <option value="transport">{c.form.deptTransport}</option>
                  <option value="other">{c.form.deptOther}</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-primary">{c.form.message}</Label>
                <Textarea id="message" rows={5} className="rounded-none bg-white border-border focus-visible:ring-accent resize-none" data-testid="textarea-message" />
              </div>

              <Button type="submit" className="w-full rounded-none h-12 bg-primary text-white hover:bg-accent font-mono uppercase tracking-widest text-xs transition-colors" data-testid="btn-submit-inquiry">
                {c.form.submit}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h2 className="font-serif text-3xl text-primary mb-6">{c.directoryTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">{c.hq}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      1 Capital Plaza<br />
                      Government District<br />
                      Republic City, 10001
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">{c.hours}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {c.hoursDetail}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">{c.switchboard}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                      1-800-GOV-INFO<br />
                      (1-800-468-4636)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">{c.generalEmail}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                      contact@republic.gov
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 p-8">
              <h3 className="font-serif text-2xl text-destructive mb-4">{c.emergencyTitle}</h3>
              <ul className="space-y-4 font-mono text-sm">
                {c.emergencyItems.map((item, idx) => (
                  <li key={idx} className={`flex justify-between items-center pb-2 ${idx < c.emergencyItems.length - 1 ? "border-b border-destructive/10" : ""}`}>
                    <span className="text-primary font-sans">{item.label}</span>
                    <strong className="text-destructive text-lg">{item.number}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
