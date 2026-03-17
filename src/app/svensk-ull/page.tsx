import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Svensk ull — produktion, innovation och framtid | Farull.se",
  description:
    "Sverige producerar ~1 000 ton råull per år. Mer än hälften har gått till spillo — men nu växer en svensk ullindustri fram med isolering, fibersand och textil.",
  openGraph: {
    title: "Svensk ull — produktion, innovation och framtid",
    description:
      "Sverige producerar ~1 000 ton råull per år. Mer än hälften har gått till spillo — men nu växer en svensk ullindustri fram med isolering, fibersand och textil.",
  },
  alternates: {
    canonical: "/svensk-ull",
  },
};

export default function SvenskUllPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Svensk ull — produktion, innovation och framtid",
            description:
              "Sverige producerar ~1 000 ton råull per år. Mer än hälften har gått till spillo — men nu växer en svensk ullindustri fram med isolering, fibersand och textil.",
            url: "https://farull.se/svensk-ull",
            datePublished: "2025-03-01",
            dateModified: "2026-03-18",
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
                name: "Hur mycket ull produceras i Sverige per år?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sverige har cirka 600 000 får som producerar ungefär 1 000 ton råull per år. En tacka ger i genomsnitt 4 kg ull och ett lamm cirka 2 kg. Historiskt har mer än hälften av ullen saknat kommersiell avsättning.",
                },
              },
              {
                "@type": "Question",
                name: "Varför har svensk ull inte använts mer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Svenska får hålls primärt för kött, inte ull. Den svenska ullen är för grov för textilmarknaden som domineras av merinoull. Dessutom har infrastrukturen saknats — tvätterier, kardverk och sorteringsanläggningar. Men grovullen är perfekt för byggisolering och andra tekniska tillämpningar.",
                },
              },
              {
                "@type": "Question",
                name: "Vad är Arena Svensk Ull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Arena Svensk Ull är ett treårigt projekt (2026–2028) med stöd från Tillväxtverket och Västra Götalandsregionen. Projektet arbetar med rådgivning, kompetensutveckling, regionala aktiviteter, statistik och en årlig ullrapport för att skapa en fungerande svensk ullmarknad.",
                },
              },
              {
                "@type": "Question",
                name: "Kan man köpa produkter av svensk ull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, och utbudet växer snabbt. Svensk ull används idag i byggisolering, fibersand för hästsport, trädgårdspellets, oljeabsorbenter och skyddshandskar. Över 30 produkter och prototyper har utvecklats med svensk ull som råvara.",
                },
              },
              {
                "@type": "Question",
                name: "Är svensk ull bättre för miljön än importerad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Svensk ull har ett CO₂-avtryck på 4–5 kg CO₂e/kg råull, och avtrycket blir ännu lägre vid inhemsk bearbetning tack vare kortare transporter. Ullen är biologiskt nedbrytbar, släpper inga mikroplaster och är naturligt flamresistent utan tillsats av PFAS. Dessutom bidrar betande får till öppna landskap och biologisk mångfald.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Svensk ull" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Svensk ullproduktion
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Svensk ull — från spillprodukt till framtidsmaterial
        </h1>
      </ScrollReveal>

      <Image
        src="/images/farull-6.jpg"
        alt="Fårflock i snöigt svenskt vinterlandskap"
        width={800}
        height={1200}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg text-foreground/90">
            <strong>Sverige har cirka 600&nbsp;000 får</strong> som producerar
            ungefär 1&nbsp;000 ton råull per år. Mer än hälften har historiskt
            bränts eller slängts — ull som saknat köpare. Men något håller på
            att förändras. Svensk ull hittar nya användningsområden, ny
            infrastruktur byggs upp och en hel industri växer fram. Den här
            sidan berättar om var den svenska ullen befinner sig idag och vart
            den är på väg.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Svensk ullproduktion i siffror
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-4.jpg"
                alt="Får under klippning — ullen skiljs från kroppen"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Klippning av svensk ull — varje tacka ger cirka 4 kg per år
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Sveriges fårpopulation på cirka{" "}
                <strong>600&nbsp;000 djur</strong> producerar runt{" "}
                <strong>1&nbsp;000 ton råull</strong> varje år. En genomsnittlig
                tacka ger ungefär 4&nbsp;kg ull och ett lamm omkring 2&nbsp;kg.
                Norr om Dalarna finns cirka 60&nbsp;000 får som bidrar med
                ungefär 120 ton per år.
              </p>
              <p className="mt-4">
                Historiskt har uppskattningsvis 80&nbsp;% av den svenska ullen
                saknat kommersiell avsättning. Den har bränts, komposterats
                eller deponerats. Siffrorna kommer från Svenska
                Fåravelsförbundet och speglar en verklighet där ullen länge
                betraktats som en restprodukt snarare än en resurs.
              </p>
              <p className="mt-4">
                Men bilden håller på att vändas. Med nya projekt, ny
                infrastruktur och nya produkter ökar efterfrågan på svensk ull
                för första gången på decennier. Från att ha kostat pengar att
                bli av med börjar ullen generera intäkter för svenska
                fåruppfödare.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Varför har svensk ull gått till spillo?
          </h2>
          <div className="mt-6">
            <p>
              Den viktigaste orsaken är enkel:{" "}
              <strong>svenska får hålls primärt för kött</strong>. Ullen har
              varit en biprodukt utan marknad. Den globala textilmarknaden
              domineras av merinoull — en finfiber som svenska raser inte
              producerar. Svensk ull, med sin grövre fiber, har helt enkelt inte
              kunnat konkurrera.
            </p>
            <p className="mt-4">
              Därtill har infrastrukturen saknats. Under 1900-talets andra hälft
              försvann svenska tvätterier, kardverk och sorteringsanläggningar
              ett efter ett. Utan möjlighet att bearbeta ullen lokalt blev det
              enklare att bränna den.
            </p>
            <p className="mt-4">
              Men det som gör ullen olämplig för kläder gör den utmärkt för
              andra ändamål. Grövre fibrer skapar stabilare mattor med goda{" "}
              <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                isoleringsegenskaper
              </Link>{" "}
              — termiskt, akustiskt och fuktreglerande. Den svenska grovullen är
              med andra ord perfekt för byggisolering.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Arena Svensk Ull — en ny tid för svensk ull
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-video.png"
                alt="Får som klias — svensk fårskötsel i praktiken"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Svensk fårhållning — grunden för en växande ullindustri
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                <strong>Arena Svensk Ull</strong> är ett treårigt projekt
                (2026–2028) med stöd från Tillväxtverket och Västra
                Götalandsregionen. Syftet är att skapa förutsättningar för en
                fungerande svensk ullmarknad — från fårgård till färdig produkt.
              </p>
              <p className="mt-4">
                Projektet arbetar inom fem områden: rådgivning till
                ullproducenter, kompetensutveckling i ullsortering och
                kvalitetsbedömning, regionala aktiviteter för att knyta samman
                aktörer, statistik och analys av den svenska ullmarknaden samt
                en årlig ullrapport som ger branschen ett gemensamt
                kunskapsunderlag.
              </p>
              <p className="mt-4">
                En av de viktigaste insatserna är arbetet med en{" "}
                <strong>svensk ullstandard</strong> — ett gemensamt
                klassificeringssystem som gör det möjligt att handla med svensk
                ull på industriell skala. Utan en standard är varje ullflock
                unik. Med en standard kan ullens egenskaper kommuniceras på ett
                sätt som marknaden förstår.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Ullstationen i Sörforsa och ny infrastruktur
          </h2>
          <div className="mt-6">
            <p>
              I Sörforsa utanför Hudiksvall har en modern{" "}
              <strong>ullstation</strong> etablerats — en ny typ av
              infrastruktur för insamling, sortering och kvalitetssäkring av
              svensk ull. Stationen är en av flera satsningar som visar att den
              fysiska kedjan håller på att byggas upp igen.
            </p>
            <p className="mt-4">
              Gotland har kommit längst med en{" "}
              <strong>komplett ullkedja</strong>: insamling, tvätt, spinning och
              vävning finns på ön. Gotlandsmodellen fungerar som en förebild för
              andra regioner som vill bygga upp lokal ullbearbetning. Fördelen
              med regionala kedjor är kortare transporter, lägre
              klimatpåverkan och starkare koppling mellan producent och slutkund.
            </p>
            <p className="mt-4">
              I Hälsingland planeras nu en storskalig svensk värdekedja som ska
              kunna hantera större volymer. Målet är att skapa kapacitet för att
              bearbeta en betydande del av den svenska ullen — ull som idag
              saknar en väg till marknaden.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Innovativa användningsområden för svensk ull
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-3.jpg"
                alt="Illustration av olika fårraser och deras ull"
                width={800}
                height={1100}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Svensk ull har potential långt bortom textil
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Svensk ull används idag i en rad innovativa tillämpningar som
                sträcker sig långt bortom traditionell textil. Över{" "}
                <strong>30 produkter och prototyper</strong> har utvecklats med
                svensk ull som råvara.
              </p>
              <p className="mt-4">
                <strong>Byggisolering</strong> är det största
                användningsområdet. Grov svensk ull ger isoleringsmattor med
                utmärkta termiska, akustiska och fuktreglerande egenskaper.{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om fårullsisolering →
                </Link>
              </p>
              <p className="mt-4">
                <strong>Fibersand</strong> för hästsport är en prisbelönad
                innovation utvecklad av Equestrian Wool Arena AB. Ullfibrer
                blandas med sand för att skapa en elastisk och dränerad
                ridbanebotten. Produkten vann ett pris på 50&nbsp;000 kronor i
                en nationell innovationstävling.
              </p>
              <p className="mt-4">
                <strong>Oljeabsorbenter</strong> av ull har testats i ett
                studentprojekt av Sebastian Fältström — ullen absorberar olja
                effektivt tack vare lanolinets naturliga fettbindande egenskaper.
                Dessutom används svensk ull i{" "}
                <strong>trädgårdspellets</strong> (näringsgivande och
                fuktreglerande), <strong>skyddshandskar</strong> för industrin
                och en rad andra produkter under utveckling.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Miljöfördelar med svensk ull
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-5.jpg"
                alt="Närbild på fåransikte — svensk fårhållning"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Betande får håller landskapet öppet och stärker biologisk mångfald
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Svensk ull har ett CO₂-avtryck på{" "}
                <strong>4–5&nbsp;kg CO₂e per kg råull</strong>. Vid inhemsk
                bearbetning blir avtrycket ännu lägre tack vare kortare
                transporter jämfört med importerad ull som fraktas från
                Australien eller Nya Zeeland.
              </p>
              <p className="mt-4">
                Till skillnad från syntetiska isoleringsmaterial är ull{" "}
                <strong>biologiskt nedbrytbar</strong> och släpper inga
                mikroplaster vid slitage eller avfallshantering. Ullen är
                naturligt antibakteriell, flamresistent utan tillsats av PFAS
                och kan hantera fukt utan att förlora sina isolerande
                egenskaper.{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om ullens hållbarhet →
                </Link>
              </p>
              <p className="mt-4">
                Det finns också en landskapsnytta: betande får håller
                ängs- och hagmarker öppna, vilket gynnar biologisk mångfald.
                Utan betesdjur växer dessa marker igen med skog, och de arter
                som är beroende av det öppna landskapet försvinner. Att
                använda ullen ger fåruppfödare bättre ekonomi, vilket i sin tur
                gör det möjligt att hålla fler djur i landskapet.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Framtiden — en helsvensk ullindustri
          </h2>
          <div className="mt-6">
            <p>
              Projektet{" "}
              <strong>&quot;Svensk ull: Framtidens textil&quot;</strong>{" "}
              (2026–2028) samlar forskare, producenter och företag kring målet
              att bygga en komplett svensk värdekedja för ull. Från klippning
              till färdig produkt — utan att råvaran lämnar landet.
            </p>
            <p className="mt-4">
              I Hälsingland planeras en storskalig anläggning som ska kunna
              tvätta, karda och bereda svensk ull i industriell skala. Det
              skulle vara den första svenska anläggningen av sitt slag på
              decennier och en milstolpe för den inhemska ullindustrin.
            </p>
            <p className="mt-4">
              Intresset för svensk ull syns också i kulturen. Boken{" "}
              <strong>&quot;Mer ull åt folket&quot;</strong> av Pia Mattzon och
              Anna Sigge har bidragit till att sprida kunskap om ullens
              potential till en bredare publik. Budskapet är tydligt: svensk ull
              är inte en restprodukt — den är ett framtidsmaterial.
            </p>
            <p className="mt-4">
              Med Arena Svensk Ull, nya ullstationer, innovativa produkter och
              ett växande intresse från både konsumenter och byggindustrin finns
              nu reella förutsättningar för att svensk ull ska gå från
              spillprodukt till premiumråvara. Det som saknas är inte material
              — det är medvetenhet.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om svensk ull
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket ull produceras i Sverige per år?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Sverige har cirka 600&nbsp;000 får som producerar ungefär
                  1&nbsp;000 ton råull per år. En tacka ger i genomsnitt
                  4&nbsp;kg ull och ett lamm cirka 2&nbsp;kg. Historiskt har mer
                  än hälften av ullen saknat kommersiell avsättning.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Varför har svensk ull inte använts mer?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Svenska får hålls primärt för kött, inte ull. Ullen är för
                  grov för textilmarknaden som domineras av merinoull. Dessutom
                  har infrastrukturen saknats — tvätterier, kardverk och
                  sorteringsanläggningar. Men grovullen är perfekt för
                  byggisolering och andra tekniska tillämpningar.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är Arena Svensk Ull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Arena Svensk Ull är ett treårigt projekt (2026–2028) med stöd
                  från Tillväxtverket och Västra Götalandsregionen. Projektet
                  arbetar med rådgivning, kompetensutveckling, regionala
                  aktiviteter, statistik och en årlig ullrapport för att skapa
                  en fungerande svensk ullmarknad.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Kan man köpa produkter av svensk ull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja, och utbudet växer snabbt. Svensk ull används idag i
                  byggisolering, fibersand för hästsport, trädgårdspellets,
                  oljeabsorbenter och skyddshandskar. Över 30 produkter och
                  prototyper har utvecklats med svensk ull som råvara.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är svensk ull bättre för miljön än importerad?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Svensk ull har ett CO₂-avtryck på 4–5&nbsp;kg CO₂e/kg råull,
                  och avtrycket blir ännu lägre vid inhemsk bearbetning tack
                  vare kortare transporter. Ullen är biologiskt nedbrytbar,
                  släpper inga mikroplaster och är naturligt flamresistent utan
                  tillsats av PFAS. Dessutom bidrar betande får till öppna
                  landskap och biologisk mångfald.
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
              <Link href="/farull" className="link-grow text-lg font-medium text-foreground">
                Vad är fårull? →
              </Link>
              <p className="text-foreground/60 mt-1">Krusighet, keratin och lanolin — fibern som gör allt möjligt.</p>
            </li>
            <li>
              <Link href="/farraser" className="link-grow text-lg font-medium text-foreground">
                Svenska fårraser →
              </Link>
              <p className="text-foreground/60 mt-1">Gutefår, Gotlandsfår, Ryafår och Finullsfår — raserna och deras ull.</p>
            </li>
            <li>
              <Link href="/hallbarhet" className="link-grow text-lg font-medium text-foreground">
                Hållbarhet →
              </Link>
              <p className="text-foreground/60 mt-1">Cirkulär ekonomi, CO₂-avtryck och ullens miljöfördelar.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
