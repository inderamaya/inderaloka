import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { WeatherAlert } from "@/components/WeatherAlert";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Seal = () => (
  <img
    src="/Jata-Negara.png"
    alt="Jata Negara"
    className="w-12 h-12 object-contain"
  />
);

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
         <div className="flex items-center border border-border overflow-hidden flex-shrink-0" aria-label="Select Language" data-testid="language-switcher">
      <button
        onClick={() => setLanguage("ms")}
        data-testid="lang-btn-ms"
                className={cn("px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:bg-secondary focus-visible:text-primary", language === "ms" ? "bg-accent text-white" : "text-muted-foreground hover:text-primary hover:bg-secondary")}
        aria-pressed={language === "ms"}
         aria-label="Tukar ke Bahasa Melayu"
      >BM</button>
      <div className="w-px h-4 bg-border" />

      <button
        onClick={() => setLanguage("en")}
        data-testid="lang-btn-en"
        className={cn("px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:bg-secondary focus-visible:text-primary", language === "en" ? "bg-accent text-white" : "text-muted-foreground hover:text-primary hover:bg-secondary")}
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
    { href: "/about", label: t.nav.about },
    { href: "/government", label: t.nav.government },
    { href: "/royal", label: t.nav.royal },
    { href: "/tourism", label: t.nav.tourism },
    { href: "/directory", label: t.nav.directory },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-accent selection:text-white font-sans">
      <WeatherAlert />
      <header className="border-b border-border sticky top-0 bg-background z-40 shadow-md">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4 group flex-shrink-0">
            <Seal />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-tight text-primary group-hover:text-accent transition-colors">{t.siteTitle}</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">{t.siteDept}</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("text-xs font-medium tracking-wide uppercase transition-colors hover:text-accent border-b-2 border-transparent pb-1 whitespace-nowrap", isActive(item.href) ? "border-accent text-primary" : "text-muted-foreground")}
                data-testid={`nav-desktop-${item.href === "/" ? "home" : item.href.slice(1).replace("/", "-")}`}
              >{item.label}</Link>
            ))}
            <div className="ml-2 xl:ml-4 pl-4 xl:pl-6 border-l border-border">
              <LanguageSwitcher />
            </div>
          </nav>
          <div className="flex items-center gap-2">

            <ThemeToggle />

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={t.nav.openMenu} data-testid="mobile-menu-trigger">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader className="text-left border-b border-border pb-4 mb-4">
                    <SheetTitle className="flex items-center gap-4">
                      <Seal />
                      <div className="flex flex-col">
                        <span className="font-serif text-lg font-semibold tracking-tight text-primary">{t.siteTitle}</span>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">{t.siteDept}</span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                    <div className="mt-8 mb-6 pb-6 border-b border-border flex justify-start">
                      <LanguageSwitcher />
                    </div>
                    <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn("text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent pb-2 border-b border-border/50", isActive(item.href) ? "text-accent" : "text-muted-foreground")}
                          data-testid={`nav-mobile-${item.href === "/" ? "home" : item.href.slice(1).replace("/", "-")}`}
                        >{item.label}</Link>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col overflow-x-hidden">{children}</main>
      <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Seal />
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-semibold tracking-tight">{t.siteTitle}</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary-foreground/60">{t.siteDept}</span>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed">{t.siteDesc}</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm leading-relaxed text-primary-foreground/80 border-l-2 border-accent pl-6 py-2 italic">
                {t.footer.disclaimer}
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-primary-foreground/50">
            <div>&copy; {new Date().getFullYear()} {t.footer.copyright}</div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary-foreground">{t.footer.privacy}</Link>
              <Link href="#" className="hover:text-primary-foreground">{t.footer.accessibility}</Link>
              <Link href="#" className="hover:text-primary-foreground">{t.footer.terms}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
