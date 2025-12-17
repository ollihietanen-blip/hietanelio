import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function YritysPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Yritys
        </p>
        <h1 className="text-4xl text-foreground md:text-5xl">
          Pitkäjänteinen kiinteistöomistaja Satakunnassa.
        </h1>
        <p className="text-lg text-foreground/75">
          Hietaneliö Oy perustettiin palvelemaan rahoittajia ja vuokralaisia
          samalla periaatteella: vakaus ennen kaikkea. Kehitämme kiinteistöjä
          konservatiivisella velkavivulla, huolellisella kunnossapidolla ja
          avoimella raportoinnilla.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="border-border/80 bg-card/90 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Omistajastrategia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground/75">
            <p>
              Omistamme ja kehitämme kiinteistöjä pitkäksi ajaksi.
              Energiatehokkuus, sisäilman laatu ja materiaalien kestävyys ovat
              perusvaatimuksia, ei poikkeuksia.
            </p>
            <p>
              Vältämme ylimitoitettua velkaa ja ylläpidämme riittävät
              puskurit, jotta vuokralaiset ja rahoittajat voivat luottaa
              tasaisiin suorituksiin suhdanteista riippumatta.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/80 bg-card/90 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Yhteistyö rahoittajien kanssa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground/75">
            <p>
              Raportoimme tunnusluvut läpinäkyvästi ja pidämme kassavirran
              ennakoitavana. 54 % liikevoitto ja 28 % omavaraisuusaste
              kertovat hallitusta riskitasosta.
            </p>
            <p>
              Kasvu on harkittua: priorisoimme nykyisen portfolion
              parantamisen ennen uusien kohteiden lisäämistä.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {people.map((person) => (
          <Card
            key={person.name}
            className="flex flex-col gap-3 border-border/80 bg-white/90 p-6 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-primary">
              Johto
            </p>
            <h3 className="text-2xl text-foreground">
              {person.name}
            </h3>
            <p className="text-sm font-medium text-foreground/80">{person.role}</p>
            <p className="text-sm text-foreground/70">{person.bio}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

