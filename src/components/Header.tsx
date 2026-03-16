"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const farullNav = [
  { label: "Vad är fårull?", href: "/farull" },
  { label: "Svenska fårraser", href: "/farraser" },
  { label: "Användningsområden", href: "/anvandningsomraden" },
  { label: "Ullens historia", href: "/ullens-historia" },
];

const isoleringNav = [
  { label: "Vad är fårullsisolering?", href: "/vad-ar-farullsisolering" },
  { label: "Fördelar", href: "/fordelar" },
  { label: "Pris", href: "/pris" },
  { label: "Jämförelse", href: "/jamforelse" },
  { label: "Montering", href: "/montering" },
  { label: "Teknisk data", href: "/teknisk-data" },
  { label: "Frågor & svar", href: "/fragor-och-svar" },
  { label: "Hållbarhet", href: "/hallbarhet" },
];

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        const button = ref.current?.querySelector("button");
        button?.focus();
      }
    },
    []
  );

  const handleBlur = useCallback((e: React.FocusEvent) => {
    if (!ref.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  }, []);

  return { open, setOpen, ref, handleMouseEnter, handleMouseLeave, handleKeyDown, handleBlur };
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const farull = useDropdown();
  const isolering = useDropdown();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 border-b ${
        scrolled
          ? "bg-[rgba(250,247,242,0.8)] backdrop-blur-[20px] border-[rgba(26,25,22,0.06)] shadow-sm"
          : "bg-[rgba(250,247,242,0.8)] backdrop-blur-[20px] border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-heading text-2xl font-semibold text-foreground">
            Farull.se
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Huvudmeny">
            {/* Fårull dropdown */}
            <div
              ref={farull.ref}
              className="relative"
              onMouseEnter={farull.handleMouseEnter}
              onMouseLeave={farull.handleMouseLeave}
              onKeyDown={farull.handleKeyDown}
              onBlur={farull.handleBlur}
            >
              <button
                className="link-grow uppercase text-xs tracking-wider font-body text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
                aria-expanded={farull.open}
                aria-haspopup="true"
                onClick={() => farull.setOpen(!farull.open)}
              >
                Fårull
              </button>
              {farull.open && (
                <div className="absolute top-full left-0 bg-[rgba(250,247,242,0.95)] backdrop-blur-[20px] border border-[rgba(26,25,22,0.06)] shadow-lg py-2 min-w-[220px]">
                  {farullNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-body text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Isolering dropdown */}
            <div
              ref={isolering.ref}
              className="relative"
              onMouseEnter={isolering.handleMouseEnter}
              onMouseLeave={isolering.handleMouseLeave}
              onKeyDown={isolering.handleKeyDown}
              onBlur={isolering.handleBlur}
            >
              <button
                className="link-grow uppercase text-xs tracking-wider font-body text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
                aria-expanded={isolering.open}
                aria-haspopup="true"
                onClick={() => isolering.setOpen(!isolering.open)}
              >
                Isolering
              </button>
              {isolering.open && (
                <div className="absolute top-full left-0 bg-[rgba(250,247,242,0.95)] backdrop-blur-[20px] border border-[rgba(26,25,22,0.06)] shadow-lg py-2 min-w-[220px]">
                  {isoleringNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-body text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/om-oss"
              className="link-grow uppercase text-xs tracking-wider font-body text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
            >
              Om oss
            </Link>
            <Link
              href="/kontakt"
              className="link-grow uppercase text-xs tracking-wider font-body text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
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
              aria-hidden="true"
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
          <nav className="lg:hidden pb-6 border-t border-[rgba(26,25,22,0.06)] pt-4" aria-label="Mobilmeny">
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 font-body px-1 pt-2 pb-1">
                Fårull
              </p>
              {farullNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-body text-foreground/70 hover:text-foreground transition-colors py-1.5 px-1"
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
                  className="text-base font-body text-foreground/70 hover:text-foreground transition-colors py-1.5 px-1"
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-[rgba(26,25,22,0.06)] mt-3 pt-3">
                <Link
                  href="/om-oss"
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-body text-foreground/70 hover:text-foreground transition-colors py-1.5 px-1"
                >
                  Om oss
                </Link>
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-body text-foreground/70 hover:text-foreground transition-colors py-1.5 px-1"
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
