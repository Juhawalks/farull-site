import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Fördelar med fårullsisolering",
  description:
    "Upptäck fördelarna med fårullsisolering: fuktreglering, brandsäkerhet, luftrening, ljudisolering och hälsosamt inomhusklimat.",
  openGraph: {
    title: "Fördelar med fårullsisolering",
    description:
      "Upptäck fördelarna med fårullsisolering: fuktreglering, brandsäkerhet, luftrening, ljudisolering och hälsosamt inomhusklimat.",
  },
  alternates: {
    canonical: "/fordelar",
  },
};

export default function Fordelar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Fördelar" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Fördelar
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Varför välja fårullsisolering?
        </h1>
      </ScrollReveal>

      <img
        src="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=1200&q=80"
        alt="Grön natur och hållbar miljö"
        loading="eager"
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            De flesta isoleringsmaterial gör en sak: de isolerar termiskt.
            Fårull gör sex saker samtidigt. Här är varför det spelar roll.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Renar inomhusluften
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1527015175922-36a306cf0e20?w=800&q=80"
                alt="Ljust rum med ren luft och naturligt ljus"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Fårull binder formaldehyd och renar luften i hemmet
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ullens keratin binder formaldehyd och andra flyktiga organiska
                föreningar (VOC) som avges av möbler, lim och färg. Effekten är
                mätbar. I ett nybyggt hus med fårullsisolering sjunker
                formaldehydhalten i inomhusluften snabbare än med konventionell
                isolering.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Hanterar fukt utan problem
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
                alt="Dimma och fukt i naturligt landskap"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Upp till 40 % av sin vikt i fukt – utan att tappa prestanda
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ull absorberar upp till 40 % av sin vikt i fukt utan att förlora
                isoleringsförmåga. När luften torkar släpper den ut fukten igen.
                Det betyder att väggar med fårullsisolering buffrar fuktsvängningar
                naturligt, utan ångspärr i alla tillämpningar. Mineralull tappar
                prestanda redan vid låga fuktnivåer.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Brandsäker av naturen
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?w=800&q=80"
                alt="Eldflamma i närbild"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ull kolnar och självslocknar – brandklass B1/C utan kemikalier
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ull kolnar och slocknar själv. Den smälter inte, droppar inte
                och sprider inte brand. Brandklass B1/C uppnås helt utan kemiska
                flamskyddsmedel. Jämför det med cellplast som smälter och
                avger giftig rök, eller mineralull som klarar branden men vars
                bindemedel brinner.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Dämpar ljud effektivt
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt="Lugnt tyst rum med mjukt ljus"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Krusiga fibrer fångar ljudvågor i ett brett frekvensomfång
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                De krusiga fibrerna fångar ljudvågor i ett brett frekvensomfång.
                Från steg ovanpå till grannarnas musik. Fårullsisolering i
                mellanbjälklag och innerväggar gör märkbar skillnad i
                ljudkomfort.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Binder koldioxid
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Grönt landskap med betande djur"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Gräs binder CO₂, fåret omvandlar det till ull – naturens egen kolsänka
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Varje kilo fårull har bundit CO₂ under fårets betessäsong.
                Tillverkningen av fårullsisolering kräver en bråkdel av den
                energi som mineralull behöver (ingen smältning vid 1 400 °C).
                Netto binder materialet mer koldioxid än det släpper ut.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Trevlig att jobba med
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Händer som arbetar med naturligt material"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ingen klåda, inget damm – montering med bara händerna
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ingen klåda. Inget damm. Ingen skyddsmask behövs. Klipp med
                vanlig sax, tryck på plats. Fibrerna fjädrar och fyller ut
                ojämna hålrum av sig själva. Det gör monteringen snabbare och
                billigare jämfört med styvare material som kräver exakta mått.
              </p>
              <p className="mt-4">
                <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                  Se monteringsguiden
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Håller hela husets livstid
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                alt="Vackert äldre hus i gott skick"
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                50+ år utan att sjunka ihop – isolering som håller hela husets livstid
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullsisolering sjunker inte ihop med tiden. Fibrernas naturliga
                fjädring gör att materialet behåller sin form och prestanda i
                50+ år. Mineralull kan med tiden komprimeras och tappa
                isoleringsförmåga, särskilt i vertikala applikationer.
              </p>
              <p className="mt-4">
                <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow">
                  Jämför fårull med andra isoleringsmaterial
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
