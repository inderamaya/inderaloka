import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Search as SearchIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function Search() {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

      const searchItems: any[] = [
        { title: t.nav.home, href: "/" },
        { title: t.nav.services, href: "/services" },
        { title: t.nav.news, href: "/news" },
        { title: t.nav.about, href: "/about" },
        { title: t.nav.government, href: "/government" },
        { title: t.nav.royal, href: "/royal" },
        { title: t.nav.tourism, href: "/tourism" },
        { title: t.nav.directory, href: "/directory" },
        { title: t.nav.contact, href: "/contact" },
        { title: translations[language].about.subpages[0].title, href: "/about/history" },
        { title: translations[language].about.subpages[1].title, href: "/about/constitution" },
        { title: translations[language].about.subpages[2].title, href: "/about/national-symbols" },
        { title: translations[language].about.subpages[3].title, href: "/about/administrative-division" },
        { title: translations[language].about.subpages[4].title, href: "/about/currency" },
        { title: (translations[language] as any).government.landing.subpages[0].title, href: "/government/executive" },
        { title: (translations[language] as any).government.landing.subpages[1].title, href: "/government/legislative" },
        { title: (translations[language] as any).government.landing.subpages[2].title, href: "/government/judiciary" },
        { title: (translations[language] as any).government.landing.subpages[3].title, href: "/government/state-officials" },
        { title: (translations[language] as any).tourism.breadcrumbCurrent, href: "/tourism" },
  ];

  return (
    <>
      <Button
        variant="outline"
        className="relative h-10 w-10 lg:w-64 lg:justify-start rounded-none border-border text-muted-foreground font-normal"
        onClick={() => setOpen(true)}
        data-testid="search-trigger"
      >
        <SearchIcon className="h-4 w-4 lg:mr-2" />
        <span className="hidden lg:inline-flex">{t.search.placeholder}</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2.5 hidden h-5 select-none items-center gap-1 border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t.search.placeholder} />
        <CommandList>
          <CommandEmpty>{t.search.noResults}</CommandEmpty>
          <CommandGroup heading="Pages">
            {searchItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  setLocation(item.href);
                  setOpen(false);
                }}
                className="cursor-pointer"
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
