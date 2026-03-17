import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad är fårull? Vetenskap, egenskaper och fiberstruktur",
  description:
    "Komplett guide till fårull: keratins kemi, krusighet, fukthantering, sorptionsvärme, tovning, antibakteriella egenskaper, UV-skydd och biologisk nedbrytning. Sveriges mest utförliga resurs om ullfibrer.",
  openGraph: {
    title: "Vad är fårull? Vetenskap, egenskaper och fiberstruktur",
    description:
      "Komplett guide till fårull: keratins kemi, krusighet, fukthantering, sorptionsvärme, tovning, antibakteriella egenskaper, UV-skydd och biologisk nedbrytning.",
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
            headline: "Vad är fårull? Vetenskap, egenskaper och fiberstruktur",
            description:
              "Komplett guide till fårull: keratins kemi, krusighet, fukthantering, sorptionsvärme, tovning, antibakteriella egenskaper, UV-skydd och biologisk nedbrytning.",
            url: "https://farull.se/farull",
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
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
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
          <p className="mt-4">
            Kemiskt består ullfibern av cirka 45&nbsp;% kol, 28&nbsp;% syre,
            15&nbsp;% kväve, 7&nbsp;% väte och 5&nbsp;% svavel. Det är
            svavelinnehållet som gör ullen unik bland naturfibrer — det bildar
            starka disulfidbindningar mellan keratinkedjorna som ger fibern
            dess elasticitet, styrka och förmåga att återhämta sig efter
            böjning och kompression.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Keratins kemi
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
                alt="Vetenskaplig närbild – molekylstruktur"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Keratins molekylära uppbyggnad ger ullen dess unika egenskaper
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
            Krusigheten gör jobbet
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
            Tovning — fibrer som låser sig
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
                Ullens kutikula — det yttre fjällskiktet — har fjäll som
                överlappar som tegelpannor på ett tak, alla riktade från rot till
                spets. Det skapar vad forskare kallar <em>directional friction
                effect</em>: mer friktion i en riktning än den andra.
              </p>
              <p className="mt-4">
                När ull utsätts för fukt, värme och mekanisk rörelse svälljer
                fibrerna och fjällen reser sig. Fibrer som rör sig hakar i
                varandras fjäll som en spärrhake. Nya vätebindningar bildas
                mellan fibrerna och låser dem i ett kompakt nätverk. Processen
                är irreversibel — väl tovad ull kan inte tovas upp igen.
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
            Fukt och värme på samma gång
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
                exoterm reaktion — den så kallade <strong>sorptionsvärmen</strong>.
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
            Tre sorters ull
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Olika garnnystan i naturliga färger"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Merinoull, crossbred och grovull – tre helt olika karaktärer
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
            Lanolin skyddar fibern
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80"
                alt="Får i regn – lanolinets naturliga skydd"
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
                blandning av vaxestrar, fettsyror och alkoholer — inte ett
                vanligt fett, utan ett vax som smälter vid hudtemperatur. Det är
                anledningen till att lanolin är så effektivt i hudvårdsprodukter
                och varför det ger ullfibern ett naturligt vattenavvisande skikt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Antibakteriella egenskaper
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
                alt="Ren, naturlig miljö – symboliserar ullens hygieniska egenskaper"
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
                Forskningen visar en mer nyanserad bild: ullens hydrofoba
                ytskikt skapar en ogynnsam miljö för bakterietillväxt. Bakterier
                fastnar på fiberytan genom en biofilmmekanism och lyfts bort
                från huden istället för att föröka sig.
              </p>
              <p className="mt-4">
                Vad ull däremot gör exceptionellt bra är att{" "}
                <strong>binda luktmolekyler kemiskt</strong>. Forskning från
                AgResearch i Nya Zeeland visar att ullens reaktiva aminosyragrupper
                permanent binder de ämnen som orsakar lukt. Det förklarar varför
                ullplagg luktar mindre än syntetiska efter en dag — och varför{" "}
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
            Naturligt UV-skydd
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Solljus över betesmark"
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
                varför ullplagg är populära inom friluftsliv — de ger ett
                inbyggt solskydd som syntetiska fibrer saknar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Biologisk nedbrytning
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
            Från fiber till hus
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Byggarbetsplats med träregelverk"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
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
                Att isolera ett helt svenskt hus — väggar, tak och golv —
                kräver den årliga ullklippet från ungefär 150–300 får, beroende
                på husets storlek och isoleringstjocklek. Det sätter ullens
                potential i perspektiv: med cirka 600&nbsp;000 får i Sverige
                finns det tillräckligt med ull för att isolera tusentals hus
                varje år — ull som idag till stor del går till spillo.
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
