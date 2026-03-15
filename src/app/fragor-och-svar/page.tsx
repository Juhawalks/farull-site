import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frågor och svar om fårullsisolering",
  description: "Vanliga frågor och svar om fårullsisolering — pris, livslängd, brandklass, fukt och mer.",
};

export default function FragorOchSvar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-heading text-5xl font-bold text-primary mb-6">
        Frågor och svar
      </h1>
      <p className="font-body text-lg text-foreground/70">Innehåll kommer snart.</p>
    </div>
  );
}
