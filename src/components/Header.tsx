"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Vad är fårullsisolering?", href: "/vad-ar-farullsisolering" },
  { label: "Fördelar", href: "/fordelar" },
  { label: "Jämförelse", href: "/jamforelse" },
  { label: "Montering", href: "/montering" },
  { label: "Frågor & svar", href: "/fragor-och-svar" },
  { label: "Hållbarhet", href: "/hallbarhet" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-surface sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-primary">
              Farull.se
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-body text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://byeco.se"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-primary text-white px-5 py-2.5 rounded-soft text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Köp isolering
            </a>
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
          <nav className="lg:hidden pb-6 border-t border-surface pt-4">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-body text-foreground/70 hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-primary text-white px-5 py-2.5 rounded-soft text-sm font-medium text-center hover:bg-primary/90 transition-colors"
              >
                Köp isolering
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
