"use client";

import { motion, type Variants } from "framer-motion";
import { Banknote, Building2, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-10 space-y-3"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          {t.stats.title}
        </p>
        <h2 className="font-heading text-2xl leading-tight text-foreground sm:text-3xl md:text-4xl md:leading-tight">
          {t.stats.heading}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/70 md:mt-2">
          {t.stats.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0.05}
        >
          <Card className="h-full overflow-hidden border-border/70 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md hover:bg-white/85">
            <CardHeader className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200">
                <Building2 className="h-4 w-4" aria-hidden />
                {t.stats.areaTitle}
              </div>
              <CardTitle className="text-3xl md:text-4xl">
                {t.stats.areaValue}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-foreground/75">
              {t.stats.areaDescription}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0.1}
        >
          <Card className="h-full border-border/70 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md hover:bg-white/85">
            <CardHeader className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200">
                <ShieldCheck className="h-4 w-4" aria-hidden />
                {t.stats.projectsTitle}
              </div>
              <CardTitle className="text-3xl md:text-4xl">
                {t.stats.projectsValue}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-foreground/75">
              {t.stats.projectsDescription}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0.15}
        >
          <Card className="h-full border-border/70 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md hover:bg-white/85">
            <CardHeader className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200">
                <Banknote className="h-4 w-4" aria-hidden />
                {t.stats.occupancyTitle}
              </div>
              <CardTitle className="text-3xl md:text-4xl">
                {t.stats.occupancyValue}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/75">
              {t.stats.occupancyDescription}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}


