const assets = [
  {
    name: "Teollisuus- ja varastokohteet",
    location: "Kankaanpää, Satakunta",
    focus:
      "Joustavat tilaratkaisut kasvaville vuokralaisille. Modernit talotekniikka- ja turvallisuusratkaisut.",
  },
  {
    name: "Toimistot ja palvelutilat",
    location: "Keskusta-alue",
    focus:
      "Hyvä saavutettavuus, viihtyisä työympäristö ja energiatehokkaat ratkaisut. Räätälöidään yhdessä vuokralaisen kanssa.",
  },
  {
    name: "Tontit ja kehityskohteet",
    location: "Satakunta",
    focus:
      "Etsimme kumppaneita yhteiskehitykseen. Ennakoitava kustannusrakenne ja läpinäkyvä hankemalli.",
  },
];

export default function KiinteistotPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#163a2f]/40" aria-hidden="true" />
            <p className="overline text-[#163a2f]">Kiinteistöt</p>
          </div>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.01em] text-foreground">
            Portfolio ja <span className="serif-italic">kehityskohteet</span>
          </h1>
          <p className="max-w-2xl text-[17px] leading-[1.65] text-foreground/65">
            Keskitymme Satakunnan alueeseen, jossa läsnäolo ja nopea
            päätöksenteko pitävät vuokralaiset ja rahoittajat turvassa.
          </p>
        </div>

        <div className="mt-14 grid border-t border-black/10 md:grid-cols-3">
          {assets.map((asset, index) => (
            <article
              key={asset.name}
              className={[
                "flex min-h-[280px] flex-col py-8 md:py-10",
                index > 0
                  ? "border-t border-black/10 md:border-l md:border-t-0"
                  : "",
                index === 0 ? "md:pr-8" : "md:px-8",
              ].join(" ")}
            >
              <p className="serif-italic text-2xl leading-none text-[#163a2f]/45">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-2xl font-medium leading-[1.15] tracking-[-0.01em] text-foreground">
                {asset.name}
              </h2>
              <p className="overline mt-2 text-foreground/45">
                {asset.location}
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-foreground/65">
                {asset.focus}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-black/10 pt-12 md:mt-20 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.01em] text-foreground">
              Etsitkö uutta toimitilaa tai <span className="serif-italic">yhteissijoitusta?</span>
            </h2>
            <p className="mt-4 text-[17px] leading-[1.65] text-foreground/65">
              Ota yhteyttä, niin räätälöidään ratkaisu ja esitetään kassavirta-
              ja remonttisuunnitelma rahoittajan tarvitsemalla tarkkuudella.
            </p>
          </div>
          <a
            href="/yhteystiedot"
            className="mt-6 inline-flex min-h-[54px] items-center justify-center border border-[#163a2f] bg-[#163a2f] px-7 text-[15px] font-semibold text-[#edf3ee] transition-colors hover:bg-[#1d4a3c] md:mt-0"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>
    </div>
  );
}
