import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Hållbarhet. Fårull som klimatval.",
  description:
    "Fårullsisolering binder koldioxid, är biologiskt nedbrytbar och klassificeras som hållbar enligt EU-taxonomin. Läs om miljöprofilen.",
};

export default function Hallbarhet() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Hållbarhet
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Ett material som ger mer än det tar
        </h1>
      </ScrollReveal>

      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
        alt="Grön skog och natur"
        loading="eager"
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Fårullsisolering binder mer koldioxid än den släpper ut under sin
            livscykel. Det är ovanligt bland byggmaterial. Här är varför
            det fungerar.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Koldioxid som binds, inte släpps ut
          </h2>
          <p>
            Får äter gräs. Gräset har bundit CO₂ genom fotosyntes. Kolet
            lagras i ullen som keratin. När ullen används som isolering
            stannar kolet i byggnaden i 50+ år. Jämför det med mineralull,
            som kräver smältning vid 1 400 °C och släpper ut stora mängder
            CO₂ vid tillverkning.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Låg energi vid tillverkning
          </h2>
          <p>
            Fårullsisolering tillverkas genom tvätt och mekanisk kardning.
            Ingen smältning, inga höga temperaturer, inga komplexa kemiska
            processer. Energiåtgången är en bråkdel av mineralullens.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            200 000 ton spillull utan hem
          </h2>
          <p>
            Varje år produceras cirka 200 000 ton ull i Europa som inte
            hittar en köpare. Den är för grov för textilmarknaden och
            har historiskt betraktats som avfall. Att använda den som
            byggisolering ger ullproducenter en ny intäktskälla och
            minskar avfallet.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Cirkulärt från start till slut
          </h2>
          <p>
            Fårullsisolering är 100 % biologiskt nedbrytbar. Vid rivning
            kan den komposteras och återgå till jorden som näring. Ingen
            deponi, ingen förbränning. Materialet går tillbaka dit det kom
            ifrån.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            EU-taxonomin och framtiden
          </h2>
          <p>
            EU:s taxonomiförordning klassificerar byggisolering av naturliga
            fibrer som en hållbar ekonomisk aktivitet. Det betyder att
            investerare och byggherrar som rapporterar enligt taxonomin
            får extra incitament att välja fårull och andra biobaserade
            material.
          </p>
          <p className="mt-4">
            <Link href="/ullens-historia" className="text-primary hover:text-primary/80 link-grow">
              Läs om ullens historia och utveckling
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
