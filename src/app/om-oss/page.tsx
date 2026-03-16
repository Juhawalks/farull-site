import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Farull.se drivs av Byeco, Skandinaviens specialistbutik för fårullsisolering. Vi sitter i Rävlanda, strax utanför Göteborg.",
};

export default function OmOss() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Om oss
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Vi tror på material som gör nytta
        </h1>
      </ScrollReveal>

      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
        alt="Kontor och teamarbete"
        loading="eager"
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Farull.se drivs av Byeco, Skandinaviens specialistbutik för
            fårullsisolering. Vi säljer produkter från österrikiska Isolena
            och hjälper byggare, arkitekter och husägare att välja rätt
            isolering.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Varför den här sajten?
          </h2>
          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80"
              alt="Skrivbord med dator och anteckningar"
              loading="lazy"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
              Det saknades bra, samlad information om fårull på svenska – så vi byggde den
            </figcaption>
          </figure>
          <p>
            Vi märkte att det saknades bra, samlad information om fårull och
            fårullsisolering på svenska. Det finns mycket att lära, och mycket
            att vinna på att fler förstår hur materialet fungerar. Farull.se
            är vårt sätt att dela den kunskapen.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Byeco
          </h2>
          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Modernt kontor med naturligt ljus"
              loading="lazy"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
              Byeco – kontor i Rävlanda utanför Göteborg och i Helsingfors
            </figcaption>
          </figure>
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
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Kontakta oss
          </h2>
          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80"
              alt="Kommunikation och kontakt"
              loading="lazy"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
              Vi svarar gärna på frågor om fårullsisolering och materialet
            </figcaption>
          </figure>
          <p>
            Har du frågor om fårullsisolering, materialet eller något du
            läst här? Hör av dig.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary/80 link-grow">
              Till kontaktsidan
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
