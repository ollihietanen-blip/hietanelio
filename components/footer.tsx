"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="scroll-mt-24 bg-[#163a2f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-[780px] space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d7c7ae]" aria-hidden="true" />
              <p className="overline text-[#d7c7ae]">{t.footer.title}</p>
            </div>
            <h2 className="max-w-[780px] text-[clamp(2.5rem,5.2vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.01em] text-white">
              {t.footer.heading}
            </h2>
            <p className="max-w-[620px] text-[17px] leading-[1.65] text-white/76">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-3 md:text-right">
            <a
              href="mailto:info@hietanelio.fi"
              className="inline-flex min-h-[56px] items-center justify-center border border-[#d7c7ae] bg-[#d7c7ae] px-7 text-[15px] font-semibold text-[#1f1f1f] transition-colors hover:bg-[#e1d3bc]"
            >
              info@hietanelio.fi
            </a>
            <p className="text-sm text-white/68">
              Olli Hietanen{" "}
              <a
                href="tel:+358504496321"
                className="transition-colors hover:text-white"
              >
                +358 50 449 6321
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#101a16]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-white/70 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <span>Hietaneliö Oy</span>
          <span>Kuninkaanlähteenkatu 8, 38700 Kankaanpää</span>
          <span>{t.footer.billingId}</span>
        </div>
      </div>
    </footer>
  );
}
