import HeroSection from "@/components/sections/hero-section";
import BentoStats from "@/components/sections/bento-stats";
import StrategySection from "@/components/sections/strategy-section";

export default function HomePage() {
  return (
    <>
      <section id="hero" aria-label="Hietaneliö Oy - johdanto">
        <HeroSection />
      </section>

      <section
        id="stats"
        aria-label="Luottamusta vahvistavat perustelut"
        className="scroll-mt-24"
      >
        <BentoStats />
      </section>

      <section
        id="strategy"
        aria-label="Asunnon ja hallin ostajalle"
        className="scroll-mt-24"
      >
        <StrategySection />
      </section>
    </>
  );
}
