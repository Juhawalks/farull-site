import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hållbarhet. Fårull som klimatval.",
  description:
    "Fårullsisolering binder koldioxid, är biologiskt nedbrytbar och klassificeras som hållbar enligt EU-taxonomin. Läs om miljöprofilen.",
  openGraph: {
    title: "Hållbarhet. Fårull som klimatval.",
    description:
      "Fårullsisolering binder koldioxid, är biologiskt nedbrytbar och klassificeras som hållbar enligt EU-taxonomin. Läs om miljöprofilen.",
  },
  alternates: {
    canonical: "/hallbarhet",
  },
};

export default function Hallbarhet() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hållbarhet. Fårull som klimatval.",
            description:
              "Fårullsisolering binder koldioxid, är biologiskt nedbrytbar och klassificeras som hållbar enligt EU-taxonomin. Läs om miljöprofilen.",
            url: "https://farull.se/hallbarhet",
            publisher: {
              "@type": "Organization",
              name: "Farull.se",
              url: "https://farull.se",
            },
            author: {
              "@type": "Organization",
              name: "Byeco AB",
              url: "https://byeco.se",
            },
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Hållbarhet" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Hållbarhet
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Ett material som ger mer än det tar
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
        alt="Grön skog och natur"
        width={800}
        height={533}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Fårullsisolering binder mer koldioxid än den släpper ut under sin
            livscykel. Det är ovanligt bland byggmaterial – och en av de främsta <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">fördelarna med fårullsisolering</Link>. Här är varför
            det fungerar.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Koldioxid som binds, inte släpps ut
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Grönt beteslandskap med djur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Gräs binder CO₂, fåret gör det till ull – kolet stannar i byggnaden i 50+ år
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Får äter gräs. Gräset har bundit CO₂ genom fotosyntes. Kolet
                lagras i ullen som keratin. När ullen används som isolering
                stannar kolet i byggnaden i 50+ år. Jämför det med mineralull,
                som kräver smältning vid 1 400 °C och släpper ut stora mängder
                CO₂ vid tillverkning.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Låg energi vid tillverkning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Naturliga fibrer och hållbar process"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Tvätt och mekanisk kardning – ingen smältning, inga höga temperaturer
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullsisolering tillverkas genom tvätt och mekanisk kardning.
                Ingen smältning, inga höga temperaturer, inga komplexa kemiska
                processer. Energiåtgången är en bråkdel av mineralullens.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            200 000 ton spillull utan hem
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80"
                alt="Fårflock på betesmark"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Europeisk spillull som idag saknar köpare kan bli morgondagens byggisolering
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Varje år produceras cirka 200 000 ton ull i Europa som inte
                hittar en köpare. Den är för grov för textilmarknaden och
                har historiskt betraktats som avfall – en <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">spillull från raser</Link> som
                förtjänar bättre. Att använda den som
                byggisolering ger ullproducenter en ny intäktskälla och
                minskar avfallet.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Cirkulärt från start till slut
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80"
                alt="Grönt kretslopp i naturen"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                100&nbsp;% biologiskt nedbrytbar – vid rivning komposteras ullen och återgår till jorden
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullsisolering är 100&nbsp;% biologiskt nedbrytbar. Vid rivning
                kan den komposteras och återgå till jorden som näring. Ingen
                deponi, ingen förbränning. Materialet går tillbaka dit det kom
                ifrån.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            EU-taxonomin och framtiden
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Modern hållbar arkitektur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                EU:s taxonomiförordning ger starkare incitament att välja biobaserade material
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
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
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <aside className="max-w-3xl mx-auto px-6 py-12">
          <div className="border-l-2 border-accent p-6 bg-primary/5">
            <p className="font-body text-foreground/80 text-base leading-relaxed">
              Varje hus som isoleras med fårull ger spillull ett hem och binder koldioxid
              i konstruktionen. Byeco hjälper dig komma igång.{" "}
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 link-grow"
              >
                Besök Byeco.se →
              </a>
            </p>
          </div>
        </aside>
      </ScrollReveal>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/farraser" className="link-grow text-lg font-medium text-foreground">
                Svenska fårraser →
              </Link>
              <p className="text-foreground/60 mt-1">Raserna bakom ullen – och den outnyttjade resursen.</p>
            </li>
            <li>
              <Link href="/fordelar" className="link-grow text-lg font-medium text-foreground">
                Fördelar med fårullsisolering →
              </Link>
              <p className="text-foreground/60 mt-1">Från koldioxidbindning till luftrening i praktiken.</p>
            </li>
            <li>
              <Link href="/ullens-historia" className="link-grow text-lg font-medium text-foreground">
                Ullens historia →
              </Link>
              <p className="text-foreground/60 mt-1">Tusentals år av isolering – och en modern comeback.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
