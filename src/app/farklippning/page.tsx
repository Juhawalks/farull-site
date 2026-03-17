import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Fårklippning — från fårrygg till råvara | Farull.se",
  description:
    "Allt om fårklippning: varför får klipps, hur processen går till, ullens kvalitet och vad som händer med ullen efteråt. 2–4 kg ull per djur och år.",
  openGraph: {
    title: "Fårklippning — från fårrygg till råvara",
    description:
      "Allt om fårklippning: varför får klipps, hur processen går till, ullens kvalitet och vad som händer med ullen efteråt. 2–4 kg ull per djur och år.",
  },
  alternates: {
    canonical: "/farklippning",
  },
};

export default function FarklippningPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Fårklippning — från fårrygg till råvara",
            description:
              "Allt om fårklippning: varför får klipps, hur processen går till, ullens kvalitet och vad som händer med ullen efteråt. 2–4 kg ull per djur och år.",
            url: "https://farull.se/farklippning",
            datePublished: "2025-03-01",
            dateModified: "2026-03-18",
            image: "https://farull.se/images/farull-video-2.png",
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
                name: "Hur ofta klipps ett får?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "De flesta svenska får klipps 1–2 gånger per år — vanligtvis på våren innan sommarvärmen och ibland även på hösten. Exakt frekvens beror på ras och ulltyp. Merinofår med tät ull behöver klippas minst en gång per år, medan vissa pälsraser fäller naturligt.",
                },
              },
              {
                "@type": "Question",
                name: "Gör det ont för fåret att klippas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nej, fårklippning gör inte ont. Det kan jämföras med en hårklippning — klipparen skär ullen nära huden utan att skada den. Får kan bli stressade av hanteringen, men en erfaren klippare arbetar lugnt och effektivt så att proceduren tar 3–5 minuter per djur.",
                },
              },
              {
                "@type": "Question",
                name: "Hur mycket ull ger ett får per klippning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ett svenskt får ger i genomsnitt 2–4 kg ull per klippning. Mängden varierar med ras — Finullsfår ger 2–3 kg, Gotlandsfår 2–4 kg och Gutefår 1,5–2,5 kg. Merinobesättningar i andra länder kan ge upp till 5–13 kg per djur.",
                },
              },
              {
                "@type": "Question",
                name: "Vad händer om man inte klipper ett får?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ullen slutar aldrig växa hos de flesta tamfårsraser. Utan klippning kan fåret drabbas av överhettning, hudinfektioner, parasitangrepp och rörelseproblem. Det kända fallet Chris — ett australiskt merinofår som inte klipptes på fem år — hade ackumulerat över 40 kg ull och var i livshotande tillstånd.",
                },
              },
              {
                "@type": "Question",
                name: "Kan man klippa sina egna får?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, men det kräver utbildning och rätt utrustning. Det finns kurser i fårklippning via Gård & Djurhälsan och lokala fåravelsföreningar. Nybörjare bör börja med att assistera en erfaren klippare. Du behöver en klippmaskin, slipsten och kunskap om fårets anatomi för att undvika skärsår.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Fårklippning" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Hantverk
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Fårklippning — från fårrygg till råvara
        </h1>
      </ScrollReveal>

      <Image
        src="/images/farull-video-2.png"
        alt="Fårklippning pågår — klipparen arbetar med att ta av ullen i ett stycke"
        width={800}
        height={1000}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg text-foreground/90">
            <strong>Varje klippning ger 2–4&nbsp;kg ull per djur</strong> — en
            råvara som kopplar samman djurhållning med materialtillverkning.
            Fårklippning är det ögonblick då ull övergår från att vara en del av
            ett levande djur till att bli ett material vi kan använda. Processen
            är urgammal, men metoderna och kunskapen bakom den har förfinats
            under hundratals år.
          </p>
          <p className="mt-4">
            På den här sidan går vi igenom varför får klipps, hur det går till,
            vad som avgör ullens kvalitet och vad som händer med{" "}
            <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
              ullen
            </Link>{" "}
            efter att den lämnat fårets rygg.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Varför klipps får?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-4.jpg"
                alt="Halvklippt får under pågående klippning"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Klippning är nödvändigt för fårets hälsa och välmående
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Till skillnad från vildfår, vars päls regleras naturligt genom
                fällning, har tamfår avlats för att producera ull som{" "}
                <strong>aldrig slutar växa</strong>. Det innebär att fåret är
                beroende av människan för att bli av med sin ull — annars
                fortsätter den att ackumuleras.
              </p>
              <p className="mt-4">
                Utan regelbunden klippning riskerar fåret{" "}
                <strong>överhettning</strong> under varma månader,{" "}
                <strong>hudinfektioner</strong> orsakade av fukt som fastnar i
                den tjocka ullen, och <strong>parasitangrepp</strong> (särskilt
                fluglarver, så kallad myiasis). Fåret kan även få svårt att
                röra sig, se och äta.
              </p>
              <p className="mt-4">
                Det mest kända exemplet är <strong>Chris</strong> — ett
                australiskt merinofår som hittades i vildmarken utanför Canberra
                2015. Chris hade inte klippts på uppskattningsvis fem år och bar
                på över <strong>40&nbsp;kg ull</strong>. Han var uttorkad,
                undernärd och i livshotande tillstånd. Klippningen tog fem
                erfarna klippare och blev världsnyheter.
              </p>
              <p className="mt-4">
                De flesta svenska får klipps{" "}
                <strong>1–2 gånger per år</strong> — på våren innan
                sommarvärmen, och ibland även på hösten. Klippningen är alltså
                inte bara en skörd — den är en grundläggande djurhälsoåtgärd.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Hur går klippningen till?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-video.png"
                alt="Får som klias — ullen lossnar i hela sjok"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                En skicklig klippare tar av fällen i ett sammanhängande stycke
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårklippning utförs nästan alltid med{" "}
                <strong>elektrisk klippmaskin</strong>, även om handklippning med
                sax fortfarande förekommer inom hantverkssammanhang. Klipparen
                placerar fåret i specifika positioner — oftast sittande på
                bakdelen — som gör att djuret blir lugnt och stilla.
              </p>
              <p className="mt-4">
                Tekniken följer ett systematiskt mönster: klipparen börjar vid
                buken, fortsätter med benen, och arbetar sedan uppåt längs
                sidor och rygg. Målet är att ta av hela fällen i{" "}
                <strong>ett sammanhängande stycke</strong> — som en tröja som
                dras av. Det ger den renaste ullen och underlättar sorteringen
                efteråt.
              </p>
              <p className="mt-4">
                En erfaren klippare hanterar{" "}
                <strong>100–200 får per dag</strong> och lägger ner cirka 3–5
                minuter per djur. Världsrekordet i fårklippning ligger på under
                40 sekunder för ett enda djur. I Sverige finns det dock relativt
                få professionella klippare — en utmaning vi återkommer till
                längre ned.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Ullens kvalitet bestäms vid klippningen
          </h2>
          <div className="mt-6">
            <p>
              Hur klippningen utförs påverkar ullens kvalitet direkt. Ren, torr
              ull utan föroreningar — gödsel, halm, burrar — ger en{" "}
              <strong>betydligt bättre råvara</strong> än ull som blivit
              smutsig eller våt. Därför klipps får helst inomhus, efter att de
              stått torrt minst ett dygn.
            </p>
            <p className="mt-4">
              Efter klippningen sorteras ullen direkt på ett{" "}
              <strong>sorteringsbord</strong>. Bukullen (smutsigast) och
              benullen (kortast) separeras från rygg- och sidoull som har
              bäst kvalitet. Sorteringen sker efter{" "}
              <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
                fibertjocklek
              </Link>, färg, stapellängd och renhet.
            </p>
            <p className="mt-4">
              Sedan 2019 finns en <strong>Svensk Ullstandard</strong> som
              möjliggör klassificering och handel med svensk ull på industriell
              nivå. Standarden gör det enklare för köpare att specificera
              kvalitetskrav och för producenter att få rätt betalt för sin ull.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Vad händer med ullen efter klippning?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-5.jpg"
                alt="Närbild på ett fåransikte med tjock ull"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Från råull till färdig produkt — en process i flera steg
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Råullen genomgår flera steg innan den blir en användbar råvara.
                Först <strong>sorteras</strong> den efter kvalitet, sedan{" "}
                <strong>tvättas</strong> den för att avlägsna lanolin, smuts och
                fett (råull innehåller 30–70&nbsp;% föroreningar). Därefter{" "}
                <strong>kardas</strong> fibrerna — de kammas ut och ordnas i
                samma riktning — innan de kan spinnas, filtas eller bearbetas
                vidare.
              </p>
              <p className="mt-4">
                Historiskt har uppskattningsvis{" "}
                <strong>80&nbsp;% av svensk ull gått till spillo</strong>.
                Anledningen är enkel: svenska får hålls primärt för kött, och
                ullens fibertjocklek gör den svår att sälja på
                textilmarknaden som domineras av finare merinoull.
              </p>
              <p className="mt-4">
                Men nu växer nya användningsområden:{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  byggisolering
                </Link>, trädgårdspellets, skyddshandskar och oljeabsorbenter.
                Ull som tidigare var en kostnad för fåruppfödaren kan bli en
                intäktskälla — om infrastrukturen för insamling och
                bearbetning fortsätter att utvecklas.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Klippning i Sverige idag
          </h2>
          <div className="mt-6">
            <p>
              Sverige har en <strong>brist på professionella fårklippare</strong>.
              Många gårdar är beroende av klippare som importeras från{" "}
              <strong>Nya Zeeland och Australien</strong> — länder med stark
              klippartradition — under den svenska klippsäsongen vår och höst.
              Det är en situation som gör fåruppfödare sårbara och ökar
              kostnaderna.
            </p>
            <p className="mt-4">
              Organisationen <strong>Arena Svensk Ull</strong> arbetar aktivt
              för att stärka svensk ullhantering genom att koppla samman
              producenter, klippare och förädlare. De arrangerar
              klipparutbildningar och arbetar för att skapa en fungerande
              inhemsk marknad för svensk ull.
            </p>
            <p className="mt-4">
              <strong>Klippsäsongen</strong> följer årstiderna: vårklippningen
              sker i april–maj innan sommarvärmen, och höstklippningen i
              september–oktober. Tidpunkten är viktig — klipps fåren för sent
              på våren riskerar de att brännas av solen, och klipps de för
              tidigt på hösten hinner inte ullen växa ut tillräckligt innan
              vintern.
            </p>
            <p className="mt-4">
              Det finns också ett växande intresse för{" "}
              <strong>klippning som hantverk</strong>. Kurser i fårklippning
              erbjuds av bland andra Gård & Djurhälsan och lockar allt fler
              småskaliga fårägare som vill kunna klippa sina egna djur. Det är
              ett sätt att minska beroendet av externa klippare och stärka
              kopplingen mellan{" "}
              <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">
                djurhållning
              </Link>{" "}
              och ullproduktion.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om fårklippning
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur ofta klipps ett får?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  De flesta svenska får klipps 1–2 gånger per år — vanligtvis på
                  våren innan sommarvärmen och ibland även på hösten. Exakt
                  frekvens beror på ras och ulltyp. Merinofår med tät ull behöver
                  klippas minst en gång per år, medan vissa pälsraser fäller
                  naturligt.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Gör det ont för fåret att klippas?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Nej, fårklippning gör inte ont. Det kan jämföras med en
                  hårklippning — klipparen skär ullen nära huden utan att skada
                  den. Får kan bli stressade av hanteringen, men en erfaren
                  klippare arbetar lugnt och effektivt så att proceduren tar
                  3–5 minuter per djur.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket ull ger ett får per klippning?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ett svenskt får ger i genomsnitt 2–4&nbsp;kg ull per klippning.
                  Mängden varierar med ras — Finullsfår ger 2–3&nbsp;kg,
                  Gotlandsfår 2–4&nbsp;kg och Gutefår 1,5–2,5&nbsp;kg.
                  Merinobesättningar i andra länder kan ge upp till 5–13&nbsp;kg
                  per djur.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad händer om man inte klipper ett får?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ullen slutar aldrig växa hos de flesta tamfårsraser. Utan
                  klippning kan fåret drabbas av överhettning, hudinfektioner,
                  parasitangrepp och rörelseproblem. Det kända fallet Chris — ett
                  australiskt merinofår — hade ackumulerat över 40&nbsp;kg ull
                  efter fem år utan klippning.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Kan man klippa sina egna får?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja, men det kräver utbildning och rätt utrustning. Det finns
                  kurser i fårklippning via Gård & Djurhälsan och lokala
                  fåravelsföreningar. Nybörjare bör börja med att assistera en
                  erfaren klippare. Du behöver en klippmaskin, slipsten och
                  kunskap om fårets anatomi för att undvika skärsår.
                </p>
              </details>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/farull" className="link-grow text-lg font-medium text-foreground">
                Vad är fårull? →
              </Link>
              <p className="text-foreground/60 mt-1">Krusighet, keratin och lanolin — fibern som gör allt möjligt.</p>
            </li>
            <li>
              <Link href="/farraser" className="link-grow text-lg font-medium text-foreground">
                Svenska fårraser →
              </Link>
              <p className="text-foreground/60 mt-1">Gutefår, Gotlandsfår, Finullsfår — raserna och deras ull.</p>
            </li>
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Från klippt ull till färdig isolering i din vägg.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
