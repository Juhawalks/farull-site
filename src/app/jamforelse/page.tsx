import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Fårull vs mineralull, cellulosa och EPS – isolering jämförd punkt för punkt | Farull.se",
  description:
    "Jämför fårullsisolering med mineralull, cellulosa och EPS: λ-värde, fukt, brand, luftrening, pris och livslängd. Tabell och fakta för rätt val av isolering.",
  openGraph: {
    title: "Fårull vs mineralull, cellulosa och EPS – isolering jämförd punkt för punkt",
    description:
      "Jämför fårullsisolering med mineralull, cellulosa och EPS: λ-värde, fukt, brand, luftrening, pris och livslängd. Tabell och fakta för rätt val av isolering.",
  },
  alternates: {
    canonical: "/jamforelse",
  },
};

export default function Jamforelse() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Fårull vs mineralull, cellulosa och EPS – isolering jämförd punkt för punkt",
            description:
              "Jämför fårullsisolering med mineralull, cellulosa och EPS: λ-värde, fukt, brand, luftrening, pris och livslängd.",
            url: "https://farull.se/jamforelse",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
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
                name: "Är fårullsisolering lika bra som mineralull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, termiskt sett. Fårull har λ-värde 0,033–0,040 W/m·K, mineralull 0,032–0,040. Ingen mätbar skillnad i praktiken. Men fårull överträffar mineralull i fukthantering (absorberar 40 % utan prestandaförlust), luftrening (binder formaldehyd 80–87 %), brandskydd utan kemikalier och livslängd (75 år mot 25–30 år).",
                },
              },
              {
                "@type": "Question",
                name: "Varför är fårullsisolering dyrare än mineralull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Materialpriset ligger 2–3 gånger högre, främst på grund av mindre tillverkningsvolymer och råvarukostnad. Men totalkalkylen minskar skillnaden: ingen skyddsutrustning, 15–25 % snabbare montering, 75 års livslängd utan byte och inga fuktskador. Sett över 50 år blir fårull ofta billigare totalt.",
                },
              },
              {
                "@type": "Question",
                name: "Vilken isolering är bäst för fuktiga miljöer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårull. Den absorberar upp till 35–40 % av sin vikt i fukt utan att förlora isoleringsförmåga, och släpper ut fukten igen när luften torkar. Mineralull tappar upp till 24 gånger i prestanda vid fukt. Cellulosa hanterar fukt bättre än mineralull men sämre än fårull och kan drabbas av mögel vid långvarig fuktbelastning.",
                },
              },
              {
                "@type": "Question",
                name: "Är cellulosa ett bra alternativ till fårull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cellulosa är ett prisvärt biobaserat alternativ med liknande λ-värde (0,036–0,040). Men det kräver inblåsning med specialutrustning, kan sjunka ihop i vertikala applikationer, och binder inte formaldehyd. Cellulosa behöver kemiska flamskyddsmedel (ammoniumsulfat/borat) medan fårull klarar B-s1,d0 med enbart naturlig borax.",
                },
              },
              {
                "@type": "Question",
                name: "Kan man jämföra fårull med EPS/cellplast?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bara delvis. EPS har bättre λ-värde (0,030–0,038) och är billigare, men saknar helt fuktbuffrande egenskaper, smälter vid brand med giftig rök, är fossilbaserad och bryts inte ner biologiskt. EPS fungerar bäst under mark och i grundkonstruktioner – i väggar, tak och bjälklag erbjuder fårull ett helt annat paket av egenskaper.",
                },
              },
              {
                "@type": "Question",
                name: "Vilken isolering renar inomhusluften?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enbart fårull. Ullens keratinprotein binder formaldehyd, toluen, limonen och andra VOC kemiskt och permanent. Forskning visar 80–87 % reduktion av formaldehyd inom 4 timmar. Effekten varar i upp till 30 år. Varken mineralull, cellulosa eller EPS har denna egenskap.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Jämförelse" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Jämförelse
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Fårull mot resten – isolering jämförd punkt för punkt
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
        alt="Olika isoleringsmaterial sida vid sida – fårull, mineralull, cellulosa och EPS"
        width={800}
        height={533}
        priority
        className="w-full h-56 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg leading-relaxed">
            <strong>Alla isoleringsmaterial isolerar – det är vad de har gemensamt.</strong>{" "}
            Men skillnaderna i fukthantering, luftrening, hälsopåverkan,
            brandskydd, miljöavtryck och arbetskomfort är stora. Här ställer vi{" "}
            <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
              fårull
            </Link>{" "}
            mot de tre vanligaste alternativen: mineralull, cellulosa och
            EPS/cellplast – egenskap för egenskap, med konkreta siffror.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-8">
            Jämförelsetabell – fårull vs mineralull vs cellulosa vs EPS
          </h2>
          <div className="mt-6 overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Egenskap</th>
                  <th className="text-left py-3 px-4 font-semibold text-accent">Fårull</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground/70">Mineralull</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground/70">Cellulosa</th>
                  <th className="text-left py-3 pl-4 font-semibold text-foreground/70">EPS</th>
                </tr>
              </thead>
              <tbody className="text-foreground/70">
                <tr className="border-b border-foreground/5">
                  <td className="py-3 pr-4 font-medium text-foreground/90">λ-värde (W/m·K)</td>
                  <td className="py-3 px-4">0,033–0,040</td>
                  <td className="py-3 px-4">0,032–0,040</td>
                  <td className="py-3 px-4">0,036–0,040</td>
                  <td className="py-3 pl-4">0,030–0,038</td>
                </tr>
                <tr className="border-b border-foreground/5">
                  <td className="py-3 pr-4 font-medium text-foreground/90">Fuktabsorption</td>
                  <td className="py-3 px-4 text-accent">35–40 %</td>
                  <td className="py-3 px-4">~0 % (tappar prestanda)</td>
                  <td className="py-3 px-4">10–15 %</td>
                  <td className="py-3 pl-4">~0 %</td>
                </tr>
                <tr className="border-b border-foreground/5">
                  <td className="py-3 pr-4 font-medium text-foreground/90">Binder formaldehyd</td>
                  <td className="py-3 px-4 text-accent">Ja (80–87 %)</td>
                  <td className="py-3 px-4">Nej</td>
                  <td className="py-3 px-4">Nej</td>
                  <td className="py-3 pl-4">Nej</td>
                </tr>
                <tr className="border-b border-foreground/5">
                  <td className="py-3 pr-4 font-medium text-foreground/90">Brandklass</td>
                  <td className="py-3 px-4">B-s1,d0 (borax)</td>
                  <td className="py-3 px-4">A1 (obrännbar)</td>
                  <td className="py-3 px-4">B-s2,d0 (kemisk)</td>
                  <td className="py-3 pl-4">E (smälter)</td>
                </tr>
                <tr className="border-b border-foreground/5">
                  <td className="py-3 pr-4 font-medium text-foreground/90">Skyddsutrustning</td>
                  <td className="py-3 px-4 text-accent">Ingen</td>
                  <td className="py-3 px-4">Mask, handskar, kläder</td>
                  <td className="py-3 px-4">Mask (vid inblåsning)</td>
                  <td className="py-3 pl-4">Ingen</td>
                </tr>
                <tr className="border-b border-foreground/5">
                  <td className="py-3 pr-4 font-medium text-foreground/90">Livslängd</td>
                  <td className="py-3 px-4 text-accent">75 år (certifierad)</td>
                  <td className="py-3 px-4">25–30 år</td>
                  <td className="py-3 px-4">30–40 år</td>
                  <td className="py-3 pl-4">50+ år</td>
                </tr>
                <tr className="border-b border-foreground/5">
                  <td className="py-3 pr-4 font-medium text-foreground/90">Tillverkningsenergi</td>
                  <td className="py-3 px-4 text-accent">6 MJ/kg</td>
                  <td className="py-3 px-4">26 MJ/kg</td>
                  <td className="py-3 px-4">3–5 MJ/kg</td>
                  <td className="py-3 pl-4">101 MJ/kg</td>
                </tr>
                <tr className="border-b border-foreground/5">
                  <td className="py-3 pr-4 font-medium text-foreground/90">CO₂-lagring</td>
                  <td className="py-3 px-4 text-accent">1,8 kg/kg ull</td>
                  <td className="py-3 px-4">Ingen</td>
                  <td className="py-3 px-4">1,5 kg/kg</td>
                  <td className="py-3 pl-4">Ingen</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground/90">Biologiskt nedbrytbar</td>
                  <td className="py-3 px-4 text-accent">Ja (100 %)</td>
                  <td className="py-3 px-4">Nej</td>
                  <td className="py-3 px-4">Ja</td>
                  <td className="py-3 pl-4">Nej (100+ år)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-8">
            Fårull vs mineralull – den vanligaste jämförelsen
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1704742950992-9815a104820c?w=800&q=80"
                alt="Isoleringsarbete – mineralull kräver skyddsutrustning, fårull monteras med bara händerna"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Mineralull kräver skyddsutrustning – fårull monteras med bara händerna
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Mineralull (sten- och glasull) är Sveriges mest använda
                isolering. Den är billig, beprövad och isolerar bra. Men
                jämförelsen med fårull avslöjar flera begränsningar:
              </p>
              <p className="mt-4">
                <strong>Termisk prestanda</strong> – jämförbar. Fårull
                0,033–0,040&nbsp;W/m·K, mineralull 0,032–0,040. Ingen mätbar
                skillnad i praktiken. Men vid fuktbelastning kollapsar
                mineralullens prestanda: studier visar upp till{" "}
                <strong>24 gånger sämre isolering</strong> vid höga
                fuktnivåer. Fårull behåller sin prestanda ner till
                65&nbsp;% relativ fuktighet i fibrerna.
              </p>
              <p className="mt-4">
                <strong>Luftkvalitet</strong> – här finns ingen jämförelse.
                Fårullens keratinprotein binder formaldehyd, toluen och andra
                VOC kemiskt och permanent –{" "}
                <strong>80–87&nbsp;% reduktion inom 4&nbsp;timmar</strong>.
                Mineralull har ingen luftrenande effekt. I nybyggda hus med
                höga formaldehydnivåer är detta en avgörande skillnad.
              </p>
              <p className="mt-4">
                <strong>Montering</strong> – fårull kräver ingen
                skyddsutrustning. Ingen klåda, inget irriterande damm, ingen
                skyddsmask. Mineralull kräver mask, handskar och
                skyddskläder. Fårull monteras{" "}
                <strong>15–25&nbsp;% snabbare</strong> i praktiken.
              </p>
              <p className="mt-4">
                <strong>Miljö</strong> – mineralull tillverkas genom smältning
                vid 1&nbsp;400&nbsp;°C och kräver 26&nbsp;MJ/kg.
                Fårullsisolering tillverkas mekaniskt och kräver bara
                6&nbsp;MJ/kg. Fårull lagrar dessutom 1,8&nbsp;kg CO₂ per kilo
                – mineralull har inga koldioxidbindande egenskaper.
              </p>
              <p className="mt-4">
                <strong>Livslängd</strong> – fårull har{" "}
                <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">
                  75&nbsp;års natureplus-certifierad livslängd
                </Link>. Mineralull kan börja sjunka ihop efter 25–30&nbsp;år,
                särskilt i vertikala applikationer, vilket skapar köldbryggor.
              </p>
              <p className="mt-4">
                <strong>Pris</strong> – fårull kostar 2–3x mer per
                kvadratmeter. Men lägre monteringskostnader, ingen
                skyddsutrustning och 75&nbsp;års livslängd utan byte
                kompenserar. Sett över{" "}
                <Link href="/pris" className="text-primary hover:text-primary/80 link-grow">
                  husets livstid
                </Link>{" "}
                blir skillnaden ofta försumbar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-8">
            Fårull vs cellulosa – två biobaserade alternativ
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Naturliga fibrer – cellulosa och fårull är biobaserade med olika styrkor"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Cellulosa och fårull – biobaserade alternativ med olika styrkor
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Cellulosa (returpapper) är det prisvärdaste biobaserade
                alternativet. Lambda-värdet är liknande
                (0,036–0,040&nbsp;W/m·K) och tillverkningsenergin ännu lägre
                (3–5&nbsp;MJ/kg). Det är ett bra val – men fårull har
                fördelar i flera viktiga dimensioner:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                <li>
                  <strong>Fukthantering</strong> – cellulosa absorberar
                  10–15&nbsp;% fukt, fårull 35–40&nbsp;%. Vid långvarig
                  fuktbelastning riskerar cellulosa mögel. Fårull fungerar som
                  en aktiv fuktbuffert som skyddar konstruktionen.
                </li>
                <li className="mt-3">
                  <strong>Luftrening</strong> – cellulosa binder inte
                  formaldehyd eller VOC. Fårullens keratinprotein gör det
                  permanent och effektivt.
                </li>
                <li className="mt-3">
                  <strong>Brandskydd</strong> – cellulosa kräver kemiska
                  flamskyddsmedel (ammoniumsulfat och/eller borat) för att
                  uppnå brandklass B‑s2,d0. Fårull klarar B‑s1,d0 med enbart
                  naturlig borax – utan syntetiska tillsatser.
                </li>
                <li className="mt-3">
                  <strong>Formstabilitet</strong> – cellulosa kan sjunka ihop
                  med tiden i vertikala applikationer (väggar). Fårullens
                  disulfidbindningar ger permanent fjädring – fibrerna håller
                  formen i 75&nbsp;år.
                </li>
                <li className="mt-3">
                  <strong>Montering</strong> – cellulosa kräver inblåsning med
                  specialutrustning (maskin, slang, tillslutning av hålrum).
                  Fårull klipps med sax och trycks på plats för hand.
                </li>
              </ul>
              <p className="mt-4">
                Cellulosa är ett starkt val för den som prioriterar pris och
                miljö. Men för den som vill ha bästa möjliga inomhusklimat,
                fuktskydd och livslängd är fårull överlägsen.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-8">
            Fårull vs EPS/cellplast – helt olika filosofier
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                alt="Olika isoleringsmaterial – EPS och fårull representerar olika byggfilosofier"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                EPS isolerar termiskt – men saknar fårullens fukt-, brand- och luftrenande egenskaper
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                EPS (expanderad polystyren/cellplast) och fårull befinner sig
                i helt olika kategorier. EPS är billigt och termiskt
                effektivt (λ&nbsp;0,030–0,038), men det är i princip allt det
                erbjuder:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                <li>
                  <strong>Fukt</strong> – EPS absorberar ingen fukt och har
                  inga buffrande egenskaper. I konstruktioner med
                  fuktproblematik erbjuder det inget skydd.
                </li>
                <li className="mt-3">
                  <strong>Brand</strong> – EPS smälter vid brand och avger
                  giftig rök (styrengas). Brandklass E – den lägsta godkända.
                  Fårull kolnar och självslocknar vid B‑s1,d0.
                </li>
                <li className="mt-3">
                  <strong>Miljö</strong> – EPS är 100&nbsp;% fossilbaserad
                  (petroleumprodukt), kräver 101&nbsp;MJ/kg i
                  tillverkningsenergi och bryts inte ner biologiskt på
                  hundratals år. Fårull kräver 6&nbsp;MJ/kg och är helt
                  kompostbar.
                </li>
                <li className="mt-3">
                  <strong>Inomhusklimat</strong> – EPS bidrar inte till
                  luftrening, fuktreglering eller akustik. Fårull gör allt
                  tre.
                </li>
              </ul>
              <p className="mt-4">
                EPS har sin plats: grundisolering under mark, där
                fukttålighet och tryckhållfasthet är avgörande. Men i väggar,
                tak och bjälklag – där inomhusklimat, fukthantering och
                brandsäkerhet spelar roll – erbjuder fårull ett helt annat
                paket.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-8">
            Sammanfattning – när ska du välja fårull?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1763569003710-ddc3e690ebbf?w=800&q=80"
                alt="Grönt landskap med betande får – fårull ger mer tillbaka i hälsa och hållbarhet"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Fårull kostar mer – men ger mer tillbaka i luftkvalitet, hälsa och hållbarhet
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårull kostar mer per kvadratmeter. Det är ärligt. Men om du
                väger in hela bilden – luftkvalitet, fukthantering,
                arbetskomfort, livslängd, brandskydd och klimatpåverkan –
                förändras kalkylen.
              </p>
              <p className="mt-4">
                <strong>Välj fårull om du prioriterar:</strong>
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li>Frisk inomhusluft (allergi, kemikaliefrihet, barns hälsa)</li>
                <li>Fuktsäkerhet i konstruktionen</li>
                <li>Hållbarhet och lågt klimatavtryck</li>
                <li>Enkel montering utan skyddsutrustning</li>
                <li>Lång livslängd utan underhåll</li>
              </ul>
              <p className="mt-4">
                <strong>Mineralull kan vara rätt val</strong> om budget är det
                enda kriteriet och konstruktionen har god ventilation.{" "}
                <strong>Cellulosa</strong> passar den som vill ha biobaserat
                till lägre pris. <strong>EPS</strong> hör hemma under mark.
              </p>
              <p className="mt-4">
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om fårullens sju fördelar →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <aside className="max-w-3xl mx-auto px-6 py-12">
          <div className="border-l-2 border-accent p-6 bg-primary/5">
            <p className="font-body text-foreground/80 text-base leading-relaxed">
              Funderar du på att byta till fårull? Byeco hjälper dig jämföra
              alternativ och räkna ut kostnaden för just ditt projekt. Fri
              rådgivning och 30&nbsp;dagars öppet köp.{" "}
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
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om isoleringsmaterial
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är fårullsisolering lika bra som mineralull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja, termiskt sett. Fårull har λ-värde 0,033–0,040&nbsp;W/m·K,
                  mineralull 0,032–0,040. Ingen mätbar skillnad i praktiken.
                  Men fårull överträffar mineralull i fukthantering (40&nbsp;%
                  absorption utan prestandaförlust), luftrening (binder
                  formaldehyd 80–87&nbsp;%), brandskydd utan kemikalier och
                  livslängd (75 mot 25–30&nbsp;år).
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Varför är fårullsisolering dyrare?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Materialpriset ligger 2–3 gånger högre, främst på grund av
                  mindre tillverkningsvolymer och råvarukostnad. Men
                  totalkalkylen minskar skillnaden: ingen skyddsutrustning,
                  15–25&nbsp;% snabbare montering, 75&nbsp;års livslängd utan
                  byte och inga fuktskador. Sett över 50&nbsp;år blir fårull
                  ofta billigare totalt.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vilken isolering är bäst för fuktiga miljöer?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårull. Den absorberar upp till 35–40&nbsp;% av sin vikt i
                  fukt utan att förlora isoleringsförmåga. Mineralull tappar
                  upp till 24 gånger i prestanda vid fukt. Cellulosa hanterar
                  fukt bättre än mineralull men sämre än fårull och riskerar
                  mögel vid långvarig fuktbelastning.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är cellulosa ett bra alternativ till fårull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Cellulosa är ett prisvärt biobaserat alternativ med liknande
                  λ-värde (0,036–0,040). Men det kräver inblåsning med
                  specialutrustning, kan sjunka ihop i vertikala
                  applikationer och binder inte formaldehyd. Cellulosa
                  behöver kemiska flamskyddsmedel medan fårull klarar
                  B‑s1,d0 med enbart naturlig borax.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vilken isolering renar inomhusluften?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Enbart fårull. Ullens keratinprotein binder formaldehyd,
                  toluen, limonen och andra VOC kemiskt och permanent –
                  80–87&nbsp;% reduktion inom 4&nbsp;timmar. Effekten varar
                  i upp till 30&nbsp;år. Varken mineralull, cellulosa eller
                  EPS har denna egenskap.
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
              <p className="text-foreground/60 mt-1">Sju konkreta skäl – från luftrening till 75 års livslängd.</p>
            </li>
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Så tillverkas produkten du jämför – från fårrygg till vägg.</p>
            </li>
            <li>
              <Link href="/pris" className="link-grow text-lg font-medium text-foreground">
                Prisguide →
              </Link>
              <p className="text-foreground/60 mt-1">Materialkostnad, totalkalkyl och livscykelanalys.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
