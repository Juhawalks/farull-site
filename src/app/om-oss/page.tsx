import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Farull.se drivs av Byeco, Skandinaviens specialistbutik för fårullsisolering. Vi sitter i Rävlanda, strax utanför Göteborg.",
  openGraph: {
    title: "Om oss",
    description:
      "Farull.se drivs av Byeco, Skandinaviens specialistbutik för fårullsisolering. Vi sitter i Rävlanda, strax utanför Göteborg.",
  },
  alternates: {
    canonical: "/om-oss",
  },
};

export default function OmOss() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
        alt="Kontor och teamarbete"
        width={800}
        height={533}
        priority
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Farull.se drivs av Byeco, Skandinaviens specialistbutik för
            fårullsisolering. Vi säljer produkter från österrikiska Isolena
            och hjälper byggare, arkitekter och husägare att välja rätt
            isolering.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Varför den här sajten?
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80"
                alt="Skrivbord med dator och anteckningar"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Det saknades bra, samlad information om fårull på svenska – så vi byggde den
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Vi märkte att det saknades bra, samlad information om fårull och{" "}
                <Link href="/vad-ar-farullsisolering" className="text-primary hover:text-primary/80 link-grow">fårullsisolering</Link> på svenska. Det finns mycket att lära, och mycket
                att vinna på att fler förstår hur materialet fungerar. Farull.se
                är vårt sätt att dela den kunskapen.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground pt-4">
            Byeco
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modernt kontor med naturligt ljus"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Byeco – kontor i Rävlanda utanför Göteborg och i Helsingfors
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Byeco har kontor i Rävlanda utanför Göteborg och i Helsingfors.
                Vi erbjuder fri rådgivning, hjälper med beräkningar av
                isoleringsmängd och har 30 dagars öppet köp på alla produkter.
              </p>
              <p className="mt-4">
                <a
                  href="https://byeco.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 link-grow"
                >
                  Besök Byeco.se
                </a>
              </p>
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
                alt="Kommunikation och kontakt"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/60 font-body mt-3 text-center italic">
                Vi svarar gärna på frågor om fårullsisolering och materialet
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Har du frågor om fårullsisolering, materialet eller något du
                läst här? Hör av dig.
              </p>
              <p className="mt-4">
                <a href="mailto:info@byeco.se" className="text-primary hover:text-primary/80 link-grow">
                  Skicka ett mejl →
                </a>
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
              <Link href="/vad-ar-farullsisolering" className="link-grow text-lg font-medium text-foreground">
                Vad är fårullsisolering? →
              </Link>
              <p className="text-foreground/60 mt-1">Lär dig mer om materialet vi brinner för.</p>
            </li>
            <li>
              <Link href="/hallbarhet" className="link-grow text-lg font-medium text-foreground">
                Hållbarhet →
              </Link>
              <p className="text-foreground/60 mt-1">Varför fårull är framtidens hållbara val.</p>
            </li>
            <li>
              <Link href="/fragor-och-svar" className="link-grow text-lg font-medium text-foreground">
                Frågor och svar →
              </Link>
              <p className="text-foreground/60 mt-1">Vanliga funderingar om fårullsisolering.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
