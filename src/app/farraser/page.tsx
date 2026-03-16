import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Svenska fårraser och deras ull. Gutefår, Gotlandsfår och fler",
  description:
    "Lär dig om svenska fårraser som Gutefår, Gotlandsfår, Ryafår och Finullsfår. Varje ras producerar ull med unika egenskaper.",
};

export default function FarraserPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Svenska raser
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Svenska fårraser och deras ull
        </h1>
      </ScrollReveal>

      <img
        src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&q=80"
        alt="Fårflock som betar på en äng"
        loading="eager"
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Sverige har cirka 20 erkända fårraser. Allt från urnordiska
            lantraser med tusenårig historia till moderna korsningar för
            köttproduktion. Varje ras ger ull med helt egen karaktär:
            fibertjocklek, längd, krusighet och glans varierar enormt.
          </p>
          <p className="mt-4">
            De svenska lantraserna bär ofta en dubbelbeläggning. Ett inre lager
            mjuk underull och ett yttre lager grövre täckhår som skyddar mot
            väta och vind. Det är den variationen som gör svensk ull så
            mångsidig.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Gutefår
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80"
                alt="Gutefår med horn på naturbete"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Gutefår – Sveriges äldsta fårras med sina karakteristiska horn
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Sveriges äldsta fårras. Härstammar direkt från vikingatida får på
                Gotland. Litet, härdigt djur med horn hos båda könen och en
                karakteristisk dubbelbeläggning. Underullen är relativt mjuk (runt
                25-30 mikron) medan täckhåret är långt, grovt och närmast
                regnavvisande.
              </p>
              <p className="mt-4">
                Historiskt användes Gutefårets ull till segelduk, rep och
                ytterplagg. Material som behövde tåla Nordsjöns stormar. Idag
                uppskattas den för hantverk och filtning, och som utgångspunkt
                i diskussionen om nordisk spillull till{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  byggisolering
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Gotlandsfår
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80"
                alt="Gotlandsfår med lockig grå ull"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Gotlandsfårets lockiga, glansiga päls i naturligt grått
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Känt för sin vackra, glansiga och naturligt gråa lockiga ull.
                Fibern är medelfin (runt 30-35 mikron) med en distinkt
                lockbildning som ger pälsen en lyster som få andra raser matchar.
              </p>
              <p className="mt-4">
                Gotlandsullen är eftertraktad internationellt för skinn och päls.
                Den lockiga strukturen gör den också intressant för akustiska
                applikationer. Lockarna fångar ljud på ett sätt som påminner om
                kommersiell{" "}
                <Link href="/anvandningsomraden" className="text-primary hover:text-primary/80 link-grow">
                  ljudisolering
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Ryafår
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80"
                alt="Får med lång tjock ull"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ryafårets långa, luggiga ull har använts till ryor i århundraden
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Namnet kommer av att ullen traditionellt användes till ryor. De
                tjocka, luggiga mattor som hängdes på väggar och lades på golv för
                isolering under den svenska vintern. Ullen är lång (ofta 15-25 cm
                vid klippning), grov och extremt tålig.
              </p>
              <p className="mt-4">
                Ryafåret har, liksom Gutefåret, en dubbelbeläggning men med ännu
                längre täckhår. Det gör ullen idealisk för textila applikationer
                som kräver slitstyrka. Fibern är dock för grov för kläder närmast
                huden.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Finullsfår
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1521169738573-dc208dee504e?w=800&q=80"
                alt="Får med mjuk tät ullpäls"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Finullsfår – den finaste svenska ullen, nära merinoklassen
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Producerar den finaste svenska ullen. Fibertjockleken kan nå ner
                mot 20-22 mikron, inte långt från merinoull. En relativt modern
                ras, framavlad för att kombinera nordisk härdighet med en mjukare
                fiber. Finullen lämpar sig för garn, stickning och vävning.
              </p>
              <p className="mt-4">
                Rasen har fått en renässans bland svenska ullproducenter som vill
                erbjuda ett inhemskt alternativ till importerad merinoull.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fler raser och en outnyttjad resurs
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Betande fårflock i svenskt landskap"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Svenska lantraser på naturbete – en ullresurs som väntar på att användas
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Utöver dessa fyra finns Värmlandsfår, Roslagsfår, Dalaullsfår
                och Klövsjöfår. Alla med egna ullprofiler och bevarandestatus.
                Gemensamt är att deras ull ofta saknar kommersiell avsättning. Den
                är för grov för textilmarknaden men för värdefull för att slängas.
                Varje år kasseras tusentals ton svensk ull som aldrig hittar en
                köpare.
              </p>
              <p className="mt-4">
                Idag importeras isoleringsfårull främst från Österrike och
                Storbritannien. Men den svenska traditionen att isolera med ull
                sträcker sig hundratals år bakåt. Med ökande intresse för cirkulär
                ekonomi finns stor potential att använda mer nordisk ull i{" "}
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  hållbar byggisolering
                </Link>{" "}
                och ge svensk fåruppfödning en ny intäktskälla.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
