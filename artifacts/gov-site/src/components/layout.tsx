import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { WeatherAlert } from "@/components/WeatherAlert";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Seal = ({ className }: { className?: string }) => (
  <img
    src="/Jata-Negara.png"
    alt="Jata Negara"
    className={cn("w-12 h-12 object-contain", className)}
  />
);

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex items-center glass-effect border border-white/10 overflow-hidden flex-shrink-0 rounded-full w-full" aria-label="Select Language" data-testid="language-switcher">
      <button
        onClick={() => setLanguage("ms")}
        data-testid="lang-btn-ms"
        className={cn("flex-1 px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-all focus-visible:outline-none", language === "ms" ? "bg-accent text-white" : "text-muted-foreground hover:text-primary hover:bg-white/10")}
        aria-pressed={language === "ms"}
        aria-label="Tukar ke Bahasa Melayu"
      >MS</button>
      <button
        onClick={() => setLanguage("en")}
        data-testid="lang-btn-en"
        className={cn("flex-1 px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-all focus-visible:outline-none", language === "en" ? "bg-accent text-white" : "text-muted-foreground hover:text-primary hover:bg-white/10")}
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
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/news", label: t.nav.news },
    { href: "/government", label: t.nav.government },
    { href: "/royal", label: t.nav.royal },
    { href: "/tourism", label: t.nav.tourism },
    { href: "/about", label: t.nav.about },
    { href: "/directory", label: t.nav.directory },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-accent selection:text-white font-sans overflow-x-hidden relative">
      <AnimatedBackground />
      <WeatherAlert />

      <header className="fixed top-0 z-50 w-full transition-all duration-300">
        <div className="container mx-auto px-6 lg:px-8 py-5">
          <nav className="glass-effect premium-shadow rounded-2xl flex items-center justify-between px-6 py-3 border border-white/20 backdrop-blur-2xl">
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <Seal className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-primary leading-tight">{t.siteTitle}</span>
                <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-accent font-semibold">{t.siteDept}</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-all rounded-lg relative group overflow-hidden whitespace-nowrap",
                    isActive(item.href) ? "text-accent" : "text-muted-foreground hover:text-primary"
                  )}
                  data-testid={`nav-desktop-${item.href === "/" ? "home" : item.href.slice(1).replace("/", "-")}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <ThemeToggle />

              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white/10" aria-label={t.nav.openMenu} data-testid="mobile-menu-trigger">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-background/95 backdrop-blur-3xl border-l border-white/20 shadow-2xl w-[300px] p-0 overflow-hidden">
                    <div className="h-full flex flex-col">
                      <SheetHeader className="p-6 text-left border-b border-white/10">
                        <SheetTitle className="flex items-center gap-3">
                          <Seal className="w-8 h-8" />
                          <div className="flex flex-col">
                            <span className="font-serif text-base font-bold text-primary">{t.siteTitle}</span>
                            <span className="text-[8px] uppercase font-mono tracking-[0.2em] text-accent font-semibold">{t.siteDept}</span>
                          </div>
                        </SheetTitle>
                      </SheetHeader>

                      <div className="flex-1 overflow-y-auto py-6 px-4">
                        <div className="mb-8 block sm:hidden px-2">
                          <LanguageSwitcher />
                        </div>
                        <nav className="space-y-1">
                          {navItems.map((item) => (
                            <SheetClose asChild key={item.href}>
                              <Link
                                href={item.href}
                                className={cn(
                                  "flex items-center justify-between px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all",
                                  isActive(item.href) ? "bg-accent text-white shadow-lg" : "text-muted-foreground hover:bg-white/10 hover:text-primary"
                                )}
                                data-testid={`nav-mobile-${item.href === "/" ? "home" : item.href.slice(1).replace("/", "-")}`}
                              >
                                {item.label}
                                <ChevronRight className="w-4 h-4 opacity-50" />
                              </Link>
                            </SheetClose>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative z-0">{children}</main>

      <footer className="relative mt-20 bg-primary dark:bg-card border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-8 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white">
                <Seal className="w-14 h-14" />
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold tracking-tight text-white">{t.siteTitle}</span>
                  <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-accent font-bold">{t.siteDept}</span>
                </div>
              </div>
              <p className="text-sm text-white/60 max-w-sm leading-relaxed font-light">{t.siteDesc}</p>
            </div>

            <div>
              <h3 className="font-mono uppercase text-[10px] tracking-[0.3em] text-accent font-bold mb-8">{t.footer.directory}</h3>
              <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest">
                {navItems.slice(0, 5).map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/60 hover:text-accent transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-accent/30 rounded-full group-hover:bg-accent transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono uppercase text-[10px] tracking-[0.3em] text-accent font-bold mb-8">{t.contact.emergencyTitle}</h3>
              <div className="space-y-6">
                {t.contact.emergencyItems.map((item: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-white/40">{item.label}</span>
                    <span className="text-lg font-mono font-bold text-white leading-none">{item.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-widest text-white/30 uppercase">
            <div>&copy; {new Date().getFullYear()} {t.footer.copyright}</div>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-accent transition-colors">{t.footer.privacy}</Link>
              <Link href="#" className="hover:text-accent transition-colors">{t.footer.accessibility}</Link>
              <Link href="#" className="hover:text-accent transition-colors">{t.footer.terms}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
