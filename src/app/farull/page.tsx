import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vad är fårull? — Fibrernas egenskaper och uppbyggnad",
  description:
    "Lär dig allt om fårullens unika fiberstruktur, keratin, krusighet och naturliga egenskaper. Från lanolin till lambda-värde — varför ull är naturens supermaterial.",
};

export default function FarullPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <p className="uppercase tracking-[0.15em] text-accent text-sm font-body mb-4">
        Material
      </p>
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
        Vad är fårull?
      </h1>

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <p>
          Fårull är en naturfiber som växer ur fårets hud och består av keratin —
          samma protein som mänskligt hår och naglar. Men till skillnad från hår
          har ullfibern en komplex, tredimensionell struktur som gör den unik
          bland alla textilfibrer. Varje fiber har en yttre fjällstruktur
          (kutikula), en inre cortex med spiralformade keratinceller, och i
          grövre ull en ihålig märg (medulla) som bidrar till isoleringsförmågan.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Krusighet — ullens hemlighet
        </h2>
        <p>
          Det som skiljer fårull från andra djurfibrer är dess naturliga
          krusighet, på engelska kallad <em>crimp</em>. Merinoull kan ha upp
          till 100 krusningar per centimeter, medan grövre raser har färre men
          tydligare böjningar. Krusigheten skapar luftfickor i materialet —
          och det är luften, inte fibern i sig, som isolerar. Ju fler
          luftfickor, desto bättre termisk isolering. Samma princip gör att ull
          fjädrar tillbaka efter kompression, vilket ger materialet en naturlig
          återhämtningsförmåga som syntetiska fibrer saknar.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Fukt och värme — en exoterm reaktion
        </h2>
        <p>
          Fårull kan absorbera upp till 35–40 % av sin egen vikt i fukt utan
          att kännas våt. Det beror på att fibrernas kärna (cortex) är
          hydrofil — den drar till sig vattenmolekyler — medan det yttre
          fjällskiktet är hydrofobt och stöter bort vätskedroppar. När
          vattenmolekyler absorberas av keratinet frigörs en liten mängd värme
          i en exoterm reaktion. Det är därför ullkläder värmer även när de är
          fuktiga — en egenskap som inget syntetiskt material kan replikera
          fullt ut.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Olika typer av ull
        </h2>
        <p>
          Ullens egenskaper varierar kraftigt beroende på ras och
          uppfödningsförhållanden. <strong>Merinoull</strong> (under 20 mikron)
          är extremt fin och mjuk, idealisk för kläder närmast huden.{" "}
          <strong>Crossbred-ull</strong> (25–35 mikron) från korsningsraser är
          starkare och används i mattor, möbeltyger och tekniska textilier.{" "}
          <strong>Grovull</strong> (över 35 mikron) från lantrasdjur som det
          svenska Gutefåret är tålig och naturligt motståndskraftig — perfekt
          för isolering och utvändiga applikationer. Just crossbred- och
          grovull, som ofta betraktas som en biprodukt utan högt marknadsvärde,
          är den typ som lämpar sig bäst för{" "}
          <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 underline underline-offset-2">
            byggisolering
          </Link>.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Lanolin — naturens impregnering
        </h2>
        <p>
          Lanolin är det fettliknande vax som fåret utsöndrar för att skydda
          sin ull mot regn, UV-strålning och bakterier. I råull utgör lanolinet
          5–25 % av vikten. Vid bearbetning tvättas det mesta bort, men en viss
          mängd lämnas kvar i isoleringsull för att behålla fiberns naturliga
          motståndskraft mot skadedjur och fukt. Lanolin är också en värdefull
          biprodukt — det används i hudvård, läkemedel och smörjmedel.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Från fiber till byggisolering
        </h2>
        <p>
          En av de mest innovativa användningarna av fårull idag är som
          byggisolering. Den naturliga fiberstrukturen, fukthanteringen och
          brandsäkerheten gör fårull till ett överlägset val för den som vill
          bygga hälsosamt och hållbart. Ullen tvättas, kardas till skivor och
          behandlas med en minimal mängd borax för extra brandskydd — men
          behåller alla sina naturliga egenskaper intakta.{" "}
          <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 underline underline-offset-2">
            Läs mer om fårullsisolering →
          </Link>
        </p>
      </div>
    </div>
  );
}
