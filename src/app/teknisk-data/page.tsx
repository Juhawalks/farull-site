import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Teknisk data – fårullsisolering",
  description:
    "Lambda-värden, brandklass, densitet, fukthantering, akustik och certifieringar för fårullsisolering. Alla siffror du behöver för projektering.",
  openGraph: {
    title: "Teknisk data – fårullsisolering",
    description:
      "Lambda-värden, brandklass, densitet, fukthantering, akustik och certifieringar för fårullsisolering. Alla siffror du behöver för projektering.",
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
            headline: "Teknisk data – fårullsisolering",
            description:
              "Lambda-värden, brandklass, densitet, fukthantering, akustik och certifieringar för fårullsisolering. Alla siffror du behöver för projektering.",
            url: "https://farull.se/teknisk-data",
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
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Den här sidan samlar tekniska specifikationer för
            fårullsisolering. Värdena gäller generellt för
            kvalitetsprodukter som Isolena (som Byeco säljer i Norden),
            men kan variera något mellan tillverkare. Kontakta leverantören
            för produktspecifika datablad.
          </p>
        </ScrollReveal>

        {/* TERMISK PRESTANDA */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Termisk prestanda
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
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Brandegenskaper
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?w=800&q=80"
                alt="Eldflamma i närbild"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
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
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fuktegenskaper
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
                    <td className="py-3 pr-4 font-medium text-foreground">Isoleringsförlust vid fukt</td>
                    <td className="py-3">Ingen mätbar förlust upp till 30&nbsp;% fukthalt</td>
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
              Fårullens fukthantering är en av dess viktigaste tekniska{" "}
              <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                fördelar
              </Link>.
              Den buffrar fuktvariationer i konstruktionen och bidrar till
              ett stabilt inomhusklimat utan mekanisk ventilation.
            </p>
          </div>
        </ScrollReveal>

        {/* AKUSTIK */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Akustiska egenskaper
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt="Tyst rum med akustisk komfort"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
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
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fysiska egenskaper
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
                    <td className="py-3">50+ år (husets livstid)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* LUFTKVALITET */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Luftkvalitet och hälsa
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
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Miljö och hållbarhet
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Grön skog – hållbarhet och natur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
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
                      <td className="py-3">~15&nbsp;kWh/m³ (mineralull: ~150–250&nbsp;kWh/m³)</td>
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
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
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
                    <td className="py-3 pr-4 font-medium text-foreground">Biologiskt nedbrytbar</td>
                    <td className="py-3 px-4">Ja</td>
                    <td className="py-3 px-4">Nej</td>
                    <td className="py-3 pl-4">Nej</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Livslängd</td>
                    <td className="py-3 px-4">50+ år</td>
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
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Standarder och certifieringar
          </h2>
          <div className="mt-6">
            <p className="mb-4">
              Fårullsisolering testas och certifieras enligt europeiska
              och internationella standarder:
            </p>
            <ul className="space-y-3">
              <li>
                <strong>EN 13162</strong> — Harmoniserad produktstandard
                för mineralullsisolering (tillämpas analogt på fårull
                i flera EU-länder)
              </li>
              <li>
                <strong>EN 13501-1</strong> — Brandklassificering
                av byggprodukter
              </li>
              <li>
                <strong>EN 12086</strong> — Bestämning av
                ånggenomsläpplighet
              </li>
              <li>
                <strong>EN ISO 354</strong> — Mätning av
                ljudabsorption i efterklangsrum
              </li>
              <li>
                <strong>ETA (European Technical Assessment)</strong> —
                Tekniskt bedömningsdokument för CE-märkning
              </li>
              <li>
                <strong>natureplus®</strong> — Internationellt
                kvalitetsmärke för hållbara byggprodukter
              </li>
            </ul>
            <p className="mt-6 text-sm text-foreground/60 italic">
              Exakta certifieringar varierar per tillverkare. Kontakta
              Byeco för produktspecifika prestandadeklarationer och
              datablad för Isolena-produkter.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* BYECO CTA */}
      <ScrollReveal>
        <aside className="max-w-3xl mx-auto px-6 py-12">
          <div className="border border-surface p-6 bg-background">
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
