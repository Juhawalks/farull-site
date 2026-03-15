import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allt om fårull — från fiber till byggisolering | Farull.se",
  description:
    "Fårull har isolerat människor i tusentals år. Lär dig allt om fårull som material, svenska fårraser och varför fårullsisolering är framtidens hållbara val.",
};

const fordelar = [
  {
    title: "Renar inomhusluften",
    text: "Absorberar och neutraliserar formaldehyd och andra skadliga ämnen.",
  },
  {
    title: "Reglerar fukt naturligt",
    text: "Buffrar upp till 40 % av sin vikt i fukt utan att tappa isoleringsförmåga.",
  },
  {
    title: "Brandsäker utan kemikalier",
    text: "Naturligt flamhämmande. Brandklass B1/C — utan tillsatser.",
  },
  {
    title: "Effektiv ljudisolering",
    text: "Ullfibrernas krusiga struktur dämpar ljud i flera frekvenser.",
  },
  {
    title: "Binder CO₂",
    text: "Varje kilo fårull binder koldioxid. Mineralull släpper ut den.",
  },
  {
    title: "Enkel montering",
    text: "Ingen klåda, inget damm, ingen skyddsmask. Klipp och tryck på plats.",
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
    text: "Fibrernas unika egenskaper och varför ull är naturens supermaterial",
  },
  {
    title: "Svenska fårraser",
    href: "/farraser",
    text: "Gutefår, Gotlandsfår, Ryafår — och deras ull",
  },
  {
    title: "Användningsområden",
    href: "/anvandningsomraden",
    text: "Från kläder och inredning till byggisolering",
  },
  {
    title: "Ullens historia",
    href: "/ullens-historia",
    text: "Från bronsåldern till moderna passivhus",
  },
];

const utforskaIsolering = [
  {
    title: "Vad är fårullsisolering?",
    href: "/vad-ar-farullsisolering",
    text: "Hur det tillverkas och hur det fungerar",
  },
  {
    title: "Fårull vs mineralull",
    href: "/jamforelse",
    text: "Prestanda, pris och miljö sida vid sida",
  },
  {
    title: "Monteringsguide",
    href: "/montering",
    text: "Steg för steg — väggar, tak och golv",
  },
  {
    title: "Vanliga frågor",
    href: "/fragor-och-svar",
    text: "Pris, brandklass, livslängd och mer",
  },
  {
    title: "Hållbarhet",
    href: "/hallbarhet",
    text: "CO₂-bindning, cirkulär ekonomi och EU-taxonomi",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <p className="uppercase tracking-[0.15em] text-white/60 text-sm font-body mb-6">
            100 % naturlig · CO₂-bindande · Tillverkad i Österrike
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-8">
            Allt om fårull — från fiber till byggisolering
          </h1>
          <p className="font-body text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
            Fårull har isolerat människor i tusentals år. Nu isolerar den ditt
            hus. Här berättar vi allt om fårull som material — och varför
            fårullsisolering är framtidens val för hälsosamma, hållbara
            byggnader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/vad-ar-farullsisolering"
              className="inline-block bg-accent text-foreground px-8 py-3.5 rounded-soft text-sm font-medium uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors text-center"
            >
              Vad är fårullsisolering?
            </Link>
            <Link
              href="/jamforelse"
              className="inline-block border border-white/30 text-white px-8 py-3.5 rounded-soft text-sm font-medium uppercase tracking-[0.1em] hover:bg-white/10 transition-colors text-center"
            >
              Jämför med andra material
            </Link>
          </div>
        </div>
      </section>

      {/* FÖRDELAR */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="uppercase tracking-[0.15em] text-accent text-sm font-body mb-4">
            Varför fårull?
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-16 max-w-2xl">
            Sex anledningar att välja naturens premiummaterial
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fordelar.map((item) => (
              <div
                key={item.title}
                className="bg-surface/50 rounded-soft p-8 border border-surface"
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
          <div className="mt-12 text-center">
            <Link
              href="/fordelar"
              className="font-body text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Läs mer om alla fördelar →
            </Link>
          </div>
        </div>
      </section>

      {/* NYCKELTAL */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
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
        </div>
      </section>

      {/* UTFORSKA FÅRULL */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="uppercase tracking-[0.15em] text-accent text-sm font-body mb-4">
            Fårull som material
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Utforska fårullens värld
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {utforskaFarull.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-surface/50 rounded-soft p-8 border border-surface hover:border-primary/30 transition-colors"
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
        </div>
      </section>

      {/* UTFORSKA ISOLERING */}
      <section className="bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="uppercase tracking-[0.15em] text-accent text-sm font-body mb-4">
            Byggisolering
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Lär dig mer om fårullsisolering
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {utforskaIsolering.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-background rounded-soft p-8 border border-surface hover:border-primary/30 transition-colors"
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
        </div>
      </section>

      {/* AVSLUTANDE — KÖP */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Var kan man köpa fårullsisolering?
            </h2>
            <p className="font-body text-foreground/70 text-base leading-relaxed mb-8">
              I Norden finns fårullsisolering från österrikiska Isolena att
              beställa online via Byeco.se — en svensk leverantör med kontor i
              Göteborg och Helsingfors. De erbjuder fri rådgivning och 30 dagars
              öppet köp.
            </p>
            <a
              href="https://byeco.se"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Besök Byeco.se →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
