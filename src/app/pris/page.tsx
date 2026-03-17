import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vad kostar fårullsisolering?",
  description:
    "Fårullsisolering kostar mer per kvadratmeter än mineralull. Men totalkostnaden över husets livstid berättar en annan historia. Här går vi igenom siffrorna.",
  openGraph: {
    title: "Vad kostar fårullsisolering?",
    description:
      "Fårullsisolering kostar mer per kvadratmeter än mineralull. Men totalkostnaden över husets livstid berättar en annan historia. Här går vi igenom siffrorna.",
  },
  alternates: {
    canonical: "/pris",
  },
};

export default function Pris() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vad kostar fårullsisolering?",
            description:
              "Fårullsisolering kostar mer per kvadratmeter än mineralull. Men totalkostnaden över husets livstid berättar en annan historia. Här går vi igenom siffrorna.",
            url: "https://farull.se/pris",
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
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Pris" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Pris
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vad kostar fårullsisolering?
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
        alt="Miniräknare och papper – kalkyl för isoleringsprojekt"
        width={800}
        height={533}
        priority
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Låt oss vara raka. Fårullsisolering kostar mer per kvadratmeter
            än mineralull. Det är ingen hemlighet. Men priset per
            kvadratmeter berättar bara en del av historien. Här går vi
            igenom vad det faktiskt kostar — och vad du får för pengarna.
          </p>
        </ScrollReveal>

        {/* MATERIALPRIS */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Materialpris per kvadratmeter
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                alt="Fårullsisolering i skivor"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Isolena-skivor från Byeco — finns i flera tjocklekar
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullsisolering ligger ungefär på <strong>150–400&nbsp;kr
                per m²</strong> beroende på tjocklek och produkttyp. Mineralull
                kostar runt 50–150&nbsp;kr/m² för motsvarande tjocklek.
                Materialpriset är alltså 2–3 gånger högre.
              </p>
              <p className="mt-4">
                Det är den siffra de flesta fastnar vid. Men den säger lika
                lite om totalkostnaden som ett bilpris säger om ägandekostnaden.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ARBETSKOSTNAD */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Lägre arbetskostnad
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Hantverkare som monterar isolering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Ingen skyddsutrustning behövs — snabbare och trevligare jobb
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Mineralull kräver skyddsmask, handskar och långärmade kläder.
                Det tar tid att klä på sig, det är obehagligt att jobba i,
                och det gör att varje arbetspass går långsammare.
              </p>
              <p className="mt-4">
                Fårull klipps med vanlig sax och trycks på plats. Inga
                handskar, ingen mask, inget klåda. Monteringen går snabbare
                och hantverkaren kan jobba längre pass utan obehag. Det
                sänker arbetskostnaden med uppskattningsvis <strong>15–25&nbsp;%</strong>.
              </p>
              <p className="mt-4">
                Många husägare väljer dessutom att{" "}
                <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                  montera själva
                </Link>{" "}
                — något som är betydligt enklare med fårull.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* LIVSLÄNGD */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            50+ år utan byte
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                alt="Äldre hus med gedigen konstruktion"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Fårull håller husets livstid — utan att sjunka ihop
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Fårullens naturliga fjädring gör att den inte komprimeras
                med tiden. Det betyder att isoleringen håller sin fulla
                prestanda i <strong>50+ år</strong> — hela husets livstid.
              </p>
              <p className="mt-4">
                Mineralull kan sjunka ihop i vertikala applikationer efter
                25–30 år. Ett byte innebär inte bara nytt material, utan
                också rivning, avfallshantering och ny montering.
              </p>
              <p className="mt-4">
                Den kostnaden syns aldrig på offerten. Men den kommer.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* RÄKNEEXEMPEL */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Räkneexempel: typiskt småhus
          </h2>
          <div className="mt-6">
            <p className="mb-6">
              Låt oss jämföra för ett typiskt småhus med <strong>120&nbsp;m²
              isoleringsyta</strong> (ytterväggar + vindsbjälklag). Siffrorna
              är ungefärliga och varierar beroende på region och entreprenör.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-foreground/10">
                    <th className="font-heading font-semibold text-foreground py-3 pr-4"></th>
                    <th className="font-heading font-semibold text-foreground py-3 px-4 text-right">Mineralull</th>
                    <th className="font-heading font-semibold text-foreground py-3 pl-4 text-right">Fårull</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Material (120&nbsp;m²)</td>
                    <td className="py-3 px-4 text-right">~12&nbsp;000&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">~30&nbsp;000&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Skyddsutrustning</td>
                    <td className="py-3 px-4 text-right">~500&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">0&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Arbetskostnad</td>
                    <td className="py-3 px-4 text-right">~15&nbsp;000&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">~12&nbsp;000&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/10 font-medium text-foreground">
                    <td className="py-3 pr-4">Totalt vid montering</td>
                    <td className="py-3 px-4 text-right">~27&nbsp;500&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">~42&nbsp;000&nbsp;kr</td>
                  </tr>
                  <tr className="border-b border-foreground/5">
                    <td className="py-3 pr-4">Byte efter 25–30 år</td>
                    <td className="py-3 px-4 text-right">~35&nbsp;000&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right">0&nbsp;kr</td>
                  </tr>
                  <tr className="font-medium text-foreground">
                    <td className="py-3 pr-4 font-heading font-semibold">Totalkostnad (50 år)</td>
                    <td className="py-3 px-4 text-right font-heading font-semibold">~62&nbsp;500&nbsp;kr</td>
                    <td className="py-3 pl-4 text-right font-heading font-semibold text-primary">~42&nbsp;000&nbsp;kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-foreground/50 italic">
              Siffrorna är ungefärliga och baserade på genomsnittliga priser 2024/2025.
              Faktiska kostnader varierar beroende på tjocklek, typ av konstruktion
              och lokala arbetspriser. Kontakta Byeco för en beräkning baserad på
              just ditt projekt.
            </p>
          </div>
        </ScrollReveal>

        {/* VAD PÅVERKAR PRISET */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Vad påverkar priset?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Husbygge och konstruktion"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Tjocklek, densitet och area avgör slutpriset
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <ul className="space-y-3">
                <li>
                  <strong>Tjocklek.</strong> 50&nbsp;mm kostar naturligtvis
                  mindre än 200&nbsp;mm. Vilken tjocklek du behöver beror på
                  konstruktionen och energikraven.
                </li>
                <li>
                  <strong>Produkttyp.</strong> Skivor (styva) kostar mer
                  än rullar (flexibla). Skivor passar bäst i väggar,
                  rullar i vindsbjälklag.
                </li>
                <li>
                  <strong>Area.</strong> Större projekt ger ofta bättre
                  pris per kvadratmeter.
                </li>
                <li>
                  <strong>Tillgänglighet.</strong> Svåråtkomliga utrymmen
                  (snedtak, krypgrunder) kräver mer arbetstid oavsett
                  material.
                </li>
                <li>
                  <strong>Gör-det-själv vs hantverkare.</strong> Fårull
                  är det enklaste materialet att{" "}
                  <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">
                    montera själv
                  </Link>
                  . Det kan halvera totalkostnaden.
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* DET SOM INTE SYNS PÅ OFFERTEN */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Det som inte syns på offerten
          </h2>
          <div className="mt-6">
            <p>
              Prisjämförelser fokuserar nästan alltid på materialkostnaden.
              Men det finns värden som aldrig dyker upp på en offert:
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <strong>Bättre inomhusluft.</strong> Fårull{" "}
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  binder formaldehyd
                </Link>{" "}
                och andra skadliga ämnen. Det är svårt att sätta ett pris
                på, men det påverkar hälsan i huset varje dag.
              </li>
              <li>
                <strong>Naturlig fuktstyrning.</strong> Ull buffrar fukt
                utan att tappa prestanda. Det kan förebygga fuktskador som
                kostar tiotusentals kronor att åtgärda.
              </li>
              <li>
                <strong>Lägre klimatavtryck.</strong> Varje kilo fårullsisolering{" "}
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow">
                  binder mer koldioxid
                </Link>{" "}
                än det genererar. Mineralull kräver smältning vid 1&nbsp;400°C.
              </li>
              <li>
                <strong>Tystare hem.</strong> Fårull dämpar ljud effektivt
                över hela frekvensspektrat — inte bara i specifika intervall
                som syntetiska material.
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* SAMMANFATTNING */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Sammanfattning
          </h2>
          <div className="mt-6">
            <p>
              Ja, fårullsisolering kostar mer att köpa in. Nej, det kostar
              inte nödvändigtvis mer att äga. Lägre arbetskostnader, längre
              livslängd och frånvaron av byte gör att totalkostnaden över
              50 år ofta hamnar <strong>lägre</strong> än mineralull.
            </p>
            <p className="mt-4">
              Lägg till bättre luftkvalitet, fuktstyrning och ett lägre
              klimatavtryck — och frågan blir inte om du har råd med
              fårullsisolering, utan om du har råd att låta bli.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* BYECO CTA */}
      <ScrollReveal>
        <aside className="max-w-3xl mx-auto px-6 py-12">
          <div className="border border-surface p-6 bg-background">
            <p className="font-body text-foreground/80 text-base leading-relaxed">
              Vill du veta exakt vad det kostar för ditt hus? Byeco hjälper
              dig med en kostnadsfri beräkning baserad på dina ritningar.
              Ingen förbindelse.{" "}
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 link-grow"
              >
                Kontakta Byeco →
              </a>
            </p>
          </div>
        </aside>
      </ScrollReveal>

      {/* LÄS VIDARE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/jamforelse" className="link-grow text-lg font-medium text-foreground">
                Fårull vs andra material →
              </Link>
              <p className="text-foreground/50 mt-1">Detaljerad jämförelse av prestanda, hälsa och miljöpåverkan.</p>
            </li>
            <li>
              <Link href="/montering" className="link-grow text-lg font-medium text-foreground">
                Monteringsguide →
              </Link>
              <p className="text-foreground/50 mt-1">Steg för steg — så installerar du fårullsisolering själv.</p>
            </li>
            <li>
              <Link href="/fordelar" className="link-grow text-lg font-medium text-foreground">
                Fördelar med fårullsisolering →
              </Link>
              <p className="text-foreground/50 mt-1">Åtta konkreta skäl att välja ull framför mineralull.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
