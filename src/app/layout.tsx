import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollRevealObserver } from "@/components/ScrollReveal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = "https://farull.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fårullsisolering — Naturlig isolering för ditt hem",
    template: "%s — Farull.se",
  },
  description:
    "Allt om fårullsisolering: fördelar, montering, jämförelser och hållbarhet. Naturlig isolering som andas.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Farull.se",
    url: siteUrl,
    title: "Fårullsisolering — Naturlig isolering för ditt hem",
    description:
      "Allt om fårullsisolering: fördelar, montering, jämförelser och hållbarhet. Naturlig isolering som andas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Fårull – naturlig isolering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Farull.se",
              url: siteUrl,
              description:
                "Allt om fårull och fårullsisolering. Drivs av Byeco, Skandinaviens specialistbutik för fårullsisolering.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Åvägen 51",
                addressLocality: "Rävlanda",
                postalCode: "438 51",
                addressCountry: "SE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+46313204288",
                email: "info@byeco.se",
                contactType: "customer service",
                availableLanguage: "Swedish",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${outfit.variable} font-body antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <ScrollRevealObserver />
      </body>
    </html>
  );
}
