import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollRevealObserver } from "@/components/ScrollReveal";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { CookieConsent } from "@/components/CookieConsent";
import { TrackOutbound } from "@/components/TrackOutbound";

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
  icons: {
    icon: [
      { url: "/icon-light.svg", media: "(prefers-color-scheme: light)", type: "image/svg+xml" },
      { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)", type: "image/svg+xml" },
    ],
  },
  title: {
    default: "Fårullsisolering – Naturlig isolering för ditt hem",
    template: "%s – Farull.se",
  },
  description:
    "Allt om fårullsisolering: fördelar, montering, jämförelser och hållbarhet. Naturlig isolering som andas.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Farull.se",
    url: siteUrl,
    title: "Fårullsisolering – Naturlig isolering för ditt hem",
    description:
      "Allt om fårullsisolering: fördelar, montering, jämförelser och hållbarhet. Naturlig isolering som andas.",
    images: [
      {
        url: "https://farull.se/images/farull-5.jpg",
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
        <GoogleTagManager />
        <meta name="theme-color" content="#FAF7F2" />
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-body"
        >
          Hoppa till innehåll
        </a>
        <GoogleTagManagerNoScript />
        <Header />
        <main id="main" className="min-h-screen pt-20">{children}</main>
        <Footer />
        <ScrollRevealObserver />
        <TrackOutbound />
        <CookieConsent />
      </body>
    </html>
  );
}
