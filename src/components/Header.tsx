"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const farullNav = [
  { label: "Vad är fårull?", href: "/farull" },
  { label: "Svenska fårraser", href: "/farraser" },
  { label: "Användningsområden", href: "/anvandningsomraden" },
  { label: "Ullens historia", href: "/ullens-historia" },
];

const isoleringNav = [
  { label: "Vad är fårullsisolering?", href: "/vad-ar-farullsisolering" },
  { label: "Fördelar", href: "/fordelar" },
  { label: "Jämförelse", href: "/jamforelse" },
  { label: "Montering", href: "/montering" },
  { label: "Frågor & svar", href: "/fragor-och-svar" },
  { label: "Hållbarhet", href: "/hallbarhet" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [farullOpen, setFarullOpen] = useState(false);
  const [isoleringOpen, setIsoleringOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-[20px] shadow-sm border-b border-surface/50"
          : "bg-background/60 backdrop-blur-[12px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-primary">
              Farull.se
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Fårull dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setFarullOpen(true)}
              onMouseLeave={() => setFarullOpen(false)}
            >
              <button className="text-sm font-body text-foreground/70 hover:text-primary transition-colors px-3 py-2">
                Fårull
              </button>
              {farullOpen && (
                <div className="absolute top-full left-0 bg-background/95 backdrop-blur-[16px] border border-surface/60 shadow-lg py-2 min-w-[220px]">
                  {farullNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-body text-foreground/70 hover:text-primary hover:bg-surface/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Isolering dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsoleringOpen(true)}
              onMouseLeave={() => setIsoleringOpen(false)}
            >
              <button className="text-sm font-body text-foreground/70 hover:text-primary transition-colors px-3 py-2">
                Isolering
              </button>
              {isoleringOpen && (
                <div className="absolute top-full left-0 bg-background/95 backdrop-blur-[16px] border border-surface/60 shadow-lg py-2 min-w-[220px]">
                  {isoleringNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-body text-foreground/70 hover:text-primary hover:bg-surface/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/om-oss"
              className="text-sm font-body text-foreground/70 hover:text-primary transition-colors px-3 py-2"
            >
              Om oss
            </Link>
            <Link
              href="/kontakt"
              className="text-sm font-body text-foreground/70 hover:text-primary transition-colors px-3 py-2"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="lg:hidden pb-6 border-t border-surface/50 pt-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 font-body px-1 pt-2 pb-1">
                Fårull
              </p>
              {farullNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-body text-foreground/70 hover:text-primary transition-colors py-1.5 px-1"
                >
                  {item.label}
                </Link>
              ))}

              <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 font-body px-1 pt-4 pb-1">
                Isolering
              </p>
              {isoleringNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-body text-foreground/70 hover:text-primary transition-colors py-1.5 px-1"
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-surface/50 mt-3 pt-3">
                <Link
                  href="/om-oss"
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-body text-foreground/70 hover:text-primary transition-colors py-1.5 px-1"
                >
                  Om oss
                </Link>
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-body text-foreground/70 hover:text-primary transition-colors py-1.5 px-1"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
