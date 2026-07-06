"use client";

import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay },
  }),
};

type EntryHeaderProps = {
  /** Two-digit index, e.g. "01". */
  index: string;
  /** Short overline label, e.g. "Luottamus". */
  label: string;
  /** Main serif heading. */
  heading: string;
  /** Optional supporting paragraph. */
  description?: string;
  /** Colour scheme for the section it sits in. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * A numbered "dossier entry" header. The large serif index + hairline rule +
 * overline label give every section the feel of a numbered record, which is
 * the recurring structural motif of the site.
 */
export function EntryHeader({
  index,
  label,
  heading,
  description,
  tone = "light",
  className,
}: EntryHeaderProps) {
  const isDark = tone === "dark";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12", className)}
    >
      {/* Index rail */}
      <div className="flex items-start gap-4 md:flex-col md:gap-3">
        <span
          className={cn(
            "serif-italic text-[clamp(2.5rem,4vw,3.75rem)] leading-none",
            isDark ? "text-[#e6d8bf]/70" : "text-[#163a2f]/40",
          )}
        >
          {index}
        </span>
        <div className="flex items-center gap-3 pt-3 md:pt-0">
          <span
            className={cn("h-px w-6", isDark ? "bg-[#d7c7ae]" : "bg-[#163a2f]/40")}
            aria-hidden="true"
          />
          <span className={cn("overline", isDark ? "text-[#d7c7ae]" : "text-[#163a2f]")}>
            {label}
          </span>
        </div>
      </div>

      {/* Heading + description */}
      <div className="space-y-5">
        <h2
          className={cn(
            "max-w-[760px] text-[clamp(2.1rem,4.6vw,3.75rem)] font-medium leading-[1.06] tracking-[-0.01em] text-balance",
            isDark ? "text-white" : "text-foreground",
          )}
        >
          {heading}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-[560px] text-[17px] leading-[1.65]",
              isDark ? "text-white/72" : "text-foreground/62",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
