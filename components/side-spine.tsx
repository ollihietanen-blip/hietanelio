"use client";

import { useLanguage } from "@/context/LanguageContext";

/**
 * A fixed vertical "spine" on the far edge of the viewport that acts as a
 * persistent institutional seal across every page. Purely decorative /
 * supplementary, so it is hidden from assistive tech and only shown on very
 * wide screens where there is gutter space beside the centered content.
 */
export function SideSpine() {
  const { t } = useLanguage();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 z-30 hidden w-10 items-center justify-center 2xl:flex"
    >
      <div className="flex flex-col items-center gap-6">
        <span className="h-16 w-px bg-foreground/20" />
        <span
          className="overline text-foreground/45"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Hietaneliö&nbsp;Oy
        </span>
        <span
          className="text-[11px] tracking-[0.18em] text-foreground/35"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {t.hero.metaId}
        </span>
        <span className="h-16 w-px bg-foreground/20" />
      </div>
    </div>
  );
}
