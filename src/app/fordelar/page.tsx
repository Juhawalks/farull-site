import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Fördelar med fårullsisolering",
  description:
    "Upptäck fördelarna med fårullsisolering: fuktreglering, brandsäkerhet, luftrening, ljudisolering och hälsosamt inomhusklimat.",
};

export default function Fordelar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
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
          <p>
            Ullens keratin binder formaldehyd och andra flyktiga organiska
            föreningar (VOC) som avges av möbler, lim och färg. Effekten är
            mätbar. I ett nybyggt hus med fårullsisolering sjunker
            formaldehydhalten i inomhusluften snabbare än med konventionell
            isolering.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Hanterar fukt utan problem
          </h2>
          <p>
            Ull absorberar upp till 40 % av sin vikt i fukt utan att förlora
            isoleringsförmåga. När luften torkar släpper den ut fukten igen.
            Det betyder att väggar med fårullsisolering buffrar fuktsvängningar
            naturligt, utan ångspärr i alla tillämpningar. Mineralull tappar
            prestanda redan vid låga fuktnivåer.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Brandsäker av naturen
          </h2>
          <p>
            Ull kolnar och slocknar själv. Den smälter inte, droppar inte
            och sprider inte brand. Brandklass B1/C uppnås helt utan kemiska
            flamskyddsmedel. Jämför det med cellplast som smälter och
            avger giftig rök, eller mineralull som klarar branden men vars
            bindemedel brinner.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Dämpar ljud effektivt
          </h2>
          <p>
            De krusiga fibrerna fångar ljudvågor i ett brett frekvensomfång.
            Från steg ovanpå till grannarnas musik. Fårullsisolering i
            mellanbjälklag och innerväggar gör märkbar skillnad i
            ljudkomfort.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Binder koldioxid
          </h2>
          <p>
            Varje kilo fårull har bundit CO₂ under fårets betessäsong.
            Tillverkningen av fårullsisolering kräver en bråkdel av den
            energi som mineralull behöver (ingen smältning vid 1 400 °C).
            Netto binder materialet mer koldioxid än det släpper ut.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Trevlig att jobba med
          </h2>
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
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Håller hela husets livstid
          </h2>
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
        </ScrollReveal>
      </div>
    </div>
  );
}
