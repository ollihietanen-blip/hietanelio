"use client";

import { motion } from "framer-motion";
import { Banknote, Building2, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    title: "54 % liikevoitto",
    description: "Poikkeuksellisen vakaa kannattavuus ja kassavirta.",
    icon: ShieldCheck,
    badge: "Vakaa",
    className: "md:col-span-2",
  },
  {
    title: "130 000 € liikevaihto",
    description: "+6 % kasvu 2024. Ennakoitavat tuotot rahoittajille.",
    icon: Banknote,
    badge: "Kasvu",
    className: "",
  },
  {
    title: "Kankaanpää · Satakunta & Tampere · Pirkanmaa",
    description:
      "Paikallinen läsnäolo mahdollistaa nopeat päätökset ja luotettavan ylläpidon.",
    icon: Building2,
    badge: "Sijainti",
    className: "",
  },
];

export function BentoStats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary">
            Mittarit
          </p>
          <h2 className="font-heading text-3xl text-foreground md:text-4xl">
            Vakaus, kasvu ja läpinäkyvyys
          </h2>
          <p className="max-w-2xl text-base text-foreground/70">
            Tulokset, jotka puhuttelevat rahoittajia ja pitkäaikaisia vuokralaisia.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className={item.className}
            >
              <Card className="h-full overflow-hidden border-border/70 bg-white/80 shadow-sm">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      {item.badge}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardTitle className="text-2xl leading-snug">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

