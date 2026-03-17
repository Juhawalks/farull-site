import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad är fårull? Egenskaper, kemi och fiberstruktur | Farull.se",
  description:
    "Fårull är en keratinfiber med unika egenskaper: fukthantering, sorptionsvärme, UV-skydd och naturlig nedbrytning. Läs vår kompletta guide till ullens vetenskap.",
  openGraph: {
    title: "Vad är fårull? Egenskaper, kemi och fiberstruktur",
    description:
      "Fårull är en keratinfiber med unika egenskaper: fukthantering, sorptionsvärme, UV-skydd och naturlig nedbrytning. Komplett vetenskaplig guide.",
  },
  alternates: {
    canonical: "/farull",
  },
};

export default function FarullPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vad är fårull? Egenskaper, kemi och fiberstruktur",
            description:
              "Fårull är en keratinfiber med unika egenskaper: fukthantering, sorptionsvärme, UV-skydd och naturlig nedbrytning. Komplett vetenskaplig guide.",
            url: "https://farull.se/farull",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://farull.se/images/farull-5.jpg",
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
                name: "Vad är fårull gjord av?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårull består till 80–85 % av proteinet keratin och innehåller cirka 45 % kol, 28 % syre, 15 % kväve och 5 % svavel. Svavelatomerna bildar starka disulfidbindningar som ger fibern dess elasticitet och styrka.",
                },
              },
              {
                "@type": "Question",
                name: "Hur mycket fukt kan fårull absorbera?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårull kan ta upp 35–40 % av sin egen vikt i fukt utan att kännas våt. Vid absorption frigörs sorptionsvärme – cirka 1,1 kJ per gram fukt – vilket gör att ullen aktivt värmer när den tar upp fukt.",
                },
              },
              {
                "@type": "Question",
                name: "Är fårull biologiskt nedbrytbar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, fårull är 100 % biologiskt nedbrytbar. I fuktig jord bryts ullfibrer ned inom 3–6 månader och frigör kväve, svavel och andra näringsämnen. I en skyddad byggnadskonstruktion håller den däremot 50–75 år.",
                },
              },
              {
                "@type": "Question",
                name: "Har fårull antibakteriella egenskaper?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ullens hydrofoba ytskikt skapar en ogynnsam miljö för bakterietillväxt. Dessutom binder ullens aminosyragrupper luktmolekyler kemiskt, vilket förklarar varför ullplagg och fårullsisolering motverkar dålig lukt.",
                },
              },
              {
                "@type": "Question",
                name: "Vad är skillnaden mellan merinoull, crossbred och grovull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Merinoull (under 20 mikron) är extremt fin och används i kläder. Crossbred-ull (25–35 mikron) är starkare och används i mattor och möbeltyger. Grovull (över 35 mikron) från lantraser är tålig och lämpar sig bäst för byggisolering.",
                },
              },
            ],
          }),
        }}
      />
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
        src="/images/farull-5.jpg"
        alt="Närbild på ett får med tjock ullig päls"
        width={800}
        height={1200}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg text-foreground/90">
            <strong>Fårull är en naturlig keratinfiber</strong> som reglerar
            fukt, genererar värme, motstår eld, bryter ned luftföroreningar
            och återgår till jorden som näring. Inget syntetiskt material
            kommer i närheten av den kombinationen. På den här sidan förklarar
            vi vetenskapen bakom varje egenskap.
          </p>
          <p className="mt-4">
            Varje ullfibrer har tre lager: en yttre fjällstruktur (kutikula)
            som styr fukt och friktion, en inre cortex med spiralformade
            keratinceller som ger styrka och elasticitet, och i grövre ull en
            ihålig märg som förstärker isoleringsförmågan. Det är denna
            tredimensionella uppbyggnad som gör ull så svår att kopiera
            syntetiskt.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullens kemi – keratin och disulfidbindningar
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-1.jpg"
                alt="Ullfibrens anatomi – keratin, cortex, kutikula och protofibriller"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ullfibrens uppbyggnad: keratin, cortex och kutikula i tvärsnitt
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Keratin utgör 80–85&nbsp;% av ullfibrens totala proteininnehåll
                och innehåller alla nio essentiella aminosyror. Den viktigaste
                aminosyran är <strong>cystin</strong> (17,5&nbsp;%), vars
                svavelatomer bildar så kallade disulfidbindningar
                (Cys‑S‑S‑Cys) mellan keratinkedjorna. Dessa tvärbindningar
                fungerar som molekylära bryggor som håller fibrernas
                tredimensionella struktur på plats.
              </p>
              <p className="mt-4">
                Det är disulfidbindningarna som gör att ull kan töjas upp till
                30&nbsp;% av sin längd och ändå återgå till ursprungsformen.
                Samma bindningar ger fibern naturlig motståndskraft mot nötning.
                Jämfört med bomull, som saknar svavelbindningar, är ullfibern
                betydligt mer elastisk och formstabil.
              </p>
              <p className="mt-4">
                Övriga viktiga aminosyror inkluderar serin (11,7&nbsp;%),
                glutaminsyra (11,1&nbsp;%), treonin och arginin. Det är den
                komplexa blandningen av hydrofila (vattendragande) och hydrofoba
                (vattenavstötande) aminosyror som ger ullen dess paradoxala
                förmåga att hantera fukt utan att förlora isoleringsförmåga.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Ullens krusighet – nyckeln till isolering
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=800&q=80"
                alt="Närbild på krusiga ullfibrer"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
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
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Tovning av fårull – hur fibrer låser sig
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1582655299221-2b6bff351df0?w=800&q=80"
                alt="Tovad ull i närbild"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Tovning är en irreversibel process som förändrar ullens struktur
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                En av ullens mest fascinerande egenskaper är dess förmåga att tova.
                Ullens kutikula – det yttre fjällskiktet – har fjäll som
                överlappar som tegelpannor på ett tak, alla riktade från rot till
                spets. Det skapar vad forskare kallar <em>directional friction
                effect</em>: mer friktion i en riktning än den andra.
              </p>
              <p className="mt-4">
                När ull utsätts för fukt, värme och mekanisk rörelse svälljer
                fibrerna och fjällen reser sig. Fibrer som rör sig hakar i
                varandras fjäll som en spärrhake. Nya vätebindningar bildas
                mellan fibrerna och låser dem i ett kompakt nätverk. Processen
                är irreversibel – väl tovad ull kan inte tovas upp igen.
              </p>
              <p className="mt-4">
                Tovning har använts i tusentals år för att skapa filt, hattar
                och tätande material. I modern byggisolering är tovning däremot
                något man vill undvika, varför tillverkningsprocessen
                kontrolleras noggrant för att bevara fibrernas luftfickor.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullens fukthantering och sorptionsvärme
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
                alt="Dimma över grönt landskap – fukt i naturen"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ull hanterar fukt som inget annat fibermaterial
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårull kan ta upp 35–40&nbsp;% av sin egen vikt i fukt utan att kännas
                våt. Det beror på att fibrernas kärna är hydrofil och drar till sig
                vattenmolekyler, medan det yttre fjällskiktet är hydrofobt och
                stöter bort vätskedroppar. Vid normala inomhusförhållanden
                (20&nbsp;°C, 65&nbsp;% relativ fuktighet) har ull en
                standardåterfuktning på cirka 16&nbsp;%.
              </p>
              <p className="mt-4">
                När vattenmolekylerna absorberas av keratinet frigörs värme i en
                exoterm reaktion – den så kallade <strong>sorptionsvärmen</strong>.
                Forskning visar att ull frigör cirka <strong>1,1&nbsp;kJ värme per
                gram absorberad fukt</strong>. I praktiken innebär det att 1&nbsp;kg
                torr ull som placeras i fuktig luft avger ungefär lika mycket
                värme som en elvärmedyna som körs i 8&nbsp;timmar.
              </p>
              <p className="mt-4">
                Det är därför ullkläder värmer även när de är fuktiga, och
                därför fårullsisolering i väggar bidrar till en jämnare
                inomhustemperatur vid skiftande väderförhållanden. Inget
                syntetiskt material kan replikera denna effekt fullt ut.
                Mineralull tappar dessutom upp till 24 gånger i
                isoleringsförmåga vid fukt, medan fårull behåller sin.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Tre typer av fårull – merino, crossbred och grovull
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-2.jpg"
                alt="Ulltyper jämförda: Lambs wool, Merino, Cashmere, Angora och Alpaca"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Olika djur, olika ull – från lamm till merino och alpaca
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ullens egenskaper varierar kraftigt beroende på ras.{" "}
                <strong>Merinoull</strong> (under 20 mikron) är extremt fin och
                mjuk. Perfekt för kläder närmast huden.{" "}
                <strong>Crossbred-ull</strong> (25–35 mikron) är starkare och hamnar
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
                </Link>. Årlig ullproduktion per får varierar från 1–4&nbsp;kg
                för köttraser till 5–13&nbsp;kg för merinobesättningar.{" "}
                <Link href="/farraser" className="text-primary hover:text-primary/80 link-grow">
                  Svenska raser
                </Link>{" "}
                producerar i genomsnitt 2–4&nbsp;kg per djur och år.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Lanolin – fårullens naturliga skyddsvax
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-video.png"
                alt="Får som klias – lanolinets fettskikt känns tydligt i ullen"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
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
                hudvård, läkemedel och smörjmedel. Kemiskt är lanolin en komplex
                blandning av vaxestrar, fettsyror och alkoholer – inte ett
                vanligt fett, utan ett vax som smälter vid hudtemperatur. Det är
                anledningen till att lanolin är så effektivt i hudvårdsprodukter
                och varför det ger ullfibern ett naturligt vattenavvisande skikt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullens antibakteriella egenskaper
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1642752054841-23ca828680d1?w=800&q=80"
                alt="Närbild på vit fårull – naturligt motståndskraftig mot bakterier"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ullens ytstruktur skapar en ogynnsam miljö för bakterietillväxt
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                En vanlig missuppfattning är att ull aktivt dödar bakterier.
                Verkligheten är mer nyanserad: ullens hydrofoba ytskikt skapar
                en miljö där bakterier trivs dåligt. Istället för att föröka sig
                fritt fastnar bakterierna på fiberytan och lyfts bort från huden
                – ungefär som en mjuk skrubbing vid varje rörelse.
              </p>
              <p className="mt-4">
                Vad ull däremot gör exceptionellt bra är att{" "}
                <strong>binda luktmolekyler kemiskt</strong>. Forskning från
                AgResearch i Nya Zeeland visar att ullens reaktiva aminosyragrupper
                permanent binder de ämnen som orsakar lukt. Det förklarar varför
                ullplagg luktar mindre än syntetiska efter en dag – och varför{" "}
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  fårullsisolering renar inomhusluften
                </Link>{" "}
                från formaldehyd och flyktiga organiska föreningar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårullens naturliga UV-skydd
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1700838712765-fad192553296?w=800&q=80"
                alt="Fårflock som betar på grönt bete i solljus"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Keratins aromatiska aminosyror absorberar UV-strålning naturligt
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ullfibrer erbjuder ett naturligt skydd mot ultraviolett
                strålning. Beroende på täthet och färg uppnår ulltyger ett
                UV-skyddsfaktor (UPF) på <strong>20–50</strong>. Lätta
                merinostickat når UPF 25–30, medan tätare och mörkare tyger kan
                nå UPF 40–50+.
              </p>
              <p className="mt-4">
                UV-absorptionen beror på aromatiska aminosyrastrukturer i
                keratinproteinet, samt naturliga pigment i fibern. Mörkare ull
                ger betydligt högre skydd. Det är en av anledningarna till att
                fårets egen päls skyddar det effektivt mot intensiv sol, och
                varför ullplagg är populära inom friluftsliv – de ger ett
                inbyggt solskydd som syntetiska fibrer saknar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Fårull och biologisk nedbrytning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Jord och grönska – naturens kretslopp"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ull bryts ned till näring i jorden inom 3–6 månader
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Till skillnad från syntetiska material är fårull{" "}
                <strong>100&nbsp;% biologiskt nedbrytbar</strong>. I varm, fuktig
                jord bryts ullfibrer ned inom 3–6 månader. Tester visar att
                merinotyg kan vara 95&nbsp;% nedbrutet redan efter 15 veckor. Svampar
                och bakterier bryter ned keratinproteinet och frigör kväve,
                svavel och andra näringsämnen tillbaka till jorden.
              </p>
              <p className="mt-4">
                Det innebär att fårull vid livslängdens slut fungerar som
                gödning snarare än avfall. Jämför med mineralull (som inte
                bryts ned) eller EPS (som kan ta hundratals år att sönderdelas
                och frigör mikroplast under processen).
              </p>
              <p className="mt-4">
                Viktigt: biologisk nedbrytning kräver fukt och
                mikroorganismer. I en torr, skyddad byggnadskonstruktion bevaras
                ullen i decennier. Det är den kontrollerade miljön som gör
                att{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  fårullsisolering
                </Link>{" "}
                kan hålla i 50–75 år, samtidigt som den vid rivning kan
                komposteras istället för deponeras.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Från ullfibrer till byggisolering
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="/images/farull-video-2.png"
                alt="Fårklippning pågår – ullen tas tillvara för vidare bearbetning"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Fårklippning – första steget mot byggisolering
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
                Att isolera ett helt svenskt hus – väggar, tak och golv –
                kräver den årliga ullklippet från ungefär 150–300 får, beroende
                på husets storlek och isoleringstjocklek. Det sätter ullens
                potential i perspektiv: med cirka 600&nbsp;000 får i Sverige
                finns det tillräckligt med ull för att isolera tusentals hus
                varje år – ull som idag till stor del går till spillo.
              </p>
              <p className="mt-4">
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om fårullsisolering →
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
              Vanliga frågor om fårull
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är fårull gjord av?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårull består till 80–85&nbsp;% av proteinet keratin och innehåller
                  cirka 45&nbsp;% kol, 28&nbsp;% syre, 15&nbsp;% kväve och 5&nbsp;%
                  svavel. Svavelatomerna bildar starka disulfidbindningar (Cys‑S‑S‑Cys)
                  som ger fibern dess elasticitet och styrka. Ullen innehåller alla nio
                  essentiella aminosyror.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur mycket fukt kan fårull absorbera?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårull kan ta upp 35–40&nbsp;% av sin egen vikt i fukt utan att
                  kännas våt. Vid absorption frigörs sorptionsvärme – cirka 1,1&nbsp;kJ
                  per gram fukt – vilket gör att ullen aktivt värmer när den tar upp
                  fukt. Vid standardförhållanden (20&nbsp;°C, 65&nbsp;% RH) har ull
                  en återfuktning på 16&nbsp;%.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är fårull biologiskt nedbrytbar?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja, fårull är 100&nbsp;% biologiskt nedbrytbar. I fuktig jord bryts
                  ullfibrer ned inom 3–6 månader och frigör kväve, svavel och
                  näringsämnen. I en skyddad byggnadskonstruktion håller ullisoleringen
                  däremot 50–75 år tack vare den torra, kontrollerade miljön.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Har fårull antibakteriella egenskaper?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ullens hydrofoba ytskikt skapar en ogynnsam miljö för
                  bakterietillväxt. Dessutom binder ullens aminosyragrupper
                  luktmolekyler kemiskt och permanent, vilket förklarar varför
                  ullplagg luktar mindre än syntetiska och varför fårullsisolering
                  renar inomhusluften från formaldehyd.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är skillnaden mellan merinoull, crossbred och grovull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Merinoull (under 20 mikron) är extremt fin och mjuk – perfekt
                  för kläder närmast huden. Crossbred-ull (25–35 mikron) är
                  starkare och används i mattor och möbeltyger. Grovull (över
                  35 mikron) från lantraser som Gutefåret är tålig och lämpar
                  sig bäst för byggisolering. Ullmängden varierar från 1–4&nbsp;kg
                  (köttraser) till 5–13&nbsp;kg (merino) per får och år.
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
              <Link href="/farraser" className="link-grow text-lg font-medium text-foreground">
                Svenska fårraser →
              </Link>
              <p className="text-foreground/60 mt-1">Gutefår, gotlandsfår och fler – lär känna raserna bakom ullen.</p>
            </li>
            <li>
              <Link href="/fordelar" className="link-grow text-lg font-medium text-foreground">
                Fördelar med fårullsisolering →
              </Link>
              <p className="text-foreground/60 mt-1">Från luftrening till fukthantering – åtta skäl att välja ull.</p>
            </li>
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Så blir ullen till skivor och rullar för ditt hem.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
