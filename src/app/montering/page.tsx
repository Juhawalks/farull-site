import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Montera fårullsisolering — steg-för-steg i väggar, tak och golv | Farull.se",
  description:
    "Komplett monteringsguide för fårullsisolering: verktyg, tillskärning, ytterväggar, snedtak, vindsbjälklag och golv. Ingen skyddsutrustning — klipp med sax, tryck på plats.",
  openGraph: {
    title: "Montera fårullsisolering — steg-för-steg i väggar, tak och golv",
    description:
      "Komplett monteringsguide för fårullsisolering: verktyg, tillskärning, ytterväggar, snedtak, vindsbjälklag och golv. Ingen skyddsutrustning — klipp med sax, tryck på plats.",
  },
  alternates: {
    canonical: "/montering",
  },
};

export default function Montering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Montera fårullsisolering — steg-för-steg i väggar, tak och golv",
            description:
              "Komplett monteringsguide för fårullsisolering: verktyg, tillskärning, ytterväggar, snedtak, vindsbjälklag och golv. Ingen skyddsutrustning behövs.",
            url: "https://farull.se/montering",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
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
            "@type": "HowTo",
            name: "Montera fårullsisolering — steg för steg",
            description: "Så monterar du fårullsisolering i väggar, tak och golv. Ingen skyddsutrustning behövs.",
            totalTime: "PT4H",
            tool: [
              { "@type": "HowToTool", name: "Sax eller brödskniv" },
              { "@type": "HowToTool", name: "Måttband" },
              { "@type": "HowToTool", name: "Häftpistol (för snedtak)" },
              { "@type": "HowToTool", name: "Rak linjal eller bräda (för raka snitt)" },
            ],
            step: [
              {
                "@type": "HowToStep",
                name: "Mät regelavståndet",
                text: "Mät avståndet mellan reglarna. Standardmått är 450 mm eller 600 mm c/c.",
              },
              {
                "@type": "HowToStep",
                name: "Klipp isoleringen 10–20 mm bredare",
                text: "Klipp fårullsskivan 10–20 mm bredare än regelavståndet. Använd vanlig sax eller brödskniv.",
              },
              {
                "@type": "HowToStep",
                name: "Tryck in isoleringen",
                text: "Tryck in isoleringsskivan mellan reglarna. Fibrerna fjädrar och fyller ut hålrummet av sig själva.",
              },
              {
                "@type": "HowToStep",
                name: "Kontrollera att det inte finns springor",
                text: "Kontrollera att isoleringen sitter tätt mot reglarna utan springor. Vid ojämna hålrum: stoppa in en extra bit ull.",
              },
            ],
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
                name: "Behöver man skyddsutrustning vid montering av fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nej. Fårullsisolering kräver ingen skyddsutrustning — ingen mask, inga handskar, ingen skyddsoverall. Materialet kliar inte, dammar inte och avger inga hälsoskadliga fibrer. Det gör fårull till det mest DIY-vänliga isoleringsmaterialet på marknaden och sparar uppskattningsvis 15–25 % av monteringstiden jämfört med mineralull.",
                },
              },
              {
                "@type": "Question",
                name: "Vilka verktyg behövs för att montera fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bara tre: vanlig sax eller brödskniv för tillskärning, måttband för att mäta regelavstånd, och eventuellt en häftpistol för att fästa isoleringen i snedtak. Inga specialverktyg, ingen inblåsningsmaskin, ingen avancerad utrustning.",
                },
              },
              {
                "@type": "Question",
                name: "Hur brett ska man klippa fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Klipp isoleringsskivan 10–20 mm bredare än regelavståndet. Fårullens naturliga fjädring gör att fibrerna komprimeras lätt och trycks mot reglarna, vilket eliminerar springor och köldbryggor. Hellre 10 mm för brett än 5 mm för smalt.",
                },
              },
              {
                "@type": "Question",
                name: "Kan man montera fårullsisolering i snedtak?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Samma princip som väggar: klipp 10–20 mm bredare och tryck in. I branta lutningar kan du behöva fästa med häftklamrar mot reglarna eller spänna ett nät underifrån. Fårullens låga vikt (densitet 20–25 kg/m³) gör att den sitter bra med minimal fixering.",
                },
              },
              {
                "@type": "Question",
                name: "Behöver fårullsisolering ångspärr?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Det beror på konstruktionen. Fårull hanterar fukt betydligt bättre än mineralull (absorberar 35–40 % utan prestandaförlust), men i ytterväggar med stort fuktdrivande tryck rekommenderas normalt en variabel ångbroms (inte tät ångspärr). Kontrollera alltid konstruktionsritningen och lokala byggregler. Byeco erbjuder fri rådgivning om fuktdimensionering.",
                },
              },
              {
                "@type": "Question",
                name: "Hur lång tid tar det att isolera ett hus med fårull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Montering av fårullsisolering går 15–25 % snabbare än mineralull tack vare enklare hantering (ingen skyddsutrustning, enkel tillskärning, fibrerna fjädrar på plats). Ett normalstort hus (120–150 m²) kan isoleras på 2–4 arbetsdagar beroende på konstruktion och erfarenhet.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Montering" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Guide
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Montera fårullsisolering — steg för steg
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
        alt="Montering av fårullsisolering — enkel hantering utan skyddsutrustning"
        width={800}
        height={533}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg leading-relaxed">
            <strong>Montering av fårullsisolering kan beskrivas i tre ord: mät, klipp, tryck.</strong>{" "}
            Ingen skyddsutrustning behövs — ingen mask, inga handskar, ingen
            skyddsoverall. Materialet kliar inte, dammar inte och avger inga
            hälsoskadliga fibrer. Det gör{" "}
            <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
              fårullsisolering
            </Link>{" "}
            till det mest DIY-vänliga isoleringsmaterialet på marknaden — och
            sparar uppskattningsvis{" "}
            <strong>15–25&nbsp;% av monteringstiden</strong> jämfört med mineralull.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Verktyg för montering av fårullsisolering
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
                alt="Enkla handverktyg — sax och måttband räcker för montering av fårullsisolering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Allt du behöver: sax, måttband och eventuellt en häftpistol
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Verktygslistan är kort. Inga specialverktyg, ingen
                inblåsningsmaskin, ingen avancerad utrustning:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Sax eller brödskniv</strong> — för tillskärning. Vanlig hushållssax fungerar utmärkt, brödskniv för tjockare skivor</li>
                <li><strong>Måttband</strong> — för att mäta regelavstånd</li>
                <li><strong>Rak linjal eller bräda</strong> — som guide vid raka snitt</li>
                <li><strong>Häftpistol</strong> — för att fästa i snedtak (vid behov)</li>
              </ul>
              <p className="mt-4">
                Jämför med mineralull som kräver skyddsmask (P2), handskar,
                skyddsglasögon och långärmade kläder. Eller cellulosa som
                kräver inblåsningsmaskin, slang och tillslutning av hålrum.
                Fårull är isoleringsmaterialet du kan börja jobba med direkt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Grundprincipen — klipp 10–20 mm bredare
          </h2>
          <div className="mt-6">
            <p>
              Oavsett var i huset du isolerar är grundprincipen densamma:
            </p>
            <ol className="mt-4 space-y-4 list-decimal list-inside text-foreground/80">
              <li>
                <strong>Mät regelavståndet</strong> — standardmått är 450&nbsp;mm
                eller 600&nbsp;mm c/c, men mät alltid det faktiska avståndet.
                Äldre hus kan ha oregelbundna regelavstånd.
              </li>
              <li>
                <strong>Klipp 10–20&nbsp;mm bredare</strong> — det extra
                måttet ger fårullens fibrer utrymme att komprimeras och
                trycka sig mot reglarna. Resultatet: inga springor, inga
                köldbryggor.
              </li>
              <li>
                <strong>Tryck in isoleringen</strong> — fibrerna fjädrar av
                sig själva och fyller ut hålrummet helt. Ingen fixering behövs
                i väggar — friktionen håller skivan på plats.
              </li>
              <li>
                <strong>Kontrollera</strong> — känn efter med handen att
                isoleringen sitter tätt mot reglarna utan springor. Vid
                ojämna hålrum: stoppa in en extra bit ull.
              </li>
            </ol>
            <p className="mt-4">
              <strong>Tumregel:</strong> hellre 10&nbsp;mm för brett än
              5&nbsp;mm för smalt. En lätt komprimering skadar inte
              isoleringen — men en springa skapar en köldbrygga.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Montering i ytterväggar — den vanligaste applikationen
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Ytterväggskonstruktion med regelverk — fårullsisolering klipps bredare och trycks in"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Klipp 10–20 mm bredare — fibrerna fyller ut och eliminerar köldbryggor
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ytterväggar är den vanligaste applikationen för
                fårullsisolering. Processen:
              </p>
              <ol className="mt-3 space-y-2 list-decimal list-inside text-foreground/80">
                <li>Mät regelavståndet (vanligtvis 450 eller 600&nbsp;mm c/c)</li>
                <li>Klipp skivan 10–20&nbsp;mm bredare</li>
                <li>Tryck in mellan reglarna — fibrerna fjädrar och fyller ut</li>
                <li>Lägg nästa skiva direkt ovanpå utan mellanrum</li>
              </ol>
              <p className="mt-4">
                <strong>Konstruktionsdetaljer att tänka på:</strong>
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-foreground/80">
                <li>Vindskyddsskiva på utsidan — normalt med luftspalt bakom fasadmaterialet</li>
                <li>Ångbroms på insidan — rekommenderas i de flesta konstruktioner (se nedan)</li>
                <li>Kring fönster och dörrar — fyll alla hålrum noggrant, stoppa in extra bitar vid oregelbundna utrymmen</li>
                <li>Rör och elledningar — klipp isoleringen runt genomföringar, fårull är lätt att forma</li>
              </ul>
              <p className="mt-4">
                Fårullens förmåga att absorbera{" "}
                <strong>35–40&nbsp;% fukt utan prestandaförlust</strong> gör
                den särskilt lämpad för ytterväggar, där fuktvandring är en
                ständig utmaning. Men fukt behöver fortfarande kunna
                ventileras bort — en luftspalt på utsidan är alltid viktig.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Montering i snedtak — lätt material, enkel fixering
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80"
                alt="Takkonstruktion med takstolar — fårullsisolering sitter med minimal fixering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Låg vikt (20–25 kg/m³) — fårullen sitter bra med häftklamrar eller nät
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Samma grundprincip som väggar, men med en extra detalj:
                gravitationen jobbar emot dig i lutande ytor. Så här löser du
                det:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-foreground/80">
                <li>Klipp skivorna 10–20&nbsp;mm bredare — friktionen mot reglarna håller ofta materialet på plats</li>
                <li>I branta lutningar: fäst med <strong>häftklamrar mot reglarna</strong> eller spåna ett snöre sicksack mellan spikar</li>
                <li>Alternativt: spänn ett <strong>nät underifrån</strong> (plastnet eller ståltråd) som bäring</li>
              </ul>
              <p className="mt-4">
                Fårullens låga densitet (<strong>20–25&nbsp;kg/m³</strong>,
                jämfört med mineralull på 25–40&nbsp;kg/m³) gör att den
                sitter bra med minimal fixering. Materialet sjunker inte ihop
                med åren tack vare fibrernas naturliga elasticitet — en
                egenskap som är särskilt viktig i snedtak.
              </p>
              <p className="mt-4">
                Ventilation under takpannor/takplåt och en luftspalt mellan
                isoleringen och undertaket är standard — samma som med
                mineralull.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Montering i vindsbjälklag — enklast av alla
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1513467535987-db81bc0d11f6?w=800&q=80"
                alt="Öppet vindsutrymme — fårullsisolering läggs direkt på bjälklaget"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Lägg skivorna direkt på bjälklaget — fårull hanterar fukten naturligt
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Vindsbjälklag är den enklaste applikationen. Lägg
                isoleringsskivorna direkt på bjälklaget mellan och över
                bjälkarna:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-foreground/80">
                <li><strong>Första lagret</strong> — mellan bjälkarna, klippt 10–20&nbsp;mm bredare</li>
                <li><strong>Andra lagret</strong> — tvärs över bjälkarna för att eliminera köldbryggor vid träregel</li>
                <li>Totalt rekommenderas minst <strong>300–400&nbsp;mm</strong> isoleringstjocklek för att uppfylla BBR-krav</li>
              </ul>
              <p className="mt-4">
                Vinden är husets mest fuktutsatta plats —
                temperaturskillnader och fuktdrivande tryck är som störst
                här. Fårullens förmåga att{" "}
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  absorbera och släppa fukt
                </Link>{" "}
                gör den idealisk för denna applikation. Materialet sjunker
                inte ihop med åren, så isoleringsförmågan förblir intakt
                under hela livslängden på{" "}
                <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">
                  75&nbsp;år
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Montering i golv och mellanbjälklag — termisk och akustisk isolering
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80"
                alt="Golvkonstruktion med reglar — fårull ger termisk och akustisk isolering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Fårull i mellanbjälklag — dämpar stegljud och luftljud effektivt
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                I golv och mellanbjälklag ger fårullsisolering dubbel nytta:
                termisk isolering <em>och</em> effektiv ljuddämpning.
                Fibrerna absorberar ljud i{" "}
                <strong>alla frekvenser (250–4&nbsp;000&nbsp;Hz)</strong> och
                uppnår{" "}
                <Link href="/anvandningsomraden" className="text-primary hover:text-primary/80 link-grow">
                  ljudabsorptionsklass&nbsp;A
                </Link>.
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-foreground/80">
                <li><strong>Golv mot krypgrund</strong> — klipp och lägg mellan golvreglarna. Fårullens fukttålighet är en fördel i fuktiga krypgrunder</li>
                <li><strong>Mellanbjälklag</strong> — fokus på ljuddämpning. Dämpar både stegljud (via massa) och luftburet ljud (via absorption)</li>
                <li><strong>Innerväggar</strong> — samma princip, primärt för ljudisolering mellan rum</li>
              </ul>
              <p className="mt-4">
                Tips: i mellanbjälklag kan du kombinera fårull med elastiska
                reglar (fjäderreglar) för ännu bättre stegljudsdämpning.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Ångspärr eller ångbroms — vad behövs?
          </h2>
          <div className="mt-6">
            <p>
              En vanlig fråga. Fårull hanterar fukt betydligt bättre än
              mineralull, men det betyder inte att du kan skippa fuktskyddet
              helt. Rekommendationen:
            </p>
            <ul className="mt-4 space-y-3 list-none">
              <li>
                <strong>Variabel ångbroms (rekommenderas)</strong> — en
                fuktvariabel folie som släpper igenom mer fukt när det är
                torrt och stänger till vid hög fuktnivå. Fungerar optimalt
                tillsammans med fårullens egna fuktbuffrande egenskaper.
              </li>
              <li className="mt-3">
                <strong>Tät ångspärr (traditionell)</strong> — fungerar men
                utnyttjar inte fårullens fulla potential. Förhindrar fuktvandring
                helt, vilket kan vara motiverat i extrema klimatzoner.
              </li>
              <li className="mt-3">
                <strong>Utan ångspärr</strong> — möjligt i vissa
                konstruktioner (t.ex. innerväggar, mellanbjälklag) men kräver
                fuktsimulering för att verifiera. Kontakta alltid en
                konstruktör.
              </li>
            </ul>
            <p className="mt-4">
              Byeco erbjuder fri rådgivning om fuktdimensionering och kan
              hjälpa dig välja rätt uppbyggnad för din konstruktion.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Vanliga misstag att undvika vid montering
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507206130118-b5907f817163?w=800&q=80"
                alt="Noggrant isoleringsarbete — undvik springor och komprimering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Hellre för brett än för smalt — och komprimera aldrig materialet
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <ul className="space-y-4 mt-2">
                <li>
                  <strong>Klipp inte för smalt</strong> — en springa på bara
                  5&nbsp;mm skapar en köldbrygga. Hellre 10–20&nbsp;mm för
                  brett. Fibrerna komprimeras lätt utan att tappa
                  isoleringsförmåga.
                </li>
                <li>
                  <strong>Komprimera inte materialet kraftigt</strong> —
                  isoleringen fungerar tack vare luftfickorna i fibrerna.
                  Lätt komprimering (10–20&nbsp;mm) är OK, men att pressa ner
                  en 145&nbsp;mm skiva till 95&nbsp;mm halverar prestandan.
                </li>
                <li>
                  <strong>Glöm inte ventilation</strong> — fårull hanterar
                  fukt bättre än alla syntetiska alternativ, men fukt behöver
                  fortfarande kunna ventileras bort. Luftspalt på utsidan av
                  ytterväggar och under tak är alltid viktig.
                </li>
                <li>
                  <strong>Lämna inte hålrum kring fönster och dörrar</strong> —
                  fyll noggrant runt karm och regel. Fårull är lätt att riva
                  av i mindre bitar och stoppa in i oregelbundna utrymmen.
                </li>
                <li>
                  <strong>Förvara torrt</strong> — fårull kan absorbera
                  mycket fukt, men leverera den inte genomblöt. Förvara
                  inomhus eller under tak innan montering.
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <aside className="max-w-3xl mx-auto px-6 py-12">
          <div className="border-l-2 border-accent p-6 bg-primary/5">
            <p className="font-body text-foreground/80 text-base leading-relaxed">
              Behöver du material? Byeco levererar fårullsisolering från
              Isolena i skivor och rullar, anpassat efter ditt projekt. Fri
              rådgivning och hjälp med materialberäkning.
              30&nbsp;dagars öppet köp.{" "}
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
              Vanliga frågor om montering av fårullsisolering
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Behöver man skyddsutrustning?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Nej. Fårullsisolering kräver ingen skyddsutrustning —
                  ingen mask, inga handskar, ingen skyddsoverall. Materialet
                  kliar inte, dammar inte och avger inga hälsoskadliga
                  fibrer. Det sparar uppskattningsvis 15–25&nbsp;% av
                  monteringstiden jämfört med mineralull.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vilka verktyg behövs?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Bara tre: vanlig sax eller brödskniv, måttband och
                  eventuellt häftpistol för snedtak. Inga specialverktyg,
                  ingen inblåsningsmaskin.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur brett ska man klippa isoleringen?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  10–20&nbsp;mm bredare än regelavståndet. Fårullens
                  naturliga fjädring komprimerar fibrerna lätt mot reglarna
                  och eliminerar springor. Hellre 10&nbsp;mm för brett än
                  5&nbsp;mm för smalt.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Behöver fårullsisolering ångspärr?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Det beror på konstruktionen. En variabel ångbroms
                  rekommenderas i de flesta ytterväggar och tak — den
                  samarbetar optimalt med fårullens fuktbuffrande egenskaper.
                  Tät ångspärr fungerar men utnyttjar inte fårullens fulla
                  potential. Kontakta Byeco för fri rådgivning.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Kan man montera fårull i snedtak?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja. Klipp 10–20&nbsp;mm bredare och tryck in. I branta
                  lutningar: fäst med häftklamrar mot reglarna eller spänn
                  ett nät underifrån. Fårullens låga densitet
                  (20–25&nbsp;kg/m³) gör att den sitter bra med minimal
                  fixering.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur lång tid tar det att isolera ett hus?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårullsisolering monteras 15–25&nbsp;% snabbare än
                  mineralull. Ett normalstort hus (120–150&nbsp;m²) kan
                  isoleras på 2–4 arbetsdagar beroende på konstruktion och
                  erfarenhet.
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
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Bakgrunden till materialet du monterar — tillverkning och funktion.</p>
            </li>
            <li>
              <Link href="/fordelar" className="link-grow text-lg font-medium text-foreground">
                Fördelar med fårullsisolering →
              </Link>
              <p className="text-foreground/60 mt-1">Sju skäl att välja ull — från luftrening till 75 års livslängd.</p>
            </li>
            <li>
              <Link href="/pris" className="link-grow text-lg font-medium text-foreground">
                Prisguide →
              </Link>
              <p className="text-foreground/60 mt-1">Materialkostnad, totalkalkyl och vad som ingår.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
