import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Ullens historia — 6 000 år från bronsålder till byggisolering | Farull.se",
  description:
    "Fårullens historia: från Mesopotamien och vikingatiden till modern byggisolering. Ullhandel, vadmal, industrialisering och fårullens comeback.",
  openGraph: {
    title: "Ullens historia — 6 000 år från bronsålder till byggisolering",
    description:
      "Fårullens historia: från Mesopotamien och vikingatiden till modern byggisolering. Ullhandel, vadmal, industrialisering och fårullens comeback.",
  },
  alternates: {
    canonical: "/ullens-historia",
  },
};

export default function UllensHistoriaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ullens historia — 6 000 år från bronsålder till byggisolering",
            description:
              "Fårullens historia: från Mesopotamien och vikingatiden till modern byggisolering. Ullhandel, vadmal, industrialisering och fårullens comeback.",
            url: "https://farull.se/ullens-historia",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://images.unsplash.com/photo-1533662635784-3180e1612e2f?w=1200&q=80",
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
                name: "Hur länge har människan använt fårull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Människan har använt fårull i minst 6 000 år. De äldsta spåren av ullbearbetning härstammar från bronsåldern i Mesopotamien och Centralasien, cirka 4 000 f.Kr. I Skandinavien finns spår av fåravel och ullbearbetning sedan cirka 1 800 f.Kr.",
                },
              },
              {
                "@type": "Question",
                name: "Vad är vadmal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vadmal är ett tjockt, valkat ulltyg som var Nordens viktigaste handelsvara under vikingatiden och medeltiden. Tyget var så värdefullt att det användes som valuta på Island och som betalning av skatter. Vadmal tillverkades genom att väva ull och sedan valka (tova) tyget i varmt vatten för att göra det tätare och mer väderbeständigt.",
                },
              },
              {
                "@type": "Question",
                name: "När började man isolera hus med ull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ull har använts som byggisolering i tusentals år. Antikens greker och romare placerade vävd ull mellan väggar för värme. I Sverige packades ulldrev mellan timmerstockar redan under medeltiden. Modern fårullsisolering i skiv- och rullform utvecklades på 1990-talet i Österrike.",
                },
              },
              {
                "@type": "Question",
                name: "Varför slutade man använda ull som isolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mineralull (sten- och glasull) introducerades på 1930-talet och var billigare att massproducera. Samtidigt tog syntetiska fibrer som nylon och polyester marknadsandelar från ull i klädindustrin. Fårull marginaliserades under 1900-talet men har sedan 2010-talet gjort comeback tack vare klimatmedvetenhet och EU:s hållbarhetskrav.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Ullens historia" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Historia
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          6 000 år av ull
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1533662635784-3180e1612e2f?w=800&q=80"
        alt="Gammalt hantverk och textiltillverkning"
        width={800}
        height={533}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg text-foreground/90">
            <strong>Fårull har följt civilisationen i över 6&nbsp;000
            år</strong> — som kläder, handelsvara, valuta och
            byggnadsmaterial. Det är ett av få material som använts
            oavbrutet sedan bronsåldern. Här berättar vi hur ullen formade
            handel och byggteknik, varför den marginaliserades under
            1900-talet, och varför den nu gör comeback.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Ullens ursprung — Mesopotamien och den antika världen
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1533662635784-3180e1612e2f?w=800&q=80"
                alt="Historiskt hantverk och textiltillverkning"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ull har bearbetats av människan sedan bronsåldern
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                De äldsta spåren av ullbearbetning härstammar från
                Mesopotamien och Centralasien, cirka 4&nbsp;000 f.Kr.
                Domesticerade får med{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  ullproducerande pälsar
                </Link>{" "}
                (till skillnad från de tidiga vilda fårens hårliknande
                täckning) hade då avlats fram genom generationer av
                selektiv avel. Ullen var avgörande — den möjliggjorde
                kläder, tält och filtar som skyddade mot både kyla och
                hetta.
              </p>
              <p className="mt-4">
                I antikens Grekland och Rom placerades vävd ull mellan
                dubbla väggar för att isolera bostäder. Romarna använde
                filtad ull i militära tillämpningar — som stoppning i
                rustningar och som tätning i akvedukter. Redan då utnyttjades
                ullens unika kombination av fukthantering, tålighet och
                isoleringsförmåga.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Vikingatiden — vadmal som valuta och handelsvara
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80"
                alt="Nordiskt landskap som påminner om vikingatid"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Utan ull hade den nordiska expansionen under vikingatiden inte varit möjlig
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                I Skandinavien finns spår av{" "}
                <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">
                  fåravel
                </Link>{" "}
                sedan bronsåldern, cirka 1&nbsp;800 f.Kr. Men det var under
                vikingatiden (800–1100 e.Kr.) som ullen blev central för
                nordisk ekonomi och expansion. Forskare har beskrivit det
                rakt: <em>utan ull, inga vikingar</em>.
              </p>
              <p className="mt-4">
                <strong>Vadmal</strong> — ett tjockt, valkat ulltyg — var
                Nordens viktigaste handelsvara. Tyget tillverkades genom att
                väva ull och sedan valka (tova) det i varmt vatten, vilket
                gjorde det tätare och väderbeständigt. På Island användes
                vadmal som officiell valuta och skattebetalning i hundratals
                år. Vikingaskeppen bar segel av vävd ull som tålde
                Nordatlantens stormar.
              </p>
              <p className="mt-4">
                Ullen försåg vikingarna med kläder som fungerade i arktisk
                kyla, segel som höll för havsresor och filtar som isolerade
                långhusen. Det var{" "}
                <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">
                  Gutefårets
                </Link>{" "}
                förfäder som producerade den ull som möjliggjorde hela den
                nordiska expansionen.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Medeltiden — ullhandeln som formade Europa
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80"
                alt="Medeltida arkitektur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Under medeltiden var ull Europas viktigaste handelsvara
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Under medeltiden var ull Europas ekonomiska ryggrad. Englands
                välstånd byggde på ullexporten — den engelska kronans skatteintäkter
                från ull var så betydande att Lord Chancellor i parlamentet
                fortfarande sitter på en ullsäck (<em>the Woolsack</em>), en
                tradition sedan 1300-talet.
              </p>
              <p className="mt-4">
                Flamländska städer som Brygge och Gent blev rika på
                ullbearbetning. Handelsvägar för ull sträckte sig från
                England och Spanien till hela kontinenten. Spansk merinoull
                från kungliga besättningar betraktades som en statshemlighet,
                och export av merinofår var förbjuden under dödsstraff ända
                fram till 1700-talet.
              </p>
              <p className="mt-4">
                De stora gobeländerna som hängdes på slottsväggar runt om i
                Europa hade en praktisk funktion utöver det estetiska — de
                fungerade som isolering. Tjocka ullvävnader på stenväggarna
                minskade drag och kyla avsevärt, en tidig form av{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  ullbaserad byggisolering
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårull i svenska byggnader — ett gammalt knep
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80"
                alt="Traditionellt svenskt timmerhus"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                I svenska timmerhus packades ulldrev mellan stockarna för att täta och isolera
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Att använda ull för att isolera byggnader är ingen modern
                uppfinning. I svenska timmerhus packades ull och ulldrev
                mellan stockarna för att täta springor och minska drag. Ryor
                — tjocka ullmattor vävda av{" "}
                <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">
                  Ryafårets
                </Link>{" "}
                långa ull — hängdes på väggar och lades på golv som extra
                isolering under de kalla vintrarna.
              </p>
              <p className="mt-4">
                Under 1700- och 1800-talen användes <strong>lumppapp</strong>,
                ett material baserat på ullrester och textiltrasor, som
                isolering i väggar och tak. Vadmal användes som vindskydd
                bakom paneler. Dessa metoder var effektiva just på grund av
                ullens{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  naturliga fukthantering
                </Link>{" "}
                — den absorberade fukt utan att mögla, något som äldre
                generationers byggare kände till av erfarenhet, även om de
                inte kunde förklara den kemiska mekanismen.
              </p>
              <p className="mt-4">
                Traditionen att isolera med ull var så etablerad att den
                överlevde i svenska landsbygdsbyggen långt in på 1900-talet,
                parallellt med den framväxande mineralullsindustrin.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Mineralullen tar över — 1930-talet och framåt
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                alt="Industriell tillverkning"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Mineralull blev standard på 1930-talet — billig, men energikrävande att producera
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Under sent 1800-tal och tidigt 1900-tal förändrades byggsektorn
                i grunden. Mineralull (stenull och glasull) introducerades på
                1930-talet och blev snabbt branschstandard. Den var billig att
                massproducera och erbjöd god termisk prestanda. I Sverige
                etablerade sig företag som Rockwool och Isover, och inom några
                decennier hade mineralull ersatt traditionella
                isoleringsmetoder nästan helt.
              </p>
              <p className="mt-4">
                Parallellt tog syntetiska textilfibrer — nylon (1938), polyester
                (1941), akryl (1950-talet) — marknadsandelar från naturull i
                klädindustrin. Fårull marginaliserades på båda fronterna. Ullen
                som inte längre behövdes till kläder hade ingen marknad som
                byggisolering heller.
              </p>
              <p className="mt-4">
                Konsekvenserna blev tydliga med tiden. Mineralullens tillverkning
                kräver smältning vid 1&nbsp;400–1&nbsp;500&nbsp;°C — en
                energiintensiv process med betydande koldioxidutsläpp. Och
                mineralullens oförmåga att hantera fukt ledde till problem med
                kondens och mögel i moderna, täta konstruktioner. Samtidigt
                växte berg av europeisk spillull som saknade avsättning — en
                biprodukt utan marknad.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullens comeback — 2010-talet och klimatmedvetenhet
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                alt="Modernt hållbart hus"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Sedan 2010-talet söker klimatmedvetna byggherrar material med lågt koldioxidavtryck
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Sedan 2010-talet har intresset för{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  fårullsisolering
                </Link>{" "}
                ökat markant. Flera faktorer samverkar: klimatmedvetna
                byggherrar söker material med lågt koldioxidavtryck.
                Passivhusrörelsen har visat att byggnader behöver
                &ldquo;andas&rdquo; och att mineralullens fuktproblem leder
                till kondens och mögel i täta konstruktioner.
              </p>
              <p className="mt-4">
                Österrikiska tillverkare som Isolena industrialiserade
                produktionen under 1990- och 2000-talen och levererar idag
                isoleringsskivor med{" "}
                <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">
                  lambda-värden som konkurrerar med mineralull
                </Link>. Fårull svarar på alla utmaningar samtidigt: den{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  binder koldioxid
                </Link>, reglerar fukt,{" "}
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  renar inomhusluften
                </Link>{" "}
                och kan komposteras vid livscykelns slut.
              </p>
              <p className="mt-4">
                Marknaden för naturlig byggisolering växer med tvåsiffriga
                procenttal årligen. Fårullsisolering finns idag tillgänglig
                i hela Europa, och i Sverige levereras den av{" "}
                <Link href="/om-oss" className="text-primary hover:text-primary/80 link-grow">
                  Byeco
                </Link>{" "}
                med sortiment anpassat för svenska byggstandarder.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Cirkulär ekonomi, EU-taxonomi och framtiden
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Grön skog – naturens kretslopp"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                200 000 ton europeisk spillull per år — från avfall till hållbar resurs
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                EU:s gröna giv och taxonomiförordningen klassificerar
                byggisolering av naturliga fibrer som en hållbar ekonomisk
                aktivitet. Det ger investerare och byggherrar starkare
                incitament att välja biobaserade material. Samtidigt driver
                den cirkulära ekonomin en omvärdering av spillull — de{" "}
                <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">
                  200&nbsp;000 ton europeisk ull
                </Link>{" "}
                som årligen saknar avsättning ses inte längre som avfall
                utan som en resurs.
              </p>
              <p className="mt-4">
                I Sverige kasseras uppskattningsvis 80&nbsp;% av den
                producerade ullen. Med ökande efterfrågan på hållbar
                isolering och EU-krav på klimatdeklaration av byggnader
                (som träder i kraft stegvis) finns en tydlig marknad för
                nordisk spillull. Infrastruktur för insamling och
                bearbetning är det som saknas — inte råvaran.
              </p>
              <p className="mt-4">
                Ullens historia har kommit full cirkel. Från bronsålderns
                livsuppehållande fiber, via vikingarnas handelsvara och
                medeltidens ekonomiska motor, genom industrialismens
                marginalisering, till en framtid där fårull kan bli
                byggsektorns mest hållbara isoleringsmaterial.{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om fårullsisoleringens hållbarhetsprofil →
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
              Vanliga frågor om ullens historia
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur länge har människan använt fårull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Människan har använt fårull i minst 6&nbsp;000 år. De äldsta
                  spåren härstammar från Mesopotamien och Centralasien, cirka
                  4&nbsp;000 f.Kr. I Skandinavien finns spår sedan cirka
                  1&nbsp;800 f.Kr.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är vadmal?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Vadmal är ett tjockt, valkat ulltyg som var Nordens viktigaste
                  handelsvara under vikingatiden och medeltiden. Det tillverkades
                  genom att väva ull och sedan valka tyget i varmt vatten. På
                  Island användes vadmal som officiell valuta.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  När började man isolera hus med ull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ull har använts som byggisolering i tusentals år. Greker och
                  romare placerade vävd ull mellan väggar. I Sverige packades
                  ulldrev mellan timmerstockar under medeltiden. Modern
                  fårullsisolering i skiv- och rullform utvecklades på
                  1990-talet i Österrike.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Varför slutade man använda ull som isolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Mineralull introducerades på 1930-talet och var billigare att
                  massproducera. Syntetiska fibrer tog marknadsandelar från ull i
                  klädindustrin. Fårull marginaliserades men har sedan 2010-talet
                  gjort comeback tack vare klimatmedvetenhet och EU:s
                  hållbarhetskrav.
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
              <Link href="/farraser" className="link-grow text-lg font-medium text-foreground">
                Svenska fårraser →
              </Link>
              <p className="text-foreground/60 mt-1">Raserna som bevarar den nordiska ulltraditionen.</p>
            </li>
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Den moderna produkten som fortsätter en tusenårig tradition.</p>
            </li>
            <li>
              <Link href="/hallbarhet" className="link-grow text-lg font-medium text-foreground">
                Hållbarhet och cirkulär ekonomi →
              </Link>
              <p className="text-foreground/60 mt-1">EU-taxonomin och framtidens hållbara byggande.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
