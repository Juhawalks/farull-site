import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ullens historia — från bronsålder till byggisolering",
  description:
    "Följ ullens historia i Sverige och världen: från bronsålderns textilier via industrialiseringen till fårullens comeback som hållbar byggisolering.",
};

export default function UllensHistoriaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <p className="uppercase tracking-[0.15em] text-accent text-sm font-body mb-4">
        Historia
      </p>
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
        Ullens historia — från bronsålder till byggisolering
      </h1>

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <p>
          Fårull är ett av de äldsta materialen i mänsklighetens historia.
          Arkeologiska fynd visar att människor började domesticera får och
          använda deras ull för minst 6 000 år sedan — under bronsåldern i
          Mellanöstern och Centralasien. Från den tidpunkten har ullen
          följt civilisationens utveckling som ett av de viktigaste
          råmaterialen för kläder, byggnader och handel.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Ull i det forntida Sverige
        </h2>
        <p>
          I Skandinavien finns spår av fåravel och ullbearbetning sedan
          bronsåldern, cirka 1800 f.Kr. Ullen var avgörande för överlevnad i
          det nordiska klimatet — den användes till kläder, filtar och
          väggbonader som isolerade de enkla bostäderna. Vikingarna
          exporterade ulltyger och ulltextilier, och tyget vadmal (ett
          valkat, tätt ulltyg) var en av Nordens viktigaste handelvaror
          under medeltiden. Vadmal fungerade som betalningsmedel och
          skattevara i hundratals år.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Ull som byggisolering — en urgammal tradition
        </h2>
        <p>
          Att använda ull för att isolera byggnader är ingen modern
          uppfinning. I svenska timmerhus packades ull och ulldrev mellan
          stockarna för att täta springor och minska drag. Under 1700- och
          1800-talen användes lumppapp — ett material baserat på ullrester
          och textiltrasor — som isolering i väggar och tak. Ullens förmåga
          att hantera fukt utan att mögla var välkänd bland äldre
          generationers byggare, även om de inte kunde förklara kemin bakom
          det.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Industrialiseringen och mineralullens intåg
        </h2>
        <p>
          I takt med industrialiseringen under sent 1800-tal och tidigt
          1900-tal förändrades byggsektorn i grunden. Mineralull (stenull
          och glasull) introducerades på 1930-talet och blev snabbt
          standardisoleringen i moderna byggnader. Den var billig att
          tillverka i stora volymer och erbjöd god termisk prestanda. Under
          samma period tog syntetiska textilfibrer — nylon, polyester, akryl
          — marknadsandelar från naturull i klädindustrin. Fårull
          marginaliserades till en nischprodukt.
        </p>
        <p>
          Konsekvenserna var betydande: den energiintensiva tillverkningen
          av mineralull (smältning vid 1 400–1 500 °C) bidrog till stora
          koldioxidutsläpp, och de syntetiska fibrernas dominans ledde till
          en ullöverproduktion där miljontals ton spillull varje år saknade
          avsättning.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Fårullens comeback
        </h2>
        <p>
          Sedan 2010-talet har intresset för fårullsisolering ökat
          dramatiskt, drivet av flera samverkande faktorer. Klimatmedvetna
          byggherrar och arkitekter söker material med lågt koldioxidavtryck.
          EU:s taxonomiförordning premierar biobaserade och cirkulära
          material. Passivhusrörelsen har visat att byggnader behöver
          &ldquo;andas&rdquo; — och mineralullens oförmåga att hantera fukt har lett
          till problem med kondens och mögel i täta konstruktioner.
        </p>
        <p>
          Fårull svarar på alla dessa utmaningar. Den binder koldioxid
          (varje kilo ull har absorberat CO₂ under fårets betessäsong),
          den reglerar fukt utan att förlora isoleringsförmåga, och den
          kan vid livscykelns slut komposteras och återgå till jorden.
          Österrikiska tillverkare som Isolena har industrialiserat
          produktionen och levererar isoleringsskivor med lambda-värden
          som konkurrerar med mineralull.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
          Framtiden: cirkulär ekonomi och EU-taxonomi
        </h2>
        <p>
          EU:s gröna giv och taxonomiförordningen klassificerar
          byggisolering av naturliga fibrer som en hållbar ekonomisk
          aktivitet. Det innebär att investerare och byggherrar som vill
          uppfylla hållbarhetskraven får starkare incitament att välja
          biobaserade material som fårull. Samtidigt driver den cirkulära
          ekonomin en omvärdering av spillull — de 200 000 ton europeisk
          ull som årligen saknar avsättning ses inte längre som avfall,
          utan som en resurs.
        </p>
        <p>
          Ullens historia har kommit full cirkel: från bronsålderns
          livsuppehållande fiber, via industrialismens marginalisering,
          till en framtid där fårull kan bli byggsektorns mest hållbara
          isoleringsmaterial.{" "}
          <Link href="/hallbarhet" className="text-primary hover:text-primary/80 underline underline-offset-2">
            Läs mer om fårullsisoleringens hållbarhetsprofil →
          </Link>
        </p>
      </div>
    </div>
  );
}
