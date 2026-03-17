import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Svenska fårraser och deras ull — från Gutefår till Finullsfår | Farull.se",
  description:
    "Guide till Sveriges fårraser och deras ull. Gutefår, Gotlandsfår, Ryafår, Finullsfår och lantraser. Svensk och global ullproduktion i siffror.",
  openGraph: {
    title: "Svenska fårraser och deras ull — från Gutefår till Finullsfår",
    description:
      "Guide till Sveriges fårraser och deras ull. Gutefår, Gotlandsfår, Ryafår, Finullsfår och lantraser. Svensk och global ullproduktion i siffror.",
  },
  alternates: {
    canonical: "/farraser",
  },
};

export default function FarraserPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Svenska fårraser och deras ull — från Gutefår till Finullsfår",
            description:
              "Guide till Sveriges fårraser och deras ull. Gutefår, Gotlandsfår, Ryafår, Finullsfår och lantraser. Svensk och global ullproduktion i siffror.",
            url: "https://farull.se/farraser",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://farull.se/images/farull-3.jpg",
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
                name: "Hur många fårraser finns i Sverige?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sverige har cirka 20 erkända fårraser, från urnordiska lantraser som Gutefår och Gotlandsfår till moderna korsningar. De mest kända för sin ull är Gutefår, Gotlandsfår, Ryafår, Finullsfår, Värmlandsfår, Roslagsfår, Dalaullsfår och Klövsjöfår.",
                },
              },
              {
                "@type": "Question",
                name: "Hur mycket ull producerar ett svenskt får per år?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Svenska får producerar i genomsnitt 2–4 kg ull per djur och år. Finullsfår ger 2–3 kg fin ull, Gotlandsfår 2–4 kg medelfin lockig ull, medan Gutefår ger 1,5–2,5 kg grov dubbelbelagd ull.",
                },
              },
              {
                "@type": "Question",
                name: "Hur mycket ull produceras i Sverige?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sverige producerar 1 200–1 800 ton råull per år från cirka 600 000 får. Ungefär 80 % av denna ull bränns eller slängs eftersom den saknar kommersiell avsättning — en outnyttjad resurs med stor potential för bland annat byggisolering.",
                },
              },
              {
                "@type": "Question",
                name: "Vilka är världens största ullproducenter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Världen producerar cirka 2,1 miljoner ton råull per år. Australien står för 25 % (främst merinoull), Kina för 19 %, och Nya Zeeland är tredje störst med fokus på crossbred-ull. I Europa finns cirka 200 000 ton spillull som saknar användning.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Svenska fårraser" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Svenska raser
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Svenska fårraser och deras ull
        </h1>
      </ScrollReveal>

      <Image
        src="/images/farull-3.jpg"
        alt="Klassisk illustration av ledande fårraser — Southdown, Hampshire, Merino med flera"
        width={800}
        height={1100}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg text-foreground/90">
            <strong>Sverige har cirka 600&nbsp;000 får</strong> fördelade på
            runt 20 erkända raser — från urnordiska lantraser med tusenårig
            historia till moderna korsningar. Tillsammans producerar de
            1&nbsp;200–1&nbsp;800 ton råull per år. Men ungefär 80&nbsp;% av
            den ullen bränns eller slängs. På den här sidan går vi igenom
            raserna, deras ull och den outnyttjade potential som finns i svensk
            fåruppfödning.
          </p>
          <p className="mt-4">
            Varje ras ger ull med egen karaktär:{" "}
            <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
              fibertjocklek, krusighet och glans
            </Link>{" "}
            varierar enormt. De svenska lantraserna bär ofta en
            dubbelbeläggning — ett inre lager mjuk underull och ett yttre lager
            grövre täckhår som skyddar mot väta och vind. Det är den
            variationen som gör svensk ull så mångsidig.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Gutefår — Sveriges äldsta fårras
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1661967898208-d90eb31d6223?w=800&q=80"
                alt="Bagge med stora spiralhorn på naturbete — typisk för primitiva lantraser som Gutefår"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Gutefår – Sveriges äldsta fårras med sina karakteristiska horn
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Sveriges äldsta fårras, med rötter som sträcker sig tillbaka till
                vikingatiden på Gotland. Ett litet, härdigt djur med horn hos
                båda könen och en karakteristisk dubbelbeläggning. Underullen
                är relativt mjuk (25–30 mikron) medan täckhåret är långt, grovt
                och närmast regnavvisande. Varje djur ger cirka{" "}
                <strong>1,5–2,5&nbsp;kg ull per år</strong>.
              </p>
              <p className="mt-4">
                Historiskt användes Gutefårets ull till segelduk, rep och
                ytterplagg — material som behövde tåla Nordsjöns stormar. På
                vikingatiden var vadmal (tjockt vävt ulltyg) en handelsvara av
                sådan betydelse att det användes som valuta på Island.
              </p>
              <p className="mt-4">
                Idag uppskattas rasen för hantverk och filtning. Gutefåret är
                också en uthotad lantras och klassas som bevarandevärd av
                Jordbruksverket. Dess grövre ull gör den till en naturlig
                kandidat för{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  byggisolering
                </Link>{" "}
                — en ny marknad som kan bidra till rasens överlevnad.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Gotlandsfår — den glansiga pälsrasen
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80"
                alt="Gotlandsfår med lockig grå ull"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Gotlandsfårets lockiga, glansiga päls i naturligt grått
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Gotlandsfåret är en av Sveriges mest internationellt kända raser,
                eftertraktad för sin vackra, glansiga och naturligt gråa lockiga
                ull. Fibern är medelfin (30–35 mikron) med en distinkt
                lockbildning som ger pälsen en lyster som få andra raser kan
                matcha. Varje djur producerar{" "}
                <strong>2–4&nbsp;kg ull per år</strong>.
              </p>
              <p className="mt-4">
                Gotlandsullen exporteras till skinn- och pälsindustrin i flera
                länder. Rasen förädlades under 1900-talet från det ursprungliga
                Gutefåret genom korsning med karakulraser, vilket gav den
                karakteristiska lockigheten. Till skillnad från Gutefåret saknar
                Gotlandsfåret horn.
              </p>
              <p className="mt-4">
                Den lockiga strukturen gör ullen intressant även för akustiska
                applikationer — lockarna fångar ljud effektivt på ett sätt som
                påminner om kommersiell{" "}
                <Link href="/anvandningsomraden" className="text-primary hover:text-primary/80 link-grow">
                  ljudisolering
                </Link>. Gotlandsfåret är den svenska ras som i dagsläget har
                störst kommersiellt värde för sin ull.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Ryafår — ullen bakom den svenska ryan
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80"
                alt="Får med lång tjock ull"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ryafårets långa, luggiga ull har använts till ryor i århundraden
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Namnet kommer av ryorna — de tjocka, luggiga mattor som hängdes
                på väggar och lades på golv för värme under den svenska vintern.
                Ryafårets ull är bland den längsta i Sverige: ofta 15–25&nbsp;cm
                vid klippning, grov och extremt tålig. Varje djur ger cirka{" "}
                <strong>2–3&nbsp;kg ull per år</strong>.
              </p>
              <p className="mt-4">
                Liksom Gutefåret har Ryafåret en dubbelbeläggning, men med ännu
                längre täckhår. Den grova fibern (35–60 mikron) gör ullen
                idealisk för textila applikationer som kräver slitstyrka —
                mattor, väskor och utomhustextilier — men för grov för kläder
                närmast huden.
              </p>
              <p className="mt-4">
                Ryafåret är en av Sveriges mest uthotade lantraser. Rasen finns
                med på Jordbruksverkets bevarandeprogram, och det pågår aktiva
                insatser för att öka populationen. Ullens längd och tålighet gör
                den samtidigt till ett intressant material för grövre{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  isoleringsändamål
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Finullsfår — Sveriges finaste ull
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1521169738573-dc208dee504e?w=800&q=80"
                alt="Får med mjuk tät ullpäls"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Finullsfår – den finaste svenska ullen, nära merinoklassen
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Producerar den finaste svenska ullen, med fibertjocklek ner mot
                20–22 mikron — inte långt från merinoull. En relativt modern
                ras, framavlad för att kombinera nordisk härdighet med en mjukare
                fiber. Varje djur ger{" "}
                <strong>2–3&nbsp;kg ull per år</strong>, och den lämpar sig
                utmärkt för garn, stickning och vävning.
              </p>
              <p className="mt-4">
                Finullsfåret har fått en renässans bland svenska ullproducenter
                som vill erbjuda ett inhemskt alternativ till importerad
                merinoull. Den mjuka fibern ger plagg som kan bäras direkt mot
                huden utan att stickas — en egenskap som normalt förknippas med
                dyrare importull.
              </p>
              <p className="mt-4">
                Från ett isoleringsperspektiv är finullen egentligen för
                värdefull att använda i väggar. Det är de grövre raserna —
                Gutefår, Ryafår och crossbred-korsningar — vars ull saknar
                textilmarknad och därmed lämpar sig bäst för{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  byggisolering
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fler svenska lantraser — Värmlandsfår, Roslagsfår, Dalaullsfår och Klövsjöfår
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
                Svenska lantraser på naturbete — varje ras har sin egen ullprofil
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                <strong>Värmlandsfåret</strong> är en medelstor lantras med
                dubbelbeläggning och ull i varierande färger — vitt, grått,
                brunt och svart. Fibern är medelfin till grov och lämpar sig för
                tovning och hantverk. Rasen är klassad som uthotad.
              </p>
              <p className="mt-4">
                <strong>Roslagsfåret</strong> härstammar från Stockholms
                skärgård och är ett av Sveriges minsta får. Ullen är relativt
                fin med god krusighet och har traditionellt använts till
                vävning. Populationen är liten och rasen ingår i
                bevarandeprogram.
              </p>
              <p className="mt-4">
                <strong>Dalaullsfåret</strong> avlades i Dalarna specifikt för
                ullkvalitet — det enda svenska lantras som selekterats primärt
                för sin ull snarare än kött. Fibern är medelfin (25–30 mikron)
                med god stapellängd och lämpar sig för garn och textil.
              </p>
              <p className="mt-4">
                <strong>Klövsjöfåret</strong> från Jämtland är en av Sveriges
                mest sällsynta lantraser med bara några hundra registrerade
                djur. Ullen är grov med tydlig dubbelbeläggning, historiskt
                använd till lokala textilier och filtar i det hårda
                inlandsklimatet.
              </p>
              <p className="mt-4">
                Gemensamt för dessa raser är att deras ull ofta saknar
                kommersiell avsättning. Den är för grov för textilmarknaden men
                för värdefull för att slängas. Det är exakt den typen av ull som
                lämpar sig bäst för{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  byggisolering
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Svensk ullproduktion i siffror
          </h2>
          <div className="mt-6">
            <p>
              Sverige har cirka <strong>600&nbsp;000 får</strong> som
              tillsammans producerar <strong>1&nbsp;200–1&nbsp;800 ton
              råull</strong> per år. En genomsnittlig tacka ger cirka 4&nbsp;kg
              ull och ett lamm omkring 2&nbsp;kg. Trots dessa volymer används
              bara en bråkdel.
            </p>
            <p className="mt-4">
              Enligt Svenska Fåravelsförbundet saknar ungefär{" "}
              <strong>80&nbsp;% av den svenska ullen kommersiell
              avsättning</strong>. Den bränns, komposteras eller läggs på
              deponi. Anledningen är att svenska får primärt hålls för kött, och
              ullens fibertjocklek gör den svår att sälja på den globala
              textilmarknaden som domineras av finare merinoull.
            </p>
            <p className="mt-4">
              Men det som gör ullen olämplig för kläder gör den perfekt för
              isolering. Grövre fibrer skapar stabilare mattor med goda{" "}
              <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">
                termiska och akustiska egenskaper
              </Link>. Med rätt infrastruktur för insamling och bearbetning
              skulle svensk spillull kunna isolera tusentals hus varje år och
              ge fåruppfödare en ny intäktskälla.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Global ullproduktion — Sverige i ett världsperspektiv
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1772215842204-3e5838af499c?w=800&q=80"
                alt="Får som betar på gröna betesmarker — global ullproduktion"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Global ullproduktion uppgår till cirka 2,1 miljoner ton per år
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Världen producerar cirka{" "}
                <strong>2,1 miljoner ton råull per år</strong>.{" "}
                <strong>Australien</strong> dominerar med ungefär 25&nbsp;% av
                global produktion — främst högkvalitativ merinoull för
                textilmarknaden. <strong>Kina</strong> står för omkring 19&nbsp;%,
                och <strong>Nya Zeeland</strong> är tredje störst med fokus på
                crossbred-ull.
              </p>
              <p className="mt-4">
                Ullmängden per får varierar enormt beroende på ras.
                Merinobesättningar kan producera <strong>5–13&nbsp;kg per djur
                och år</strong>, medan köttraser ger 1–4&nbsp;kg. Svenska raser
                ligger på 2–4&nbsp;kg — lägre volym, men fullt tillräcklig
                fiberkvalitet för isolering.
              </p>
              <p className="mt-4">
                I Europa beräknas det finnas cirka{" "}
                <strong>200&nbsp;000 ton spillull per år</strong> som saknar
                kommersiell användning. Det är ull från köttraser och lantraser
                som inte når textilkvalitet. Denna outnyttjade resurs har
                potential att bli en viktig råvara för{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  cirkulär byggisolering
                </Link>{" "}
                — istället för att hamna på deponi.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            En outnyttjad resurs med stor potential
          </h2>
          <div className="mt-6">
            <p>
              Idag importeras fårullsisolering till Sverige främst från
              Österrike och Storbritannien. Men den svenska traditionen att
              isolera med ull sträcker sig{" "}
              <Link href="/ullens-historia" className="text-primary hover:text-primary/80 link-grow">
                hundratals år bakåt
              </Link>. Timmerhus tätades med ullfiber, ryor hängdes på väggar
              för extra isolering, och vadmal användes som vindskydd.
            </p>
            <p className="mt-4">
              Med ökande intresse för{" "}
              <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                cirkulär ekonomi
              </Link>{" "}
              och EU:s taxonomi för hållbara investeringar finns nu ett
              ekonomiskt ramverk som gör lokal ullproduktion mer intressant.
              Att omvandla en biprodukt utan värde till ett premiummaterial
              för hälsosamma byggnader är exakt den typ av cirkulär innovation
              som marknaden efterfrågar.
            </p>
            <p className="mt-4">
              Potentialen är konkret: med 600&nbsp;000 får och
              1&nbsp;200–1&nbsp;800 ton årlig ull räcker den svenska
              produktionen till att isolera{" "}
              <strong>flera tusen villor per år</strong> — ull som idag till
              stor del går till spillo.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om svenska fårraser
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur många fårraser finns i Sverige?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Sverige har cirka 20 erkända fårraser, från urnordiska lantraser
                  som Gutefår och Gotlandsfår till moderna korsningar. De mest
                  kända för sin ull är Gutefår, Gotlandsfår, Ryafår, Finullsfår,
                  Värmlandsfår, Roslagsfår, Dalaullsfår och Klövsjöfår.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket ull producerar ett svenskt får per år?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Svenska får producerar i genomsnitt 2–4&nbsp;kg ull per djur och år.
                  Finullsfår ger 2–3&nbsp;kg fin ull, Gotlandsfår 2–4&nbsp;kg medelfin
                  lockig ull, medan Gutefår ger 1,5–2,5&nbsp;kg grov dubbelbelagd ull.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket ull produceras totalt i Sverige?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Sverige producerar 1&nbsp;200–1&nbsp;800 ton råull per år från
                  cirka 600&nbsp;000 får. Ungefär 80&nbsp;% av denna ull bränns
                  eller slängs — en outnyttjad resurs med stor potential för
                  bland annat byggisolering.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vilka är världens största ullproducenter?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Världen producerar cirka 2,1 miljoner ton råull per år.
                  Australien står för 25&nbsp;% (främst merinoull), Kina för
                  19&nbsp;%, och Nya Zeeland är tredje störst med fokus på
                  crossbred-ull.
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
              <p className="text-foreground/60 mt-1">Krusighet, keratin och lanolin – fibern som gör allt möjligt.</p>
            </li>
            <li>
              <Link href="/hallbarhet" className="link-grow text-lg font-medium text-foreground">
                Hållbarhet →
              </Link>
              <p className="text-foreground/60 mt-1">200 000 ton spillull och vägen mot cirkulär ekonomi.</p>
            </li>
            <li>
              <Link href="/ullens-historia" className="link-grow text-lg font-medium text-foreground">
                Ullens historia →
              </Link>
              <p className="text-foreground/60 mt-1">Från bronsåldern till modern byggisolering.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
