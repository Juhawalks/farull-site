import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Ullens historia. Från bronsålder till byggisolering",
  description:
    "Följ ullens historia i Sverige och världen: från bronsålderns textilier via industrialiseringen till fårullens comeback som hållbar byggisolering.",
  openGraph: {
    title: "Ullens historia. Från bronsålder till byggisolering",
    description:
      "Följ ullens historia i Sverige och världen: från bronsålderns textilier via industrialiseringen till fårullens comeback som hållbar byggisolering.",
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
            headline: "Ullens historia. Från bronsålder till byggisolering",
            description:
              "Följ ullens historia i Sverige och världen: från bronsålderns textilier via industrialiseringen till fårullens comeback som hållbar byggisolering.",
            url: "https://farull.se/ullens-historia",
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
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Fårull är ett av de äldsta materialen i mänsklighetens historia.
            Arkeologiska fynd visar att människor började domesticera får och
            använda deras ull för minst 6 000 år sedan, under bronsåldern i
            Mellanöstern och Centralasien. Sedan dess har ullen följt
            civilisationens utveckling som ett av de viktigaste råmaterialen
            för kläder, byggnader och handel.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Ull i det forntida Sverige
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1533662635784-3180e1612e2f?w=800&q=80"
                alt="Historiskt hantverk och textiltillverkning"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Vikingarna exporterade ulltyger – vadmal var Nordens viktigaste handelsvara
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                I Skandinavien finns spår av <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">fåravel</Link> och ullbearbetning sedan
                bronsåldern, cirka 1800 f.Kr. Ullen var avgörande för överlevnad
                i det nordiska klimatet. Kläder, filtar och väggbonader som
                isolerade de enkla bostäderna.
              </p>
              <p className="mt-4">
                Vikingarna exporterade ulltyger och ulltextilier. Tyget vadmal
                (ett valkat, tätt ulltyg) var en av Nordens viktigaste handelsvaror
                under medeltiden. Det fungerade som betalningsmedel och skattevara
                i hundratals år.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Ull i väggarna. Gammalt knep.
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80"
                alt="Gammalt timmerhus med traditionell byggnadsteknik"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                I svenska timmerhus packades ulldrev mellan stockarna för att täta och isolera
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Att använda ull för att isolera byggnader är ingen modern
                uppfinning. I svenska timmerhus packades ull och ulldrev mellan
                stockarna för att täta springor och minska drag. Under 1700- och
                1800-talen användes lumppapp, ett material baserat på ullrester
                och textiltrasor, som isolering i väggar och tak.
              </p>
              <p className="mt-4">
                Ullens förmåga att hantera fukt utan att mögla var välkänd bland
                äldre generationers byggare. De kunde inte förklara kemin bakom
                det, men de visste att det fungerade.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Mineralullen tar över
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                alt="Industriell tillverkning"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Mineralull blev standard på 1930-talet – men kräver smältning vid 1 400 °C
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Under sent 1800-tal och tidigt 1900-tal förändrades byggsektorn
                i grunden. Mineralull (stenull och glasull) introducerades på
                1930-talet och blev snabbt standard. Den var billig att tillverka
                i stora volymer och erbjöd god termisk prestanda.
              </p>
              <p className="mt-4">
                Samtidigt tog syntetiska textilfibrer marknadsandelar från
                naturull i klädindustrin. Nylon, polyester, akryl. Fårull blev
                en nischprodukt. Konsekvenserna var tydliga: energiintensiv
                tillverkning av mineralull (smältning vid 1 400-1 500 °C) bidrog
                till stora koldioxidutsläpp. Och den syntetiska dominansen ledde
                till en ullöverproduktion där miljontals ton spillull varje år
                saknade avsättning.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fårullen kommer tillbaka
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                alt="Modernt hållbart hus"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Sedan 2010-talet söker klimatmedvetna byggherrar material med lågt koldioxidavtryck
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Sedan 2010-talet har intresset för <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">fårullsisolering</Link> ökat ordentligt.
                Flera saker samverkar. Klimatmedvetna byggherrar och arkitekter söker
                material med lågt koldioxidavtryck. EU:s taxonomiförordning
                premierar biobaserade och cirkulära material. Och passivhusrörelsen
                har visat att byggnader behöver &ldquo;andas&rdquo;. Mineralullens
                oförmåga att hantera fukt har lett till problem med kondens och
                mögel i täta konstruktioner.
              </p>
              <p className="mt-4">
                Fårull svarar på alla dessa utmaningar. Den binder koldioxid
                (varje kilo ull har absorberat CO₂ under fårets betessäsong),
                reglerar fukt utan att förlora isoleringsförmåga, och kan vid
                livscykelns slut komposteras och återgå till jorden. Österrikiska
                tillverkare som Isolena har industrialiserat produktionen och
                levererar isoleringsskivor med lambda-värden som konkurrerar
                med mineralull.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Cirkulär ekonomi och EU-taxonomi
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Grön skog – naturens kretslopp"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                200 000 ton europeisk spillull per år – från avfall till hållbar resurs
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                EU:s gröna giv och taxonomiförordningen klassificerar
                byggisolering av naturliga fibrer som en hållbar ekonomisk
                aktivitet. Det ger investerare och byggherrar som vill uppfylla
                hållbarhetskraven starkare incitament att välja biobaserade
                material. Samtidigt driver den cirkulära ekonomin en omvärdering
                av spillull. De 200 000 ton europeisk ull som årligen saknar
                avsättning ses inte längre som avfall utan som en resurs.
              </p>
              <p className="mt-4">
                Ullens historia har kommit full cirkel. Från bronsålderns
                livsuppehållande fiber, via industrialismens marginalisering,
                till en framtid där fårull kan bli byggsektorns mest hållbara
                isoleringsmaterial.{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om fårullsisoleringens hållbarhetsprofil
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/farraser" className="link-grow text-lg font-medium text-foreground">
                Svenska fårraser →
              </Link>
              <p className="text-foreground/50 mt-1">Raserna som bevarar den nordiska ulltraditionen.</p>
            </li>
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/50 mt-1">Den moderna produkten som fortsätter en tusenårig tradition.</p>
            </li>
            <li>
              <Link href="/hallbarhet" className="link-grow text-lg font-medium text-foreground">
                Hållbarhet och cirkulär ekonomi →
              </Link>
              <p className="text-foreground/50 mt-1">EU-taxonomin och framtidens hållbara byggande.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
