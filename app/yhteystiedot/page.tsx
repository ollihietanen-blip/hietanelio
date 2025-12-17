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
          Ota yhteyttä – vastataan nopeasti.
        </h1>
        <p className="text-lg text-foreground/75">
          Kerro tilatarpeesi tai rahoituskumppanuuden tarve. Saat
          vastauksen, joka sisältää aikataulun ja etenemisen.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Card className="border-border/80 bg-card/90 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Yhteyshenkilöt</CardTitle>
              <p className="text-sm text-foreground/70">
                Suora yhteys päätöksentekijöihin.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/80">
              <div>
                <p className="font-medium text-foreground">Olli Hietanen</p>
                <p>Toimitusjohtaja · Kiinteistösijoittaminen</p>
                <p>Vaiheittainen kehitysmalli ja rahoitusratkaisut.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Terhi Hietanen</p>
                <p>Hallitus · Vastuullisuus ja hallinto</p>
                <p>Pitkäjänteinen ylläpito ja vuokralaiskokemus.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/80 bg-card/90 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Laskutustiedot</CardTitle>
              <p className="text-sm text-foreground/70">
                Taloushallinnon tiedot B2B-kumppaneille.
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-foreground/80">
              <p className="font-medium text-foreground">Hietaneliö Oy</p>
              <p>Y-tunnus: 2954838-7</p>
              <p>Osoite: Kankaanpää, Satakunta, Suomi</p>
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

