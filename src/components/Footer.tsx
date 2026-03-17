import Link from "next/link";
import { FarullLogo } from "./FarullLogo";

const farullLinks = [
  { label: "Vad är fårull?", href: "/farull" },
  { label: "Svenska fårraser", href: "/farraser" },
  { label: "Fårklippning", href: "/farklippning" },
  { label: "Svensk ull", href: "/svensk-ull" },
  { label: "Användningsområden", href: "/anvandningsomraden" },
  { label: "Ullens historia", href: "/ullens-historia" },
];

const isoleringLinks = [
  { label: "Vad är fårullsisolering?", href: "/vad-ar-farullsisolering" },
  { label: "Fördelar", href: "/fordelar" },
  { label: "Pris", href: "/pris" },
  { label: "Jämförelse", href: "/jamforelse" },
  { label: "Montering", href: "/montering" },
  { label: "Teknisk data", href: "/teknisk-data" },
  { label: "Frågor & svar", href: "/fragor-och-svar" },
  { label: "Hållbarhet", href: "/hallbarhet" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Om sajten */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-heading text-2xl font-semibold text-white">
              <FarullLogo size={28} />
              Farull.se
            </Link>
            <p className="text-sm font-body text-white/60 leading-relaxed mt-4">
              Allt om fårull och fårullsisolering. Oberoende kunskap om
              materialet, egenskaperna och varför det spelar roll.
            </p>
            <p className="text-sm font-body text-white/50 mt-4">
              Drivs av{" "}
              <a
                href="https://byeco.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Byeco AB
              </a>
              {" "}· Göteborg
            </p>
          </div>

          {/* Fårull */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Fårull
            </h3>
            <nav className="flex flex-col gap-2">
              {farullLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-body text-white/70 hover:text-accent transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Isolering */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Isolering
            </h3>
            <nav className="flex flex-col gap-2">
              {isoleringLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-body text-white/70 hover:text-accent transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs font-body text-white/50">
            © {new Date().getFullYear()} Farull.se
          </p>
        </div>
      </div>
    </footer>
  );
}
