import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hållbarhet — Fårull som miljöval",
  description: "Fårullsisolering är ett av de mest hållbara isoleringsmaterialen. Läs om miljöpåverkan, cirkularitet och klimatnytta.",
};

export default function Hallbarhet() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-heading text-5xl font-bold text-primary mb-6">
        Hållbarhet
      </h1>
      <p className="font-body text-lg text-foreground/70">Innehåll kommer snart.</p>
    </div>
  );
}
