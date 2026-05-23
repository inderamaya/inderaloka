import React from "react";
import { Link, useLocation } from "wouter";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Seal = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
    <path d="M50 20 L75 35 V65 L50 80 L25 65 V35 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M50 30 L65 42.5 V57.5 L50 70 L35 57.5 V42.5 Z" fill="currentColor" />
  </svg>
);

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-accent selection:text-white font-sans">
      <div className="bg-primary text-white text-xs font-mono py-1 text-center border-b border-white/10 tracking-widest uppercase">
        Official Website of the Government
      </div>
      
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <Seal />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-tight text-primary group-hover:text-accent transition-colors">Republic Portal</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Department of State</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent border-b-2 border-transparent pb-1",
                  location === item.href ? "border-accent text-primary" : "text-muted-foreground"
                )}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white">
                <Seal />
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-semibold tracking-tight">Republic Portal</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/60">Department of State</span>
                </div>
              </div>
              <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                The official digital presence. Providing structured, dignified, and clear information to citizens and international visitors.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono uppercase text-xs tracking-widest text-white/50 mb-6">Directory</h3>
              <ul className="flex flex-col gap-4 text-sm">
                {navItems.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-accent transition-colors hover:underline underline-offset-4 decoration-accent/50">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono uppercase text-xs tracking-widest text-white/50 mb-6">Contact</h3>
              <ul className="flex flex-col gap-4 text-sm text-white/80">
                <li>1 Capital Plaza<br />Government District, 10001</li>
                <li className="font-mono text-accent">1-800-GOV-INFO</li>
                <li>contact@republic.gov</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
            <div>&copy; {new Date().getFullYear()} Government of the Republic. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Accessibility</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
