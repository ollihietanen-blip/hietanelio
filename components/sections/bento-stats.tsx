"use client";

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

export default function BentoStats() {
  const { t } = useLanguage();
  const items = [
    {
      number: t.stats.areaTitle,
      title: t.stats.areaValue,
      description: t.stats.areaDescription,
    },
    {
      number: t.stats.projectsTitle,
      title: t.stats.projectsValue,
      description: t.stats.projectsDescription,
    },
    {
      number: t.stats.occupancyTitle,
      title: t.stats.occupancyValue,
      description: t.stats.occupancyDescription,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <EntryHeader
          index="01"
          label={t.stats.title}
          heading={t.stats.heading}
          description={t.stats.description}
        />

        {/* Entries stacked as a numbered record */}
        <div className="mt-14 border-t border-black/10">
          {items.map((item, index) => (
            <motion.article
              key={item.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.05 * (index + 1)}
              className="grid gap-4 border-b border-black/10 py-8 md:grid-cols-[auto_minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12 md:py-10"
            >
              <span className="serif-italic text-3xl leading-none text-[#163a2f]/40 md:text-4xl">
                {item.number}
              </span>
              <h3 className="text-[clamp(1.7rem,2.6vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.01em] text-[#163a2f] text-balance">
                {item.title}
              </h3>
              <p className="max-w-[440px] text-[16px] leading-[1.65] text-foreground/62">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
