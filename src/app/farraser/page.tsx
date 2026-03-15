import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Svenska fårraser och deras ull — Gutefår, Gotlandsfår och fler",
  description:
    "Lär dig om svenska fårraser som Gutefår, Gotlandsfår, Ryafår och Finullsfår. Varje ras producerar ull med unika egenskaper — från grov skyddsull till fin textilfiber.",
};

export default function FarraserPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <p className="uppercase tracking-[0.15em] text-accent text-sm font-body mb-4">
        Svenska raser
      </p>
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
        Svenska fårraser och deras ull
      </h1>

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <p>
          Sverige har cirka 20 erkända fårraser, från urnordiska lantraser
          med tusenårig historia till moderna korsningar framavlade för
          köttproduktion. Varje ras producerar ull med distinkta egenskaper —
          fibertjocklek, längd, krusighet och glans varierar enormt. De
          svenska lantraserna bär ofta en så kallad dubbelbeläggning: ett inre
          lager mjuk, fin underull och ett yttre lager grövre täckhår som
          skyddar mot väta och vind. Det är denna variation som gör svensk ull
          så mångsidig.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Gutefår
        </h2>
        <p>
          Gutefåret är Sveriges äldsta fårras och härstammar direkt från
          vikingatida får på Gotland. Det är ett litet, härdigt djur med horn
          hos båda könen och en karakteristisk dubbelbeläggning. Underullen är
          relativt mjuk (runt 25–30 mikron) medan täckhåret är långt, grovt
          och närmast regnavvisande. Gutefårets ull har historiskt använts till
          segelduk, rep och ytterplagg — material som behövde tåla
          Nordsjöns stormar. Idag uppskattas den för hantverk, filtning och
          som inspirationskälla i diskussionen om att använda nordisk
          spillull till{" "}
          <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 underline underline-offset-2">
            byggisolering
          </Link>.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Gotlandsfår
        </h2>
        <p>
          Gotlandsfåret (eller Pälsfåret) är känt för sin vackra, glansiga och
          naturligt gråa lockiga ull. Fibern är medelfin (runt 30–35 mikron)
          med en distinkt lockbildning som ger pälsen en lyster som få andra
          raser kan matcha. Gotlandsullen är eftertraktad internationellt för
          skinn och päls, men den lockiga strukturen gör den också intressant
          för akustiska applikationer — lockarna fångar ljud på ett sätt som
          påminner om kommersiell{" "}
          <Link href="/anvandningsomraden" className="text-primary hover:text-primary/80 underline underline-offset-2">
            ljudisolering
          </Link>.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Ryafår
        </h2>
        <p>
          Ryafåret är en svensk lantras vars namn kommer av att ullen
          traditionellt användes till ryor — de tjocka, luggiga mattor som
          hängdes på väggar och lades på golv för isolering under den svenska
          vintern. Ullen är lång (ofta 15–25 cm vid klippning), grov och
          extremt tålig. Ryafåret har, liksom Gutefåret, en dubbelbeläggning,
          men med ännu längre täckhår. Det gör ullen idealisk för textila
          applikationer som kräver slitstyrka — men fibern är för grov för
          kläder närmast huden.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Finullsfår
        </h2>
        <p>
          Finullsfåret producerar den finaste svenska ullen, med en
          fibertjocklek som kan nå ner mot 20–22 mikron — inte långt från
          merinoull. Det är en relativt modern svensk ras, framavlad för att
          kombinera nordisk härdighet med en mjukare, finare fiber. Finullen
          lämpar sig väl för garn, stickning och vävning, och har fått en
          renässans bland svenska ullproducenter som vill erbjuda ett
          inhemskt alternativ till importerad merinoull.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Andra raser och framtiden
        </h2>
        <p>
          Utöver dessa fyra finns bland annat Värmlandsfår, Roslagsfår,
          Dalaullsfår och Klövsjöfår — alla med egna ullprofiler och
          bevarandestatus. Gemensamt för de svenska lantraserna är att deras
          ull ofta saknar en kommersiell avsättning: den är för grov för
          textilmarknaden men för värdefull för att bara slängas. Varje år
          kasseras tusentals ton svensk ull som aldrig hittar en köpare.
        </p>
        <p>
          Idag importeras isoleringsfårull främst från Österrike och
          Storbritannien, men den svenska traditionen att isolera med ull
          sträcker sig hundratals år bakåt. Med ökande intresse för cirkulär
          ekonomi och lokala material finns en stor potential att använda mer
          nordisk ull i{" "}
          <Link href="/fordelar" className="text-primary hover:text-primary/80 underline underline-offset-2">
            hållbar byggisolering
          </Link>{" "}
          — och ge svensk fåruppfödning en ny, meningsfull intäktskälla.
        </p>
      </div>
    </div>
  );
}
