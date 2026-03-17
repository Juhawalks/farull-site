import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad kostar fårullsisolering? Pris per m², totalkalkyl och räkneexempel | Farull.se",
  description:
    "Fårullsisolering kostar 150–400 kr/m² — 2–3x mer än mineralull. Men sett över 50 år blir totalkostnaden ofta lägre. Räkneexempel, livscykelkalkyl och prisfaktorer.",
  openGraph: {
    title: "Vad kostar fårullsisolering? Pris per m², totalkalkyl och räkneexempel",
    description:
      "Fårullsisolering kostar 150–400 kr/m² — 2–3x mer än mineralull. Men sett över 50 år blir totalkostnaden ofta lägre. Räkneexempel, livscykelkalkyl och prisfaktorer.",
  },
  alternates: {
    canonical: "/pris",
  },
};

export default function Pris() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vad kostar fårullsisolering? Pris per m², totalkalkyl och räkneexempel",
            description:
              "Fårullsisolering kostar 150–400 kr/m² — 2–3x mer än mineralull. Men sett över 50 år blir totalkostnaden ofta lägre.",
            url: "https://farull.se/pris",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
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
                name: "Vad kostar fårullsisolering per kvadratmeter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullsisolering kostar ungefär 150–400 kr per m² beroende på tjocklek och produkttyp. Mineralull kostar 50–150 kr/m² för motsvarande tjocklek. Materialpriset är alltså 2–3 gånger högre för fårull, men totalkostnaden över husets livstid blir ofta lägre tack vare längre livslängd och lägre arbetskostnad.",
                },
              },
              {
                "@type": "Question",
                name: "Är fårullsisolering billigare än mineralull på lång sikt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ofta ja. Ett räkneexempel för ett typiskt småhus (120 m²): mineralull kostar ~27 500 kr vid montering men kräver byte efter 25–30 år (ytterligare ~35 000 kr), totalt ~62 500 kr över 50 år. Fårull kostar ~42 000 kr vid montering men håller 75 år utan byte — totalkostnaden stannar vid ~42 000 kr. En besparing på ~20 000 kr.",
                },
              },
              {
                "@type": "Question",
                name: "Vad påverkar priset på fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fem faktorer: tjocklek (50–200 mm), produkttyp (skivor kostar mer än rullar), isoleringsarea (större projekt ger bättre pris/m²), tillgänglighet (snedtak och krypgrunder kräver mer arbetstid) och om du monterar själv eller anlitar hantverkare. DIY kan halvera totalkostnaden — fårull är det enklaste materialet att montera själv.",
                },
              },
              {
                "@type": "Question",
                name: "Kan man få ROT-avdrag för fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Montering av isolering i befintliga bostäder berättigar till ROT-avdrag (30 % av arbetskostnaden, max 50 000 kr/person/år). Det gäller arbetskostnaden, inte materialet. Eftersom fårullsisolering monteras snabbare (15–25 % kortare tid) kan ROT-avdraget bli marginellt lägre, men det vägs upp av den lägre arbetskostnaden totalt.",
                },
              },
              {
                "@type": "Question",
                name: "Hur mycket kostar det att isolera ett helt hus med fårull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "För ett typiskt småhus (120–150 m² isoleringsyta) ligger totalkostnaden på cirka 35 000–55 000 kr inklusive material och arbete. Med ROT-avdrag minskar kostnaden ytterligare. Exakt pris beror på tjocklek, konstruktionstyp och om du monterar själv. Byeco erbjuder kostnadsfri beräkning baserad på dina ritningar.",
                },
              },
              {
                "@type": "Question",
                name: "Varför kostar fårullsisolering mer än mineralull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tre orsaker: råvaran (fårull) kostar mer än sten eller glas, tillverkningsvolymerna är mindre (nischprodukt) och kvalitetskraven är höga (tvättning, kardning, boraxbehandling). I takt med att efterfrågan ökar och fler tillverkare etablerar sig förväntas prisskillnaden minska. Dessutom tas 80 % av svensk fårull inte tillvara idag — ökad användning kan sänka råvarukostnaden.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Pris" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Pris
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vad kostar fårullsisolering?
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
        alt="Kalkyl för isoleringsprojekt — fårullsisolering kostar mer per m² men mindre totalt"
        width={800}
        height={533}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg leading-relaxed">
            <strong>Fårullsisolering kostar 150–400&nbsp;kr per m²</strong> beroende
            på tjocklek — ungefär 2–3 gånger mer än mineralull. Det är den
            siffra de flesta fastnar vid. Men priset per kvadratmeter berättar
            bara en del av historien. Räknar du in arbetskostnad, livslängd
            och frånvaron av byte blir totalkostnaden över 50&nbsp;år ofta{" "}
            <strong>lägre</strong> med fårull. Här går vi igenom siffrorna.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Materialpris per kvadratmeter — fårull vs mineralull
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                alt="Fårullsisolering i skivor — Isolena-produkter från Byeco"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Isolena-skivor från Byeco — finns i flera tjocklekar och format
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Materialpriset varierar med tjocklek och produkttyp:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/20">
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Material</th>
                      <th className="text-right py-2 px-4 font-semibold text-foreground">Pris/m²</th>
                      <th className="text-right py-2 pl-4 font-semibold text-foreground">Typisk tjocklek</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/70">
                    <tr className="border-b border-foreground/5">
                      <td className="py-2 pr-4 text-accent font-medium">Fårull (skivor)</td>
                      <td className="py-2 px-4 text-right">200–400 kr</td>
                      <td className="py-2 pl-4 text-right">95–195 mm</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-2 pr-4 text-accent font-medium">Fårull (rullar)</td>
                      <td className="py-2 px-4 text-right">150–300 kr</td>
                      <td className="py-2 pl-4 text-right">50–100 mm</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-2 pr-4">Mineralull (stenull)</td>
                      <td className="py-2 px-4 text-right">70–150 kr</td>
                      <td className="py-2 pl-4 text-right">95–195 mm</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-2 pr-4">Mineralull (glasull)</td>
                      <td className="py-2 px-4 text-right">50–120 kr</td>
                      <td className="py-2 pl-4 text-right">95–195 mm</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Cellulosa (inblåst)</td>
                      <td className="py-2 px-4 text-right">40–80 kr</td>
                      <td className="py-2 pl-4 text-right">Variabel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-foreground/60 italic">
                Priserna är ungefärliga och baserade på svenska marknadspriser
                2025/2026. Faktiska priser varierar mellan återförsäljare.
              </p>
              <p className="mt-4">
                Skillnaden i materialpris är tydlig. Men som vi ska se
                nedan berättar den inte hela historien.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Lägre arbetskostnad — 15–25 % snabbare montering
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Montering av fårullsisolering utan skyddsutrustning — snabbare och enklare"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ingen skyddsutrustning — snabbare montering och lägre arbetskostnad
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Mineralull kräver skyddsmask (P2), handskar, skyddsglasögon
                och långärmade kläder. Det tar tid att klä på sig, är
                obehagligt att jobba i, och gör att varje arbetspass går
                långsammare.
              </p>
              <p className="mt-4">
                Fårull klipps med vanlig sax och trycks på plats. Ingen
                klåda, inget damm, inget obehag.{" "}
                <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                  Monteringen
                </Link>{" "}
                går <strong>15–25&nbsp;% snabbare</strong>, och hantverkaren
                kan jobba längre pass utan pauser. Det sänker arbetskostnaden
                merkbart.
              </p>
              <p className="mt-4">
                Många husägare väljer dessutom att montera själva — något som
                är betydligt enklare med fårull. DIY kan halvera
                totalkostnaden för arbetsmomentet.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            75 års livslängd — inget byte under husets livstid
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                alt="Äldre hus som håller — fårullsisolering behöver inte bytas under husets livstid"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                75 års certifierad livslängd — fårull håller hela husets liv
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullens naturliga fjädring — fibrernas{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  disulfidbindningar
                </Link>{" "}
                ger permanent elasticitet — gör att den inte komprimeras med
                tiden. Isoleringen har en{" "}
                <strong>natureplus-certifierad livslängd på 75&nbsp;år</strong>.
              </p>
              <p className="mt-4">
                Mineralull kan sjunka ihop i vertikala applikationer efter
                25–30&nbsp;år, vilket skapar köldbryggor och försämrad
                energiprestanda. Ett byte innebär:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li>Rivning av innerbeklädnad</li>
                <li>Bortforsling av gammal isolering (avfallskostnad)</li>
                <li>Ny isolering + ny montering</li>
                <li>Återställning av innerbeklädnad</li>
              </ul>
              <p className="mt-4">
                Den kostnaden — ofta <strong>30&nbsp;000–50&nbsp;000&nbsp;kr</strong> för
                ett småhus — syns aldrig på den ursprungliga offerten. Men
                den kommer.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Räkneexempel — typiskt småhus över 50 år
          </h2>
          <div className="mt-6">
            <p className="mb-6">
              Låt oss jämföra totalkostnaden för ett typiskt småhus med{" "}
              <strong>120&nbsp;m² isoleringsyta</strong> (ytterväggar +
              vindsbjälklag) sett över 50&nbsp;år:
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="border-b-2 border-foreground/10">
                    <th className="font-heading font-semibold text-foreground py-3 pr-4">Kostnad</th>
                    <th className="font-heading font-semibold text-foreground/70 py-3 px-4 text-right">Mineralull</th>
                    <th className="font-heading font-semibold text-accent py-3 pl-4 text-right">Fårull</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Material (120&nbsp;m²)</td>
                    <td className="py-3 px-4 text-right">~12&nbsp;000&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">~30&nbsp;000&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Skyddsutrustning</td>
                    <td className="py-3 px-4 text-right">~500&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">0&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Arbetskostnad (montering)</td>
                    <td className="py-3 px-4 text-right">~15&nbsp;000&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">~12&nbsp;000&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/10 font-medium text-foreground">
                    <td className="py-3 pr-4">Totalt vid montering</td>
                    <td className="py-3 px-4 text-right">~27&nbsp;500&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">~42&nbsp;000&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Byte efter 25–30 år*</td>
                    <td className="py-3 px-4 text-right">~35&nbsp;000&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right text-accent">0&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Eventuella fuktskador</td>
                    <td className="py-3 px-4 text-right">Risk finns</td>
                    <td className="py-3 pl-4 text-right text-accent">Minimerad risk</td>
                  </tr>
                  <tr className="font-medium text-foreground border-t-2 border-foreground/10">
                    <td className="py-3 pr-4 font-heading font-semibold">Totalkostnad (50 år)</td>
                    <td className="py-3 px-4 text-right font-heading font-semibold">~62&nbsp;500&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right font-heading font-semibold text-accent">~42&nbsp;000&nbsp;kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-foreground/60 italic">
              * Byte inkluderar rivning, avfallshantering, nytt material och
              ny montering. Siffrorna är ungefärliga och baserade på
              genomsnittliga priser 2025/2026. Kontakta Byeco för en
              beräkning baserad på just ditt projekt.
            </p>

            <p className="mt-6">
              <strong>Besparing med fårull: ~20&nbsp;000&nbsp;kr</strong> över
              50&nbsp;år — och det är innan du räknar in bättre inomhusluft,
              fuktsäkerhet och lägre klimatavtryck.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            ROT-avdrag för fårullsisolering
          </h2>
          <div className="mt-6">
            <p>
              Montering av isolering i befintliga bostäder berättigar till{" "}
              <strong>ROT-avdrag</strong> — 30&nbsp;% av arbetskostnaden, max
              50&nbsp;000&nbsp;kr per person och år. Det gäller
              arbetskostnaden, inte materialet.
            </p>
            <p className="mt-4">
              I räkneexemplet ovan (arbetskostnad ~12&nbsp;000&nbsp;kr)
              innebär ROT-avdrag en ytterligare besparing på{" "}
              <strong>~3&nbsp;600&nbsp;kr</strong>. Det minskar
              totalkostnaden vid montering till cirka 38&nbsp;400&nbsp;kr.
            </p>
            <p className="mt-4 text-sm text-foreground/60 italic">
              ROT-avdrag gäller vid renovering av befintlig bostad, inte vid
              nyproduktion. Kontrollera aktuella regler på Skatteverkets webbplats.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Vad påverkar priset på fårullsisolering?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Husbygge — tjocklek, produkttyp och area avgör priset"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Tjocklek, densitet och area avgör slutpriset
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <ul className="space-y-3">
                <li>
                  <strong>Tjocklek</strong> — 50&nbsp;mm kostar naturligtvis
                  mindre än 195&nbsp;mm. Vilken tjocklek du behöver beror på
                  konstruktionen och BBR-kraven. I ytterväggar krävs normalt
                  145–195&nbsp;mm, i vindsbjälklag 300–400&nbsp;mm.
                </li>
                <li>
                  <strong>Produkttyp</strong> — skivor (styva, densitet
                  ~25&nbsp;kg/m³) kostar mer än rullar (flexibla, ~20&nbsp;kg/m³).
                  Skivor passar bäst i väggar, rullar i vindsbjälklag.
                </li>
                <li>
                  <strong>Area</strong> — större projekt ger ofta bättre pris
                  per kvadratmeter. Kontakta Byeco för volympriser.
                </li>
                <li>
                  <strong>Tillgänglighet</strong> — svåråtkomliga utrymmen
                  (snedtak, krypgrunder) kräver mer arbetstid oavsett material.
                </li>
                <li>
                  <strong>DIY vs hantverkare</strong> — fårull är det
                  enklaste materialet att{" "}
                  <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                    montera själv
                  </Link>. Det kan halvera den totala arbetskostnaden.
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Varför kostar fårullsisolering mer — och kommer priset sjunka?
          </h2>
          <div className="mt-6">
            <p>
              Tre orsaker till det högre materialpriset:
            </p>
            <ol className="mt-4 space-y-2 list-decimal list-inside text-foreground/80">
              <li><strong>Råvarukostnad</strong> — fårull kostar mer än sten eller glas</li>
              <li><strong>Tillverkningsvolym</strong> — fårullsisolering är fortfarande en nischprodukt med mindre stordriftsfördelar</li>
              <li><strong>Kvalitetskrav</strong> — tvättning, kardning och boraxbehandling kräver omsorg</li>
            </ol>
            <p className="mt-4">
              Men trenden pekar nedåt. I takt med att efterfrågan ökar och
              fler tillverkare etablerar sig förväntas prisskillnaden minska.
              Dessutom tas <strong>80&nbsp;% av svensk fårull</strong> inte
              tillvara idag — ökad lokal användning kan sänka
              råvarukostnaden och samtidigt stärka svensk lantbruksekonomi.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Det som inte syns på offerten
          </h2>
          <div className="mt-6">
            <p>
              Prisjämförelser fokuserar nästan alltid på materialkostnaden.
              Men det finns värden som aldrig dyker upp på en offert:
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <strong>Frisk inomhusluft</strong> — fårull{" "}
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  binder formaldehyd och VOC
                </Link>{" "}
                permanent. I nybyggda hus med höga emissionsnivåer kan detta
                vara avgörande för familjens hälsa.
              </li>
              <li>
                <strong>Fuktsäkerhet</strong> — ull buffrar{" "}
                <strong>35–40&nbsp;% fukt</strong> utan att tappa prestanda.
                Det kan förebygga fuktskador som kostar tiotusentals kronor
                att åtgärda — en kostnad som sällan syns i kalkylen.
              </li>
              <li>
                <strong>Lägre klimatavtryck</strong> — varje kilo fårull{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  lagrar 1,8&nbsp;kg CO₂
                </Link>{" "}
                och kräver bara 6&nbsp;MJ i tillverkningsenergi. Mineralull
                kräver 26&nbsp;MJ/kg och smältning vid 1&nbsp;400&nbsp;°C.
              </li>
              <li>
                <strong>Tystare hem</strong> — fårull uppnår{" "}
                <Link href="/anvandningsomraden" className="text-primary hover:text-primary/80 link-grow">
                  ljudabsorptionsklass&nbsp;A
                </Link>{" "}
                och dämpar ljud effektivt i alla frekvenser.
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Sammanfattning — priset i perspektiv
          </h2>
          <div className="mt-6">
            <p>
              Ja, fårullsisolering kostar mer att köpa in. Nej, det kostar
              inte nödvändigtvis mer att äga. Lägre arbetskostnader,{" "}
              <strong>75&nbsp;års livslängd</strong> utan byte och frånvaron
              av underhållskostnader gör att totalkostnaden över 50&nbsp;år
              ofta hamnar <strong>lägre</strong> än mineralull.
            </p>
            <p className="mt-4">
              Lägg till bättre luftkvalitet, fuktsäkerhet, ljuddämpning och
              ett negativt klimatavtryck — och frågan blir inte om du har
              råd med fårullsisolering, utan om du har råd att låta bli.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <aside className="max-w-3xl mx-auto px-6 py-12">
          <div className="border-l-2 border-accent p-6 bg-primary/5">
            <p className="font-body text-foreground/80 text-base leading-relaxed">
              Vill du veta exakt vad det kostar för ditt hus? Byeco hjälper
              dig med en kostnadsfri beräkning baserad på dina ritningar.
              Ingen förbindelse. 30&nbsp;dagars öppet köp.{" "}
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

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om priset på fårullsisolering
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad kostar fårullsisolering per kvadratmeter?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ungefär 150–400&nbsp;kr/m² beroende på tjocklek och
                  produkttyp. Skivor kostar mer än rullar. Mineralull kostar
                  50–150&nbsp;kr/m² för motsvarande tjocklek — men
                  totalkostnaden över husets livstid blir ofta lägre med
                  fårull.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är fårullsisolering billigare på lång sikt?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ofta ja. Räkneexempel för 120&nbsp;m²: mineralull kostar
                  ~62&nbsp;500&nbsp;kr över 50&nbsp;år (inklusive byte efter
                  25–30&nbsp;år). Fårull kostar ~42&nbsp;000&nbsp;kr —
                  inget byte behövs tack vare 75&nbsp;års livslängd.
                  En besparing på ~20&nbsp;000&nbsp;kr.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Kan man få ROT-avdrag?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja. Montering av isolering i befintliga bostäder
                  berättigar till ROT-avdrag — 30&nbsp;% av
                  arbetskostnaden, max 50&nbsp;000&nbsp;kr per person och
                  år. Gäller vid renovering, inte nyproduktion.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket kostar det att isolera ett helt hus?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  För ett typiskt småhus (120–150&nbsp;m² isoleringsyta)
                  ligger totalkostnaden på cirka
                  35&nbsp;000–55&nbsp;000&nbsp;kr inklusive material och
                  arbete. Med ROT-avdrag minskar kostnaden ytterligare.
                  Byeco erbjuder kostnadsfri beräkning.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Varför kostar fårullsisolering mer?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Tre orsaker: råvaran kostar mer, tillverkningsvolymerna
                  är mindre och kvalitetskraven höga. Prisskillnaden
                  förväntas minska i takt med ökad efterfrågan. 80&nbsp;%
                  av svensk fårull tas inte tillvara — ökad användning kan
                  sänka kostnaden.
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
              <Link href="/jamforelse" className="link-grow text-lg font-medium text-foreground">
                Fårull vs mineralull, cellulosa och EPS →
              </Link>
              <p className="text-foreground/60 mt-1">Detaljerad jämförelse av prestanda, pris och miljöpåverkan.</p>
            </li>
            <li>
              <Link href="/montering" className="link-grow text-lg font-medium text-foreground">
                Monteringsguide →
              </Link>
              <p className="text-foreground/60 mt-1">Steg för steg — isolera själv och spara arbetskostnaden.</p>
            </li>
            <li>
              <Link href="/fordelar" className="link-grow text-lg font-medium text-foreground">
                Fördelar med fårullsisolering →
              </Link>
              <p className="text-foreground/60 mt-1">Sju skäl att välja ull — det som inte syns på offerten.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
