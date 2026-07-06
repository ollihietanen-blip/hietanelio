const people = [
  {
    name: "Olli Hietanen",
    role: "Toimitusjohtaja",
    bio: "Vastaa sijoitusstrategiasta, rahoittajasuhteista ja kiinteistöjen kehityksestä. Keskittyy vakaaseen kassavirtaan ja riskienhallintaan.",
  },
  {
    name: "Terhi Hietanen",
    role: "Hallituksen jäsen",
    bio: "Huolehtii hallinnon läpinäkyvyydestä, vastuullisuudesta ja pitkäaikaisista vuokrasuhteista. Korostaa kestävää omistajuutta.",
  },
];

const principles = [
  {
    title: "Omistajastrategia",
    paragraphs: [
      "Omistamme ja kehitämme kiinteistöjä pitkäksi ajaksi. Energiatehokkuus, sisäilman laatu ja materiaalien kestävyys ovat perusvaatimuksia, ei poikkeuksia.",
      "Vältämme ylimitoitettua velkaa ja ylläpidämme riittävät puskurit, jotta vuokralaiset ja rahoittajat voivat luottaa tasaisiin suorituksiin suhdanteista riippumatta.",
    ],
  },
  {
    title: "Yhteistyö rahoittajien kanssa",
    paragraphs: [
      "Raportoimme tunnusluvut läpinäkyvästi ja pidämme kassavirran ennakoitavana. 54 % liikevoitto ja 28 % omavaraisuusaste kertovat hallitusta riskitasosta.",
      "Kasvu on harkittua: priorisoimme nykyisen portfolion parantamisen ennen uusien kohteiden lisäämistä.",
    ],
  },
];

export default function YritysPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#163a2f]/40" aria-hidden="true" />
            <p className="overline text-[#163a2f]">Yritys</p>
          </div>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.01em] text-foreground">
            Pitkäjänteinen <span className="serif-italic">kiinteistöomistaja</span> Satakunnassa.
          </h1>
          <p className="max-w-2xl text-[17px] leading-[1.65] text-foreground/65">
            Hietaneliö Oy perustettiin palvelemaan rahoittajia ja vuokralaisia
            samalla periaatteella: vakaus ennen kaikkea. Kehitämme kiinteistöjä
            konservatiivisella velkavivulla, huolellisella kunnossapidolla ja
            avoimella raportoinnilla.
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="bg-card p-8 md:p-10">
              <h2 className="text-2xl font-medium leading-[1.15] tracking-[-0.01em] text-[#163a2f] md:text-3xl">
                {item.title}
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-[1.65] text-foreground/65">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#163a2f]/40" aria-hidden="true" />
            <p className="overline text-[#163a2f]">Johto</p>
          </div>
          <div className="mt-8 grid border-t border-black/10 md:grid-cols-2">
            {people.map((person, index) => (
              <article
                key={person.name}
                className={[
                  "py-8 md:py-10",
                  index > 0
                    ? "border-t border-black/10 md:border-l md:border-t-0 md:pl-10"
                    : "md:pr-10",
                ].join(" ")}
              >
                <h3 className="text-2xl font-medium tracking-[-0.01em] text-foreground md:text-3xl">
                  {person.name}
                </h3>
                <p className="overline mt-2 text-[#163a2f]">{person.role}</p>
                <p className="mt-4 max-w-md text-[15px] leading-[1.65] text-foreground/65">
                  {person.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
