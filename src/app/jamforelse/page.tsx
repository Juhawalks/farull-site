import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Fårull vs mineralull, cellulosa och EPS",
  description:
    "Jämför fårullsisolering med mineralull, cellulosa och EPS. Prestanda, pris, miljöpåverkan och hälsoaspekter sida vid sida.",
};

export default function Jamforelse() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Jämförelse
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Fårull mot resten
        </h1>
      </ScrollReveal>

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Alla isoleringsmaterial isolerar. Det är vad de har gemensamt. Men
            skillnaderna i fukthantering, hälsopåverkan, miljöavtryck och
            arbetskomfort är stora. Här ställer vi fårull mot de vanligaste
            alternativen.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fårull vs mineralull (sten- och glasull)
          </h2>
          <p>
            <strong>Termisk prestanda:</strong> Jämförbar. Fårull 0,033-0,040
            W/m·K, mineralull 0,032-0,040 W/m·K. Ingen mätbar skillnad i
            praktiken.
          </p>
          <p className="mt-3">
            <strong>Fukt:</strong> Fårull absorberar upp till 40 % av sin vikt
            utan att tappa prestanda. Mineralull förlorar isoleringsförmåga
            redan vid låga fuktnivåer. I täta konstruktioner kan det leda till
            kondensproblem.
          </p>
          <p className="mt-3">
            <strong>Luftkvalitet:</strong> Fårull binder formaldehyd och VOC.
            Mineralull gör det inte.
          </p>
          <p className="mt-3">
            <strong>Montering:</strong> Fårull kräver ingen skyddsutrustning.
            Mineralull kräver mask, handskar och skyddskläder.
          </p>
          <p className="mt-3">
            <strong>Miljö:</strong> Mineralull kräver smältning vid 1 400 °C.
            Fårull tvättas och kardas mekaniskt. CO₂-avtrycket skiljer sig
            dramatiskt.
          </p>
          <p className="mt-3">
            <strong>Pris:</strong> Fårull kostar 2-3x mer per kvadratmeter.
            Lägre monteringskostnader och längre livslängd kompenserar delvis.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fårull vs cellulosa
          </h2>
          <p>
            Cellulosa (returpapper) är ett annat biobaserat alternativ.
            Lambda-värdet är liknande (0,036-0,040 W/m·K). Cellulosa hanterar
            fukt bättre än mineralull men sämre än fårull. Den kräver
            inblåsning med specialutrustning och kan sätta sig med tiden
            i vertikala applikationer.
          </p>
          <p className="mt-4">
            Fårull har fördelar i luftrening (cellulosa binder inte
            formaldehyd), brandbeteende (cellulosa kräver kemiska
            flamskyddsmedel) och formstabilitet.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fårull vs EPS/cellplast
          </h2>
          <p>
            EPS (expanderad polystyren) isolerar bra termiskt men saknar
            fuktbuffrande egenskaper helt. Den smälter vid brand och avger
            giftig rök. Materialet är fossilbaserat och biologiskt
            nedbrytbart först efter hundratals år.
          </p>
          <p className="mt-4">
            Fårull och EPS befinner sig i helt olika kategorier. EPS är billigt
            och effektivt för grundisolering under mark, där fukthantering inte
            är relevant. Men i väggar, tak och mellanbjälklag erbjuder fårull
            ett helt annat paket.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Sammanfattning
          </h2>
          <p>
            Fårull kostar mer. Det är ärligt. Men om du väger in luftkvalitet,
            fukthantering, arbetskomfort, livslängd och klimatpåverkan blir
            bilden en annan. För den som bygger eller renoverar med hälsa och
            hållbarhet som prioritet är fårull svårslagen.
          </p>
          <p className="mt-4">
            <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
              Läs mer om fördelarna i detalj
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
