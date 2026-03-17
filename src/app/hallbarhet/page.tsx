import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hållbarhet och fårullsisolering — koldioxid, LCA, metan och cirkulär ekonomi | Farull.se",
  description:
    "Fårullsisoleringens klimatprofil: 1 kg ull lagrar 1,8 kg CO₂, embodied energy 6 MJ/kg, 100 % biologiskt nedbrytbar. Metan-frågan, vattenavtryck och EU-taxonomi.",
  openGraph: {
    title: "Hållbarhet och fårullsisolering — koldioxid, LCA, metan och cirkulär ekonomi",
    description:
      "Fårullsisoleringens klimatprofil: 1 kg ull lagrar 1,8 kg CO₂, embodied energy 6 MJ/kg, 100 % biologiskt nedbrytbar. Metan-frågan och EU-taxonomi.",
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
            headline: "Hållbarhet och fårullsisolering — koldioxid, LCA, metan och cirkulär ekonomi",
            description:
              "Fårullsisoleringens klimatprofil: 1 kg ull lagrar 1,8 kg CO₂, embodied energy 6 MJ/kg, 100 % biologiskt nedbrytbar. Metan-frågan, vattenavtryck och EU-taxonomi.",
            url: "https://farull.se/hallbarhet",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Hur mycket koldioxid binder fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "50 % av ren ulls vikt är biogent kol. 1 kg ull lagrar cirka 1,8 kg CO₂-ekvivalenter. Kolet hålls bundet i byggnaden under isoleringens livslängd (75 år). Netto lagrar fårullsisolering mer koldioxid än den släpper ut — ett negativt klimatavtryck.",
                },
              },
              {
                "@type": "Question",
                name: "Hur mycket energi krävs för att tillverka fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullsisolering kräver cirka 6 MJ/kg (15 kWh/m³) — mekanisk tvätt och kardning utan höga temperaturer. Glasull kräver 26 MJ/kg och polyuretanskum 101 MJ/kg, båda med smältning vid 1 400+ °C.",
                },
              },
              {
                "@type": "Question",
                name: "Släpper inte får ut metan som är dåligt för klimatet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, får producerar metan (ca 30 liter/dag). Men ullisoleringens ull kommer från får som redan hålls för köttproduktion — ullen är en biprodukt. Metanutsläppen ska fördelas på alla produkter (kött, mjölk, ull, lanolin). En IWTO-finansierad LCA visar att ansvarsfullt producerad ull närmar sig koldioxidneutralitet när markens kolbindning räknas in.",
                },
              },
              {
                "@type": "Question",
                name: "Är fårullsisolering biologiskt nedbrytbar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, fårull är 100 % biologiskt nedbrytbar. I fuktig jord bryts ullfibrer ned inom 3–6 månader och frigör kväve, svavel och näringsämnen. Vid rivning kan isoleringen komposteras istället för att deponeras — till skillnad från mineralull och EPS.",
                },
              },
              {
                "@type": "Question",
                name: "Vad är vattenavtrycket för fårullsisolering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Det totala vattenavtrycket för ull är cirka 170 000 liter per kg ren ull. Men 87 % är grönt vatten (regnvatten på betesmark) som inte förbrukas. Det blå vattenavtrycket (bevattning, processvatten) är lågt eftersom får främst betar på naturligt bevattnade marker.",
                },
              },
            ],
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
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg text-foreground/90">
            <strong>Fårullsisolering lagrar mer koldioxid än den släpper
            ut</strong> under sin livscykel — ett negativt klimatavtryck
            som få byggmaterial kan matcha. Men hållbarhet handlar om mer
            än koldioxid. Här går vi igenom hela bilden: kolbindning,
            energi, metan, vattenavtryck, biologisk nedbrytning och
            EU-regelverk.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullens kolbindning — negativt klimatavtryck
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1763394556187-efd6ec4e3961?w=800&q=80"
                alt="Grönt beteslandskap med djur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Gräs binder CO₂, fåret gör det till ull — kolet stannar i byggnaden i 75 år
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Får äter gräs. Gräset har bundit CO₂ genom fotosyntes. Kolet
                omvandlas till{" "}
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                  keratin
                </Link>{" "}
                i ullfibern. <strong>50&nbsp;% av ren ulls vikt är biogent
                kol</strong> — kol som hämtats från nuvarande atmosfäriskt
                CO₂, inte från fossila källor.
              </p>
              <p className="mt-4">
                Konkret innebär det att <strong>1&nbsp;kg ull lagrar cirka
                1,8&nbsp;kg CO₂‑ekvivalenter</strong>. Det kolet hålls bundet
                i byggnaden under isoleringens hela{" "}
                <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">
                  livslängd på 75 år
                </Link>. Jämför med mineralull som kräver smältning vid
                1&nbsp;400&nbsp;°C och enbart genererar utsläpp.
              </p>
              <p className="mt-4">
                Netto lagrar fårullsisolering mer koldioxid än den släpper
                ut under hela sin livscykel — från fårbete till kompostering.
                Det är vad som kallas ett <strong>negativt
                klimatavtryck</strong>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Embodied energy — energi vid tillverkning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Naturliga fibrer och hållbar process"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Mekanisk process utan smältning — en bråkdel av mineralullens energibehov
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullsisolering tillverkas genom tvätt, mekanisk kardning
                och pressning. Ingen smältning, inga höga temperaturer,
                inga komplexa kemiska processer. Energiåtgången är{" "}
                <strong>cirka 6&nbsp;MJ per kilo</strong>{" "}
                (15&nbsp;kWh/m³).
              </p>
              <p className="mt-4">
                Jämför med andra isoleringsmaterial:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Fårull:</strong> ~6&nbsp;MJ/kg
                </li>
                <li>
                  <strong>Glasull:</strong> ~26&nbsp;MJ/kg (smältning vid
                  1&nbsp;400&nbsp;°C)
                </li>
                <li>
                  <strong>EPS (cellplast):</strong> ~44–78&nbsp;MJ/FU
                  (fossilbaserad)
                </li>
                <li>
                  <strong>Polyuretanskum:</strong> ~101&nbsp;MJ/kg
                </li>
              </ul>
              <p className="mt-4">
                Fårull kräver alltså mindre än en fjärdedel av den energi
                som glasull behöver — och en femtondel av
                polyuretanskummet.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Metan-frågan — den vanligaste invändningen
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80"
                alt="Fårflock på betesmark"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Metan är en giltig invändning — men helhetsbilden är mer nyanserad
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                En vanlig och berättigad invändning: får är idisslare och
                producerar metan — en potent växthusgas. Ett får avger
                uppskattningsvis <strong>30 liter metan per dag</strong>.
                Det är ett faktum vi inte vill undvika.
              </p>
              <p className="mt-4">
                Men tre viktiga nyanser behövs:
              </p>
              <p className="mt-4">
                <strong>1. Ullen är en biprodukt.</strong> Fåren som
                levererar ull till isolering hålls primärt för
                köttproduktion. Metanutsläppen ska fördelas på{" "}
                <em>alla</em> produkter — kött, mjölk, ull och lanolin.
                Att använda en biprodukt som annars slängs lägger inte
                till nya utsläpp.
              </p>
              <p className="mt-4">
                <strong>2. Betesmark binder kol.</strong> Forskning visar
                att adaptivt bete (rotationsbete med viloperioder) ökar
                markens organiska kol med <strong>8–30&nbsp;%</strong>.
                Välskött betesmark fungerar som kolsänka.
              </p>
              <p className="mt-4">
                <strong>3. Livscykelanalyser nyanserar.</strong> En
                IWTO-finansierad LCA (2020) visar att ansvarsfullt
                producerad ull <strong>närmar sig koldioxidneutralitet
                </strong> när markens kolbindning räknas in i
                livscykelkalkylen.
              </p>
              <p className="mt-4">
                Metan är inte försumbart. Men att omvandla en existerande
                biprodukt till isolering istället för att tillverka ny
                mineralull från sten och energi är ett nettomässigt bättre
                val.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Vattenavtryck — en nyanserad bild
          </h2>
          <div className="mt-6">
            <p>
              Det totala vattenavtrycket för ull uppges ofta till{" "}
              <strong>170&nbsp;000 liter per kilo ren ull</strong>. Siffran
              ser dramatisk ut, men den kräver kontext.
            </p>
            <p className="mt-4">
              Av det totala vattenavtrycket är{" "}
              <strong>87&nbsp;% grönt vatten</strong> — regnvatten som
              faller på betesmark och som skulle falla oavsett om det finns
              får eller inte. Ytterligare 12&nbsp;% kommer från
              foderproduktion. Bara <strong>cirka 1&nbsp;%</strong> är
              faktisk bevattning och processvatten på gården.
            </p>
            <p className="mt-4">
              Ullbearbetningen (tvätt, färgning) kräver 200–300&nbsp;kg
              vatten per kilo färdigt tyg. Men för isoleringsull är
              processen enklare — ullen tvättas och kardas, utan
              färgningssteg.
            </p>
            <p className="mt-4">
              Det blå vattenavtrycket (den mängd som faktiskt förbrukas) är
              alltså lågt för fårull. Får betar primärt på naturligt
              bevattnade marker. Jämfört med bomull, som kräver intensiv
              bevattning i torra klimat, är ullens vattenanvändning mer
              hållbar.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            200&nbsp;000 ton europeisk spillull — från avfall till resurs
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80"
                alt="Grönt kretslopp i naturen"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Spillull som idag saknar köpare kan bli morgondagens byggisolering
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Varje år produceras cirka{" "}
                <strong>200&nbsp;000 ton ull i Europa</strong> som inte
                hittar en köpare. Den är för grov för textilmarknaden
                och har historiskt betraktats som avfall. I Sverige slängs
                eller bränns uppskattningsvis{" "}
                <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">
                  80&nbsp;% av den producerade ullen
                </Link>.
              </p>
              <p className="mt-4">
                Att använda denna spillull som byggisolering är
                hållbarhet i sin renaste form: en existerande biprodukt
                utan marknad omvandlas till ett värdefullt
                byggnadsmaterial. Ingen ny råvara behöver utvinnas. Inga
                nya får behöver födas upp. Ullproducenter får en ny
                intäktskälla och avfallsmängden minskar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Cirkulär livscykel — biologiskt nedbrytbar isolering
          </h2>
          <div className="mt-6">
            <p>
              Fårullsisolering är{" "}
              <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                100&nbsp;% biologiskt nedbrytbar
              </Link>. I fuktig jord bryts ullfibrer ned inom{" "}
              <strong>3–6 månader</strong> och frigör kväve, svavel och
              andra näringsämnen tillbaka till jorden. Tester visar att
              merinotyg kan vara 95&nbsp;% nedbrutet redan efter
              15&nbsp;veckor.
            </p>
            <p className="mt-4">
              Vid rivning kan fårullsisoleringen komposteras och återgå
              till jorden som näring. Ingen deponi, ingen förbränning,
              inga mikroplaster. Jämför med mineralull (bryts inte ned)
              och EPS (hundratals år, frigör mikroplast). Hela livscykeln
              är cirkulär:
            </p>
            <p className="mt-4 font-medium text-foreground/90">
              Gräs → Får → Ull → Isolering (75 år) → Kompostering → Jord →
              Gräs
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            EU-taxonomin, klimatdeklaration och framtiden
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Modern hållbar arkitektur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                EU:s regelverk driver efterfrågan på biobaserade byggmaterial
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                <strong>EU:s taxonomiförordning</strong> klassificerar
                byggisolering av naturliga fibrer som en hållbar ekonomisk
                aktivitet. Det ger investerare och byggherrar som
                rapporterar enligt taxonomin starkare incitament att välja
                biobaserade material.
              </p>
              <p className="mt-4">
                I Sverige införs krav på <strong>klimatdeklaration av
                byggnader</strong> stegvis. Byggherrar måste redovisa
                byggnadens klimatpåverkan under hela livscykeln.
                Fårullsisoleringens negativa klimatavtryck blir en direkt
                fördel i dessa beräkningar — varje kilo ull förbättrar
                byggnadens totala klimatprofil.
              </p>
              <p className="mt-4">
                <strong>EPD (Environmental Product Declaration)</strong>{" "}
                krävs för beräkning av poäng inom BREEAM och LEED. Flera
                ullisoleringtstillverkare har publicerade EPD:er som
                dokumenterar det negativa klimatavtrycket.
              </p>
              <p className="mt-4">
                <Link href="/ullens-historia" className="text-primary hover:text-primary/80 link-grow">
                  Läs om ullens historia och utveckling →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om fårull och hållbarhet
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket koldioxid binder fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  50&nbsp;% av ren ulls vikt är biogent kol. 1&nbsp;kg ull
                  lagrar cirka 1,8&nbsp;kg CO₂‑ekvivalenter. Kolet hålls
                  bundet i byggnaden under isoleringens livslängd (75 år).
                  Netto har fårullsisolering ett negativt klimatavtryck.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket energi krävs för att tillverka fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Cirka 6&nbsp;MJ/kg — mekanisk tvätt och kardning utan
                  höga temperaturer. Glasull kräver 26&nbsp;MJ/kg och
                  polyuretanskum 101&nbsp;MJ/kg.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Släpper inte får ut metan som är dåligt för klimatet?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja, men ullisoleringens ull är en biprodukt från
                  köttproduktion — ull som annars slängs. Metanutsläppen
                  fördelas på alla produkter. Forskning visar dessutom
                  att adaptivt bete ökar markens kolbindning med
                  8–30&nbsp;%, och en IWTO-LCA visar att ansvarsfullt
                  producerad ull närmar sig koldioxidneutralitet.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är fårullsisolering biologiskt nedbrytbar?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja, 100&nbsp;%. I fuktig jord bryts ullfibrer ned inom
                  3–6 månader. Vid rivning kan isoleringen komposteras
                  istället för att deponeras.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är vattenavtrycket för fårullsisolering?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Totalt ~170&nbsp;000 liter/kg, men 87&nbsp;% är
                  regnvatten som faller oavsett. Det blå vattenavtrycket
                  (faktisk förbrukning) är lågt — får betar på naturligt
                  bevattnade marker.
                </p>
              </details>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
