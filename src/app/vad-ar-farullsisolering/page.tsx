import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad är fårullsisolering? Tillverkning, funktion och λ-värde 0,035 | Farull.se",
  description:
    "Fårullsisolering är byggisolering av ren fårull med λ-värde 0,033–0,040 W/m·K. Absorberar 40 % fukt, renar luft från formaldehyd och håller 75 år. Så tillverkas den.",
  openGraph: {
    title: "Vad är fårullsisolering? Tillverkning, funktion och λ-värde 0,035",
    description:
      "Fårullsisolering är byggisolering av ren fårull med λ-värde 0,033–0,040 W/m·K. Absorberar 40 % fukt, renar luft från formaldehyd och håller 75 år. Så tillverkas den.",
  },
  alternates: {
    canonical: "/vad-ar-farullsisolering",
  },
};

export default function VadArFarullsisolering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vad är fårullsisolering? Tillverkning, funktion och λ-värde 0,035",
            description:
              "Fårullsisolering är byggisolering av ren fårull med λ-värde 0,033–0,040 W/m·K. Absorberar 40 % fukt, renar luft från formaldehyd och håller 75 år.",
            url: "https://farull.se/vad-ar-farullsisolering",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://images.unsplash.com/photo-1704742950992-9815a104820c?w=1200&q=80",
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
                name: "Vad är fårullsisolering gjord av?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullsisolering tillverkas av ren fårull som tvättas, kardas till skivor eller rullar och behandlas med 3–5 % borax för brandskydd. Ullen kommer främst från klippning av får vars ull inte når textilkvalitet — cirka 80 % av svensk fårull används idag inte alls. Hela processen är mekanisk och kräver bara 6 MJ/kg, jämfört med 26 MJ/kg för glasull.",
                },
              },
              {
                "@type": "Question",
                name: "Vilket lambda-värde har fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullsisolering har ett lambda-värde (λ) på 0,033–0,040 W/m·K, jämförbart med stenull (0,034–0,039) och glasull (0,032–0,040). Skillnaden mot mineralull är att fårull behåller sin isoleringsförmåga även vid fukt — mineralull kan tappa upp till 24 gånger i prestanda vid fuktbelastning.",
                },
              },
              {
                "@type": "Question",
                name: "Hur fungerar fårullsisolering i fuktiga miljöer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullens keratinfibrer absorberar upp till 35–40 % av sin vikt i fukt utan att förlora isoleringsförmåga. När omgivningsluften torkar släpper fibrerna ut fukten igen. Dessutom frigörs sorptionsvärme (1,1 kJ/g) vid fuktabsorption, vilket aktivt bidrar till uppvärmning. Fårull fungerar som en naturlig fuktbuffert som skyddar konstruktionen mot mögel och röta.",
                },
              },
              {
                "@type": "Question",
                name: "Kan man isolera hela huset med fårull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Fårullsisolering fungerar i ytterväggar, innerväggar, mellanbjälklag, snedtak, vindsbjälklag och golv — alltså överallt där du annars skulle använda mineralull. Materialet levereras i standardmått för regelavstånd 450 och 600 mm och klipps enkelt med vanlig sax.",
                },
              },
              {
                "@type": "Question",
                name: "Hur lång livslängd har fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullsisolering har en natureplus-certifierad livslängd på 75 år. Fibrernas disulfidbindningar ger en naturlig elasticitet som gör att materialet behåller sin form decennium efter decennium. Mineralull kan börja sjunka ihop redan efter 25–30 år, särskilt i vertikala applikationer.",
                },
              },
              {
                "@type": "Question",
                name: "Är fårullsisolering dyrare än mineralull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Materialpriset ligger 2–3 gånger högre än mineralull. Men totalkalkylen inkluderar ingen skyddsutrustning vid montering, 15–25 % kortare monteringstid och 75 års livslängd utan byte. Sett över husets livstid blir fårull ofta det billigare alternativet.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Vad är fårullsisolering?" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Isolering
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vad är fårullsisolering?
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1704742950992-9815a104820c?w=800&q=80"
        alt="Fårullsisolering installeras i träregelvägg — naturligt material utan skyddsutrustning"
        width={800}
        height={533}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg leading-relaxed">
            <strong>Fårullsisolering är byggisolering tillverkad av ren fårull</strong> —
            ett naturligt fibermaterial som reglerar fukt, renar inomhusluft och
            isolerar termiskt i klass med mineralull. Med ett lambda-värde på
            0,033–0,040&nbsp;W/m·K presterar den jämbördigt med stenull och glasull,
            men med egenskaper som syntetiska material saknar: förmågan att absorbera
            upp till 40&nbsp;% fukt utan att tappa prestanda, binda formaldehyd permanent
            och hålla i 75&nbsp;år utan att sjunka ihop.
          </p>
          <p className="mt-4">
            Trots att cirka 80&nbsp;% av svensk fårull idag går till spillo har
            materialet använts som{" "}
            <Link href="/ullens-historia" className="text-primary hover:text-primary/80 link-grow">
              byggnadsisolering i över tusen år
            </Link>. Modern fårullsisolering kombinerar den beprövade fibern med
            kontrollerad tillverkning — resultatet är ett{" "}
            <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
              högpresterande isoleringsmaterial
            </Link>{" "}
            som dessutom binder mer koldioxid än det släpper ut.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Så tillverkas fårullsisolering — från fårrygg till vägg
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Naturliga ullfibrer i närbild — råmaterial för fårullsisolering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ullen tvättas, kardas och formas till skivor — hela processen är mekanisk
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Tillverkningen av fårullsisolering är överraskande enkel. Ullen
                kommer främst från klippning av får vars ull inte når
                textilkvalitet — fiber som annars skulle kasseras. Processen
                har fyra steg:
              </p>
              <ol className="mt-4 space-y-2 list-decimal list-inside text-foreground/80">
                <li>
                  <strong>Tvätt</strong> — smuts och överskott av lanolin
                  avlägsnas. En viss mängd lanolin lämnas kvar som naturligt
                  skydd mot skadedjur.
                </li>
                <li>
                  <strong>Kardning</strong> — fibrerna kammas och riktas till
                  en jämn matta med kontrollerad densitet (typiskt 20–25&nbsp;kg/m³).
                </li>
                <li>
                  <strong>Boraxbehandling</strong> — 3–5&nbsp;% borax tillsätts
                  för brandskydd. Borax är ett naturligt mineral som ger
                  brandklass B‑s1,d0 utan syntetiska flamskyddsmedel.
                </li>
                <li>
                  <strong>Formning</strong> — mattan formas till skivor eller
                  rullar i standardmått för regelavstånd 450 och 600&nbsp;mm.
                </li>
              </ol>
              <p className="mt-4">
                Hela processen kräver bara <strong>6&nbsp;MJ energi per kilo</strong> —
                jämfört med 26&nbsp;MJ/kg för glasull och 101&nbsp;MJ/kg för
                polyuretanskum. Ingen smältning vid 1&nbsp;400&nbsp;°C. Ingen
                kemikaliecocktail. Bara mekanisk bearbetning av en{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  fiber som redan har alla egenskaper inbyggda
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Hur fårullsisolering fungerar — luftfickor, fukt och luftrening
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=800&q=80"
                alt="Närbild på ullfibrer som skapar miljontals små luftfickor för isolering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Miljontals små luftfickor i fibrerna — det är luften som isolerar
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullens krusiga fibrer — varje fiber har upp till 30
                böjningar per centimeter — skapar miljontals små luftfickor.
                Det är den stillastående luften som isolerar, inte fibern i
                sig. Lambda-värdet ligger på <strong>0,033–0,040&nbsp;W/m·K</strong>,
                jämförbart med stenull (0,034–0,039) och glasull
                (0,032–0,040).
              </p>
              <p className="mt-4">
                Men fårull gör tre saker som mineralull inte kan:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-foreground/80">
                <li>
                  <strong>Fuktreglering</strong> — absorberar upp till
                  35–40&nbsp;% av sin vikt i fukt utan att förlora
                  isoleringsförmåga. Mineralull tappar upp till 24 gånger i
                  prestanda vid fuktbelastning. Dessutom frigörs{" "}
                  <strong>sorptionsvärme (1,1&nbsp;kJ/g)</strong> som aktivt
                  bidrar till uppvärmningen.
                </li>
                <li>
                  <strong>Luftrening</strong> — ullens keratinprotein binder
                  formaldehyd, toluen och andra flyktiga organiska föreningar
                  (VOC) kemiskt och permanent. Forskning visar en reduktion på{" "}
                  <strong>80–87&nbsp;%</strong> inom 4&nbsp;timmar.
                </li>
                <li>
                  <strong>Brandskydd</strong> — fårull antänds först vid
                  560–600&nbsp;°C, kolnar och självslocknar. Den smälter inte
                  och droppar inte brinnande material.
                </li>
              </ul>
              <p className="mt-4">
                <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">
                  Se all teknisk data: λ-värde, µ-värde, BBR och EPD →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Var i huset kan fårullsisolering användas?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Husbygge med synligt regelverk redo för isolering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ytterväggar, snedtak, golv — fårull fungerar i hela konstruktionen
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullsisolering fungerar överallt där du annars skulle
                använda mineralull:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li><strong>Ytterväggar</strong> — fibrerna fjädrar och fyller ut regelkonstruktionen helt</li>
                <li><strong>Innerväggar</strong> — utmärkt ljudisolering, absorberar ljud i alla frekvenser</li>
                <li><strong>Snedtak</strong> — sitter kvar utan nät tack vare fibrernas naturliga friktion</li>
                <li><strong>Vindsbjälklag</strong> — fuktregulerande i den mest utsatta delen av huset</li>
                <li><strong>Mellanbjälklag</strong> — dämpar stegljud och luftljud effektivt</li>
                <li><strong>Golv</strong> — fungerar både i krypgrund och bjälklagskonstruktion</li>
              </ul>
              <p className="mt-4">
                Materialet klipps med vanlig sax, trycks på plats för hand,
                och kräver <strong>ingen skyddsutrustning</strong> — ingen
                klåda, inget irriterande damm, ingen skyddsmask. Det gör
                fårullsisolering till det mest DIY-vänliga isoleringsmaterialet
                på marknaden.
              </p>
              <p className="mt-4">
                <Link href="/anvandningsomraden" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om användningsområden →
                </Link>
                {" · "}
                <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                  Se monteringsguiden steg för steg →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Vad kostar fårullsisolering?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                alt="Modernt hus med hållbar profil — investering som håller i 75 år"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Högre materialpris — men lägre totalkostnad sett över husets livstid
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Materialpriset för fårullsisolering ligger typiskt{" "}
                <strong>2–3 gånger högre</strong> än mineralull. Men
                totalkalkylen ser annorlunda ut när du räknar in hela bilden:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li>Ingen skyddsutrustning vid montering (sparar material och tid)</li>
                <li><strong>15–25&nbsp;% kortare monteringstid</strong> jämfört med mineralull</li>
                <li>75 års livslängd utan att sjunka ihop — inget byte under husets livstid</li>
                <li>Inga köldbryggor från komprimerad isolering efter 25–30 år</li>
                <li>Fuktregulerande egenskaper minskar risk för mögel och fuktskador</li>
              </ul>
              <p className="mt-4">
                Sett över husets livstid blir fårull ofta det billigare
                alternativet. Investeringen betalar sig i lägre
                underhållskostnad, bättre inomhusmiljö och energibesparing.
              </p>
              <p className="mt-4">
                <Link href="/pris" className="text-primary hover:text-primary/80 link-grow">
                  Se prisguide och kalkyler →
                </Link>
                {" · "}
                <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow">
                  Jämför med andra material →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullsisolering och hållbarhet — negativt klimatavtryck
          </h2>
          <div className="mt-6 flex flex-col md:flex-row md:gap-8 lg:gap-12 md:items-start">
            <div className="md:flex-1 min-w-0">
              <p>
                50&nbsp;% av ren ulls vikt är biogent kol, bundet från
                atmosfären via gräset som fåren betar. Varje kilo ull lagrar
                ungefär <strong>1,8&nbsp;kg CO₂‑ekvivalenter</strong> — kol som
                hålls bundet i byggnaden under isoleringens hela livslängd.
              </p>
              <p className="mt-4">
                Med en tillverkningsenergi på bara 6&nbsp;MJ/kg — en fjärdedel
                av glasull och en femtondel av polyuretanskum — lagrar
                fårullsisolering netto mer koldioxid än den släpper ut.
                Materialet är dessutom <strong>100&nbsp;% biologiskt nedbrytbart</strong>{" "}
                och kan komposteras när det en dag demonteras.
              </p>
              <p className="mt-4">
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om hållbarhet, LCA-data och EU-taxonomin →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 p-8 bg-primary/5 border border-primary/10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Vill du veta mer eller beställa fårullsisolering?
            </h2>
            <p className="text-foreground/70 mb-1">
              I Norden säljer Byeco fårullsisolering från österrikiska Isolena —
              Europas ledande tillverkare med över 20&nbsp;års erfarenhet.
              De hjälper dig med beräkningar, val av produkt och har
              30&nbsp;dagars öppet köp.
            </p>
            <p className="mt-4">
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 link-grow text-sm font-medium"
              >
                Till Byeco.se →
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om fårullsisolering
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är fårullsisolering gjord av?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårullsisolering tillverkas av ren fårull som tvättas, kardas
                  till skivor eller rullar och behandlas med 3–5&nbsp;% borax
                  för brandskydd. Ullen kommer främst från klippning av får vars
                  ull inte når textilkvalitet — cirka 80&nbsp;% av svensk fårull
                  används idag inte alls. Hela processen är mekanisk och kräver
                  bara 6&nbsp;MJ/kg, jämfört med 26&nbsp;MJ/kg för glasull.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vilket lambda-värde har fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårullsisolering har ett lambda-värde (λ) på
                  0,033–0,040&nbsp;W/m·K, jämförbart med stenull
                  (0,034–0,039) och glasull (0,032–0,040). Skillnaden mot
                  mineralull är att fårull behåller sin isoleringsförmåga
                  även vid fukt — mineralull kan tappa upp till 24 gånger i
                  prestanda vid fuktbelastning.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur fungerar fårullsisolering i fuktiga miljöer?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårullens keratinfibrer absorberar upp till 35–40&nbsp;% av
                  sin vikt i fukt utan att förlora isoleringsförmåga. När
                  omgivningsluften torkar släpper fibrerna ut fukten igen.
                  Dessutom frigörs sorptionsvärme (1,1&nbsp;kJ/g) vid
                  fuktabsorption, vilket aktivt bidrar till uppvärmning.
                  Fårull fungerar som en naturlig fuktbuffert som skyddar
                  konstruktionen mot mögel och röta.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Kan man isolera hela huset med fårull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja. Fårullsisolering fungerar i ytterväggar, innerväggar,
                  mellanbjälklag, snedtak, vindsbjälklag och golv — alltså
                  överallt där du annars skulle använda mineralull. Materialet
                  levereras i standardmått för regelavstånd 450 och
                  600&nbsp;mm och klipps enkelt med vanlig sax.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur lång livslängd har fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårullsisolering har en natureplus-certifierad livslängd på
                  75&nbsp;år. Fibrernas disulfidbindningar ger en naturlig
                  elasticitet som gör att materialet behåller sin form
                  decennium efter decennium. Mineralull kan börja sjunka ihop
                  redan efter 25–30&nbsp;år, särskilt i vertikala
                  applikationer.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är fårullsisolering dyrare än mineralull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Materialpriset ligger 2–3 gånger högre. Men totalkalkylen
                  inkluderar ingen skyddsutrustning vid montering,
                  15–25&nbsp;% kortare monteringstid och 75&nbsp;års livslängd
                  utan byte. Sett över husets livstid blir fårull ofta det
                  billigare alternativet.
                </p>
              </details>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/fordelar" className="link-grow text-lg font-medium text-foreground">
                Fördelar med fårullsisolering →
              </Link>
              <p className="text-foreground/60 mt-1">Sju konkreta skäl — från luftrening och brandskydd till 75 års livslängd.</p>
            </li>
            <li>
              <Link href="/montering" className="link-grow text-lg font-medium text-foreground">
                Monteringsguide →
              </Link>
              <p className="text-foreground/60 mt-1">Steg-för-steg: så installerar du fårullsisolering utan skyddsutrustning.</p>
            </li>
            <li>
              <Link href="/jamforelse" className="link-grow text-lg font-medium text-foreground">
                Fårull vs mineralull, cellulosa och cellplast →
              </Link>
              <p className="text-foreground/60 mt-1">Detaljerad jämförelse av prestanda, pris och miljöpåverkan.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
