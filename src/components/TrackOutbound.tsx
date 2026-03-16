"use client";

import { useEffect } from "react";

/**
 * Tracks outbound link clicks to byeco.se via GTM dataLayer.
 * Attaches a single delegated listener on document.body.
 */
export function TrackOutbound() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.href;
      if (href.includes("byeco.se")) {
        if (typeof window !== "undefined" && (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer) {
          (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({
            event: "outbound_click",
            outbound_url: href,
            link_text: link.textContent?.trim() || "",
          });
        }
      }
    }

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  return null;
}
