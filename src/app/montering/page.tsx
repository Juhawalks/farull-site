import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Montering av fårullsisolering. Steg för steg.",
  description:
    "Steg-för-steg guide för montering av fårullsisolering i väggar, tak och golv. Inga specialverktyg behövs.",
};

export default function Montering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Guide
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Montera fårullsisolering
        </h1>
      </ScrollReveal>

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
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
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Sax eller brödskniv (inget mer avancerat)</li>
            <li>Måttband</li>
            <li>Eventuellt häftpistol för att fästa i snedtak</li>
          </ul>
          <p className="mt-4">
            Ingen mask. Inga handskar. Ingen skyddsoverall. Materialet kliar
            inte och dammar inte.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Ytterväggar
          </h2>
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
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Snedtak
          </h2>
          <p>
            Samma princip som väggar, men du kan behöva fästa isoleringen
            med häftklamrar eller nät underifrån för att förhindra att den
            glider ner. Fårullens lätthet (lägre densitet än mineralull)
            gör att den sitter bra med minimal fixering.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Vindsbjälklag
          </h2>
          <p>
            Lägg isoleringsskivorna direkt på bjälklaget. Fårull fungerar bra
            i öppna vindsutrymmen. Fukten hanteras naturligt och materialet
            sjunker inte ihop med åren.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Golv och mellanbjälklag
          </h2>
          <p>
            Klipp och lägg mellan golvreglarna. Fårullsisolering i
            mellanbjälklag ger bra ljudisolering, inte bara termisk
            isolering. Stegljud och luftburet ljud dämpas effektivt.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground pt-4">
            Vanliga misstag att undvika
          </h2>
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
        </ScrollReveal>
      </div>
    </div>
  );
}
