import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad är fårullsisolering? Så tillverkas och fungerar den",
  description:
    "Lär dig allt om fårullsisolering: hur den tillverkas, hur den fungerar i väggar och tak, och varför den är ett naturligt val för hälsosamma byggnader.",
  openGraph: {
    title: "Vad är fårullsisolering? Så tillverkas och fungerar den",
    description:
      "Lär dig allt om fårullsisolering: hur den tillverkas, hur den fungerar i väggar och tak, och varför den är ett naturligt val för hälsosamma byggnader.",
  },
  alternates: {
    canonical: "/vad-ar-farullsisolering",
  },
};

export default function VadArFarullsisolering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
        alt="Byggarbetsplats med isoleringsarbete"
        width={800}
        height={533}
        priority
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Fårullsisolering är byggisolering gjord av ren fårull. Materialet
            tvättas, kardas till skivor eller rullar och behandlas med en liten
            mängd borax för extra brandskydd. Resultatet är en isolering som
            reglerar fukt, renar luften och isolerar termiskt i klass med
            mineralull.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Från fårrygg till vägg
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Naturliga fibrer i närbild"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ullen tvättas, kardas och formas till skivor – en enkel process
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ullen kommer främst från klippning av får vars ull inte når
                textilkvalitet. Den tvättas för att ta bort smuts och överskott av
                lanolin, men en viss mängd lämnas kvar för naturligt skydd mot
                skadedjur. Sedan kardas fibrerna till en jämn matta och formas till
                skivor i standardmått.
              </p>
              <p className="mt-4">
                Hela processen kräver en bråkdel av den energi som mineralull
                behöver. Ingen smältning vid 1 400 °C. Ingen kemikaliecocktail.
                Bara mekanisk bearbetning av en fiber som redan har alla egenskaper
                inbyggda.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Hur den fungerar
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=800&q=80"
                alt="Närbild på ullfibrer som skapar luftfickor"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Miljontals små luftfickor i fibrerna – det är luften som isolerar
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullens krusiga fibrer skapar miljontals små luftfickor. Det är
                luften som isolerar, inte fibern i sig. Lambda-värdet ligger på
                0,033-0,040 W/m·K, jämförbart med stenull och glasull.
              </p>
              <p className="mt-4">
                Men till skillnad från mineralull stannar det inte vid termisk
                prestanda. Ullen absorberar upp till 40&nbsp;% av sin vikt i fukt utan
                att förlora isoleringsförmåga, och släpper ut fukten igen när
                luften torkar. Den binder formaldehyd och andra flyktiga organiska
                föreningar ur inomhusluften. Och den är naturligt flamhämmande,
                helt utan kemiska tillsatser.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Var kan den användas?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Husbygge med synligt regelverk"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ytterväggar, snedtak, golv – fårull fungerar överallt i konstruktionen
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ytterväggar, innerväggar, mellanbjälklag, snedtak, vindsbjälklag
                och golv. Fårullsisolering fungerar överallt där du annars skulle
                använda mineralull. Den klipps med vanlig sax, trycker sig själv
                fast tack vare fibrernas fjädring, och kräver ingen
                skyddsutrustning vid montering.
              </p>
              <p className="mt-4">
                <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                  Se monteringsguiden steg för steg
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Vad kostar det?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                alt="Modernt hus med hållbar profil"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Högre materialpris – men lägre totalkostnad sett över husets livstid
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullsisolering kostar mer per kvadratmeter än mineralull.
                Materialpriset ligger typiskt 2-3 gånger högre. Men
                totalkalkylen ser annorlunda ut. Ingen skyddsutrustning behövs
                vid montering, arbetet går snabbare, och materialets livslängd
                (50+ år utan att sjunka ihop) gör att du slipper byta ut
                isoleringen under husets livstid.
              </p>
              <p className="mt-4">
                <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow">
                  Se den fullständiga jämförelsen med andra material
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 p-8 bg-primary/5 border border-primary/10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Vill du veta mer eller beställa?
            </h2>
            <p className="text-foreground/70 mb-1">
              I Norden säljer Byeco fårullsisolering från österrikiska Isolena.
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
    </div>
  );
}
