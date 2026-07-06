"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import { EntryHeader } from "@/components/entry-header";
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

  const cards = [
    {
      label: t.strategy.apartmentLabel,
      title: t.strategy.apartmentTitle,
      description: t.strategy.apartmentDescription,
      src: "/hietanelio-huunala-interior.webp",
      alt: "Asuntokohteen sisätila",
      object: "object-[58%_center]",
      ref: "A",
    },
    {
      label: t.strategy.hallLabel,
      title: t.strategy.hallTitle,
      description: t.strategy.hallDescription,
      src: "/hietanelio-hertc2-halli.jpg",
      alt: "Hallikohde",
      object: "object-center",
      ref: "B",
    },
  ];

  return (
    <section className="bg-[#f3f1ec]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <EntryHeader
          index="02"
          label={t.strategy.title}
          heading={t.strategy.heading}
          description={t.strategy.description}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.article
              key={card.ref}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 + index * 0.06}
              className="group relative flex min-h-[380px] flex-col overflow-hidden bg-black text-white md:min-h-[480px]"
            >
              <Image
                src={card.src || "/placeholder.svg"}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover ${card.object} transition-transform duration-700 group-hover:scale-[1.03]`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,20,0.04)_0%,rgba(8,24,20,0.8)_100%),linear-gradient(90deg,rgba(8,24,20,0.34),rgba(8,24,20,0.03))]" />

              {/* Plate reference — top corner, like a catalogued photograph */}
              <div className="relative flex items-center justify-between px-6 pt-6 md:px-8 md:pt-8">
                <span className="overline text-[#d7c7ae]">{card.label}</span>
                <span className="serif-italic text-lg text-white/55">
                  {`0${index + 1} / 02`}
                </span>
              </div>

              <div className="relative mt-auto flex items-end p-6 md:p-8">
                <div className="max-w-[520px]">
                  <h3 className="text-[clamp(1.8rem,3.2vw,3rem)] font-medium leading-[1.09] tracking-[-0.01em] text-white text-balance">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-[1.62] text-white/78">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
