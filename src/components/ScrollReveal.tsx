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

    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
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
