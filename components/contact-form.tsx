"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Anna vähintään etunimi ja sukunimi"),
  email: z.string().email("Anna toimiva sähköposti"),
  company: z.string().min(2, "Yrityksen nimi vaaditaan"),
  message: z.string().min(10, "Kerro lyhyesti tarpeesi"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm({
  variant = "card",
}: {
  variant?: "card" | "inline";
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const onSubmit = (values: FormValues) => {
    setStatus("submitting");
    setTimeout(() => {
      setStatus("sent");
      reset();
    }, 800);
    // Normally we would post to an API endpoint here.
    console.info("Contact form submission", values);
  };

  const borderClass =
    variant === "card"
      ? "rounded-xl border border-border/80 bg-card/90 p-6 shadow-sm"
      : "rounded-lg border border-border/70 bg-white/70 p-4";

  return (
    <form
      className={cn("space-y-4", borderClass)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="name">
          Nimi
        </label>
        <Input id="name" placeholder="Etunimi Sukunimi" {...register("name")} />
        {errors.name && (
          <p className="mt-1 text-xs text-accent">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="email">
            Sähköposti
          </label>
          <Input
            id="email"
            type="email"
            placeholder="etunimi@yritys.fi"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-accent">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="company"
          >
            Yritys
          </label>
          <Input
            id="company"
            placeholder="Yrityksen nimi"
            {...register("company")}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-accent">{errors.company.message}</p>
          )}
        </div>
      </div>
      <div>
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="message"
        >
          Viesti
        </label>
        <Textarea
          id="message"
          placeholder="Kuvaa kohde tai kysymys lyhyesti."
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-accent">{errors.message.message}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Lähetetään...
            </>
          ) : (
            <>
              Lähetä viesti
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </Button>
        {status === "sent" && (
          <span className="text-sm text-primary">
            Kiitos viestistä! Palaamme pian.
          </span>
        )}
      </div>
    </form>
  );
}
