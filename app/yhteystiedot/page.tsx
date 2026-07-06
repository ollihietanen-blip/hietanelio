import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function YhteystiedotPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Yhteystiedot
        </p>
        <h1 className="text-4xl text-foreground md:text-5xl">
          Ota yhteyttä kohteesta tai hankkeesta.
        </h1>
        <p className="text-lg text-foreground/75">
          Kysy kohteesta, hankkeesta tai Hietaneliön roolista. Tavoite on
          tehdä seuraavasta päätöksestä selkeämpi, ei monimutkaisempi.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Card className="border-border/80 bg-card/90 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Yhteyshenkilöt</CardTitle>
              <p className="text-sm text-foreground/70">
                Suora yhteys, kun haluat varmistaa taustan tai kysyä hankkeesta.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/80">
              <div>
                <p className="font-medium text-foreground">Olli Hietanen</p>
                <p>Toimitusjohtaja · Kiinteistösijoittaminen ja hankkeet</p>
                <p>Yhteys kiinteistöihin, hankkeisiin ja kohteiden taustan varmistamiseen.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Terhi Hietanen</p>
                <p>Hallitus · Vastuullisuus ja hallinto</p>
                <p>Yhteys hallintoon, vastuullisuuteen ja pitkäjänteiseen ylläpitoon.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/80 bg-card/90 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Laskutustiedot</CardTitle>
              <p className="text-sm text-foreground/70">
                Viralliset laskutustiedot ja yrityksen perustiedot.
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-foreground/80">
              <p className="font-medium text-foreground">Hietaneliö Oy</p>
              <p>Y-tunnus: 2954838-7</p>
              <p>Kuninkaanlähteenkatu 8, 38700 Kankaanpää</p>
              <p>Koulukatu 13 C 36, 33200 Tampere</p>
              <p>
                Laskutus: ensisijaisesti verkkolasku tai PDF laskutusosoitteeseen
                toimitettuna.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
