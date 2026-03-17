import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Fördelar med fårullsisolering — luftrening, fukt, brand och ljud | Farull.se",
  description:
    "Sju fördelar med fårullsisolering: binder formaldehyd på 4 timmar, absorberar 40 % fukt, brandklass B-s1 utan kemikalier, ljudklass A och 75 års livslängd.",
  openGraph: {
    title: "Fördelar med fårullsisolering — luftrening, fukt, brand och ljud",
    description:
      "Sju fördelar med fårullsisolering: binder formaldehyd på 4 timmar, absorberar 40 % fukt, brandklass B-s1 utan kemikalier, ljudklass A och 75 års livslängd.",
  },
  alternates: {
    canonical: "/fordelar",
  },
};

export default function Fordelar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Fördelar med fårullsisolering — luftrening, fukt, brand och ljud",
            description:
              "Sju fördelar med fårullsisolering: binder formaldehyd på 4 timmar, absorberar 40 % fukt, brandklass B-s1 utan kemikalier, ljudklass A och 75 års livslängd.",
            url: "https://farull.se/fordelar",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://farull.se/images/farull-6.jpg",
            publisher: {
              "@type": "Organization",
              name: "Farull.se",
              url: "https://farull.se",
            },
            author: {
              "@type": "Organization",
              name: "Byeco AB",
              url: "https://byeco.se",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Hur renar fårullsisolering inomhusluften?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ullens keratinprotein binder formaldehyd och flyktiga organiska föreningar (VOC) kemiskt och permanent. Forskning visar att ull reducerar formaldehyd med 80–87 % och kan nå noll inom 4 timmar. Effekten varar i upp till 30 år. Ull binder även toluen, limonen, kvävedioxid och svaveldioxid.",
                },
              },
              {
                "@type": "Question",
                name: "Är fårullsisolering brandsäker?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, fårull är naturligt flamhämmande. Den antänds först vid 560–600 °C (jämfört med trä vid 270 °C), kolnar och självslocknar. Med boraxbehandling uppnår den Euroclass B-s1,d0 utan kemiska flamskyddsmedel. Ull smälter inte och droppar inte brinnande material.",
                },
              },
              {
                "@type": "Question",
                name: "Hur mycket fukt klarar fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårull absorberar upp till 35–40 % av sin vikt i fukt utan att förlora isoleringsförmåga. Vid fuktabsorption frigörs sorptionsvärme (1,1 kJ/g) som aktivt värmer. Mineralull tappar däremot upp till 24 gånger i prestanda vid fukt.",
                },
              },
              {
                "@type": "Question",
                name: "Hur länge håller fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullsisolering har en deklarerad livslängd på 75 år enligt natureplus-certifiering. Fibrernas naturliga elasticitet gör att materialet inte sjunker ihop eller komprimeras med tiden, till skillnad från mineralull som kan tappa form efter 25–30 år.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Fördelar" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Fördelar
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Varför välja fårullsisolering?
        </h1>
      </ScrollReveal>

      <Image
        src="/images/farull-6.jpg"
        alt="Fårflock i snölandskap — ullen skyddar fåren i alla väderförhållanden"
        width={800}
        height={1200}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg text-foreground/90">
            <strong>De flesta isoleringsmaterial gör en sak</strong> — de
            isolerar termiskt. Fårull gör sju saker samtidigt: renar luft,
            hanterar fukt, motstår eld, dämpar ljud, binder koldioxid, är
            behaglig att arbeta med och håller i 75 år. Här går vi igenom
            varje fördel med den forskning som styrker den.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullsisolering renar inomhusluften
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1527015175922-36a306cf0e20?w=800&q=80"
                alt="Ljust rum med ren luft och naturligt ljus"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Fårull binder formaldehyd och renar luften i hemmet — effekten varar i 30 år
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  Ullens keratinprotein
                </Link>{" "}
                binder formaldehyd och andra flyktiga organiska föreningar
                (VOC) <strong>kemiskt och permanent</strong>. De ämnen som
                fångas frigörs aldrig tillbaka till luften.
              </p>
              <p className="mt-4">
                Forskning vid tyska universitet visar att ull reducerar
                formaldehyd med <strong>80–87&nbsp;%</strong> i testkammare.
                AgResearch i Nya Zeeland har mätt att ullmattor sänker höga
                formaldehydnivåer till <strong>noll inom 4&nbsp;timmar</strong>.
                Luftreningseffekten varar i upp till <strong>30 år</strong>.
              </p>
              <p className="mt-4">
                Utöver formaldehyd binder ull även <strong>toluen,
                limonen, dodekan, kvävedioxid (NO₂) och svaveldioxid
                (SO₂)</strong>. Bindningsmekanismen bygger på att{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  keratins reaktiva aminosyragrupper
                </Link>{" "}
                reagerar kemiskt med de skadliga ämnena. Inget annat
                isoleringsmaterial har denna egenskap.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullens fukthantering — överlägsen prestanda
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
                alt="Dimma och fukt i naturligt landskap"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Upp till 40&nbsp;% av sin vikt i fukt — utan att tappa prestanda
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårull absorberar upp till <strong>35–40&nbsp;% av sin
                vikt</strong> i fukt utan att förlora isoleringsförmåga. Vid
                normala inomhusförhållanden (20&nbsp;°C, 65&nbsp;% RH) har ull
                en standardåterfuktning på 16&nbsp;%. När luften torkar
                släpper fibern ut fukten igen — en naturlig buffring som
                stabiliserar inomhusklimatet.
              </p>
              <p className="mt-4">
                Vid fuktabsorption frigörs{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  sorptionsvärme
                </Link>{" "}
                — cirka <strong>1,1&nbsp;kJ per gram absorberad fukt</strong>.
                Det innebär att fårullsisolering aktivt värmer väggen vid
                fuktiga väderförhållanden. Ullens ånggenomsläpplighet
                (µ-värde 1–2) gör den dessutom till ett av de mest
                diffusionsöppna isoleringsmaterialen.
              </p>
              <p className="mt-4">
                Jämför med mineralull, som kan tappa upp till{" "}
                <strong>24 gånger i isoleringsförmåga</strong> vid fukt och
                som inte buffrar eller avger värme. I täta konstruktioner
                med kondens- och mögelrisk är denna skillnad avgörande.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Brandsäkerhet utan kemikalier
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?w=800&q=80"
                alt="Eldflamma i närbild"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ull antänds först vid 560–600&nbsp;°C — kolnar och självslocknar
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårull är naturligt flamhämmande. Fibern antänds först vid{" "}
                <strong>560–600&nbsp;°C</strong> — mer än dubbelt så högt som
                trä (270&nbsp;°C). Vid brand kolnar ullen och självslocknar.
                Den smälter inte, droppar inte brinnande material och sprider
                inte flamman vidare.
              </p>
              <p className="mt-4">
                Med boraxbehandling — ett naturligt mineral — uppnår
                fårullsisolering <strong>Euroclass B‑s1,d0</strong> enligt
                EN&nbsp;13501‑1. Det innebär: svårantändlig, minimal
                rökutveckling, inga brinnande droppar. Allt utan kemiska
                flamskyddsmedel.
              </p>
              <p className="mt-4">
                <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow">
                  Jämför med cellplast
                </Link>{" "}
                som smälter och avger giftig rök, eller mineralull som
                klarar branden men vars organiska bindemedel kan brinna.
                Fårull är det enda isoleringsmaterial som kombinerar god
                brandklassning med helt giftfri rökutveckling.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Ljudisolering med fårull — klass A
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt="Lugnt tyst rum med mjukt ljus"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ljudabsorptionskoefficient αw 0,90–1,00 — klass A
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ullens krusiga fibrer fångar ljudvågor i ett brett
                frekvensomfång. Mätningar visar en{" "}
                <strong>ljudabsorptionskoefficient (αw) på
                0,90–1,00</strong>, vilket motsvarar ljudabsorptionsklass A —
                den högsta klassen. Vid frekvenser över 2&nbsp;000&nbsp;Hz når
                absorptionskoefficienten 0,96–0,98.
              </p>
              <p className="mt-4">
                I praktiken innebär det att fårullsisolering i
                mellanbjälklag, innerväggar och{" "}
                <Link href="/anvandningsomraden" className="text-primary hover:text-primary/80 link-grow">
                  akustikpaneler
                </Link>{" "}
                dämpar allt från steg och samtal till musik och
                trafikbuller. Ullens ljuddämpning är särskilt effektiv i
                medel- och högfrekvensområdet — precis de frekvenser som
                upplevs mest störande i bostadsmiljöer.
              </p>
              <p className="mt-4">
                Till skillnad från syntetiska akustikpaneler är
                fårullspaneler helt{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  biologiskt nedbrytbara
                </Link>{" "}
                — samma prestanda utan miljöskuld.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårull binder koldioxid — negativt klimatavtryck
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Grönt landskap med betande djur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                1 kg ull lagrar 1,8 kg CO₂ — negativt klimatavtryck
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                <strong>50&nbsp;% av ren ulls vikt är biogent kol</strong>,
                bundet från atmosfären via gräset som fåren betar. Det
                innebär att varje kilo ull lagrar ungefär{" "}
                <strong>1,8&nbsp;kg CO₂‑ekvivalenter</strong> — kol som
                hålls bundet i byggnaden under isoleringens hela livslängd.
              </p>
              <p className="mt-4">
                Tillverkningen av fårullsisolering kräver cirka{" "}
                <strong>6&nbsp;MJ per kilo</strong> — en bråkdel av glasull
                (26&nbsp;MJ/kg) och en femtondel av polyuretanskum
                (101&nbsp;MJ/kg). Den mekaniska processen (tvätt, kardning,
                pressning) kräver ingen smältning vid 1&nbsp;400&nbsp;°C.
              </p>
              <p className="mt-4">
                Netto lagrar fårullsisolering mer koldioxid än den släpper
                ut under sin livscykel — ett negativt klimatavtryck som få
                byggmaterial kan matcha.{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om hållbarhetsprofilen →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Enkel montering — ingen skyddsutrustning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Händer som arbetar med naturligt material"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ingen klåda, inget damm — montering med bara händerna
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ingen klåda. Inget irriterande damm. Ingen skyddsmask, inga
                handskar. Fårullsisolering klipps med vanlig sax, trycks på
                plats, och fibrerna fjädrar och fyller ut ojämna hålrum av
                sig själva. Materialet avger inga hälsoskadliga fibrer till
                luften.
              </p>
              <p className="mt-4">
                Jämfört med mineralull, som kräver handskar, mask och
                långärmade kläder, sparar fårull uppskattningsvis{" "}
                <strong>15–25&nbsp;% av monteringstiden</strong>. Enklare
                hantering, snabbare jobb och lägre arbetskostnad. Det gör
                fårull till det mest gör-det-själv-vänliga
                isoleringsmaterialet på marknaden.
              </p>
              <p className="mt-4">
                <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                  Se monteringsguiden steg för steg →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            75 års livslängd — håller hela husets liv
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                alt="Vackert äldre hus i gott skick"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Natureplus-certifierad livslängd: 75 år utan att tappa form
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullsisolering har en{" "}
                <strong>natureplus-certifierad livslängd på 75 år</strong>.
                Ullfibrernas{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  disulfidbindningar
                </Link>{" "}
                ger en naturlig elasticitet som gör att materialet behåller
                sin form och isoleringsförmåga decennium efter decennium.
              </p>
              <p className="mt-4">
                Mineralull kan efter 25–30 år börja sjunka ihop, särskilt i
                vertikala applikationer som ytterväggar. Det leder till
                köldbryggor och försämrad energiprestanda. Fårull komprimeras
                inte — fibrerna fjädrar tillbaka.
              </p>
              <p className="mt-4">
                Ur ett{" "}
                <Link href="/pris" className="text-primary hover:text-primary/80 link-grow">
                  livscykelperspektiv
                </Link>{" "}
                innebär det att fårull ofta blir billigare totalt sett, trots
                högre materialkostnad. Ingen utbyteskostnad, inga
                köldbryggor, inga fuktskador.{" "}
                <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow">
                  Jämför fårull med andra isoleringsmaterial →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om fördelarna med fårullsisolering
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur renar fårullsisolering inomhusluften?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ullens keratinprotein binder formaldehyd och VOC kemiskt och
                  permanent. Forskning visar att ull reducerar formaldehyd med
                  80–87&nbsp;% och kan nå noll inom 4&nbsp;timmar. Effekten
                  varar i upp till 30 år. Ull binder även toluen, limonen,
                  kvävedioxid och svaveldioxid.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är fårullsisolering brandsäker?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja. Fårull antänds först vid 560–600&nbsp;°C, kolnar och
                  självslocknar. Med boraxbehandling uppnår den Euroclass
                  B‑s1,d0 utan kemiska flamskyddsmedel. Ull smälter inte och
                  droppar inte brinnande material.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket fukt klarar fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårull absorberar upp till 35–40&nbsp;% av sin vikt i fukt
                  utan att förlora isoleringsförmåga. Vid absorption frigörs
                  sorptionsvärme (1,1&nbsp;kJ/g) som aktivt värmer.
                  Mineralull tappar däremot upp till 24 gånger i prestanda
                  vid fukt.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur länge håller fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårullsisolering har en deklarerad livslängd på 75 år
                  enligt natureplus-certifiering. Fibrernas naturliga
                  elasticitet gör att materialet inte sjunker ihop, till
                  skillnad från mineralull som kan tappa form efter
                  25–30 år.
                </p>
              </details>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <aside className="max-w-3xl mx-auto px-6 py-12">
          <div className="border-l-2 border-accent p-6 bg-primary/5">
            <p className="font-body text-foreground/80 text-base leading-relaxed">
              Vill du prova själv? Byeco erbjuder fri rådgivning och hjälper dig räkna ut
              hur mycket material du behöver. 30 dagars öppet köp.{" "}
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 link-grow"
              >
                Besök Byeco.se →
              </a>
            </p>
          </div>
        </aside>
      </ScrollReveal>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Från fårrygg till vägg – så blir ullen till isolering.</p>
            </li>
            <li>
              <Link href="/hallbarhet" className="link-grow text-lg font-medium text-foreground">
                Hållbarhet →
              </Link>
              <p className="text-foreground/60 mt-1">Koldioxidbindning, cirkulär ekonomi och EU-taxonomin.</p>
            </li>
            <li>
              <Link href="/jamforelse" className="link-grow text-lg font-medium text-foreground">
                Fårull vs andra material →
              </Link>
              <p className="text-foreground/60 mt-1">Så står sig fårullen mot mineralull och cellplast.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
