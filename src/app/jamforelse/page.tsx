import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Fårull vs mineralull, cellulosa och EPS",
  description:
    "Jämför fårullsisolering med mineralull, cellulosa och EPS. Prestanda, pris, miljöpåverkan och hälsoaspekter sida vid sida.",
  openGraph: {
    title: "Fårull vs mineralull, cellulosa och EPS",
    description:
      "Jämför fårullsisolering med mineralull, cellulosa och EPS. Prestanda, pris, miljöpåverkan och hälsoaspekter sida vid sida.",
  },
  alternates: {
    canonical: "/jamforelse",
  },
};

export default function Jamforelse() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Jämförelse" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Jämförelse
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Fårull mot resten
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
        alt="Olika byggmaterial för jämförelse"
        width={800}
        height={533}
        priority
        className="w-full h-56 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
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
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Byggarbetsplats med isoleringsmaterial"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Mineralull kräver skyddsutrustning – fårull monteras med bara händerna
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                <strong>Termisk prestanda:</strong> Jämförbar. Fårull 0,033-0,040
                W/m·K, mineralull 0,032-0,040 W/m·K. Ingen mätbar skillnad i
                praktiken.
              </p>
              <p className="mt-3">
                <strong>Fukt:</strong> Fårull absorberar upp till 40&nbsp;% av sin vikt
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
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fårull vs cellulosa
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Naturliga fibrer och material"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Cellulosa och fårull – två biobaserade alternativ med olika styrkor
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
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
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fårull vs EPS/cellplast
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                alt="Byggmaterial i jämförelse"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                EPS isolerar termiskt – men saknar fårullens fukt- och brandegenskaper
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
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
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Sammanfattning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Grönt landskap med betande får"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Fårull kostar mer – men ger mer tillbaka i luftkvalitet, hälsa och hållbarhet
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
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
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
