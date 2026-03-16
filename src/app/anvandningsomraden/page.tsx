import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad kan fårull användas till? Kläder, isolering och mer",
  description:
    "Fårull används till allt från kläder och inredning till trädgård, akustik och byggisolering. Upptäck fårullens mångsidiga användningsområden.",
  openGraph: {
    title: "Vad kan fårull användas till? Kläder, isolering och mer",
    description:
      "Fårull används till allt från kläder och inredning till trädgård, akustik och byggisolering. Upptäck fårullens mångsidiga användningsområden.",
  },
  alternates: {
    canonical: "/anvandningsomraden",
  },
};

export default function AnvandningsomradenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Användningsområden" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Användning
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vad kan fårull användas till?
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
        alt="Ullgarn och textilarbete"
        width={800}
        height={533}
        priority
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Människan har använt ull i minst 10 000 år. Trots alla syntetiska
            alternativ som dök upp under 1900-talet har ingen konstgjord fiber
            lyckats kopiera ullens kombination av egenskaper:
            temperaturreglering, fukthantering, naturlig brandresistens och
            biologisk nedbrytbarhet. Allt i samma fiber.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Kläder och textil
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
                alt="Ullkläder och textilier"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Merinoull i baslager, grövre ull i kappor och kostymer
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Det mest kända användningsområdet. Merinoull används i baslager
                och sportplagg tack vare sin mjukhet och förmåga att reglera
                kroppstemperatur. Grövre ull hamnar i kostymer, kappor och filtar.
              </p>
              <p className="mt-4">
                Ullens förmåga att motstå lukt (keratinet har antimikrobiella
                egenskaper) gör att plaggen kan användas längre mellan tvättar.
                Det har gjort materialet populärt inom hållbart mode.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Möbler och inredning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Skandinavisk inredning med ulldetaljer"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ullmattor, filtar och akustikpaneler – en nordisk tradition som lever vidare
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ull har länge använts i möbelklädsel, mattor och gardiner. I
                Skandinavien har ullmattor och ryor en tusenårig tradition. De
                tjockluggiga ryorna fungerade som både dekoration och isolering i
                kyliga timmerhus.
              </p>
              <p className="mt-4">
                Nu ser vi en återkomst. Ullfiltar, kuddar och akustikpaneler i
                kontorsmiljöer. Ull kolnar istället för att smälta och brinna,
                vilket gör den till ett säkert val i offentliga miljöer.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Trädgård och odling
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Trädgårdsodling med naturliga material"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ullpellets håller fukten, förhindrar ogräs och ger näring åt jorden
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ett växande område. Ullpellets och ullmattor används som
                marktäckning i trädgårdar och odlingar. Ullen håller fukten i
                jorden, förhindrar ogräs och bryter långsamt ner till näring.
                Keratin innehåller kväve, svavel och andra mineraler som gynnar
                växtligheten.
              </p>
              <p className="mt-4">
                Spillull som inte håller kvalitetskrav för textil eller isolering
                kan få nytt liv i odlingslådor och rabatter.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Akustik och ljuddämpning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt="Akustikbehandlat rum med mjukt ljus"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ullbaserade akustikpaneler – effektiv ljuddämpning som är helt biologiskt nedbrytbar
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                De krusiga fibrerna gör ull till en utmärkt ljudabsorbent. De
                fångar ljudvågor i ett brett frekvensomfång och omvandlar
                rörelseenergin till en liten mängd värme. Ullbaserade
                akustikpaneler används i kontor, skolor och konsertsalar.
              </p>
              <p className="mt-4">
                Till skillnad från syntetiska absorbenter (ofta polyester eller
                melaminskum) är ullpaneler helt biologiskt nedbrytbara.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Byggisolering. Det mest spännande just nu.
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Byggarbetsplats med isoleringsarbete"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Termisk isolering, luftrening, brandsäkerhet och fuktreglering – allt i ett material
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Här lyser fårullens potential verkligen. Fårullsisolering samlar
                alla egenskaper som gör ull speciell i en enda produkt: termisk
                isolering, fuktreglering, luftrening, brandsäkerhet och
                ljuddämpning. Mineralull och cellplast fokuserar enbart på termisk
                prestanda. Fårull gör allt samtidigt, och binder dessutom koldioxid
                istället för att släppa ut den vid tillverkning.
              </p>
              <p className="mt-4">
                Isolering av{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  fårull
                </Link>{" "}
                fungerar i väggar, tak, golv och mellanbjälklag. Den monteras utan
                skyddsutrustning, klipps med vanlig sax och anpassar sig efter
                oregelbundna hålrum tack vare fibrernas naturliga fjädring.
                Lambda-värdet (0,033-0,040 W/m·K) är jämförbart med mineralull.
                Livscykelanalysen ser helt annorlunda ut.
              </p>
              <p className="mt-4">
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om hur fårullsisolering tillverkas och fungerar
                </Link>
              </p>
              <p className="mt-2">
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  Upptäck alla fördelar med fårullsisolering
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
