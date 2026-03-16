"use client";

import { useState, useEffect } from "react";

const CONSENT_KEY = "farull-cookie-consent";

/**
 * Simple GDPR cookie consent banner.
 * Stores consent in localStorage. GTM fires on all pages —
 * configure consent mode in GTM itself for granular control.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    // Push consent event to dataLayer for GTM
    if (typeof window !== "undefined" && (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer) {
      (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({ event: "cookie_consent_accepted" });
    }
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-samtycke"
      className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#1A1916] text-[#e8e4dd] px-6 py-4 shadow-lg"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-body text-sm leading-relaxed flex-1">
          Vi använder cookies för att förstå hur sajten används och förbättra
          upplevelsen. Ingen data säljs vidare.{" "}
          <a href="/integritetspolicy" className="underline hover:text-white">
            Läs mer
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-body text-sm px-4 py-2 border border-[#e8e4dd]/30 hover:border-[#e8e4dd]/60 transition-colors uppercase tracking-[0.08em]"
          >
            Avböj
          </button>
          <button
            onClick={accept}
            className="font-body text-sm px-4 py-2 bg-[#C8A26B] text-[#1A1916] hover:bg-[#d4b07a] transition-colors uppercase tracking-[0.08em] font-medium"
          >
            Godkänn
          </button>
        </div>
      </div>
    </div>
  );
}
