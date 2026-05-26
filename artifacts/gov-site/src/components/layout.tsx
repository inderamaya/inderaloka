import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { Menu, Home, Grid, Newspaper, Landmark, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const Seal = () => (
  <img
    src="/Jata-Negara.png"
    alt="Jata Negara"
    className="w-12 h-12 object-contain filter drop-shadow-lg"
  />
);

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex items-center glass-effect rounded-full overflow-hidden flex-shrink-0" aria-label="Select Language" data-testid="language-switcher">
      <button
        onClick={() => setLanguage("ms")}
        data-testid="lang-btn-ms"
        className={cn("px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all focus-visible:outline-none", language === "ms" ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground hover:text-primary")}
        aria-pressed={language === "ms"}
        aria-label="Tukar ke Bahasa Melayu"
      >BM</button>
      <div className="w-px h-3 bg-border/20" />
      <button
        onClick={() => setLanguage("en")}
        data-testid="lang-btn-en"
        className={cn("px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all focus-visible:outline-none", language === "en" ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground hover:text-primary")}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
      >EN</button>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/services", label: t.nav.services, icon: Grid },
    { href: "/news", label: t.nav.news, icon: Newspaper },
    { href: "/government", label: t.nav.government, icon: Landmark },
    { href: "/royal", label: t.nav.royal, icon: Landmark },
    { href: "/contact", label: t.nav.contact, icon: Phone },
  ];

  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-accent selection:text-accent-foreground font-sans overflow-x-hidden">
      <div className="bg-navy text-white text-[10px] font-mono py-2 text-center border-b border-white/5 tracking-[0.2em] uppercase relative z-[60]">
        {t.officialBanner}
      </div>

      <header className="fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-effect rounded-2xl px-6 lg:px-8 py-4 flex items-center justify-between gap-4 border-white/10"
        >
          <Link href="/" className="flex items-center gap-4 group flex-shrink-0">
            <Seal />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">{t.siteTitle}</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">{t.siteDept}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[10px] font-bold tracking-[0.1em] uppercase transition-all hover:text-accent relative py-2",
                  isActive(item.href) ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent" : "text-muted-foreground"
                )}
                data-testid={`nav-desktop-${item.href === "/" ? "home" : item.href.slice(1).replace("/", "-")}`}
              >{item.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10" aria-label={t.nav.openMenu} data-testid="mobile-menu-trigger">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] glass-effect border-l border-white/10">
                  <SheetHeader className="text-left border-b border-white/10 pb-6 mb-8">
                    <SheetTitle className="flex items-center gap-4">
                      <Seal />
                      <div className="flex flex-col">
                        <span className="font-serif text-2xl font-bold tracking-tight text-foreground">{t.siteTitle}</span>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">{t.siteDept}</span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                    <div className="mb-12">
                      <LanguageSwitcher />
                    </div>
                    <nav className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg font-serif tracking-tight transition-all hover:text-accent flex items-center justify-between group",
                            isActive(item.href) ? "text-accent" : "text-muted-foreground"
                          )}
                          data-testid={`nav-mobile-${item.href === "/" ? "home" : item.href.slice(1).replace("/", "-")}`}
                        >
                          {item.label}
                          <item.icon className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="flex-1 flex flex-col pt-32">{children}</main>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
        <div className="glass-effect rounded-full px-6 py-3 flex items-center justify-around border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
          {navItems.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href} className={cn(
              "flex flex-col items-center gap-1 transition-all",
              isActive(item.href) ? "text-accent" : "text-muted-foreground"
            )}>
              <item.icon className="w-5 h-5" />
              <span className="text-[8px] uppercase font-bold tracking-tighter">{item.label}</span>
            </Link>
          ))}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex flex-col items-center gap-1 text-muted-foreground">
                <Menu className="w-5 h-5" />
                <span className="text-[8px] uppercase font-bold tracking-tighter">Menu</span>
              </button>
            </SheetTrigger>
          </Sheet>
        </div>
      </div>

      <footer className="bg-navy text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <Seal />
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold tracking-tight">{t.siteTitle}</span>
                  <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-accent">{t.siteDept}</span>
                </div>
              </div>
              <p className="text-sm text-white/60 max-w-sm leading-relaxed font-light">{t.siteDesc}</p>
            </div>
            <div>
              <h3 className="font-mono uppercase text-[10px] tracking-[0.3em] text-accent mb-8">{t.footer.directory}</h3>
              <ul className="flex flex-col gap-4 text-sm font-light">
                {navItems.map(item => (
                  <li key={item.href}><Link href={item.href} className="hover:text-accent transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono uppercase text-[10px] tracking-[0.3em] text-accent mb-8">{t.footer.contact}</h3>
              <ul className="flex flex-col gap-4 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="opacity-40">Add:</span>
                  <span>1 Capital Plaza, Government District, 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="opacity-40">Tel:</span>
                  <span className="font-mono text-accent">1-800-GOV-INFO</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="opacity-40">Em:</span>
                  <span>contact@indera.gov</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-widest text-white/30 uppercase">
            <div>&copy; {new Date().getFullYear()} {t.footer.copyright}</div>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
              <Link href="#" className="hover:text-white transition-colors">{t.footer.accessibility}</Link>
              <Link href="#" className="hover:text-white transition-colors">{t.footer.terms}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
