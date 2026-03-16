"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Global scroll reveal observer — renders nothing, just observes all .reveal elements.
 * Import once in layout.tsx.
 */
export function ScrollRevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    function observeAll() {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add("visible");
        } else {
          io.observe(el);
        }
      });
    }

    // Observe existing elements
    observeAll();

    // Watch for new .reveal elements added by client-side navigation
    const mo = new MutationObserver((mutations) => {
      let hasNewNodes = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          hasNewNodes = true;
          break;
        }
      }
      if (hasNewNodes) observeAll();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

/**
 * Wrapper component for backwards compatibility with existing pages.
 * Wraps children in a div with "reveal" class so the global observer picks it up.
 */
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  stagger = false,
}: ScrollRevealProps) {
  return (
    <div className={`reveal ${stagger ? "reveal-stagger" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
