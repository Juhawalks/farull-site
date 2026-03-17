import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad kan fårull användas till? 5 områden — från kläder till isolering | Farull.se",
  description:
    "Fårull används inom textil, inredning, trädgård, akustik och byggisolering. 10 000 års användning — ingen syntetisk fiber matchar ullens kombination av egenskaper.",
  openGraph: {
    title: "Vad kan fårull användas till? 5 områden — från kläder till isolering",
    description:
      "Fårull används inom textil, inredning, trädgård, akustik och byggisolering. 10 000 års användning — ingen syntetisk fiber matchar ullens kombination av egenskaper.",
  },
  alternates: {
    canonical: "/anvandningsomraden",
  },
};

export default function AnvandningsomradenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vad kan fårull användas till? 5 områden — från kläder till isolering",
            description:
              "Fårull används inom textil, inredning, trädgård, akustik och byggisolering. 10 000 års användning — ingen syntetisk fiber matchar ullens kombination av egenskaper.",
            url: "https://farull.se/anvandningsomraden",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
            image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
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
                name: "Vad kan fårull användas till?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårull används inom fem huvudområden: kläder och textil (baslager, kostymer, kappor), möbler och inredning (mattor, klädsel, akustikpaneler), trädgård och odling (marktäckning, gödning), akustik och ljuddämpning (kontor, skolor, konsertsalar) samt byggisolering (väggar, tak, golv). Ull har använts i minst 10 000 år och ingen syntetisk fiber har lyckats kopiera dess kombination av egenskaper.",
                },
              },
              {
                "@type": "Question",
                name: "Varför är fårull bättre än syntetiska material?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårull kombinerar egenskaper som inget syntetiskt material matchar: temperaturreglering (värmer i kyla, kyler i värme), fuktabsorption (upp till 40 % av sin vikt utan att kännas blöt), naturlig brandresistens (antänds vid 560–600 °C), antimikrobiella egenskaper (keratinet hämmar bakterietillväxt), UV-skydd (UPF 30+) och 100 % biologisk nedbrytbarhet. Syntetiska fibrer som polyester baseras på fossil olja och tar hundratals år att brytas ner.",
                },
              },
              {
                "@type": "Question",
                name: "Kan fårull användas i trädgården?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Ullpellets och ullmattor används som marktäckning i trädgårdar och odlingar. Ullen håller fukten i jorden, förhindrar ogräs och bryter långsamt ner till näring. Keratin innehåller 16 % kväve, samt svavel, fosfor och kalium — mineraler som gynnar växtligheten. Ull absorberar också upp till 30 % mer vatten än sin vikt, vilket minskar behovet av bevattning.",
                },
              },
              {
                "@type": "Question",
                name: "Hur fungerar fårull som ljuddämpning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fårullens krusiga fibrer fångar ljudvågor i ett brett frekvensomfång (250–4000 Hz) och omvandlar rörelseenergin till en liten mängd värme. Ullbaserade akustikpaneler uppnår ljudabsorptionsklass A och används i kontor, skolor, konsertsalar och hemmastudior. Till skillnad från syntetiska absorbenter är ullpaneler helt biologiskt nedbrytbara.",
                },
              },
              {
                "@type": "Question",
                name: "Vad är det mest lovande användningsområdet för fårull?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Byggisolering. Fårullsisolering samlar alla ullens unika egenskaper i en produkt: termisk isolering (λ 0,033–0,040 W/m·K), fuktreglering (40 % absorption), luftrening (binder formaldehyd), brandskydd (B-s1,d0) och ljuddämpning (klass A). Dessutom binder den mer koldioxid än den släpper ut vid tillverkning. Cirka 80 % av svensk fårull används idag inte — byggisolering kan ge denna resurs nytt liv.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Användningsområden" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Användning
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vad kan fårull användas till?
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
        alt="Ullgarn och textilarbete — fårull har använts av människan i över 10 000 år"
        width={800}
        height={533}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg leading-relaxed">
            <strong>Fårull är en av mänsklighetens äldsta och mest mångsidiga råvaror</strong> —
            använd i minst 10&nbsp;000 år, från de första filtade plaggen till
            moderna byggisoleringar. Trots alla syntetiska alternativ som dök upp
            under 1900-talet har ingen konstgjord fiber lyckats kopiera{" "}
            <Link href="/farull" className="text-primary hover:text-primary/80 link-grow">
              ullens unika kombination av egenskaper
            </Link>:
            temperaturreglering, fukthantering, naturlig brandresistens,
            antimikrobiell verkan och biologisk nedbrytbarhet. Allt i samma fiber.
          </p>
          <p className="mt-4">
            Idag används fårull inom fem huvudområden — från det mest traditionella
            till det mest innovativa.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Kläder och textil — ullens mest kända användning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
                alt="Ullkläder — merinoull i baslager och grövre ull i kappor"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Merinoull i baslager, grövre ull i kappor och kostymer
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Det mest traditionella användningsområdet — och fortfarande
                det största. Merinoull (fiberdiameter 15–24&nbsp;µm) används i
                baslager och sportplagg tack vare sin mjukhet och förmåga att
                reglera kroppstemperatur. Grövre ullsorter (25–40&nbsp;µm)
                hamnar i kostymer, kappor, filtar och mattor.
              </p>
              <p className="mt-4">
                Det som gör ull unik som textilfiber är kombinationen av
                egenskaper: den värmer i kyla och kyler i värme, absorberar
                upp till <strong>30&nbsp;% fukt utan att kännas blöt</strong>,
                skyddar mot UV-strålning (UPF&nbsp;30+) och motstår lukt
                naturligt. Keratinet i ullen har antimikrobiella egenskaper
                som hämmar bakterietillväxt — därför kan ullplagg användas
                betydligt längre mellan tvättar.
              </p>
              <p className="mt-4">
                Det har gjort ull populärt inom hållbart mode. Färre tvättar
                betyder lägre energiförbrukning, och när plagget är utslitet
                är det <strong>100&nbsp;% biologiskt nedbrytbart</strong> —
                till skillnad från polyester som tar hundratals år att brytas
                ner och släpper mikroplast vid varje tvätt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Möbler och inredning — nordisk tradition med moderna tillämpningar
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Skandinavisk inredning med ulldetaljer — mattor, klädsel och akustikpaneler"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ullmattor, filtar och akustikpaneler — en nordisk tradition som lever vidare
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                I Skandinavien har ull i inredningen en{" "}
                <Link href="/ullens-historia" className="text-primary hover:text-primary/80 link-grow">
                  tusenårig tradition
                </Link>. De tjockluggiga ryorna fungerade som både dekoration och
                isolering i kyliga timmerhus. Idag ser vi en renässans: ullfiltar,
                kuddar och möbelklädsel väljs för sin hållbarhet och taktila
                kvalitet.
              </p>
              <p className="mt-4">
                Ull som inredningsmaterial har flera praktiska fördelar:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li><strong>Brandsäkerhet</strong> — kolnar istället för att smälta och brinna, säkert i offentliga miljöer</li>
                <li><strong>Slitstyrka</strong> — ullfiber kan böjas 20&nbsp;000 gånger utan att brytas (bomull: 3&nbsp;000)</li>
                <li><strong>Smuts- och fläckavvisande</strong> — lanolinrester gör ytan naturligt vattenavvisande</li>
                <li><strong>Luftrening</strong> — ullmattor och textilier binder formaldehyd och VOC ur inomhusluften</li>
              </ul>
              <p className="mt-4">
                Akustikpaneler i pressfilt av ull blir allt vanligare i kontor och
                skolor — effektiv ljuddämpning som dessutom renar luften.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Trädgård och odling — ullens mest förbisedda potential
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Trädgårdsodling med ullpellets som marktäckning och näringskälla"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ullpellets håller fukten, förhindrar ogräs och ger näring åt jorden
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Ett snabbt växande område som ger nytt liv åt spillull. Ullpellets
                och ullmattor används som marktäckning i trädgårdar, odlingslådor
                och jordbruk. Fördelarna är flera:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li><strong>Fukthållning</strong> — absorberar upp till 30&nbsp;% mer vatten än sin vikt, minskar behovet av bevattning</li>
                <li><strong>Ogräshämning</strong> — ullmattan kväver ogräs utan kemikalier</li>
                <li><strong>Långsam näringsfrisättning</strong> — keratin innehåller 16&nbsp;% kväve, plus svavel, fosfor och kalium</li>
                <li><strong>Jordförbättring</strong> — ullen bryter ner på 6–12 månader och förbättrar markstrukturen</li>
              </ul>
              <p className="mt-4">
                Spillull som inte håller kvalitetskrav för textil eller isolering
                får här nytt syfte. Det är cirkulär ekonomi i sin enklaste
                form — en restprodukt som blir en resurs. Cirka{" "}
                <strong>80&nbsp;% av svensk fårull</strong> används idag inte alls,
                och trädgårdsprodukter kan vara en del av lösningen.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Akustik och ljuddämpning — naturlig absorption i klass A
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt="Akustikbehandlat rum med ullpaneler — ljudabsorptionsklass A"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Ullbaserade akustikpaneler — klass A-absorption som är 100 % biologiskt nedbrytbar
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullens krusiga fibrer — med upp till 30 böjningar per
                centimeter — gör den till en utmärkt ljudabsorbent. Fibrerna
                fångar ljudvågor i ett brett frekvensomfång
                (<strong>250–4&nbsp;000&nbsp;Hz</strong>) och omvandlar
                rörelseenergin till en liten mängd värme.
              </p>
              <p className="mt-4">
                Ullbaserade akustikpaneler uppnår{" "}
                <strong>ljudabsorptionsklass&nbsp;A</strong> (den högsta
                klassen) och används i:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li>Kontorslandskap och mötesrum</li>
                <li>Skolor och förskolor</li>
                <li>Konsertsalar och inspelningsstudior</li>
                <li>Hemmastudior och hemmabiorum</li>
                <li>Restauranger och kaféer</li>
              </ul>
              <p className="mt-4">
                Till skillnad från syntetiska absorbenter (polyester,
                melaminskum, glasfiberduk) är ullpaneler helt{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  biologiskt nedbrytbara
                </Link>. De renar dessutom luften genom att binda formaldehyd och
                andra VOC — en bonus som inget syntetiskt alternativ erbjuder.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Byggisolering — fårullens mest spännande användning
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Fårullsisolering i regelvägg — termisk isolering, luftrening och fuktreglering i ett material"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Termisk isolering, luftrening, brandsäkerhet och fuktreglering — allt i ett material
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Här samlas alla ullens unika egenskaper i en enda produkt.
                Medan mineralull och cellplast fokuserar enbart på termisk
                prestanda gör fårullsisolering allt samtidigt:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li><strong>Termisk isolering</strong> — λ-värde 0,033–0,040&nbsp;W/m·K, jämförbart med mineralull</li>
                <li><strong>Fuktreglering</strong> — absorberar 35–40&nbsp;% fukt och frigör sorptionsvärme</li>
                <li><strong>Luftrening</strong> — binder formaldehyd och VOC permanent (80–87&nbsp;% reduktion)</li>
                <li><strong>Brandskydd</strong> — Euroclass B‑s1,d0 utan kemiska flamskyddsmedel</li>
                <li><strong>Ljuddämpning</strong> — absorptionsklass&nbsp;A i alla frekvenser</li>
                <li><strong>Koldioxidbindning</strong> — lagrar 1,8&nbsp;kg CO₂ per kg ull</li>
              </ul>
              <p className="mt-4">
                Fårullsisolering fungerar i väggar, tak, golv och
                mellanbjälklag.{" "}
                <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                  Den monteras
                </Link>{" "}
                utan skyddsutrustning, klipps med vanlig sax och anpassar sig
                efter oregelbundna hålrum tack vare fibrernas naturliga
                fjädring. Med en{" "}
                <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">
                  natureplus-certifierad livslängd på 75&nbsp;år
                </Link>{" "}
                behöver du aldrig byta isolering under husets livstid.
              </p>
              <p className="mt-4">
                Cirka 80&nbsp;% av svensk fårull går idag till spillo.
                Byggisolering kan ge denna resurs nytt liv och samtidigt skapa
                hälsosammare byggnader med lägre klimatavtryck.
              </p>
              <p className="mt-4">
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  Läs mer om hur fårullsisolering tillverkas och fungerar →
                </Link>
              </p>
              <p className="mt-2">
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  Upptäck alla fördelar med fårullsisolering →
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 p-8 bg-primary/5 border border-primary/10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Intresserad av fårullsisolering?
            </h2>
            <p className="text-foreground/70 mb-1">
              Byeco säljer fårullsisolering från österrikiska Isolena i hela
              Norden. Fri rådgivning, hjälp med beräkningar och
              30&nbsp;dagars öppet köp.
            </p>
            <p className="mt-4">
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 link-grow text-sm font-medium"
              >
                Till Byeco.se →
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om fårullens användningsområden
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad kan fårull användas till?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårull används inom fem huvudområden: kläder och textil
                  (baslager, kostymer, kappor), möbler och inredning (mattor,
                  klädsel, akustikpaneler), trädgård och odling (marktäckning,
                  gödning), akustik och ljuddämpning (kontor, skolor,
                  konsertsalar) samt byggisolering (väggar, tak, golv). Ull har
                  använts i minst 10&nbsp;000 år och ingen syntetisk fiber har
                  lyckats kopiera dess kombination av egenskaper.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Varför är fårull bättre än syntetiska material?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårull kombinerar egenskaper som inget syntetiskt material
                  matchar: temperaturreglering, fuktabsorption (upp till
                  40&nbsp;% av sin vikt), naturlig brandresistens
                  (antändningstemperatur 560–600&nbsp;°C), antimikrobiell
                  verkan, UV-skydd (UPF&nbsp;30+) och 100&nbsp;% biologisk
                  nedbrytbarhet. Syntetiska fibrer som polyester baseras på
                  fossil olja och tar hundratals år att brytas ner.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Kan fårull användas i trädgården?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Ja. Ullpellets och ullmattor används som marktäckning i
                  trädgårdar och odlingar. Ullen håller fukten i jorden,
                  förhindrar ogräs och bryter ner på 6–12 månader till näring.
                  Keratin innehåller 16&nbsp;% kväve, plus svavel, fosfor och
                  kalium. Ull absorberar också upp till 30&nbsp;% mer vatten
                  än sin vikt, vilket minskar behovet av bevattning.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur fungerar fårull som ljuddämpning?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Fårullens krusiga fibrer fångar ljudvågor i frekvensomfånget
                  250–4&nbsp;000&nbsp;Hz och omvandlar rörelseenergin till
                  värme. Ullbaserade akustikpaneler uppnår
                  ljudabsorptionsklass&nbsp;A (den högsta klassen) och
                  används i kontor, skolor och konsertsalar. Till skillnad
                  från syntetiska absorbenter är ullpaneler helt biologiskt
                  nedbrytbara och renar dessutom luften.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vad är det mest lovande användningsområdet för fårull?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Byggisolering. Fårullsisolering samlar alla ullens unika
                  egenskaper i en produkt: termisk isolering
                  (λ&nbsp;0,033–0,040&nbsp;W/m·K), fuktreglering
                  (40&nbsp;% absorption), luftrening (binder formaldehyd),
                  brandskydd (B‑s1,d0) och ljuddämpning (klass&nbsp;A).
                  Dessutom binder den mer koldioxid än den släpper ut.
                  Cirka 80&nbsp;% av svensk fårull används idag inte —
                  byggisolering kan ge denna resurs nytt liv.
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
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Så tillverkas och fungerar fårullsisolering — från fårrygg till vägg.</p>
            </li>
            <li>
              <Link href="/montering" className="link-grow text-lg font-medium text-foreground">
                Monteringsguide →
              </Link>
              <p className="text-foreground/60 mt-1">Steg för steg — så installerar du fårullsisolering utan skyddsutrustning.</p>
            </li>
            <li>
              <Link href="/hallbarhet" className="link-grow text-lg font-medium text-foreground">
                Hållbarhet →
              </Link>
              <p className="text-foreground/60 mt-1">Koldioxidbindning, cirkulär ekonomi och biologisk nedbrytbarhet.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
