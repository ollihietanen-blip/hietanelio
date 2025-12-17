"use client";

import { motion, type Variants } from "framer-motion";
import { Landmark } from "lucide-react";
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
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-5"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary">
            {t.strategy.title}
          </p>
          <h2 className="font-heading text-2xl leading-tight text-foreground sm:text-3xl md:text-4xl md:leading-tight">
            {t.strategy.heading}
          </h2>
          <p className="text-base leading-relaxed text-foreground/75 md:mt-2">
            {t.strategy.description}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/80">
            {t.strategy.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          className="glass-surface soft-shadow relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-white to-emerald-50/40 p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-primary/20"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,44,34,0.06),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(180,83,9,0.06),transparent_30%)]" />
          <div className="relative space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200">
              <Landmark className="h-4 w-4" aria-hidden />
              {t.strategy.cardTitle}
            </div>
            <p className="text-2xl leading-snug text-foreground">
              {t.strategy.cardHeading}
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              {t.strategy.cardDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


