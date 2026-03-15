import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vad kan fårull användas till? — Kläder, isolering och mer",
  description:
    "Fårull används till allt från kläder och inredning till trädgård, akustik och byggisolering. Upptäck fårullens mångsidiga användningsområden.",
};

export default function AnvandningsomradenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <p className="uppercase tracking-[0.15em] text-accent text-sm font-body mb-4">
        Användning
      </p>
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
        Vad kan fårull användas till?
      </h1>

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <p>
          Fårull är ett av naturens mest mångsidiga material. Människan har
          använt ull i minst 10 000 år, och trots alla syntetiska alternativ
          som utvecklats sedan 1900-talet har ingen konstgjord fiber lyckats
          replikera ullens kombination av egenskaper: temperaturreglering,
          fukthantering, naturlig brandresistens och biologisk nedbrytbarhet.
          Här går vi igenom de viktigaste användningsområdena — från de mest
          traditionella till de mest innovativa.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Kläder och textil
        </h2>
        <p>
          Det mest kända användningsområdet. Merinoull används i baslager,
          underkläder och sportplagg tack vare sin mjukhet och förmåga att
          reglera kroppstemperatur. Grövre ulltyper hamnar i kostymer,
          kappor, filtar och accessoarer. Ullens naturliga förmåga att
          motstå lukt (tack vare keratinets antimikrobiella egenskaper) gör
          att ullplagg kan användas längre mellan tvättar — en egenskap som
          gjort materialet populärt inom hållbart mode.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Möbler och inredning
        </h2>
        <p>
          Ull har länge använts i möbelklädsel, mattor och gardiner. I
          Skandinavien har ullmattor och ryor en tusenårig tradition — de
          tjockluggiga ryorna fungerade som både dekoration och isolering i
          kyliga timmerhus. Idag ser vi en återkomst av ull i modern
          inredning: ullfiltar, kuddar och akustikpaneler i kontorsmiljöer.
          Ullen är naturligt flamhämmande (den kolnar istället för att
          smälta och brinna), vilket gör den till ett säkert val i
          offentliga miljöer.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Trädgård och odling
        </h2>
        <p>
          Ett växande användningsområde. Ullpellets och ullmattor används som
          marktäckning (mulching) i trädgårdar och odlingar. Ullen håller
          fukten i jorden, förhindrar ogräs och bryter långsamt ner till
          näring — keratin innehåller kväve, svavel och andra mineraler som
          gynnar växtligheten. Spillull som inte håller kvalitetskrav för
          textil eller isolering kan få nytt liv i odlingslådor och rabatter.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Akustik och ljuddämpning
        </h2>
        <p>
          Ullens krusiga fiberstruktur gör den till en utmärkt
          ljudabsorbent. Fibrerna fångar ljudvågor i ett brett frekvensomfång
          — från basljud till höga toner — och omvandlar rörelseenergin till
          en liten mängd värme. Ullbaserade akustikpaneler används i
          kontor, skolor, konsertsalar och hemmabiosystem. Till skillnad
          från syntetiska absorbers (som ofta är baserade på polyester eller
          melaminskum) är ullpaneler helt biologiskt nedbrytbara.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Byggisolering — det mest spännande nya området
        </h2>
        <p>
          Det är inom byggsektorn som fårullens potential verkligen lyser.
          Fårullsisolering kombinerar alla de egenskaper som gör ull unik —
          termisk isolering, fuktreglering, luftrening, brandsäkerhet och
          ljuddämpning — i en enda produkt. Medan traditionella material som
          mineralull och cellplast fokuserar enbart på termisk prestanda,
          erbjuder fårull en multifunktionell lösning som dessutom binder
          koldioxid istället för att släppa ut den vid tillverkning.
        </p>
        <p>
          Isolering av{" "}
          <Link href="/farull" className="text-primary hover:text-primary/80 underline underline-offset-2">
            fårull
          </Link>{" "}
          fungerar i väggar, tak, golv och mellanbjälklag. Den monteras utan
          skyddsutrustning, klipps med vanlig sax och anpassar sig efter
          oregelbundna hålrum tack vare fibrernas naturliga fjädring. Lambda-
          värdet (0,033–0,040 W/m·K) är jämförbart med mineralull, men
          livscykelanalysen ser helt annorlunda ut.
        </p>
        <p>
          <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 underline underline-offset-2">
            Läs mer om hur fårullsisolering tillverkas och fungerar →
          </Link>
        </p>
        <p>
          <Link href="/fordelar" className="text-primary hover:text-primary/80 underline underline-offset-2">
            Upptäck alla fördelar med fårullsisolering →
          </Link>
        </p>
      </div>
    </div>
  );
}
