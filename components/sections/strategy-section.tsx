"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay },
  }),
};

export default function StrategySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f3f1ec]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] md:items-end"
        >
          <div className="space-y-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-foreground/60">
              {t.strategy.title}
            </p>
            <h2 className="max-w-[720px] text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.04] tracking-tight text-foreground">
              {t.strategy.heading}
            </h2>
          </div>
          <p className="max-w-[460px] text-[17px] leading-[1.65] text-foreground/62">
            {t.strategy.description}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.08}
            className="group relative min-h-[350px] overflow-hidden bg-black text-white md:min-h-[460px]"
          >
            <Image
              src="/hietanelio-huunala-interior.webp"
              alt="Asuntokohteen sisätila"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[58%_center] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,20,0.02)_0%,rgba(8,24,20,0.78)_100%),linear-gradient(90deg,rgba(8,24,20,0.38),rgba(8,24,20,0.03))]" />
            <div className="relative flex min-h-[350px] items-end p-6 md:min-h-[460px] md:p-8">
              <div className="max-w-[520px]">
                <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#d7c7ae]">
                  {t.strategy.apartmentLabel}
                </p>
                <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-semibold leading-[1.06] tracking-tight text-white">
                  {t.strategy.apartmentTitle}
                </h3>
                <p className="mt-4 text-base leading-[1.62] text-white/78">
                  {t.strategy.apartmentDescription}
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.14}
            className="group relative min-h-[350px] overflow-hidden bg-black text-white md:min-h-[460px]"
          >
            <Image
              src="/hietanelio-hertc2-halli.jpg"
              alt="Hallikohde"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,20,0.06)_0%,rgba(8,24,20,0.76)_100%),linear-gradient(90deg,rgba(8,24,20,0.28),rgba(8,24,20,0.04))]" />
            <div className="relative flex min-h-[350px] items-end p-6 md:min-h-[460px] md:p-8">
              <div className="max-w-[520px]">
                <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#d7c7ae]">
                  {t.strategy.hallLabel}
                </p>
                <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-semibold leading-[1.06] tracking-tight text-white">
                  {t.strategy.hallTitle}
                </h3>
                <p className="mt-4 text-base leading-[1.62] text-white/78">
                  {t.strategy.hallDescription}
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
