"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HandCoins, Building, Leaf } from "lucide-react";

const items = [
  {
    title: "Pankkiystävällinen rakenne",
    description:
      "Selkeät vuokrasopimukset, ennakoitava kassavirta ja raportointi, joka auttaa rahoittajia.",
    icon: HandCoins,
  },
  {
    title: "Pitkäjänteinen omistaja",
    description:
      "Ei lyhyen aikavälin flippejä, vaan kunnossapitoa ja arvon kehittämistä vuosikymmeniksi.",
    icon: Building,
  },
  {
    title: "Kestävä pohjoismainen laatu",
    description:
      "Energiatehokkuus, materiaalivalinnat ja huolto toteutetaan Quiet Luxury -henkisesti.",
    icon: Leaf,
  },
];

export function ValueProposition() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-5 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="md:col-span-2 space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary">
            Miksi Hietaneliö
          </p>
          <h2 className="text-3xl text-foreground md:text-4xl">
            Pohjoismainen hiljainen luksus, joka tuntuu vakaudelta.
          </h2>
          <p className="text-base text-foreground/70">
            Yhdistämme rahoittajien turvallisuuden, vuokralaisten viihtyvyyden ja
            omaisuuden pitkäikäisen arvon.
          </p>
          <div className="flex flex-col gap-3 text-sm text-foreground/75">
            {[
              "Rahoittajille: tasainen kassavirta ja konservatiivinen velkavipu.",
              "Vuokralaisille: laadukkaat tilat, jotka skaalautuvat kasvun mukana.",
              "Kumppaneille: päätökset nopeasti paikallisesti.",
            ].map((text) => (
              <div key={text} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="md:col-span-3 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="flex flex-col rounded-xl border border-border/80 bg-card/90 p-4 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

