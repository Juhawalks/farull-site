import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Wind,
  Droplets,
  Flame,
  VolumeX,
  TreePine,
  Hand,
  CircleDot,
  Heart,
  Layers,
  Clock,
  Home as HomeIcon,
  ArrowLeftRight,
  Hammer,
  HelpCircle,
  Leaf,
  Thermometer,
  Globe,
  Recycle,
  Calculator,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Allt om fårull. Från fiber till byggisolering | Farull.se",
  description:
    "Fårull har isolerat människor i tusentals år. Lär dig allt om fårull som material, svenska fårraser och varför fårullsisolering är framtidens hållbara val.",
  openGraph: {
    title: "Allt om fårull. Från fiber till byggisolering | Farull.se",
    description:
      "Fårull har isolerat människor i tusentals år. Lär dig allt om fårull som material, svenska fårraser och varför fårullsisolering är framtidens hållbara val.",
  },
  alternates: {
    canonical: "/",
  },
};

const fordelar = [
  {
    title: "Luften blir renare av sig själv",
    text: "Ullfibrer fångar upp formaldehyd och andra ämnen som frigörs från möbler och byggmaterial. Tester visar att 96\u00a0% av formaldehyden absorberas inom sju timmar.",
    icon: Wind,
  },
  {
    title: "Ull som andas",
    text: "Fårull kan ta upp nästan hälften av sin egen vikt i fukt. Och här är grejen: den tappar inte isoleringsförmågan. Inget annat material klarar det.",
    icon: Droplets,
  },
  {
    title: "Brandsäker. Naturligt.",
    text: "Ull antänds inte lätt. Den kolnar, krymper ihop och självslocknar. Brandklass B1 och C, helt utan kemiska flamskyddsmedel.",
    icon: Flame,
  },
  {
    title: "Tystare rum",
    text: "Den krusiga fiberstrukturen fångar ljudvågor i flera frekvenser. Bra i mellanväggar, bjälklag och överallt där du vill ha lugn och ro.",
    icon: VolumeX,
  },
  {
    title: "Binder koldioxid istället för att släppa ut",
    text: "Mineralull kräver enorma mängder energi att tillverka. Fårull växer på ryggen av ett får, driven av gräs och solljus. Den binder CO₂ under hela sin livstid.",
    icon: TreePine,
  },
  {
    title: "Montera med bara händerna",
    text: "Inga handskar. Ingen andningsmask. Inget kliande. Du river eller klipper till rätt mått och trycker in det i regelverket. Klart.",
    icon: Hand,
  },
];

const nyckeltal = [
  { value: "0,033", label: "W/m·K lambda-värde", icon: Thermometer },
  { value: "200 000", label: "ton spillull per år i Europa", icon: Globe },
  { value: "100 %", label: "cirkulärt material", icon: Recycle },
];

const utforskaFarull = [
  {
    title: "Vad är fårull?",
    href: "/farull",
    text: "Keratin, krusighet och luftfickor. Varför ull isolerar bättre än de flesta syntetiska alternativ.",
    icon: CircleDot,
  },
  {
    title: "Svenska fårraser",
    href: "/farraser",
    text: "Gutefår, Gotlandsfår, Ryafår. Varje ras ger ull med helt olika karaktär.",
    icon: Heart,
  },
  {
    title: "Användningsområden",
    href: "/anvandningsomraden",
    text: "Kläder, akustikpaneler, odling, byggisolering. Ull gör mer än du tror.",
    icon: Layers,
  },
  {
    title: "Ullens historia",
    href: "/ullens-historia",
    text: "Från bronsålderns segelduk till moderna passivhus. 6\u00a0000 år av ull.",
    icon: Clock,
  },
];

const utforskaIsolering = [
  {
    title: "Vad är fårullsisolering?",
    href: "/vad-ar-farullsisolering",
    text: "Hur det tillverkas, hur det fungerar och vad som gör det annorlunda.",
    icon: HomeIcon,
  },
  {
    title: "Vad kostar det?",
    href: "/pris",
    text: "Materialpris, totalkostnad och räkneexempel. Ärliga siffror.",
    icon: Calculator,
  },
  {
    title: "Fårull vs mineralull",
    href: "/jamforelse",
    text: "Prestanda, pris och miljöpåverkan. Sida vid sida, utan skönmålning.",
    icon: ArrowLeftRight,
  },
  {
    title: "Monteringsguide",
    href: "/montering",
    text: "Väggar, tak och golv. Steg för steg, utan specialverktyg.",
    icon: Hammer,
  },
  {
    title: "Teknisk data",
    href: "/teknisk-data",
    text: "Lambda-värden, brandklass, densitet och certifieringar.",
    icon: ClipboardList,
  },
  {
    title: "Vanliga frågor",
    href: "/fragor-och-svar",
    text: "Pris, brandklass, livslängd. De frågor folk faktiskt ställer.",
    icon: HelpCircle,
  },
  {
    title: "Hållbarhet",
    href: "/hallbarhet",
    text: "CO₂-bindning, cirkulär ekonomi och vad EU-taxonomin säger.",
    icon: Leaf,
  },
];

function SectionDivider() {
  return (
    <div className="flex justify-center py-4">
      <div className="w-24 h-px bg-accent/30" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <p className="hero-tag flex items-center gap-3 uppercase text-xs tracking-widest text-accent font-body mb-6">
                <span className="inline-block w-8 h-[1px] bg-accent" />
                100&nbsp;% naturlig · CO₂-bindande
              </p>
              <h1 className="hero-title font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-foreground mb-8">
                Allt om fårull. Från fiber till byggisolering.
              </h1>
              <p className="hero-desc text-lg text-foreground/60 max-w-lg leading-relaxed font-body mb-10">
                Fårull har hållit oss varma i tusentals år. Nu gör den samma sak
                för våra hus. Här samlar vi allt du behöver veta om materialet,
                isoleringen och varför det spelar roll.
              </p>
              <div className="hero-actions flex flex-col sm:flex-row gap-4">
                <Link
                  href="/vad-ar-farullsisolering"
                  className="inline-block bg-primary text-white uppercase tracking-wider text-sm px-8 py-4 font-body font-medium hover:translate-y-[-2px] hover:shadow-lg transition-[transform,box-shadow] duration-300"
                >
                  Så fungerar isoleringen
                </Link>
                <Link
                  href="/jamforelse"
                  className="inline-block border border-foreground/20 uppercase tracking-wider text-sm px-8 py-4 font-body font-medium text-foreground hover:bg-foreground/5 hover:translate-y-[-2px] transition-[background-color,transform] duration-300"
                >
                  Fårull vs mineralull
                </Link>
              </div>
            </div>
            <div className="hidden lg:block parallax-wrap rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&q=80"
                alt="Fårull - naturlig isolering"
                width={800}
                height={600}
                priority
                className="parallax-img object-cover w-full h-auto scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FÖRDELAR */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="uppercase tracking-widest text-accent text-sm font-body mb-4">
              Varför fårull?
            </p>
            <h2 className="font-heading text-4xl font-semibold text-foreground mb-16">
              Sex skäl att byta till ull
            </h2>
          </div>
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            {fordelar.map((item) => (
              <div
                key={item.title}
                className="card-hover bg-white rounded-lg p-8 border border-foreground/5"
              >
                <item.icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-accent mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed font-body text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRED BILD - ULL-TEXTUR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="parallax-wrap rounded-2xl h-64 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=1200&q=80"
            alt="Närbild på ullfibrer med naturlig textur"
            width={1200}
            height={400}
            className="parallax-img w-full h-full object-cover scale-110"
          />
        </div>
      </div>

      <SectionDivider />

      {/* NYCKELTAL */}
      <section className="reveal py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nyckeltal.map((item, i) => (
              <div
                key={item.value}
                className={`text-center ${
                  i > 0 ? "md:border-l-2 md:border-accent" : ""
                }`}
              >
                <div className="flex justify-center mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-accent/10 scale-150" />
                    <item.icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-accent relative"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p className="font-heading text-5xl text-primary font-semibold mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-foreground/50 font-body">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* UTFORSKA FÅRULL */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="uppercase tracking-widest text-accent text-sm font-body mb-4">
              Fårull som material
            </p>
            <h2 className="font-heading text-4xl font-semibold text-foreground mb-16">
              Utforska fårullens värld
            </h2>
          </div>
          <div className="parallax-wrap rounded-2xl h-64 md:h-80 mb-12">
            <Image
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80"
              alt="Får som betar på en grön äng i solljus"
              width={800}
              height={533}
              className="parallax-img w-full h-full object-cover scale-110"
            />
          </div>
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
            {utforskaFarull.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card-hover bg-white/50 border border-foreground/5 rounded-lg p-6 transition-colors duration-300"
              >
                <item.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-primary mb-3 group-hover:text-primary/70 transition-colors"
                  aria-hidden="true"
                />
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-foreground/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* UTFORSKA ISOLERING */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="uppercase tracking-widest text-accent text-sm font-body mb-4">
              Byggisolering
            </p>
            <h2 className="font-heading text-4xl font-semibold text-foreground mb-16">
              Lär dig mer om fårullsisolering
            </h2>
          </div>
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {utforskaIsolering.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card-hover bg-white/50 border border-foreground/5 rounded-lg p-6 transition-colors duration-300"
              >
                <item.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-primary mb-3 group-hover:text-primary/70 transition-colors"
                  aria-hidden="true"
                />
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-foreground/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* AVSLUTANDE */}
      <section className="reveal py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-6">
            Var kan man köpa fårullsisolering?
          </h2>
          <p className="font-body text-foreground/60 text-base leading-relaxed mb-4">
            I Norden säljer Byeco fårullsisolering från österrikiska Isolena.
            De har kontor i Göteborg och Helsingfors, erbjuder fri rådgivning
            och 30&nbsp;dagars öppet köp.
          </p>
          <p className="font-body text-foreground/60 text-sm leading-relaxed mb-8">
            Farull.se drivs av Byeco. All information här är fristående och
            faktabaserad, men vill du gå vidare och beställa isolering
            är det hos dem du hamnar.
          </p>
          <a
            href="https://byeco.se"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-primary hover:text-primary/80 transition-colors text-sm font-medium link-grow"
          >
            Till Byeco.se →
          </a>
        </div>
      </section>
    </>
  );
}
