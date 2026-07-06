"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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

  const contents = [
    { index: "01", label: t.nav.stats, href: "#stats" },
    { index: "02", label: t.nav.strategy, href: "#strategy" },
    { index: "03", label: t.nav.contact, href: "#footer" },
  ];

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0f2f27] text-white">
      <Image
        src="/hietanelio-huunala-hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,23,0.92)_0%,rgba(8,28,23,0.7)_44%,rgba(8,28,23,0.26)_80%,rgba(8,28,23,0.1)_100%),linear-gradient(180deg,rgba(8,28,23,0.28),rgba(8,28,23,0.14)_40%,rgba(8,28,23,0.46))]" />

      {/* Meta row — reads like the header of a record */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 pt-24 sm:px-6 md:pt-28 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/20 pt-4"
          suppressHydrationWarning
        >
          <span className="overline text-[#d7c7ae]">{t.hero.metaFamily}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden="true" />
          <span className="overline text-white/70">{t.hero.metaLocation}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden="true" />
          <span className="overline text-white/70">{t.hero.metaId}</span>
        </motion.div>
      </div>

      {/* Statement */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-14 sm:px-6 md:py-20 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.08}
          className="w-full max-w-[760px]"
          suppressHydrationWarning
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d7c7ae]" aria-hidden="true" />
            <p className="overline text-[#d7c7ae]">{t.hero.recordLabel}</p>
          </div>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[1.0] tracking-[-0.015em] text-white text-balance">
            <span className="block">{t.hero.title1}</span>
            <span className="serif-italic block text-[#e6d8bf]">{t.hero.title2}</span>
          </h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.14}
            className="mt-7 max-w-[560px] text-[clamp(1.05rem,2vw,1.4rem)] leading-[1.55] text-white/84"
            suppressHydrationWarning
          >
            {t.hero.description}
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-8 flex flex-wrap gap-3"
            suppressHydrationWarning
          >
            <Button
              asChild
              size="lg"
              className="min-h-[54px] rounded-none border border-[#d7c7ae] bg-[#d7c7ae] px-7 text-[15px] font-semibold text-[#1f1f1f] hover:bg-[#e1d3bc]"
            >
              <Link href="#stats">{t.hero.strategyButton}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-[54px] rounded-none border border-white/55 bg-white/6 px-7 text-[15px] font-semibold text-white hover:bg-white/12 hover:text-white"
            >
              <Link href="#footer">{t.hero.contactButton}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contents index bar — the recurring "table of contents" motif */}
      <motion.nav
        aria-label={t.hero.contentsLabel}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.28}
        className="relative border-t border-white/20 bg-[#0b241d]/40 backdrop-blur-sm"
        suppressHydrationWarning
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-stretch justify-between gap-2 py-1">
            <span className="hidden items-center py-4 pr-6 sm:flex">
              <span className="overline text-white/45">{t.hero.contentsLabel}</span>
            </span>
            <div className="grid flex-1 grid-cols-3">
              {contents.map((item) => (
                <Link
                  key={item.index}
                  href={item.href}
                  className="group flex items-baseline gap-3 border-l border-white/15 py-4 pl-4 transition-colors hover:bg-white/5 sm:pl-6"
                >
                  <span className="serif-italic text-lg text-[#e6d8bf]/70">{item.index}</span>
                  <span className="text-[15px] font-medium text-white/85 transition-colors group-hover:text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </section>
  );
}
