import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vad är fårull? Fibrernas egenskaper och uppbyggnad",
  description:
    "Lär dig allt om fårullens fiberstruktur, keratin, krusighet och naturliga egenskaper. Från lanolin till lambda-värde.",
};

export default function FarullPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Material
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vad är fårull?
        </h1>
      </ScrollReveal>

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
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
          <p>
            Det som verkligen skiljer fårull från andra fibrer är den naturliga
            krusigheten. På engelska kallas den <em>crimp</em>. Merinoull kan
            ha upp till 100 krusningar per centimeter. Grövre raser har färre
            men tydligare böjningar.
          </p>
          <p className="mt-4">
            Krusigheten skapar luftfickor i materialet. Och det är luften, inte
            fibern i sig, som isolerar. Fler luftfickor ger bättre termisk
            isolering. Samma mekanism gör att ull fjädrar tillbaka efter
            kompression, en naturlig återhämtningsförmåga som syntetiska fibrer
            helt enkelt saknar.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Fukt och värme på samma gång
          </h2>
          <p>
            Fårull kan ta upp 35-40 % av sin egen vikt i fukt utan att kännas
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
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Tre sorters ull
          </h2>
          <p>
            Ullens egenskaper varierar kraftigt beroende på ras.{" "}
            <strong>Merinoull</strong> (under 20 mikron) är extremt fin och
            mjuk. Perfekt för kläder närmast huden.{" "}
            <strong>Crossbred-ull</strong> (25-35 mikron) är starkare och hamnar
            i mattor, möbeltyger och tekniska textilier.{" "}
            <strong>Grovull</strong> (över 35 mikron) från lantraser som
            Gutefåret är tålig och naturligt motståndskraftig.
          </p>
          <p className="mt-4">
            Just crossbred- och grovull betraktas ofta som en biprodukt utan
            högt marknadsvärde. Men det är precis den typ som lämpar sig bäst
            för{" "}
            <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
              byggisolering
            </Link>.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Lanolin skyddar fibern
          </h2>
          <p>
            Lanolin är det fettliknande vax som fåret utsöndrar för att skydda
            sin ull mot regn, UV-strålning och bakterier. I råull utgör det
            5-25 % av vikten. Vid bearbetning tvättas det mesta bort, men en
            viss mängd lämnas kvar i isoleringsull. Det ger fibern naturlig
            motståndskraft mot skadedjur och fukt.
          </p>
          <p className="mt-4">
            Lanolin är också en värdefull biprodukt i sig. Det används i
            hudvård, läkemedel och smörjmedel.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Från fiber till hus
          </h2>
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
        </ScrollReveal>
      </div>
    </div>
  );
}
