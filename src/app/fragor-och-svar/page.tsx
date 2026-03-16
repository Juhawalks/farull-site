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

const faq = [
  {
    q: "Vad kostar fårullsisolering?",
    a: "Materialet kostar typiskt 2-3 gånger mer per kvadratmeter än mineralull. Men du sparar på skyddsutrustning, monteringstid och slipper byta isolering under husets livstid. Totalkalkylen ser bättre ut än man tror vid första anblick.",
  },
  {
    q: "Vilken brandklass har det?",
    a: "Brandklass B1/C (svårantändligt). Ull kolnar istället för att brinna, smälter inte och avger inte giftig rök. Det uppnås helt utan kemiska flamskyddsmedel.",
  },
  {
    q: "Hur länge håller det?",
    a: "50+ år. Fårullens naturliga fjädring gör att materialet inte sjunker ihop med tiden, till skillnad från vissa mineralullsprodukter som kan komprimeras i vertikala applikationer.",
  },
  {
    q: "Kan det mögla?",
    a: "Ull absorberar och släpper ut fukt naturligt. Det gör att den inte skapar förutsättningar för mögel på samma sätt som material som inte hanterar fukt. I normala konstruktioner med korrekt ventilation är mögel inget problem.",
  },
  {
    q: "Lockar det skadedjur? Mal?",
    a: "Isoleringsfårull behandlas med borax som skyddar mot mal och andra insekter. Dessutom behålls en viss mängd lanolin i fibrerna, vilket ger ett naturligt skydd. Det är inte samma sak som en ulltröja i garderoben.",
  },
  {
    q: "Kan jag montera själv?",
    a: "Ja. Klipp med sax, tryck på plats. Ingen mask, inga handskar, ingen specialutbildning. Det är ett av de enklaste isoleringsmaterialen att arbeta med.",
  },
  {
    q: "Hur bra isolerar det jämfört med mineralull?",
    a: "Lambda-värdet är 0,033-0,040 W/m·K. Det är i samma intervall som sten- och glasull. Termiskt sett är det ingen praktisk skillnad.",
  },
  {
    q: "Kan det användas i våtrum?",
    a: "Fårullsisolering rekommenderas inte i direktkontakt med vatten eller i ständigt fuktiga miljöer. Men den hanterar normal byggfukt och säsongsvariationer bättre än de flesta alternativ.",
  },
  {
    q: "Var kan jag köpa det i Sverige?",
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
                text: item.a,
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
    </>
  );
}
