"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Globe } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: "#hero", label: t.nav.home },
    { href: "#stats", label: t.nav.stats },
    { href: "#strategy", label: t.nav.strategy },
    { href: "/yhteystiedot", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const renderLinks = (variant: "desktop" | "mobile" = "desktop") =>
    links.map((link) => {
      const classes =
        variant === "desktop"
          ? cn(
              "text-base font-medium transition-colors",
              "text-foreground/70 hover:text-foreground",
            )
          : cn(
              "text-lg font-medium",
              "text-foreground/80 hover:text-foreground",
            );
      return (
        <Link key={link.href} href={link.href} className={classes}>
          {link.label}
        </Link>
      );
    });

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300",
        isScrolled
          ? "bg-white/95 border-border shadow-sm"
          : "bg-white/75 border-border/70"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/hm2_png.png"
            alt="Hietaneliö Oy"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-xl text-foreground font-semibold uppercase tracking-tight">
            Hietaneliö
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">{renderLinks()}</nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "fi" ? "en" : "fi")}
            className="hidden md:inline-flex items-center gap-2"
            aria-label={language === "fi" ? "Switch to English" : "Vaihda suomeksi"}
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language === "fi" ? "EN" : "FI"}</span>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={language === "fi" ? "Avaa valikko" : "Open menu"}>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-6 flex flex-col gap-4">
                  {renderLinks("mobile")}
                  <Button
                    variant="outline"
                    onClick={() => setLanguage(language === "fi" ? "en" : "fi")}
                    className="flex items-center gap-2 justify-center"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{language === "fi" ? "English" : "Suomi"}</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

