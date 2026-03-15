import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta oss för frågor om fårullsisolering. Vi finns i Rävlanda, strax utanför Göteborg.",
};

export default function Kontakt() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-heading text-5xl font-bold text-primary mb-6">
        Kontakt
      </h1>
      <p className="font-body text-lg text-foreground/70">Innehåll kommer snart.</p>
    </div>
  );
}
