import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Allt om fårull. Från fiber till byggisolering | Farull.se",
  description:
    "Fårull har isolerat människor i tusentals år. Lär dig allt om fårull som material, svenska fårraser och varför fårullsisolering är framtidens hållbara val.",
};

const fordelar = [
  {
    title: "Renar inomhusluften",
    text: "Ullens keratin absorberar formaldehyd och andra skadliga ämnen. Luften i rummet blir faktiskt renare med tiden.",
  },
  {
    title: "Ull som andas",
    text: "Buffrar upp till 40 % av sin vikt i fukt utan att tappa isolerförmåga. Släpper ut fukten igen när luften torkar.",
  },
  {
    title: "Brandsäker utan tillsatser",
    text: "Ull kolnar istället för att brinna. Brandklass B1/C helt utan kemiska flamskyddsmedel.",
  },
  {
    title: "Tyst hus",
    text: "De krusiga fibrerna fångar ljud i breda frekvensomfång. Grannarnas tv hörs inte längre.",
  },
  {
    title: "Binder koldioxid",
    text: "Varje kilo fårull har bundit CO₂ under fårets betessäsong. Mineralull släpper ut den vid tillverkning.",
  },
  {
    title: "Montera utan mask",
    text: "Ingen klåda, inget damm, ingen skyddsutrustning. Klipp med vanlig sax och tryck på plats.",
  },
];

const nyckeltal = [
  {
    value: "0,033",
    unit: "W/m·K lambda-värde",
    description: "Bäst bland biobaserade",
  },
  {
    value: "200 000",
    unit: "ton spillull per år i Europa",
    description: "Återanvänd som isolering",
  },
  {
    value: "100 %",
    unit: "cirkulärt material",
    description: "Tillbaka till naturen",
  },
];

const utforskaFarull = [
  {
    title: "Vad är fårull?",
    href: "/farull",
    text: "Keratin, krusighet och luftfickor. Varför ull isolerar bättre än de flesta syntetiska alternativ.",
  },
  {
    title: "Svenska fårraser",
    href: "/farraser",
    text: "Gutefår, Gotlandsfår, Ryafår. Varje ras ger ull med helt olika karaktär.",
  },
  {
    title: "Användningsområden",
    href: "/anvandningsomraden",
    text: "Kläder, akustikpaneler, odling, byggisolering. Ull gör mer än du tror.",
  },
  {
    title: "Ullens historia",
    href: "/ullens-historia",
    text: "Från bronsålderns segelduk till moderna passivhus. 6 000 år av ull.",
  },
];

const utforskaIsolering = [
  {
    title: "Vad är fårullsisolering?",
    href: "/vad-ar-farullsisolering",
    text: "Hur det tillverkas, hur det fungerar och vad som gör det annorlunda.",
  },
  {
    title: "Fårull vs mineralull",
    href: "/jamforelse",
    text: "Prestanda, pris och miljöpåverkan. Sida vid sida, utan skönmålning.",
  },
  {
    title: "Monteringsguide",
    href: "/montering",
    text: "Väggar, tak och golv. Steg för steg, utan specialverktyg.",
  },
  {
    title: "Vanliga frågor",
    href: "/fragor-och-svar",
    text: "Pris, brandklass, livslängd. De frågor folk faktiskt ställer.",
  },
  {
    title: "Hållbarhet",
    href: "/hallbarhet",
    text: "CO₂-bindning, cirkulär ekonomi och vad EU-taxonomin säger.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — asymmetrisk layout */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="hero-fade-tagline uppercase tracking-[0.12em] text-white/60 text-sm font-body mb-6">
                100 % naturlig · CO₂-bindande · Tillverkad i Österrike
              </p>
              <h1 className="hero-fade-title font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-8">
                Allt om fårull. Från fiber till byggisolering.
              </h1>
              <p className="hero-fade-text font-body text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
                Fårull har isolerat människor i tusentals år. Nu isolerar den
                ditt hus. Vi berättar allt om materialet, hur det fungerar
                som isolering, och varför det slår mineralull på punkt efter
                punkt.
              </p>
              <div className="hero-fade-buttons flex flex-col sm:flex-row gap-4">
                <Link href="/vad-ar-farullsisolering" className="btn-primary">
                  Vad är fårullsisolering?
                </Link>
                <Link href="/jamforelse" className="btn-outline">
                  Jämför med andra material
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <div className="w-full aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-3/4 aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-1/2 aspect-square rounded-full bg-accent/20 border border-accent/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FÖRDELAR */}
      <section className="bg-background py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
              Varför fårull?
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-16 max-w-2xl">
              Sex skäl att välja naturens eget isoleringsmaterial
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {fordelar.map((item) => (
                <div
                  key={item.title}
                  className="card-hover bg-surface/50 p-8 border border-surface"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-foreground/70 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link
                href="/fordelar"
                className="font-body text-primary hover:text-primary/80 transition-colors text-sm font-medium link-grow"
              >
                Läs mer om alla fördelar
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* NYCKELTAL */}
      <section className="bg-primary text-white py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
              {nyckeltal.map((item) => (
                <div key={item.value}>
                  <p className="font-heading text-5xl sm:text-6xl font-bold text-accent mb-3">
                    {item.value}
                  </p>
                  <p className="font-body text-white/90 text-base font-medium mb-1">
                    {item.unit}
                  </p>
                  <p className="font-body text-white/50 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* UTFORSKA FÅRULL */}
      <section className="bg-background py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
              Fårull som material
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-16">
              Utforska fårullens värld
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {utforskaFarull.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group card-hover bg-surface/50 p-8 border border-surface"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-foreground/60 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* UTFORSKA ISOLERING */}
      <section className="bg-surface/30 py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
              Byggisolering
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-16">
              Fårullsisolering på djupet
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {utforskaIsolering.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group card-hover bg-background p-8 border border-surface"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-foreground/60 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AVSLUTANDE — KÖP */}
      <section className="bg-background py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
                Köpa fårullsisolering
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Redo att isolera med ull?
              </h2>
              <p className="font-body text-foreground/70 text-base leading-relaxed mb-8">
                I Norden finns fårullsisolering från österrikiska Isolena att
                beställa via Byeco.se. De sitter i Rävlanda utanför Göteborg
                och erbjuder fri rådgivning och 30 dagars öppet köp.
              </p>
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-primary hover:text-primary/80 transition-colors text-sm font-medium link-grow"
              >
                Besök Byeco.se
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
