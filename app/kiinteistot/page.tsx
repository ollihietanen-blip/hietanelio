import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Kiinteistöt
        </p>
        <h1 className="text-4xl text-foreground md:text-5xl">
          Portfolio ja kehityskohteet
        </h1>
        <p className="text-lg text-foreground/75">
          Keskitymme Satakunnan alueeseen, jossa läsnäolo ja nopea päätöksenteko
          pitävät vuokralaiset ja rahoittajat turvassa.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {assets.map((asset) => (
          <Card
            key={asset.name}
            className="border-border/80 bg-card/90 shadow-sm"
          >
            <CardHeader>
              <CardTitle className="text-xl">{asset.name}</CardTitle>
              <p className="text-sm text-foreground/70">{asset.location}</p>
            </CardHeader>
            <CardContent className="text-sm text-foreground/75">
              {asset.focus}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border/80 bg-primary/10 p-6 text-sm text-foreground/80">
        <p className="text-lg text-foreground">
          Etsitkö uutta toimitilaa tai yhteissijoitusta?
        </p>
        <p className="mt-2">
          Ota yhteyttä, niin räätälöidään ratkaisu ja esitetään kassavirta- ja
          remonttisuunnitelma rahoittajan tarvitsemalla tarkkuudella.
        </p>
      </div>
    </div>
  );
}

