import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Teknisk data fårullsisolering — lambda, brandklass, µ-värde, certifieringar | Farull.se",
  description:
    "Tekniska specifikationer för fårullsisolering: λ 0,033–0,040 W/m·K, Euroclass B-s1,d0, µ-värde 1–2, αw 0,90–1,00. ETA, BBR, natureplus och EPD.",
  openGraph: {
    title: "Teknisk data fårullsisolering — lambda, brandklass, µ-värde, certifieringar",
    description:
      "Tekniska specifikationer: λ 0,033–0,040, Euroclass B-s1,d0, µ-värde 1–2, αw 0,90–1,00. ETA, BBR, natureplus och EPD.",
  },
  alternates: {
    canonical: "/teknisk-data",
  },
};

export default function TekniskData() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Teknisk data fårullsisolering — lambda, brandklass, µ-värde, certifieringar",
            description:
              "Tekniska specifikationer för fårullsisolering: λ 0,033–0,040 W/m·K, Euroclass B-s1,d0, µ-värde 1–2, αw 0,90–1,00. ETA, BBR, natureplus och EPD.",
            url: "https://farull.se/teknisk-data",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80",
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
                name: "Vad är lambda-värdet för fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullsisolering har ett lambda-värde (λ) på 0,033–0,040 W/m·K, jämförbart med mineralull (0,032–0,040) och EPS (0,031–0,038). Skillnaden är att fårull behåller sin isoleringsförmåga vid fukt, medan mineralull tappar prestanda redan vid 1–2 % fukthalt.",
                },
              },
              {
                "@type": "Question",
                name: "Vad är µ-värdet för fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullsisolering har ett µ-värde (ångdiffusionsmotståndsfaktor) på 1–2, nära stillastående luft. Det gör den till ett av de mest diffusionsöppna isoleringsmaterialen. Jämför med EPS (µ = 20–100) och XPS (µ = 80–250).",
                },
              },
              {
                "@type": "Question",
                name: "Vilken brandklass har fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Med boraxbehandling uppnår fårullsisolering Euroclass B-s1,d0 enligt EN 13501-1: svårantändlig, minimal rökutveckling, inga brinnande droppar. Antändningstemperaturen är 560–600 °C, mer än dubbelt så hög som trä (270 °C).",
                },
              },
              {
                "@type": "Question",
                name: "Behöver fårullsisolering ETA för CE-märkning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, eftersom det inte finns någon harmoniserad europeisk standard specifikt för animalisk ullsisolering krävs ett ETA (European Technical Assessment) för CE-märkning. ETA utfärdas av EOTA och möjliggör prestandadeklaration (DoP) enligt EU:s byggproduktförordning.",
                },
              },
              {
                "@type": "Question",
                name: "Uppfyller fårullsisolering BBR (Boverkets byggregler)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Fårullsisolering med Euroclass B-s1,d0 uppfyller BBR:s krav på brännbar isolering. Enligt BBR ska brännbar isolering med lägre klassning (D-s2,d2 eller sämre) skyddas av beklädnad klass K₁ 10 B-s1,d0 eller konstruktionsklass EI/REI 30.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Teknisk data" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Teknisk data
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Siffrorna bakom fårullsisolering
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80"
        alt="Närbild på ullfibrer i hög förstoring"
        width={800}
        height={533}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg text-foreground/90">
            <strong>Fårullsisolering presterar i paritet med
            mineralull termiskt</strong> — men överträffar den i
            fukthantering, luftkvalitet och hållbarhet. Här samlar vi alla
            tekniska specifikationer, certifieringar och BBR-krav du
            behöver för projektering.
          </p>
          <p className="mt-4">
            Värdena gäller generellt för kvalitetsprodukter som Isolena
            (som Byeco distribuerar i Norden), men kan variera något
            mellan tillverkare. Kontakta leverantören för produktspecifika
            datablad och prestandadeklarationer.
          </p>
        </ScrollReveal>

        {/* TERMISK PRESTANDA */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Termisk prestanda — fårullsisoleringens lambda-värde
          </h2>
          <div className="mt-6">
            <p>
              Fårullens isoleringsförmåga kommer från de stillastående
              luftfickorna som bildas mellan de krusiga fibrerna. Det är
              luften som isolerar — inte fibern i sig.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-foreground/10">
                    <th className="font-heading font-semibold text-foreground py-3 pr-4">Egenskap</th>
                    <th className="font-heading font-semibold text-foreground py-3 px-4">Värde</th>
                    <th className="font-heading font-semibold text-foreground py-3 pl-4 hidden sm:table-cell">Kommentar</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Lambda-värde (λ)</td>
                    <td className="py-3 px-4">0,033–0,040&nbsp;W/m·K</td>
                    <td className="py-3 pl-4 hidden sm:table-cell">Jämförbart med sten- och glasull</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">R-värde (145&nbsp;mm)</td>
                    <td className="py-3 px-4">~3,6–4,4&nbsp;m²·K/W</td>
                    <td className="py-3 pl-4 hidden sm:table-cell">Beroende på λ-värde</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">U-värde vid fuktig miljö</td>
                    <td className="py-3 px-4">Bibehålls</td>
                    <td className="py-3 pl-4 hidden sm:table-cell">Till skillnad från mineralull som tappar prestanda</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Det som skiljer fårull från mineralull termiskt är inte
              lambda-värdet — det är att fårull{" "}
              <strong>behåller sin isoleringsförmåga även vid hög
              fukthalt</strong>. Mineralull tappar prestanda redan vid
              1–2&nbsp;% fukthalt.
            </p>
          </div>
        </ScrollReveal>

        {/* BRANDEGENSKAPER */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Brandegenskaper — fårullsisolering och Euroclass
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
                Ull kolnar och självslocknar — sprider inte brand
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody className="text-sm">
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Euroclass</td>
                      <td className="py-3">E (utan behandling), B-s1,d0 (med boraxbehandling)</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Brandklass (DIN)</td>
                      <td className="py-3">B1/B2 — svårantändligt</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Antändningstemperatur</td>
                      <td className="py-3">560–600°C</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Beteende vid brand</td>
                      <td className="py-3">Kolnar, krymper, självslocknar</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Smältning</td>
                      <td className="py-3">Smälter inte (till skillnad från syntetmaterial)</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Giftig rök</td>
                      <td className="py-3">Nej — ingen giftig rökutveckling</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-foreground">Flamskyddsmedel</td>
                      <td className="py-3">Borax (naturligt mineral) — inga kemiska tillsatser</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Ullens höga kväveinnehåll (16&nbsp;%) gör att den naturligt
                motstår antändning. Boraxbehandlingen förbättrar
                brandklassningen ytterligare och ger samtidigt skydd mot
                mal och insekter.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* FUKTEGENSKAPER */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fuktegenskaper och ånggenomsläpplighet
          </h2>
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody className="text-sm">
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Fuktupptagning</td>
                    <td className="py-3">Upp till 35–40&nbsp;% av egen vikt</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Standardåterfuktning</td>
                    <td className="py-3">16&nbsp;% vid 20&nbsp;°C / 65&nbsp;% RH</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Isoleringsförlust vid fukt</td>
                    <td className="py-3">Ingen mätbar förlust upp till 30&nbsp;% fukthalt</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Sorptionsvärme</td>
                    <td className="py-3">~1,1&nbsp;kJ per gram absorberad fukt (exoterm)</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">µ-värde (ångdiffusionsmotstånd)</td>
                    <td className="py-3">1–2 (nära stillastående luft)</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Fuktbuffrande</td>
                    <td className="py-3">Ja — absorberar och avger fukt efter omgivningens behov</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Ångspärr</td>
                    <td className="py-3">Inte alltid nödvändig — beror på konstruktionen</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Mögelrisk</td>
                    <td className="py-3">Mycket låg — keratin motstår mikrobiell nedbrytning</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              µ-värdet 1–2 gör fårull till ett av de mest diffusionsöppna
              isoleringsmaterialen — jämför med EPS (µ&nbsp;=&nbsp;20–100)
              och XPS (µ&nbsp;=&nbsp;80–250). Det innebär att fukt passerar
              fritt genom materialet istället för att kondensera inuti
              konstruktionen. Kombinerat med{" "}
              <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                sorptionsvärmen
              </Link>{" "}
              — som aktivt värmer väggen vid fuktupptagning — gör det
              fårull idealisk för diffusionsöppna konstruktioner.
            </p>
          </div>
        </ScrollReveal>

        {/* AKUSTIK */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Akustiska egenskaper — fårullens ljudabsorption
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt="Tyst rum med akustisk komfort"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Effektiv ljuddämpning över hela frekvensspektrat
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody className="text-sm">
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Ljudabsorption (αw)</td>
                      <td className="py-3">0,90–1,00 (klass A)</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Frekvensområde</td>
                      <td className="py-3">Effektiv över hela spektrat (låg- och högfrekvent)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-foreground">Användning</td>
                      <td className="py-3">Vägg-, tak- och bjälklagsisolering, akustikpaneler</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Ullens oregelbundna fiberstruktur ger bredbandig
                ljudabsorption. Den dämpar både stegljud, pratbuller och
                lågfrekvent infraljud — något som styva
                isoleringsmaterial ofta missar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* FYSISKA EGENSKAPER */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fysiska egenskaper — densitet, tjocklek och livslängd
          </h2>
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody className="text-sm">
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Densitet</td>
                    <td className="py-3">15–25&nbsp;kg/m³ (beroende på produkt)</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Tillgängliga tjocklekar</td>
                    <td className="py-3">40, 50, 60, 80, 100, 120, 140, 160, 200&nbsp;mm</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Produktformat</td>
                    <td className="py-3">Skivor och rullar</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Formåterhämtning</td>
                    <td className="py-3">Mycket god — återtar full tjocklek efter kompression</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Sättning över tid</td>
                    <td className="py-3">Minimal — fibrernas naturliga fjädring motverkar kompression</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Livslängd</td>
                    <td className="py-3">75 år (natureplus-certifierad)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* LUFTKVALITET */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Luftkvalitet och hälsa — fårullens VOC-bindning
          </h2>
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody className="text-sm">
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Formaldehydbindning</td>
                    <td className="py-3">Absorberar upp till 96&nbsp;% inom 7 timmar (laboratorietest)</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">VOC-absorption</td>
                    <td className="py-3">Binder flyktiga organiska föreningar irreversibelt i keratinet</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Fiberemission</td>
                    <td className="py-3">Ingen — avger inte irriterande fibrer vid hantering</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Skyddsutrustning</td>
                    <td className="py-3">Krävs inte vid montering</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* MILJÖ OCH HÅLLBARHET */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Miljö och hållbarhet — fårullsisoleringens klimatprofil
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Grön skog – hållbarhet och natur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Förnybar råvara med negativt koldioxidavtryck
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody className="text-sm">
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">CO₂-avtryck</td>
                      <td className="py-3">Negativt — binder mer koldioxid än tillverkningen genererar</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Tillverkningsenergi</td>
                      <td className="py-3">~15&nbsp;kWh/m³ (~6&nbsp;MJ/kg) — mineralull: ~150–250&nbsp;kWh/m³ (~26&nbsp;MJ/kg)</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Biogent kol</td>
                      <td className="py-3">50&nbsp;% av ren ulls vikt — 1&nbsp;kg ull lagrar ~1,8&nbsp;kg CO₂e</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Råvara</td>
                      <td className="py-3">Förnybar — fåren klipps årligen</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-medium text-foreground">Biologiskt nedbrytbar</td>
                      <td className="py-3">Ja — kan komposteras vid slutet av livscykeln</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-foreground">EU-taxonomi</td>
                      <td className="py-3">Uppfyller kriterier för hållbar byggisolering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Läs mer om{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  hållbarhet och cirkulär ekonomi
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* JÄMFÖRELSETABELL */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Jämförelse med andra material
          </h2>
          <div className="mt-6">
            <p className="mb-6">
              En snabb teknisk jämförelse av de vanligaste
              isoleringsmaterialen. För en mer detaljerad analys, se{" "}
              <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow">
                jämförelsesidan
              </Link>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-foreground/10">
                    <th className="font-heading font-semibold text-foreground py-3 pr-4">Egenskap</th>
                    <th className="font-heading font-semibold text-foreground py-3 px-4">Fårull</th>
                    <th className="font-heading font-semibold text-foreground py-3 px-4">Mineralull</th>
                    <th className="font-heading font-semibold text-foreground py-3 pl-4">EPS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">λ-värde (W/m·K)</td>
                    <td className="py-3 px-4">0,033–0,040</td>
                    <td className="py-3 px-4">0,032–0,040</td>
                    <td className="py-3 pl-4">0,031–0,038</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Fuktupptagning</td>
                    <td className="py-3 px-4">35–40&nbsp;%</td>
                    <td className="py-3 px-4">~1&nbsp;%</td>
                    <td className="py-3 pl-4">~0&nbsp;%</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Brandklass</td>
                    <td className="py-3 px-4">B-s1,d0</td>
                    <td className="py-3 px-4">A1/A2</td>
                    <td className="py-3 pl-4">E/F</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Ljudabsorption (αw)</td>
                    <td className="py-3 px-4">0,90–1,00</td>
                    <td className="py-3 px-4">0,80–0,95</td>
                    <td className="py-3 pl-4">0,30–0,50</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Formaldehyd-bindning</td>
                    <td className="py-3 px-4">Ja</td>
                    <td className="py-3 px-4">Nej</td>
                    <td className="py-3 pl-4">Nej</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">µ-värde</td>
                    <td className="py-3 px-4">1–2</td>
                    <td className="py-3 px-4">1–2</td>
                    <td className="py-3 pl-4">20–100</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Embodied energy</td>
                    <td className="py-3 px-4">~6&nbsp;MJ/kg</td>
                    <td className="py-3 px-4">~26&nbsp;MJ/kg</td>
                    <td className="py-3 pl-4">~44–78&nbsp;MJ/FU</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4 font-medium text-foreground">Biologiskt nedbrytbar</td>
                    <td className="py-3 px-4">Ja</td>
                    <td className="py-3 px-4">Nej</td>
                    <td className="py-3 pl-4">Nej</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Livslängd</td>
                    <td className="py-3 px-4">75 år</td>
                    <td className="py-3 px-4">25–40 år</td>
                    <td className="py-3 pl-4">30–50 år</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* STANDARDER */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Standarder, certifieringar och BBR-krav
          </h2>
          <div className="mt-6">
            <p className="mb-4">
              Fårullsisolering testas och certifieras enligt europeiska
              och internationella standarder:
            </p>

            <h3 className="font-heading text-lg font-semibold text-foreground mt-6 mb-3">
              Teststandarder
            </h3>
            <ul className="space-y-3">
              <li>
                <strong>EN 13162</strong> — Harmoniserad produktstandard
                för mineralullsisolering (tillämpas analogt på fårull
                i flera EU-länder)
              </li>
              <li>
                <strong>EN 13501-1</strong> — Brandklassificering
                av byggprodukter (Euroclass-systemet)
              </li>
              <li>
                <strong>EN 12086</strong> — Bestämning av
                ånggenomsläpplighet (µ-värde)
              </li>
              <li>
                <strong>EN ISO 354</strong> — Mätning av
                ljudabsorption i efterklangsrum
              </li>
            </ul>

            <h3 className="font-heading text-lg font-semibold text-foreground mt-8 mb-3">
              ETA och CE-märkning
            </h3>
            <p>
              Eftersom det inte finns en harmoniserad europeisk standard
              specifikt för animalisk ullsisolering krävs ett{" "}
              <strong>ETA (European Technical Assessment)</strong> för
              CE-märkning. ETA utfärdas av EOTA (European Organisation
              for Technical Assessment) och möjliggör en
              prestandadeklaration (DoP) enligt EU:s
              byggproduktförordning. Med ETA och DoP kan produkten säljas
              fritt inom hela EU/EES.
            </p>

            <h3 className="font-heading text-lg font-semibold text-foreground mt-8 mb-3">
              Natureplus® och EPD
            </h3>
            <p>
              <strong>Natureplus®</strong> är ett internationellt
              kvalitetsmärke för hållbara byggprodukter. Certifierade
              fårullsprodukter (t.ex. Isolena Optimal) har en{" "}
              <strong>deklarerad livslängd på 75 år</strong> och är
              verifierade fria från SVHC-ämnen (Substances of Very High
              Concern).
            </p>
            <p className="mt-4">
              <strong>EPD (Environmental Product Declaration)</strong>{" "}
              krävs för beräkning av poäng inom BREEAM och LEED. Flera
              tillverkare har publicerade EPD:er som redovisar
              livscykelpåverkan från vagga till grav — inklusive det
              negativa koldioxidavtrycket.
            </p>

            <h3 className="font-heading text-lg font-semibold text-foreground mt-8 mb-3">
              BBR (Boverkets byggregler) — svenska krav
            </h3>
            <p>
              BBR ställer krav på brandskydd och energiprestanda.
              Fårullsisolering med <strong>Euroclass B‑s1,d0</strong>{" "}
              uppfyller BBR:s krav direkt. Vid lägre brandklassning
              (D‑s2,d2 eller sämre) ska brännbar isolering skyddas av
              beklädnad klass K₁&nbsp;10 B‑s1,d0 eller
              konstruktionsklass EI/REI&nbsp;30. BBR kräver dessutom
              brandavskiljning vid varje våningsplan för brännbar
              isolering.
            </p>
            <p className="mt-4">
              Sveriges energikrav (BBR avsnitt 9) hör till de strängaste
              i Europa. Fårullens lambda-värde på 0,033–0,040&nbsp;W/m·K
              möter dessa krav med samma isoleringstjocklekar som
              mineralull.
            </p>

            <p className="mt-6 text-sm text-foreground/60 italic">
              Exakta certifieringar varierar per tillverkare. Kontakta
              Byeco för produktspecifika prestandadeklarationer och
              datablad för Isolena-produkter.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga tekniska frågor om fårullsisolering
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är lambda-värdet för fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårullsisolering har ett lambda-värde (λ) på
                  0,033–0,040&nbsp;W/m·K, jämförbart med mineralull och EPS.
                  Skillnaden är att fårull behåller sin isoleringsförmåga vid
                  fukt, medan mineralull tappar prestanda redan vid
                  1–2&nbsp;% fukthalt.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är µ-värdet för fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  µ-värdet (ångdiffusionsmotståndsfaktor) är 1–2, nära
                  stillastående luft. Det gör fårull till ett av de mest
                  diffusionsöppna isoleringsmaterialen. Jämför med EPS
                  (µ&nbsp;=&nbsp;20–100) och XPS (µ&nbsp;=&nbsp;80–250).
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vilken brandklass har fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Med boraxbehandling: Euroclass B‑s1,d0 — svårantändlig,
                  minimal rökutveckling, inga brinnande droppar.
                  Antändningstemperatur 560–600&nbsp;°C, mer än dubbelt
                  så hög som trä.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Behöver fårullsisolering ETA för CE-märkning?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja, eftersom det saknas en harmoniserad EU-standard för
                  animalisk ullsisolering krävs ETA (European Technical
                  Assessment) utfärdat av EOTA. Med ETA kan produkten
                  CE-märkas och säljas i hela EU/EES.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Uppfyller fårullsisolering BBR?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja. Med Euroclass B‑s1,d0 uppfylls BBR:s brandkrav direkt.
                  Lambda-värdet 0,033–0,040&nbsp;W/m·K möter Sveriges
                  energikrav (BBR avsnitt 9) med samma tjocklekar som
                  mineralull.
                </p>
              </details>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BYECO CTA */}
      <ScrollReveal>
        <aside className="max-w-3xl mx-auto px-6 py-12">
          <div className="border-l-2 border-accent p-6 bg-primary/5">
            <p className="font-body text-foreground/80 text-base leading-relaxed">
              Behöver du produktspecifika datablad eller hjälp med
              projektering? Byeco delar gärna teknisk dokumentation
              och hjälper med dimensionering.{" "}
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 link-grow"
              >
                Kontakta Byeco →
              </a>
            </p>
          </div>
        </aside>
      </ScrollReveal>

      {/* LÄS VIDARE */}
      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/jamforelse" className="link-grow text-lg font-medium text-foreground">
                Fårull vs andra material →
              </Link>
              <p className="text-foreground/60 mt-1">Fördjupad jämförelse av prestanda, pris och miljöpåverkan.</p>
            </li>
            <li>
              <Link href="/pris" className="link-grow text-lg font-medium text-foreground">
                Vad kostar fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Materialpris, totalkostnad och räkneexempel.</p>
            </li>
            <li>
              <Link href="/fordelar" className="link-grow text-lg font-medium text-foreground">
                Fördelar med fårullsisolering →
              </Link>
              <p className="text-foreground/60 mt-1">De praktiska fördelarna bakom siffrorna.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
