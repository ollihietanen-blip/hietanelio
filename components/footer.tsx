"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="relative border-t border-border/80 bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-sm scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="mb-8 max-w-2xl space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            {t.footer.title}
          </p>
          <h2 className="font-heading text-lg leading-tight text-foreground sm:text-xl md:text-2xl md:leading-tight">
            {t.footer.heading}
          </h2>
          <p className="text-sm leading-relaxed text-foreground/70">
            {t.footer.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium text-foreground mb-1.5">{t.footer.office}</p>
              <div className="space-y-1 text-foreground/70">
                <p>Kuninkaanlähteenkatu 8</p>
                <p>38700 Kankaanpää</p>
                <p className="pt-1.5">Koulukatu 13 C 36</p>
                <p>33200 Tampere</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">{t.footer.contact}</p>
              <p>
                <a
                  href="mailto:info@hietanelio.fi"
                  className="text-foreground/70 hover:text-foreground hover:text-accent transition-colors duration-200"
                >
                  info@hietanelio.fi
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium text-foreground mb-1">{t.footer.person}</p>
              <p className="text-foreground/70">{t.footer.personRole}</p>
              <p className="text-foreground/70 mt-0.5">
                <a
                  href="tel:+358504496321"
                  className="text-foreground/70 hover:text-foreground hover:text-accent transition-colors duration-200"
                >
                  +358 50 449 6321
                </a>
              </p>
              <div className="mt-1.5">
                <a
                  href="https://www.linkedin.com/in/olli-hietanen-12545187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground hover:text-accent transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">{t.footer.billing}</p>
              <p className="text-foreground/70">{t.footer.billingCompany}</p>
              <p className="text-foreground/70">{t.footer.billingId}</p>
            </div>
            <div>
              <Link
                href="/Verkkolaskutiedote_240520074103.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground hover:text-accent transition-colors duration-200 underline decoration-foreground/30 hover:decoration-accent/50"
              >
                {t.footer.invoiceLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-foreground/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Hietaneliö Oy. {t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

