import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vad är fårullsisolering? Så tillverkas och fungerar den",
  description:
    "Lär dig allt om fårullsisolering: hur den tillverkas, hur den fungerar i väggar och tak, och varför den är ett naturligt val för hälsosamma byggnader.",
};

export default function VadArFarullsisolering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Isolering
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vad är fårullsisolering?
        </h1>
      </ScrollReveal>

      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
        alt="Byggarbetsplats med isoleringsarbete"
        loading="eager"
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
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
        </ScrollReveal>

        <ScrollReveal>
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80"
            alt="Naturligt ljus genom ullfibrer"
            loading="lazy"
            className="w-full max-w-md mx-auto h-56 object-cover rounded-xl mb-8"
          />
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Hur den fungerar
          </h2>
          <p>
            Fårullens krusiga fibrer skapar miljontals små luftfickor. Det är
            luften som isolerar, inte fibern i sig. Lambda-värdet ligger på
            0,033-0,040 W/m·K, jämförbart med stenull och glasull.
          </p>
          <p className="mt-4">
            Men till skillnad från mineralull stannar det inte vid termisk
            prestanda. Ullen absorberar upp till 40 % av sin vikt i fukt utan
            att förlora isoleringsförmåga, och släpper ut fukten igen när
            luften torkar. Den binder formaldehyd och andra flyktiga organiska
            föreningar ur inomhusluften. Och den är naturligt flamhämmande,
            helt utan kemiska tillsatser.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Var kan den användas?
          </h2>
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
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Vad kostar det?
          </h2>
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
        </ScrollReveal>
      </div>
    </div>
  );
}
