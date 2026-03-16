import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad är fårull? Fibrernas egenskaper och uppbyggnad",
  description:
    "Lär dig allt om fårullens fiberstruktur, keratin, krusighet och naturliga egenskaper. Från lanolin till lambda-värde.",
  openGraph: {
    title: "Vad är fårull? Fibrernas egenskaper och uppbyggnad",
    description:
      "Lär dig allt om fårullens fiberstruktur, keratin, krusighet och naturliga egenskaper. Från lanolin till lambda-värde.",
  },
  alternates: {
    canonical: "/farull",
  },
};

export default function FarullPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Vad är fårull?" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Material
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vad är fårull?
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&q=80"
        alt="Närbild på ett får med tjock ull"
        width={800}
        height={533}
        priority
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Fårull är en naturfiber som växer ur fårets hud. Den består av
            keratin, samma protein som finns i mänskligt hår och naglar. Men
            ullfibern är betydligt mer komplex. Varje fiber har en yttre
            fjällstruktur (kutikula), en inre cortex med spiralformade
            keratinceller, och i grövre ull en ihålig märg som bidrar till
            isoleringsförmågan. Det är denna tredimensionella uppbyggnad som
            gör ull så svår att kopiera syntetiskt.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Krusigheten gör jobbet
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=800&q=80"
                alt="Närbild på krusiga ullfibrer"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ullens naturliga krusighet – nyckeln till dess isoleringsförmåga
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Det som verkligen skiljer fårull från andra fibrer är den naturliga
                krusigheten. På engelska kallas den <em>crimp</em>. Merinoull kan
                ha upp till 100 krusningar per centimeter. <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">Grövre raser</Link> har färre
                men tydligare böjningar.
              </p>
              <p className="mt-4">
                Krusigheten skapar luftfickor i materialet. Och det är luften, inte
                fibern i sig, som isolerar. Fler luftfickor ger bättre termisk
                isolering. Samma mekanism gör att ull fjädrar tillbaka efter
                kompression, en naturlig återhämtningsförmåga som syntetiska fibrer
                helt enkelt saknar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fukt och värme på samma gång
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
                alt="Dimma över grönt landskap – fukt i naturen"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ull hanterar fukt som inget annat fibermaterial
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårull kan ta upp 35–40&nbsp;% av sin egen vikt i fukt utan att kännas
                våt. Det beror på att fibrernas kärna är hydrofil och drar till sig
                vattenmolekyler, medan det yttre fjällskiktet är hydrofobt och
                stöter bort vätskedroppar.
              </p>
              <p className="mt-4">
                När vattenmolekylerna absorberas av keratinet frigörs en liten mängd
                värme i en exoterm reaktion. Det är därför ullkläder värmer även när
                de är fuktiga. Inget syntetiskt material kan replikera den effekten
                fullt ut.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Tre sorters ull
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Olika garnnystan i naturliga färger"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Merinoull, crossbred och grovull – tre helt olika karaktärer
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ullens egenskaper varierar kraftigt beroende på ras.{" "}
                <strong>Merinoull</strong> (under 20 mikron) är extremt fin och
                mjuk. Perfekt för kläder närmast huden.{" "}
                <strong>Crossbred-ull</strong> (25-35 mikron) är starkare och hamnar
                i mattor, möbeltyger och tekniska textilier.{" "}
                <strong>Grovull</strong> (över 35 mikron) från <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">lantraser som
                Gutefåret</Link> är tålig och naturligt motståndskraftig.
              </p>
              <p className="mt-4">
                Just crossbred- och grovull betraktas ofta som en biprodukt utan
                högt marknadsvärde. Men det är precis den typ som lämpar sig bäst
                för{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  byggisolering
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Lanolin skyddar fibern
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80"
                alt="Får i regn – lanolinets naturliga skydd"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Lanolin – fårets eget regnskydd som också skyddar isoleringen
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Lanolin är det fettliknande vax som fåret utsöndrar för att skydda
                sin ull mot regn, UV-strålning och bakterier. I råull utgör det
                5–25&nbsp;% av vikten. Vid bearbetning tvättas det mesta bort, men en
                viss mängd lämnas kvar i isoleringsull. Det ger fibern naturlig
                motståndskraft mot skadedjur och fukt.
              </p>
              <p className="mt-4">
                Lanolin är också en värdefull biprodukt i sig. Det används i
                hudvård, läkemedel och smörjmedel.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Från fiber till hus
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Byggarbetsplats med träregelverk"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Fårull går från fiber till färdig byggisolering i väggar och tak
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Det mest spännande som händer med fårull just nu är byggisolering.
                Den naturliga fiberstrukturen, fukthanteringen och brandsäkerheten
                gör ull till ett starkt val för den som vill bygga hälsosamt. Ullen
                tvättas, kardas till skivor och behandlas med en minimal mängd borax
                för extra brandskydd. Alla naturliga egenskaper finns kvar.
              </p>
              <p className="mt-4">
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om fårullsisolering
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
              <Link href="/farraser" className="link-grow text-lg font-medium text-[#1A1916]">
                Svenska fårraser →
              </Link>
              <p className="text-[#6B6960] mt-1">Gutefår, gotlandsfår och fler – lär känna raserna bakom ullen.</p>
            </li>
            <li>
              <Link href="/fordelar" className="link-grow text-lg font-medium text-[#1A1916]">
                Fördelar med fårullsisolering →
              </Link>
              <p className="text-[#6B6960] mt-1">Från luftrening till fukthantering – åtta skäl att välja ull.</p>
            </li>
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-[#1A1916]">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-[#6B6960] mt-1">Så blir ullen till skivor och rullar för ditt hem.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
