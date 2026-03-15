import Link from "next/link";

const farullLinks = [
  { label: "Vad är fårull?", href: "/farull" },
  { label: "Svenska fårraser", href: "/farraser" },
  { label: "Användningsområden", href: "/anvandningsomraden" },
  { label: "Ullens historia", href: "/ullens-historia" },
];

const isoleringLinks = [
  { label: "Vad är fårullsisolering?", href: "/vad-ar-farullsisolering" },
  { label: "Fördelar", href: "/fordelar" },
  { label: "Jämförelse", href: "/jamforelse" },
  { label: "Montering", href: "/montering" },
  { label: "Frågor & svar", href: "/fragor-och-svar" },
  { label: "Hållbarhet", href: "/hallbarhet" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl font-bold mb-4">Farull.se</h2>
            <p className="font-body text-white/70 text-sm leading-relaxed">
              Allt om fårull — från fiber och fårraser till byggisolering, montering och hållbarhet.
            </p>
          </div>

          {/* Fårull */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Fårull</h3>
            <nav className="flex flex-col gap-2">
              {farullLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-body text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Isolering */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Isolering</h3>
            <nav className="flex flex-col gap-2">
              {isoleringLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-body text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Kontakt</h3>
            <address className="not-italic font-body text-sm text-white/70 space-y-2">
              <p className="font-medium text-white">Byeco HQ</p>
              <p>Åvägen 51</p>
              <p>438 51 Rävlanda</p>
              <p className="pt-2">
                <a
                  href="tel:+46313204288"
                  className="hover:text-white transition-colors"
                >
                  +46 31 320 42 88
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@byeco.se"
                  className="hover:text-white transition-colors"
                >
                  info@byeco.se
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col items-center gap-2">
          <p className="text-sm font-body text-white/50">
            © {new Date().getFullYear()} Byeco AB. Alla rättigheter förbehållna.
          </p>
          <p className="text-xs font-body text-white/40">
            farull.se drivs av{" "}
            <a
              href="https://byeco.se"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              Byeco
            </a>
            {" "}— Skandinaviens specialistbutik för fårullsisolering
          </p>
        </div>
      </div>
    </footer>
  );
}
