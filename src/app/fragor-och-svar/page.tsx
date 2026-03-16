import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Frågor och svar om fårullsisolering",
  description:
    "Vanliga frågor om fårullsisolering: pris, livslängd, brandklass, fukt, skadedjur och mer. Raka svar utan floskler.",
  openGraph: {
    title: "Frågor och svar om fårullsisolering",
    description:
      "Vanliga frågor om fårullsisolering: pris, livslängd, brandklass, fukt, skadedjur och mer. Raka svar utan floskler.",
  },
  alternates: {
    canonical: "/fragor-och-svar",
  },
};

const faq: { q: string; a: React.ReactNode; aText: string }[] = [
  {
    q: "Vad kostar fårullsisolering?",
    aText: "Materialet kostar typiskt 2-3 gånger mer per kvadratmeter än mineralull. Men du sparar på skyddsutrustning, monteringstid och slipper byta isolering under husets livstid. Totalkalkylen ser bättre ut än man tror vid första anblick.",
    a: <>Materialet kostar typiskt 2-3 gånger mer per kvadratmeter än mineralull. Men du sparar på skyddsutrustning, monteringstid och slipper byta isolering under husets livstid. Totalkalkylen ser bättre ut än man tror vid första anblick. Se vår <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow">detaljerade jämförelse</Link>.</>,
  },
  {
    q: "Vilken brandklass har det?",
    aText: "Brandklass B1/C (svårantändligt). Ull kolnar istället för att brinna, smälter inte och avger inte giftig rök. Det uppnås helt utan kemiska flamskyddsmedel.",
    a: "Brandklass B1/C (svårantändligt). Ull kolnar istället för att brinna, smälter inte och avger inte giftig rök. Det uppnås helt utan kemiska flamskyddsmedel.",
  },
  {
    q: "Hur länge håller det?",
    aText: "50+ år. Fårullens naturliga fjädring gör att materialet inte sjunker ihop med tiden, till skillnad från vissa mineralullsprodukter som kan komprimeras i vertikala applikationer.",
    a: "50+ år. Fårullens naturliga fjädring gör att materialet inte sjunker ihop med tiden, till skillnad från vissa mineralullsprodukter som kan komprimeras i vertikala applikationer.",
  },
  {
    q: "Kan det mögla?",
    aText: "Ull absorberar och släpper ut fukt naturligt. Det gör att den inte skapar förutsättningar för mögel på samma sätt som material som inte hanterar fukt. I normala konstruktioner med korrekt ventilation är mögel inget problem.",
    a: "Ull absorberar och släpper ut fukt naturligt. Det gör att den inte skapar förutsättningar för mögel på samma sätt som material som inte hanterar fukt. I normala konstruktioner med korrekt ventilation är mögel inget problem.",
  },
  {
    q: "Lockar det skadedjur? Mal?",
    aText: "Isoleringsfårull behandlas med borax som skyddar mot mal och andra insekter. Dessutom behålls en viss mängd lanolin i fibrerna, vilket ger ett naturligt skydd. Det är inte samma sak som en ulltröja i garderoben.",
    a: "Isoleringsfårull behandlas med borax som skyddar mot mal och andra insekter. Dessutom behålls en viss mängd lanolin i fibrerna, vilket ger ett naturligt skydd. Det är inte samma sak som en ulltröja i garderoben.",
  },
  {
    q: "Kan jag montera själv?",
    aText: "Ja. Klipp med sax, tryck på plats. Ingen mask, inga handskar, ingen specialutbildning. Det är ett av de enklaste isoleringsmaterialen att arbeta med.",
    a: <>Ja. Klipp med sax, tryck på plats. Ingen mask, inga handskar, ingen specialutbildning. Det är ett av de enklaste isoleringsmaterialen att arbeta med. Läs vår <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">monteringsguide</Link>.</>,
  },
  {
    q: "Hur bra isolerar det jämfört med mineralull?",
    aText: "Lambda-värdet är 0,033-0,040 W/m·K. Det är i samma intervall som sten- och glasull. Termiskt sett är det ingen praktisk skillnad.",
    a: <>Lambda-värdet är 0,033-0,040 W/m·K. Det är i samma intervall som sten- och glasull. Termiskt sett är det ingen praktisk skillnad. Fårull har däremot andra <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">unika fördelar</Link>.</>,
  },
  {
    q: "Kan det användas i våtrum?",
    aText: "Fårullsisolering rekommenderas inte i direktkontakt med vatten eller i ständigt fuktiga miljöer. Men den hanterar normal byggfukt och säsongsvariationer bättre än de flesta alternativ.",
    a: "Fårullsisolering rekommenderas inte i direktkontakt med vatten eller i ständigt fuktiga miljöer. Men den hanterar normal byggfukt och säsongsvariationer bättre än de flesta alternativ.",
  },
  {
    q: "Var kan jag köpa det i Sverige?",
    aText: "I Norden säljer Byeco fårullsisolering från österrikiska Isolena. De sitter i Göteborg och Helsingfors, erbjuder fri rådgivning, hjälper med beräkningar och har 30 dagars öppet köp.",
    a: "I Norden säljer Byeco fårullsisolering från österrikiska Isolena. De sitter i Göteborg och Helsingfors, erbjuder fri rådgivning, hjälper med beräkningar och har 30 dagars öppet köp.",
  },
];

export default function FragorOchSvar() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.aText,
              },
            })),
          }),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Frågor och svar" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          FAQ
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vanliga frågor om fårullsisolering
        </h1>
      </ScrollReveal>

      <div className="max-w-3xl space-y-8">
        {faq.map((item, i) => (
          <ScrollReveal key={i}>
            <div className="border-b border-surface pb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                {item.q}
              </h2>
              <p className="font-body text-foreground/80 text-base leading-relaxed">
                {item.a}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="max-w-3xl mt-16 space-y-4">
          <p className="font-body text-foreground/70 text-base">
            Hittar du inte svaret du söker?{" "}
            <Link href="/kontakt" className="text-primary hover:text-primary/80 link-grow">
              Hör av dig
            </Link>
            , så hjälper vi dig.
          </p>
          <p className="font-body text-foreground/50 text-sm">
            Vill du gå vidare och beställa? Försäljning och rådgivning
            sker via{" "}
            <a
              href="https://byeco.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary link-grow"
            >
              Byeco.se
            </a>
            .
          </p>
        </div>
      </ScrollReveal>
    </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/montering" className="link-grow text-lg font-medium text-[#1A1916]">
                Monteringsguide →
              </Link>
              <p className="text-[#6B6960] mt-1">Steg för steg – så monterar du fårullsisolering själv.</p>
            </li>
            <li>
              <Link href="/jamforelse" className="link-grow text-lg font-medium text-[#1A1916]">
                Fårull vs andra material →
              </Link>
              <p className="text-[#6B6960] mt-1">Detaljerad jämförelse mot mineralull och cellplast.</p>
            </li>
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-[#1A1916]">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-[#6B6960] mt-1">Allt om materialet, från tillverkning till funktion.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
