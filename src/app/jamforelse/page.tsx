import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jämförelse — Fårull vs andra isoleringsmaterial",
  description: "Jämför fårullsisolering med mineralull, cellulosa och EPS. Se skillnaderna i prestanda, hållbarhet och pris.",
};

export default function Jamforelse() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-heading text-5xl font-bold text-primary mb-6">
        Jämförelse med andra material
      </h1>
      <p className="font-body text-lg text-foreground/70">Innehåll kommer snart.</p>
    </div>
  );
}
