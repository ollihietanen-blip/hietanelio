import { ContactForm } from "@/components/contact-form";

const contacts = [
  {
    name: "Olli Hietanen",
    role: "Toimitusjohtaja · Kiinteistö- ja hankekysymykset",
    detail: "Asunto-, halli- ja kehityskohteiden taustat sekä eteneminen.",
  },
  {
    name: "Terhi Hietanen",
    role: "Hallitus · Vastuullisuus ja hallinto",
    detail: "Ylläpito, hallinto ja pitkäjänteinen kohteiden kehittäminen.",
  },
];

const billing = [
  "Y-tunnus: 2954838-7",
  "Osoite: Kankaanpää, Satakunta, Suomi",
  "Laskutus: ensisijaisesti verkkolasku tai PDF laskutusosoitteeseen.",
];

export default function YhteystiedotPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#163a2f]/40" aria-hidden="true" />
            <p className="overline text-[#163a2f]">Yhteystiedot</p>
          </div>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.01em] text-foreground">
            Ota yhteyttä — <span className="serif-italic">vastataan nopeasti.</span>
          </h1>
          <p className="max-w-2xl text-[17px] leading-[1.65] text-foreground/65">
            Kerro, mitä kohdetta olet arvioimassa tai mitä haluat varmistaa. Saat
            vastauksen, joka auttaa jatkamaan päätöstä eteenpäin.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-10">
            <section>
              <p className="overline text-foreground/45">Yhteyshenkilöt</p>
              <div className="mt-5 border-t border-black/10">
                {contacts.map((person) => (
                  <div
                    key={person.name}
                    className="border-b border-black/10 py-5"
                  >
                    <h2 className="text-xl font-medium tracking-[-0.01em] text-foreground">
                      {person.name}
                    </h2>
                    <p className="mt-1 text-sm text-[#163a2f]">{person.role}</p>
                    <p className="mt-2 text-[15px] leading-[1.6] text-foreground/65">
                      {person.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="overline text-foreground/45">Laskutustiedot</p>
              <div className="mt-5 border-t border-black/10 pt-5">
                <p className="text-lg font-medium text-foreground">
                  Hietaneliö Oy
                </p>
                <ul className="mt-3 space-y-1.5 text-[15px] leading-[1.6] text-foreground/65">
                  {billing.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div>
            <ContactForm variant="inline" />
          </div>
        </div>
      </div>
    </div>
  );
}
