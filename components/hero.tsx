"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Trees } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,44,34,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(180,83,9,0.08),transparent_35%)]" />
        <div className="absolute inset-x-0 top-10 mx-auto h-64 max-w-4xl rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-amber-100/30 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-white/70 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Trees className="h-4 w-4" />
            </span>
            Kankaanpää, Satakunta · Vastuullinen kiinteistöomistaja
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl leading-tight text-foreground md:text-5xl">
              Vastuullista kiinteistöomistamista ja tilaa kasvulle.
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Hietaneliö Oy tarjoaa vakaita, hyvin hoidettuja kiinteistöjä
              Satakunnan kasvaville yrityksille. Pidämme huolta omaisuudesta
              pitkäjänteisesti ja tuotamme läpinäkyvää arvoa rahoittajille.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="soft-shadow">
              <Link href="/yhteystiedot">
                Ota yhteyttä
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border border-border/80">
              <Link href="/yritys">Tutustu yritykseen</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Liikevaihto 2024", value: "130 000 €", detail: "+6% kasvu" },
              { label: "Liikevoittoprosentti", value: "54 %", detail: "Poikkeuksellisen vakaa" },
              {
                label: "Sijoitusalue",
                value: "Koko Suomi",
                detail: "Pääpaino Satakunnassa ja Pirkanmaalla",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-surface soft-shadow rounded-xl border border-border/70 p-4"
              >
                <p className="text-xs uppercase tracking-[0.08em] text-foreground/60">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl text-foreground">
                  {item.value}
                </p>
                <p className="text-sm text-foreground/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex-1"
        >
          <div className="glass-surface soft-shadow relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-white to-emerald-50/40 p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,44,34,0.06),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(180,83,9,0.05),transparent_30%)]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">
                Forest &amp; Stone
              </p>
              <p className="text-3xl leading-snug text-foreground">
                Vakaa tuotto, moderni pohjoismainen laatu ja kumppanuus
                rahoittajien kanssa.
              </p>
              <p className="text-base text-foreground/75">
                Panostamme talotekniikkaan, energiatehokkuuteen ja
                pitkäaikaisiin vuokrasuhteisiin, jotta tilat palvelevat
                yrityksiä vuosikymmeniksi.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

