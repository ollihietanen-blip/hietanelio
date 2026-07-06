"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Globe } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const links = [
    ...(isHome ? [] : [{ href: "/", label: t.nav.home }]),
    { href: sectionHref("#stats"), label: t.nav.stats },
    { href: sectionHref("#strategy"), label: t.nav.strategy },
    { href: isHome ? "#footer" : "/yhteystiedot", label: t.nav.contact },
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
              isTransparent
                ? "text-white/86 hover:text-[#d7c7ae]"
                : "text-foreground/72 hover:text-foreground",
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
        isHome ? "fixed inset-x-0 top-0 z-40" : "sticky top-0 z-40",
        "transition-all duration-300",
        isTransparent
          ? "border-transparent bg-transparent"
          : "border-b border-border/80 bg-white/92 shadow-sm backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/hietanelio-logo-hm2-cropped.png"
            alt="Hietaneliö Oy"
            width={86}
            height={78}
            className={cn(
              "h-auto w-[72px] object-contain md:w-[86px]",
              isTransparent && "brightness-0 invert",
            )}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">{renderLinks()}</nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "fi" ? "en" : "fi")}
            className={cn(
              "hidden items-center gap-2 md:inline-flex",
              isTransparent && "text-white hover:bg-white/10 hover:text-white",
            )}
            aria-label={language === "fi" ? "Switch to English" : "Vaihda suomeksi"}
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language === "fi" ? "EN" : "FI"}</span>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(isTransparent && "text-white hover:bg-white/10 hover:text-white")}
                  aria-label={language === "fi" ? "Avaa valikko" : "Open menu"}
                >
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
