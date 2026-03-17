import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Om Farull.se och Byeco — Sveriges kunskapsresurs om fårull | Farull.se",
  description:
    "Farull.se är Sveriges mest kompletta kunskapsresurs om fårull och fårullsisolering. Drivs av Byeco AB i Rävlanda — Nordens specialist på Isolena fårullsisolering.",
  openGraph: {
    title: "Om Farull.se och Byeco — Sveriges kunskapsresurs om fårull",
    description:
      "Farull.se är Sveriges mest kompletta kunskapsresurs om fårull och fårullsisolering. Drivs av Byeco AB i Rävlanda — Nordens specialist på Isolena fårullsisolering.",
  },
  alternates: {
    canonical: "/om-oss",
  },
};

export default function OmOss() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Om Farull.se och Byeco — Sveriges kunskapsresurs om fårull",
            description:
              "Farull.se är Sveriges mest kompletta kunskapsresurs om fårull och fårullsisolering. Drivs av Byeco AB.",
            url: "https://farull.se/om-oss",
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
            "@type": "Organization",
            name: "Byeco AB",
            url: "https://byeco.se",
            telephone: "+46313204288",
            email: "info@byeco.se",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Åvägen 51",
              addressLocality: "Rävlanda",
              postalCode: "438 51",
              addressCountry: "SE",
            },
            areaServed: ["SE", "FI", "NO", "DK"],
            description: "Nordens specialist på fårullsisolering från österrikiska Isolena.",
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
                name: "Vem står bakom Farull.se?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Farull.se drivs av Byeco AB (org.nr 559346-1488), Nordens specialist på fårullsisolering. Byeco säljer produkter från österrikiska Isolena — Europas ledande tillverkare med över 20 års erfarenhet. Kontor i Rävlanda utanför Göteborg och i Helsingfors.",
                },
              },
              {
                "@type": "Question",
                name: "Varför finns Farull.se?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Det saknades bra, samlad information om fårull och fårullsisolering på svenska. Farull.se är en oberoende kunskapsresurs som samlar forskning, teknisk data och praktisk vägledning — för husägare, byggare och arkitekter som vill förstå materialet på djupet.",
                },
              },
              {
                "@type": "Question",
                name: "Hur kontaktar jag Byeco?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "E-post: info@byeco.se. Telefon: +46 31 320 42 88. Webbplats: byeco.se. Byeco erbjuder fri rådgivning, hjälper med materialberäkningar och har 30 dagars öppet köp på alla produkter.",
                },
              },
            ],
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Om oss" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Om oss
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vi tror på material som gör nytta
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
        alt="Byeco — Nordens specialist på fårullsisolering från Isolena"
        width={800}
        height={533}
        priority
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p className="text-lg leading-relaxed">
            <strong>Farull.se är Sveriges mest kompletta kunskapsresurs om
            fårull och fårullsisolering.</strong> Här samlar vi forskning,
            teknisk data, praktiska guider och ärliga jämförelser — allt du
            behöver för att förstå materialet på djupet. Sajten drivs av
            Byeco AB, Nordens specialist på fårullsisolering.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Varför Farull.se finns
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80"
                alt="Kunskapsresurs om fårull — det saknades bra information på svenska"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Det saknades bra, samlad information om fårull på svenska
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Vi märkte att det saknades bra, samlad information om fårull
                och{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">
                  fårullsisolering
                </Link>{" "}
                på svenska. Den information som fanns var utspridd, ofta
                föråldrad och sällan baserad på forskning.
              </p>
              <p className="mt-4">
                Fårull är ett fascinerande material med dokumenterade
                egenskaper som få känner till: att det{" "}
                <Link href="/fordelar" className="text-primary hover:text-primary/80 link-grow">
                  renar inomhusluft från formaldehyd
                </Link>, absorberar{" "}
                <strong>40&nbsp;% fukt utan prestandaförlust</strong>,
                har en{" "}
                <Link href="/teknisk-data" className="text-primary hover:text-primary/80 link-grow">
                  certifierad livslängd på 75&nbsp;år
                </Link>{" "}
                och binder mer koldioxid än det släpper ut.
              </p>
              <p className="mt-4">
                Farull.se är vårt sätt att dela den kunskapen — fritt
                tillgänglig för alla som vill lära sig mer. Vi tror att bättre
                kunskap leder till bättre beslut, oavsett om du sedan väljer
                fårull eller ett annat material.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Vad du hittar här
          </h2>
          <div className="mt-6">
            <p>
              Farull.se täcker allt du behöver veta om fårull — från den
              grundläggande kemin till praktiska monteringsguider:
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/farull" className="text-primary hover:text-primary/80 link-grow font-medium">
                  Fårull som material
                </Link>{" "}
                — keratinkemi, fiberstruktur, termiska och fuktreglerande
                egenskaper
              </li>
              <li>
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow font-medium">
                  Fårullsisolering
                </Link>{" "}
                — tillverkning, funktion, användningsområden och teknisk data
              </li>
              <li>
                <Link href="/jamforelse" className="text-primary hover:text-primary/80 link-grow font-medium">
                  Ärliga jämförelser
                </Link>{" "}
                — fårull mot mineralull, cellulosa och EPS med konkreta
                siffror
              </li>
              <li>
                <Link href="/montering" className="text-primary hover:text-primary/80 link-grow font-medium">
                  Praktiska guider
                </Link>{" "}
                — montering steg för steg, verktyg, vanliga misstag och
                konstruktionslösningar
              </li>
              <li>
                <Link href="/hallbarhet" className="text-primary hover:text-primary/80 link-grow font-medium">
                  Hållbarhet och forskning
                </Link>{" "}
                — LCA-data, koldioxidbindning, EU-taxonomin och
                vetenskapliga referenser
              </li>
              <li>
                <Link href="/ullens-historia" className="text-primary hover:text-primary/80 link-grow font-medium">
                  Ullens historia
                </Link>{" "}
                — 10&nbsp;000 år av mänsklig användning, från antiken till
                modern byggisolering
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Byeco — Nordens specialist på fårullsisolering
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Byeco kontor — fri rådgivning och 30 dagars öppet köp"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Byeco — kontor i Rävlanda utanför Göteborg och i Helsingfors
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Byeco AB säljer fårullsisolering från österrikiska{" "}
                <strong>Isolena</strong> — Europas ledande tillverkare med
                över 20&nbsp;års erfarenhet av ullbaserad byggisolering.
                Vi hjälper husägare, byggare och arkitekter i hela Norden
                att välja rätt produkt och konstruktionslösning.
              </p>
              <p className="mt-4">
                Vad vi erbjuder:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-foreground/80">
                <li><strong>Fri rådgivning</strong> — produktval, fuktdimensionering och konstruktionslösningar</li>
                <li><strong>Materialberäkning</strong> — skicka dina ritningar så beräknar vi mängd och kostnad</li>
                <li><strong>30&nbsp;dagars öppet köp</strong> — på alla produkter, utan förbindelse</li>
                <li><strong>Leverans i hela Norden</strong> — Sverige, Finland, Norge och Danmark</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Kontakta oss
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80"
                alt="Kontakta Byeco — fri rådgivning om fårullsisolering"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Vi svarar gärna på frågor om fårull, isolering och konstruktion
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Har du frågor om fårullsisolering, materialet eller något du
                läst på Farull.se? Hör av dig — vi hjälper gärna.
              </p>
              <div className="mt-6 space-y-3">
                <p>
                  <strong className="text-foreground">Byeco AB</strong>
                  <br />
                  Org.nr: 559346-1488
                </p>
                <p>
                  <strong className="text-foreground">Adress:</strong>{" "}
                  Åvägen 51, 438 51 Rävlanda
                </p>
                <p>
                  <strong className="text-foreground">Telefon:</strong>{" "}
                  <a href="tel:+46313204288" className="text-primary hover:text-primary/80 link-grow">
                    +46 31 320 42 88
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">E-post:</strong>{" "}
                  <a href="mailto:info@byeco.se" className="text-primary hover:text-primary/80 link-grow">
                    info@byeco.se
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Webbshop:</strong>{" "}
                  <a
                    href="https://byeco.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 link-grow"
                  >
                    byeco.se →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Vanliga frågor om Farull.se och Byeco
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Vem står bakom Farull.se?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Farull.se drivs av Byeco AB (org.nr 559346-1488), Nordens
                  specialist på fårullsisolering. Byeco säljer produkter
                  från österrikiska Isolena — Europas ledande tillverkare
                  med över 20&nbsp;års erfarenhet. Kontor i Rävlanda
                  utanför Göteborg och i Helsingfors.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Är Farull.se en säljsajt?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  Nej. Farull.se är en kunskapsresurs. Vi samlar forskning,
                  teknisk data och praktisk vägledning om fårull och
                  fårullsisolering — fritt tillgängligt för alla.
                  Försäljning och rådgivning sker via{" "}
                  <a href="https://byeco.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 link-grow">
                    Byeco.se
                  </a>.
                </p>
              </details>
            </ScrollReveal>
            <ScrollReveal>
              <details className="group border-b border-foreground/10 pb-4">
                <summary className="cursor-pointer font-body font-medium text-foreground text-lg flex items-center justify-between">
                  Hur kontaktar jag Byeco?
                  <span className="text-accent ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 font-body leading-relaxed">
                  E-post:{" "}
                  <a href="mailto:info@byeco.se" className="text-primary hover:text-primary/80 link-grow">
                    info@byeco.se
                  </a>. Telefon:{" "}
                  <a href="tel:+46313204288" className="text-primary hover:text-primary/80 link-grow">
                    +46 31 320 42 88
                  </a>. Byeco erbjuder fri rådgivning, hjälper med
                  materialberäkningar och har 30&nbsp;dagars öppet köp.
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
              <p className="text-foreground/60 mt-1">Tillverkning, funktion och alla egenskaper — vår mest kompletta guide.</p>
            </li>
            <li>
              <Link href="/hallbarhet" className="link-grow text-lg font-medium text-foreground">
                Hållbarhet →
              </Link>
              <p className="text-foreground/60 mt-1">LCA-data, koldioxidbindning och varför fårull har negativt klimatavtryck.</p>
            </li>
            <li>
              <Link href="/fragor-och-svar" className="link-grow text-lg font-medium text-foreground">
                Frågor och svar →
              </Link>
              <p className="text-foreground/60 mt-1">12 vanliga frågor med raka svar och konkreta siffror.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
