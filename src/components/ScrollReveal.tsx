"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global GSAP ScrollTrigger observer.
 * Handles .reveal elements, .reveal-stagger containers, and .parallax-img images.
 * Watches for new elements added by client-side navigation.
 */
export function ScrollRevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function initAnimations() {
      // Reveal elements (fade up)
      gsap.utils.toArray<HTMLElement>(".reveal:not(.gsap-init)").forEach((el) => {
        el.classList.add("gsap-init");

        if (prefersReducedMotion) {
          gsap.set(el, { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Stagger containers — animate direct children
      gsap.utils
        .toArray<HTMLElement>(".reveal-stagger:not(.gsap-stagger-init)")
        .forEach((container) => {
          container.classList.add("gsap-stagger-init");
          const children = container.children;

          if (prefersReducedMotion) {
            gsap.set(children, { opacity: 1, y: 0 });
            return;
          }

          gsap.fromTo(
            children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: container,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // Parallax images
      gsap.utils
        .toArray<HTMLElement>(".parallax-img:not(.gsap-parallax-init)")
        .forEach((img) => {
          img.classList.add("gsap-parallax-init");

          if (prefersReducedMotion) return;

          gsap.to(img, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".parallax-wrap") || img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        });
    }

    // Initial run
    initAnimations();

    // Watch for new elements added by client-side navigation
    const mo = new MutationObserver((mutations) => {
      let hasNewNodes = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          hasNewNodes = true;
          break;
        }
      }
      if (hasNewNodes) {
        // Small delay to let React finish rendering
        requestAnimationFrame(() => {
          initAnimations();
          ScrollTrigger.refresh();
        });
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}

/**
 * Wrapper component — wraps children in a div with "reveal" class.
 * GSAP ScrollTrigger picks up .reveal elements automatically.
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
