"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay },
  }),
};

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden border-b border-border/60 bg-gradient-to-b from-white/80 to-emerald-50/20">
      <div className="pointer-events-none absolute inset-0">
        {/* Taustakuva koko sectionin taustalla */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/Pyynikin Panimo ulkokuva.jpg?v=3"
            alt=""
            fill
            className="object-cover object-center opacity-20"
            priority
            aria-hidden="true"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/60 to-white/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(2,44,34,0.12),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(180,83,9,0.12),transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <div className="space-y-10 md:col-span-3">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.08}
              className="font-heading text-3xl leading-[1.15] text-foreground sm:text-4xl sm:leading-[1.1] md:text-5xl md:leading-[1.15] drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              suppressHydrationWarning
            >
              {t.hero.title1}
              <br />
              {t.hero.title2}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.14}
              className="max-w-xl text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed text-foreground/80"
              suppressHydrationWarning
            >
              {t.hero.description}
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.18}
              className="flex flex-wrap items-center gap-3 pt-2"
              suppressHydrationWarning
            >
              <Button asChild variant="outline" size="default" className="group min-h-[44px] bg-[rgba(247,245,244,1)] text-foreground/90 hover:bg-[rgba(247,245,244,0.95)] hover:text-foreground border-[rgba(231,229,228,0.5)] shadow-lg hover:shadow-xl hover:shadow-[rgba(231,229,228,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold md:h-12 md:px-6 md:text-base hover:border-[rgba(231,229,228,0.7)] hover:border-primary/20 backdrop-blur-sm">
                <Link href="#footer">
                  {t.hero.contactButton}
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="group min-h-[44px] bg-[rgba(247,245,244,1)] text-foreground/90 hover:bg-[rgba(247,245,244,0.95)] hover:text-foreground border-[rgba(231,229,228,0.5)] shadow-lg hover:shadow-xl hover:shadow-[rgba(231,229,228,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold md:h-12 md:px-6 md:text-base hover:border-[rgba(231,229,228,0.7)] hover:border-primary/20 backdrop-blur-sm">
                <Link href="#strategy">
                  {t.hero.strategyButton}
                  <ArrowDownRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="flex flex-wrap items-center gap-4"
              suppressHydrationWarning
            >
              <span className="text-sm text-foreground/75 drop-shadow-sm">
                {t.hero.tagline}
              </span>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="space-y-4 md:col-span-2"
            suppressHydrationWarning
          >
            <div className="glass-surface soft-shadow rounded-2xl border border-border/70 p-5 text-sm text-foreground/80">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                {t.hero.focus}
              </p>
              <p className="mt-2 text-xl text-foreground">
                {t.hero.focusTitle}
              </p>
              <p className="mt-2">
                {t.hero.focusDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


