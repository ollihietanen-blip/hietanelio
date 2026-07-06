import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const people = [
  {
    name: "Olli Hietanen",
    role: "Toimitusjohtaja",
    bio: "Yrittäjä ja rakentamisen kehittäjä, jonka työssä yhdistyvät kiinteistöt, yritystilat, kestävä rakentaminen, digitalisaatio ja hankkeiden johtaminen.",
  },
  {
    name: "Terhi Hietanen",
    role: "Hallituksen jäsen",
    bio: "Huolehtii hallinnon, vastuullisuuden ja pitkäjänteisen omistamisen arjen jatkuvuudesta.",
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
          Omistaja, rakennuttaja, sijoittaja ja kumppani.
        </h1>
        <p className="text-lg text-foreground/75">
          Hietaneliö Oy on kankaanpääläinen kiinteistöyhtiö, joka toimii osana
          Area Group -yrityskonsortiota. Toiminnassa yhdistyvät pitkäjänteinen
          omistaminen, kehityshankkeet, rakennuttaminen, yritystilojen
          toteutus, kestävä rakentaminen ja kiinteistöalan yrittäjyys.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="border-border/80 bg-card/90 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Kiinteistöt ja sijoittaminen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground/75">
            <p>
              Hietaneliö on mukana kiinteistöomistuksissa, kiinteistöyhtiöissä
              ja kehityshankkeissa. Toiminnan ytimessä ovat pitkäjänteisyys,
              harkittu eteneminen ja omistamisen näkökulma.
            </p>
            <p>
              Osa kohteista jää pitkäaikaiseen omistukseen ja osa toteutetaan
              myyntiä tai seuraavaa kehitysvaihetta varten.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/80 bg-card/90 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Rakennuttaminen ja kehittäminen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground/75">
            <p>
              Taustalla on kokemusta yritysten tiloista, asumisen hankkeista,
              historiallisten rakennusten kehittämisestä sekä kohteiden
              suunnittelun ja rakentamisen johtamisesta.
            </p>
            <p>
              Digitaalinen ajattelu, automaatio ja kestävä rakentaminen tuovat
              toimintaan nykyaikaisen mutta käytännönläheisen sävyn.
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
