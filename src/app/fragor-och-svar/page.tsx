import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Frågor och svar om fårullsisolering – pris, brand, fukt, livslängd | Farull.se",
  description:
    "12 vanliga frågor om fårullsisolering: pris (150–400 kr/m²), brandklass B-s1,d0, 75 års livslängd, fukthantering 40 %, skadedjur, montering och ROT-avdrag.",
  openGraph: {
    title: "Frågor och svar om fårullsisolering – pris, brand, fukt, livslängd",
    description:
      "12 vanliga frågor om fårullsisolering: pris (150–400 kr/m²), brandklass B-s1,d0, 75 års livslängd, fukthantering 40 %, skadedjur, montering och ROT-avdrag.",
  },
  alternates: {
    canonical: "/fragor-och-svar",
  },
};

const faq: { q: string; aText: string; aJsx: React.ReactNode }[] = [
  {
    q: "Vad kostar fårullsisolering?",
    aText: "Fårullsisolering kostar ungefär 150–400 kr per m² beroende på tjocklek – 2–3 gånger mer än mineralull. Men totalkalkylen berättar en annan historia: ingen skyddsutrustning, 15–25 % snabbare montering och 75 års livslängd utan byte. Sett över 50 år blir fårull ofta billigare totalt. Ett typiskt småhus (120 m²) kostar ~42 000 kr med fårull mot ~62 500 kr med mineralull inklusive byte.",
    aJsx: <>Ungefär <strong>150–400&nbsp;kr per m²</strong> beroende på tjocklek – 2–3 gånger mer än mineralull. Men totalkalkylen berättar en annan historia: ingen skyddsutrustning, 15–25&nbsp;% snabbare montering och 75&nbsp;års livslängd utan byte. Sett över 50&nbsp;år blir fårull ofta billigare totalt. Ett typiskt småhus (120&nbsp;m²) kostar ~42&nbsp;000&nbsp;kr med fårull mot ~62&nbsp;500&nbsp;kr med mineralull inklusive byte. <Link href="/pris" className="text-primary hover:text-primary/80 link-grow">Se fullständig prisguide →</Link></>,
  },
  {
    q: "Vilken brandklass har fårullsisolering?",
    aText: "Euroclass B-s1,d0 – svårantändligt material med minimal rökutveckling. Fårull antänds först vid 560–600 °C (jämfört med trä vid 270 °C), kolnar och självslocknar. Den smälter inte och droppar inte brinnande material. Brandskyddet uppnås med enbart naturlig borax – helt utan kemiska flamskyddsmedel.",
    aJsx: <><strong>Euroclass B‑s1,d0</strong> – svårantändligt material med minimal rökutveckling. Fårull antänds först vid 560–600&nbsp;°C (jämfört med trä vid 270&nbsp;°C), kolnar och självslocknar. Den smälter inte och droppar inte brinnande material. Brandskyddet uppnås med enbart naturlig borax – helt utan kemiska flamskyddsmedel.</>,
  },
  {
    q: "Hur länge håller fårullsisolering?",
    aText: "75 år – certifierat av natureplus. Fårullens disulfidbindningar ger en naturlig elasticitet som gör att materialet behåller sin form och isoleringsförmåga decennium efter decennium. Mineralull kan börja sjunka ihop efter 25–30 år, särskilt i vertikala applikationer som ytterväggar.",
    aJsx: <><strong>75&nbsp;år</strong> – certifierat av natureplus. Fårullens disulfidbindningar ger en naturlig elasticitet som gör att materialet behåller sin form och isoleringsförmåga decennium efter decennium. Mineralull kan börja sjunka ihop efter 25–30&nbsp;år, särskilt i vertikala applikationer som ytterväggar. <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">Se teknisk data →</Link></>,
  },
  {
    q: "Hur bra isolerar fårull jämfört med mineralull?",
    aText: "Lambda-värdet är 0,033–0,040 W/m·K – samma intervall som stenull (0,034–0,039) och glasull (0,032–0,040). Termiskt sett ingen praktisk skillnad. Men fårull behåller sin prestanda även vid fuktbelastning – mineralull kan tappa upp till 24 gånger i isoleringsförmåga vid höga fuktnivåer.",
    aJsx: <>Lambda-värdet är <strong>0,033–0,040&nbsp;W/m·K</strong> – samma intervall som stenull (0,034–0,039) och glasull (0,032–0,040). Termiskt sett ingen praktisk skillnad. Men fårull behåller sin prestanda även vid fuktbelastning – mineralull kan tappa upp till 24 gånger i isoleringsförmåga vid höga fuktnivåer. <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow">Se fullständig jämförelse →</Link></>,
  },
  {
    q: "Kan fårullsisolering mögla?",
    aText: "Nej, under normala förhållanden. Fårull absorberar upp till 35–40 % av sin vikt i fukt och släpper ut den igen när luften torkar – den skapar inte förutsättningar för mögel. Dessutom har keratinet naturliga antimikrobiella egenskaper. I extremt fuktiga miljöer utan ventilation kan dock alla organiska material påverkas. Korrekt konstruktion med ventilation är alltid viktigt.",
    aJsx: <>Nej, under normala förhållanden. Fårull absorberar upp till <strong>35–40&nbsp;%</strong> av sin vikt i fukt och släpper ut den igen när luften torkar – den skapar inte förutsättningar för mögel. Dessutom har keratinet naturliga antimikrobiella egenskaper. I extremt fuktiga miljöer utan ventilation kan dock alla organiska material påverkas. Korrekt konstruktion med ventilation är alltid viktigt.</>,
  },
  {
    q: "Lockar fårullsisolering skadedjur eller mal?",
    aText: "Nej. Isoleringsfårull behandlas med 3–5 % borax som skyddar mot mal och andra insekter. Dessutom behålls en viss mängd lanolin i fibrerna, vilket ger ett naturligt skydd. Isoleringsull är inte samma sak som en ulltröja i garderoben – den är behandlad och sitter inbyggd i en konstruktion.",
    aJsx: <>Nej. Isoleringsfårull behandlas med <strong>3–5&nbsp;% borax</strong> som skyddar mot mal och andra insekter. Dessutom behålls en viss mängd lanolin i fibrerna, vilket ger ett naturligt skydd. Isoleringsull är inte samma sak som en ulltröja i garderoben – den är behandlad och sitter inbyggd i en konstruktion.</>,
  },
  {
    q: "Renar fårullsisolering inomhusluften?",
    aText: "Ja. Ullens keratinprotein binder formaldehyd, toluen, limonen och andra flyktiga organiska föreningar (VOC) kemiskt och permanent. Forskning visar en reduktion på 80–87 % av formaldehyd inom 4 timmar. Effekten varar i upp till 30 år. Inget annat isoleringsmaterial har denna egenskap.",
    aJsx: <>Ja. Ullens keratinprotein binder formaldehyd, toluen, limonen och andra VOC kemiskt och permanent. Forskning visar en reduktion på <strong>80–87&nbsp;%</strong> av formaldehyd inom 4&nbsp;timmar. Effekten varar i upp till 30&nbsp;år. Inget annat isoleringsmaterial har denna egenskap. <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">Läs mer om fördelarna →</Link></>,
  },
  {
    q: "Kan jag montera fårullsisolering själv?",
    aText: "Ja – fårull är det enklaste isoleringsmaterialet att montera själv. Klipp med vanlig sax, tryck på plats mellan reglarna. Ingen mask, inga handskar, ingen specialutbildning. Fibrerna fjädrar och fyller ut hålrummet av sig själva. Monteringen går 15–25 % snabbare än mineralull.",
    aJsx: <>Ja – fårull är det enklaste isoleringsmaterialet att montera själv. Klipp med vanlig sax, tryck på plats mellan reglarna. Ingen mask, inga handskar, ingen specialutbildning. Fibrerna fjädrar och fyller ut hålrummet av sig själva. Monteringen går <strong>15–25&nbsp;% snabbare</strong> än mineralull. <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">Se monteringsguiden →</Link></>,
  },
  {
    q: "Behöver fårullsisolering ångspärr?",
    aText: "Det beror på konstruktionen. Fårull hanterar fukt betydligt bättre än mineralull, men i ytterväggar med stort fuktdrivande tryck rekommenderas en variabel ångbroms (inte tät ångspärr) som samarbetar med ullens fuktbuffrande egenskaper. I innerväggar och mellanbjälklag behövs normalt ingen ångspärr. Kontakta Byeco för fri rådgivning.",
    aJsx: <>Det beror på konstruktionen. Fårull hanterar fukt betydligt bättre än mineralull, men i ytterväggar rekommenderas en <strong>variabel ångbroms</strong> (inte tät ångspärr) som samarbetar med ullens fuktbuffrande egenskaper. I innerväggar och mellanbjälklag behövs normalt ingen ångspärr. <Link href="/montering" className="text-primary hover:text-primary/80 link-grow">Läs mer i monteringsguiden →</Link></>,
  },
  {
    q: "Kan man använda fårull i våtrum?",
    aText: "Fårullsisolering rekommenderas inte i direktkontakt med vatten eller i ständigt fuktiga miljöer som badrumsväggar bakom kakel. Men den hanterar normal byggfukt och säsongsvariationer utmärkt – upp till 40 % av sin vikt utan prestandaförlust. I väggar intill våtrum fungerar den bra.",
    aJsx: <>Fårullsisolering rekommenderas inte i direktkontakt med vatten eller i ständigt fuktiga miljöer som badrumsväggar bakom kakel. Men den hanterar normal byggfukt och säsongsvariationer utmärkt – upp till <strong>40&nbsp;%</strong> av sin vikt utan prestandaförlust. I väggar <em>intill</em> våtrum fungerar den bra.</>,
  },
  {
    q: "Kan man få ROT-avdrag för fårullsisolering?",
    aText: "Ja. Montering av isolering i befintliga bostäder berättigar till ROT-avdrag – 30 % av arbetskostnaden, max 50 000 kr per person och år. Det gäller vid renovering, inte nyproduktion. Kontrollera aktuella regler på Skatteverkets webbplats.",
    aJsx: <>Ja. Montering av isolering i befintliga bostäder berättigar till <strong>ROT-avdrag – 30&nbsp;%</strong> av arbetskostnaden, max 50&nbsp;000&nbsp;kr per person och år. Det gäller vid renovering, inte nyproduktion. <Link href="/pris" className="text-primary hover:text-primary/80 link-grow">Se prisguiden för räkneexempel →</Link></>,
  },
  {
    q: "Var kan jag köpa fårullsisolering i Sverige?",
    aText: "I Norden säljer Byeco fårullsisolering från österrikiska Isolena – Europas ledande tillverkare med över 20 års erfarenhet. Byeco sitter i Göteborg och Helsingfors, erbjuder fri rådgivning, hjälper med beräkningar och har 30 dagars öppet köp.",
    aJsx: <>I Norden säljer <a href="https://byeco.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 link-grow">Byeco</a> fårullsisolering från österrikiska Isolena – Europas ledande tillverkare med över 20&nbsp;års erfarenhet. Byeco sitter i Göteborg och Helsingfors, erbjuder fri rådgivning, hjälper med beräkningar och har 30&nbsp;dagars öppet köp.</>,
  },
];

export default function FragorOchSvar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Frågor och svar om fårullsisolering – pris, brand, fukt, livslängd",
            description:
              "12 vanliga frågor om fårullsisolering med raka svar: pris, brandklass, livslängd, fukthantering, skadedjur, montering och ROT-avdrag.",
            url: "https://farull.se/fragor-och-svar",
            datePublished: "2025-03-01",
            dateModified: "2026-03-17",
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
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Frågor och svar" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          FAQ
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vanliga frågor om fårullsisolering
        </h1>
      </ScrollReveal>

      <ScrollReveal>
        <p className="max-w-3xl font-body text-foreground/80 text-lg leading-relaxed mb-12">
          <strong>Fårullsisolering väcker frågor – bra frågor.</strong> Här
          har vi samlat de 12 vanligaste, med raka svar och konkreta siffror.
          Hittar du inte det du söker? Kontakta{" "}
          <a href="https://byeco.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 link-grow">
            Byeco
          </a>{" "}
          för fri rådgivning.
        </p>
      </ScrollReveal>

      <div className="max-w-3xl space-y-6">
        {faq.map((item, i) => (
          <ScrollReveal key={i}>
            <details className="group border-b border-foreground/10 pb-4">
              <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                {item.q}
                <span className="text-accent ml-4 transition-transform group-open:rotate-45 flex-shrink-0">+</span>
              </summary>
              <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                {item.aJsx}
              </p>
            </details>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <aside className="max-w-3xl mt-16 border-l-2 border-accent p-6 bg-primary/5">
          <p className="font-body text-foreground/80 text-base leading-relaxed">
            Hittar du inte svaret du söker? Byeco erbjuder fri rådgivning
            om fårullsisolering – produktval, beräkningar och
            konstruktionslösningar. 30&nbsp;dagars öppet köp.{" "}
            <a
              href="https://byeco.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 link-grow"
            >
              Kontakta Byeco →
            </a>
          </p>
        </aside>
      </ScrollReveal>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Läs vidare</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Tillverkning, funktion och alla egenskaper i detalj.</p>
            </li>
            <li>
              <Link href="/montering" className="link-grow text-lg font-medium text-foreground">
                Monteringsguide →
              </Link>
              <p className="text-foreground/60 mt-1">Steg för steg – väggar, tak, golv och vanliga misstag.</p>
            </li>
            <li>
              <Link href="/jamforelse" className="link-grow text-lg font-medium text-foreground">
                Fårull vs mineralull, cellulosa och EPS →
              </Link>
              <p className="text-foreground/60 mt-1">Detaljerad jämförelse punkt för punkt med tabell.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
