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

export default function Contact() {
  return (
    <div className="flex-1 w-full bg-background pb-24">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb className="mb-6 font-mono uppercase tracking-widest text-[10px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white/60 hover:text-white">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">Contact the Government</h1>
          <p className="text-white/70 text-lg max-w-2xl font-light">
            Official channels for public inquiries, emergency contacts, and department directories.
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
            <h2 className="font-serif text-3xl text-primary mb-8">Official Inquiries</h2>
            <form className="space-y-6 bg-secondary p-8 border border-border" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-mono text-xs uppercase tracking-widest text-primary">First Name</Label>
                  <Input id="firstName" className="rounded-none bg-white border-border focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-mono text-xs uppercase tracking-widest text-primary">Last Name</Label>
                  <Input id="lastName" className="rounded-none bg-white border-border focus-visible:ring-accent" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-primary">Email Address</Label>
                <Input id="email" type="email" className="rounded-none bg-white border-border focus-visible:ring-accent" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department" className="font-mono text-xs uppercase tracking-widest text-primary">Direct Inquiry To</Label>
                <select id="department" className="flex h-10 w-full rounded-none border border-border bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 font-sans">
                  <option value="">Select Department...</option>
                  <option value="state">Department of State</option>
                  <option value="finance">Department of Finance</option>
                  <option value="health">Department of Health</option>
                  <option value="transport">Department of Transport</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-primary">Message</Label>
                <Textarea id="message" rows={5} className="rounded-none bg-white border-border focus-visible:ring-accent resize-none" />
              </div>
              
              <Button type="submit" className="w-full rounded-none h-12 bg-primary text-white hover:bg-accent font-mono uppercase tracking-widest text-xs transition-colors">
                Submit Official Inquiry
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
              <h2 className="font-serif text-3xl text-primary mb-6">Directory Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">Headquarters</h4>
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
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">Hours of Operation</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monday - Friday<br />
                      08:00 - 17:00 (Local Time)<br />
                      Closed on State Holidays
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">Main Switchboard</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                      1-800-GOV-INFO<br />
                      (1-800-468-4636)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">General Email</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                      contact@republic.gov
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 p-8">
              <h3 className="font-serif text-2xl text-destructive mb-4">Emergency Contacts</h3>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex justify-between items-center border-b border-destructive/10 pb-2">
                  <span className="text-primary font-sans">Police / Medical / Fire</span>
                  <strong className="text-destructive text-lg">911</strong>
                </li>
                <li className="flex justify-between items-center border-b border-destructive/10 pb-2">
                  <span className="text-primary font-sans">National Security Hotline</span>
                  <strong className="text-destructive text-lg">311</strong>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-primary font-sans">Disaster Response</span>
                  <strong className="text-destructive text-lg">511</strong>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
