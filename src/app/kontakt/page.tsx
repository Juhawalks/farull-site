import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta oss för frågor om fårullsisolering. Vi finns i Rävlanda, strax utanför Göteborg.",
};

export default function Kontakt() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <ScrollReveal>
        <p className="uppercase tracking-[0.12em] text-accent text-sm font-body mb-4">
          Kontakt
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-8 max-w-3xl">
          Hör av dig
        </h1>
      </ScrollReveal>

      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
        alt="Modern byggnad och arkitektur"
        loading="eager"
        className="w-full h-56 object-cover rounded-2xl mb-12"
      />

      <div className="max-w-3xl space-y-6 font-body text-foreground/80 text-base leading-relaxed">
        <ScrollReveal>
          <p>
            Har du frågor om fårullsisolering, behöver hjälp med beräkningar
            eller vill veta mer om något du läst här? Vi svarar gärna.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            <div className="card-hover bg-surface/50 p-8 border border-surface">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Ring oss
              </h2>
              <p className="text-foreground/70 mb-2">Vardagar 8-17</p>
              <a
                href="tel:+46313204288"
                className="text-primary hover:text-primary/80 font-medium link-grow"
              >
                +46 31 320 42 88
              </a>
            </div>

            <div className="card-hover bg-surface/50 p-8 border border-surface">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Mejla oss
              </h2>
              <p className="text-foreground/70 mb-2">Vi svarar inom 24 timmar</p>
              <a
                href="mailto:info@byeco.se"
                className="text-primary hover:text-primary/80 font-medium link-grow"
              >
                info@byeco.se
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Besöksadress
            </h2>
            <address className="not-italic text-foreground/70">
              <p className="font-medium text-foreground">Byeco HQ</p>
              <p>Åvägen 51</p>
              <p>438 51 Rävlanda</p>
            </address>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 p-8 bg-primary/5 border border-primary/10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Vill du beställa isolering?
            </h2>
            <p className="text-foreground/70 mb-4">
              All försäljning och beställning sker via Byeco.se. Där kan du
              också boka en kostnadsfri rådgivning.
            </p>
            <a
              href="https://byeco.se"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Besök Byeco.se
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
