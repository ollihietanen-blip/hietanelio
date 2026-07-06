import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const assets = [
  {
    name: "Asuinkiinteistöt ja asumisen hankkeet",
    location: "Rakentaminen ja kehittäminen",
    focus:
      "Rakentamiseen liittyvä tausta tukee kuvaa toimijasta, joka tuntee myös kodit, rivitalot ja asumisen kehityshankkeet.",
  },
  {
    name: "Toimitilat, hallit ja teollisuuskohteet",
    location: "Yrityksille ja toimijoille",
    focus:
      "Yritystilat, hallit ja käytännön toimivuus ovat osa samaa kokonaisuutta kuin omistaminen ja hankekehitys.",
  },
  {
    name: "Kehityshankkeet ja sijoittaminen",
    location: "Omistus, kumppanuus ja seuraava vaihe",
    focus:
      "Hietaneliö on mukana kohteissa, joita kehitetään pitkäaikaisesti omistukseen tai kohdekohtaisesti eteenpäin.",
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
          Kiinteistöjä, hankkeita ja käytännön rooleja
        </h1>
        <p className="text-lg text-foreground/75">
          Hietaneliön toimintaan kuuluvat toimitila-, teollisuus- ja
          asuinkiinteistöihin liittyvät omistukset sekä uudisrakennus- ja
          kehityshankkeet. Taustalla on myös rakennuttamista, yritystilojen
          toteutusta ja käytännön hankekokemusta.
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
          Keskustellaan kohteesta, hankkeesta tai yhteistyöstä.
        </p>
        <p className="mt-2">
          Ota yhteyttä, jos haluat tarkentaa Hietaneliön roolia kohteessa tai
          avata hanketta omistamisen, rakennuttamisen tai kumppanuuden näkökulmasta.
        </p>
      </div>
    </div>
  );
}
