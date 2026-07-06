"use client";

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
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] md:items-end"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#163a2f]/40" aria-hidden="true" />
              <p className="overline text-[#163a2f]">{t.hero.focus}</p>
            </div>
            <h2 className="max-w-[720px] text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.06] tracking-[-0.01em] text-foreground">
              {t.stats.heading}
            </h2>
          </div>
          <p className="max-w-[440px] text-[17px] leading-[1.65] text-foreground/62">
            {t.stats.description}
          </p>
        </motion.div>

        <div className="mt-10 grid border-y border-black/10 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.05 * (index + 1)}
              className={[
                "min-h-[170px] py-6 md:py-7",
                index > 0 ? "border-t border-black/10 md:border-l md:border-t-0" : "",
                index === 0 ? "md:pr-7" : "md:px-7",
              ].join(" ")}
            >
              <p className="serif-italic text-2xl leading-none text-[#163a2f]/45">
                {item.number}
              </p>
              <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.01em] text-[#163a2f]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[320px] text-base leading-[1.6] text-foreground/62">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
