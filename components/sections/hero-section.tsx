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

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#0f2f27] text-white">
      <Image
        src="/hietanelio-huunala-hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,23,0.94)_0%,rgba(8,28,23,0.72)_42%,rgba(8,28,23,0.24)_78%,rgba(8,28,23,0.08)_100%),linear-gradient(180deg,rgba(8,28,23,0.08),rgba(8,28,23,0.34))]" />

      <div className="relative mx-auto flex min-h-[720px] w-full max-w-7xl items-end px-4 pb-14 pt-28 sm:px-6 md:pb-20 md:pt-36 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.08}
          className="w-full max-w-[680px] border-l border-[#d7c7ae]/70 pl-5 sm:pl-7"
          suppressHydrationWarning
        >
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#d7c7ae] sm:mb-5">
            Hietaneliö Oy
          </p>
          <h1 className="max-w-[560px] text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[0.98] tracking-tight text-white">
            <span className="block">{t.hero.title1}</span>
            <span className="block">{t.hero.title2}</span>
          </h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.14}
            className="mt-6 max-w-[560px] text-[clamp(1.05rem,2vw,1.45rem)] leading-[1.52] text-white/84"
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
    </section>
  );
}
