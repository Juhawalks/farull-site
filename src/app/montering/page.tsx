import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Montering av fårullsisolering. Steg för steg.",
  description:
    "Steg-för-steg guide för montering av fårullsisolering i väggar, tak och golv. Inga specialverktyg behövs.",
  openGraph: {
    title: "Montering av fårullsisolering. Steg för steg.",
    description:
      "Steg-för-steg guide för montering av fårullsisolering i väggar, tak och golv. Inga specialverktyg behövs.",
  },
  alternates: {
    canonical: "/montering",
  },
};

export default function Montering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Montering" }]} />
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Guide
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Montera fårullsisolering
        </h1>
      </ScrollReveal>

      <Image
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
        alt="Händer som arbetar med hantverk och montering"
        width={800}
        height={533}
        priority
        className="w-full h-64 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-5xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Det enklaste sättet att beskriva monteringen: klipp och tryck.
            Fårullsisolering kräver inga specialverktyg, ingen
            skyddsutrustning och inga komplicerade tekniker. Det är en av
            materialets stora fördelar.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Verktyg du behöver
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
                alt="Enkla handverktyg – sax och måttband"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Allt du behöver: sax, måttband och eventuellt en häftpistol
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Sax eller brödskniv (inget mer avancerat)</li>
                <li>Måttband</li>
                <li>Eventuellt häftpistol för att fästa i snedtak</li>
              </ul>
              <p className="mt-4">
                Ingen mask. Inga handskar. Ingen skyddsoverall. Materialet kliar
                inte och dammar inte.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Ytterväggar
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Väggkonstruktion med regelverk"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Klipp 10–20 mm bredare än regelavståndet – fibrerna fyller ut själva
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Mät regelavståndet. Klipp isoleringsskivan 10-20 mm bredare än
                fallet. Tryck in den mellan reglarna. Fibrerna fjädrar och fyller
                ut hålrummet av sig själva, utan springor vid kanterna.
              </p>
              <p className="mt-4">
                I ytterväggar med vindskyddsskiva behövs normalt en luftspalt
                på utsidan. Kontrollera konstruktionsritningen för just ditt
                bygge.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Snedtak
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80"
                alt="Takkonstruktion med synliga takstolar"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                I snedtak kan isoleringen behöva fästas med häftklamrar eller nät
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Samma princip som väggar, men du kan behöva fästa isoleringen
                med häftklamrar eller nät underifrån för att förhindra att den
                glider ner. Fårullens lätthet (lägre densitet än mineralull)
                gör att den sitter bra med minimal fixering.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Vindsbjälklag
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1513467535987-db81bc0d11f6?w=800&q=80"
                alt="Öppet vindsutrymme"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Lägg skivorna direkt på bjälklaget – fårull hanterar fukten naturligt
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Lägg isoleringsskivorna direkt på bjälklaget. Fårull fungerar bra
                i öppna vindsutrymmen. Fukten hanteras naturligt och materialet
                sjunker inte ihop med åren.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Golv och mellanbjälklag
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80"
                alt="Golvkonstruktion med reglar"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Fårull i mellanbjälklag ger både termisk och akustisk isolering
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <p>
                Klipp och lägg mellan golvreglarna. Fårullsisolering i
                mellanbjälklag ger bra ljudisolering, inte bara termisk
                isolering. Stegljud och luftburet ljud dämpas effektivt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Vanliga misstag att undvika
          </h2>
          <div className="mt-6 flex flex-col md:flex-row-reverse md:gap-8 lg:gap-12 md:items-start">
            <figure className="mb-6 md:mb-0 md:w-72 lg:w-80 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507206130118-b5907f817163?w=800&q=80"
                alt="Noggrant hantverksarbete"
                width={800}
                height={533}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <figcaption className="text-sm text-foreground/50 font-body mt-3 text-center italic">
                Hellre för brett än för smalt – och komprimera aldrig materialet
              </figcaption>
            </figure>
            <div className="md:flex-1 min-w-0">
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Klipp inte för smalt. Hellre 10-20 mm för brett än för snävt.</li>
                <li>Komprimera inte materialet. Isoleringen fungerar tack vare luftfickorna i fibrerna.</li>
                <li>Glöm inte ventilation i konstruktionen. Fårull hanterar fukt bra, men fukt behöver fortfarande kunna ventileras bort.</li>
              </ul>
              <p className="mt-4">
                <Link href="/fragor-och-svar" className="text-primary hover:text-primary/80 link-grow">
                  Fler frågor om montering?
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
