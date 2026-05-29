import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  PenTool,
  SprayCan,
  Sparkles,
  Truck,
  Building2,
  Palette,
  Phone,
  Mail,
  MapPin,
  Check,
  Globe,
} from "lucide-react";

import logoDdk from "@/assets/logo-ddk.png";
import hero from "@/assets/hero.jpg";
import serviceVehicle from "@/assets/service-vehicle.jpg";
import serviceWindow from "@/assets/service-window.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Lang = "PL" | "EN";
type Cat = "all" | "vehicles" | "windows";

type Copy = {
  nav: { work: string; process: string; services: string; contact: string; quote: string; freeQuote: string };
  hero: { eyebrow: string; titleA: string; titleB: string; body: string; quote: string; work: string; alt: string };
  trust: { label: string; aria: string };
  process: {
    label: string;
    headingA: string;
    headingB: string;
    items: { n: string; icon: typeof PenTool; title: string; body: string }[];
  };
  services: {
    label: string;
    headingA: string;
    headingB: string;
    discuss: string;
    items: {
      img: string;
      icon: typeof Truck;
      title: string;
      copy: string;
      bullets: string[];
      alt: string;
    }[];
  };
  gallery: { label: string; heading: string; filters: Record<Cat, string>; cats: Record<Exclude<Cat, "all">, string> };
  contact: {
    label: string;
    heading: string;
    body: string;
    fields: { name: string; email: string; type: string; brief: string };
    placeholders: { name: string; email: string; type: string; brief: string };
    options: string[];
    send: string;
    phone: string;
    email: string;
    studio: string;
    map: string;
  };
  footer: { description: string; rights: string };
  galleryItems: { src: string; title: string; tag: string; cat: Exclude<Cat, "all"> }[];
};

const COPY: Record<Lang, Copy> = {
  PL: {
    nav: {
      work: "Realizacje",
      process: "Proces",
      services: "Usługi",
      contact: "Kontakt",
      quote: "Wycena",
      freeQuote: "Poproś o bezpłatną wycenę",
    },
    hero: {
      eyebrow: "Certyfikowane studio oklejania",
      titleA: "Zmieniamy powierzchnie w",
      titleB: "nośniki reklamy premium.",
      body: "Profesjonalne oklejanie pojazdów i witryn dla firm oraz klientów indywidualnych. Kolor zgodny z projektem. Bez pęcherzy. Na lata.",
      quote: "Poproś o wycenę",
      work: "Zobacz realizacje",
      alt: "Montaż folii premium na pojeździe",
    },
    trust: {
      label: "Certyfikowany montaż · Materiały klasy premium",
      aria: "Partnerzy materiałowi",
    },
    process: {
      label: "Proces",
      headingA: "Trzy etapy.",
      headingB: "Zero kompromisów.",
      items: [
        {
          n: "01",
          icon: PenTool,
          title: "Projekt i konsultacja",
          body: "Przekładamy markę lub pomysł na gotowy do druku projekt — dopasowany kolorystycznie, sprawdzony w skali i zaakceptowany przed cięciem folii.",
        },
        {
          n: "02",
          icon: SprayCan,
          title: "Przygotowanie powierzchni",
          body: "Kontrolowane warunki, odtłuszczone panele i właściwa temperatura. To fundament, dzięki któremu folia trzyma lata, nie miesiące.",
        },
        {
          n: "03",
          icon: Sparkles,
          title: "Precyzyjna aplikacja",
          body: "Doświadczeni instalatorzy, czyste łączenia i kontrola po wygrzaniu. Udokumentowana jakość na każdym elemencie.",
        },
      ],
    },
    services: {
      label: "Usługi",
      headingA: "Gotowe dla flot.",
      headingB: "Dopieszczone dla prywatnych aut.",
      discuss: "Omów projekt",
      items: [
        {
          img: serviceVehicle,
          icon: Truck,
          title: "Oklejanie pojazdów i flot",
          copy: "Od jednego auta po flotę kilkudziesięciu pojazdów — reklama, zmiana koloru lub folie ochronne montowane zgodnie ze specyfikacją.",
          bullets: ["Pełne i częściowe oklejenia", "Spójność kolorów we flocie", "PPF i powłoki ceramiczne"],
          alt: "Samochód firmowy z folią reklamową",
        },
        {
          img: serviceWindow,
          icon: Building2,
          title: "Witryny i architektura",
          copy: "Grafiki na szyby, folie mrożone, perforowane folie one-way oraz wielkoformatowe oklejenia ścian dla lokali i biur.",
          bullets: ["Folie perforowane one-way", "Mrożone i trawione szkło", "Realizacje wielolokalowe"],
          alt: "Oklejona witryna lokalu usługowego",
        },
        {
          img: serviceVehicle,
          icon: Palette,
          title: "Zmiana koloru auta",
          copy: "Pełna zmiana koloru nadwozia z użyciem folii premium — efekt fabrycznego lakieru oraz dodatkowa ochrona powłoki.",
          bullets: ["Satyna, mat, color-shift", "Demontowalne — chroni lakier", "Idealne łączenia panelowe"],
          alt: "Auto po pełnej zmianie koloru folią",
        },
      ],
    },
    gallery: {
      label: "Wybrane realizacje",
      heading: "Ostatnie montaże.",
      filters: { all: "Wszystkie", vehicles: "Pojazdy", windows: "Witryny" },
      cats: { vehicles: "Pojazdy", windows: "Witryny" },
    },
    contact: {
      label: "Kontakt",
      heading: "Poproś o bezpłatną wycenę.",
      body: "Wyślij krótki opis projektu — zwykle odpowiadamy w jeden dzień roboczy ze wstępną wyceną.",
      fields: { name: "Imię i nazwisko", email: "Email", type: "Typ projektu", brief: "Opis projektu" },
      placeholders: {
        name: "Twoje imię i nazwisko",
        email: "ty@firma.pl",
        type: "Wybierz opcję",
        brief: "Marka pojazdu, powierzchnia, termin, inspiracje…",
      },
      options: ["Oklejenie pojazdu — pojedyncze", "Oklejenie pojazdu — flota", "Witryna / szyba", "Architektura / ściana", "Inne"],
      send: "Wyślij zapytanie",
      phone: "Telefon",
      email: "Email",
      studio: "Studio",
      map: "Google Maps · Placeholder",
    },
    footer: {
      description: "DDK — studio profesjonalnego oklejania pojazdów i powierzchni architektonicznych. Reklama, change-of-color, folie ochronne.",
      rights: "Wszelkie prawa zastrzeżone.",
    },
    galleryItems: [
      { src: p1, title: "WAKO Developer", tag: "Bus dostawczy — pełna reklama deweloperska", cat: "vehicles" },
      { src: p3, title: "Expander — Jagiellońska", tag: "Witryna oddziału — branding narożny", cat: "windows" },
      { src: p2, title: "WAKO Fleet · Tył", tag: "Flota Ducato — spójna identyfikacja", cat: "vehicles" },
      { src: p5, title: "Expander — Witryna", tag: "Folia kasowa z ofertą kredytową", cat: "windows" },
      { src: p4, title: "WAKO · Boczna", tag: "Wielkoformatowa wizualizacja inwestycji", cat: "vehicles" },
      { src: p6, title: "PZZ Kraków", tag: "Cysterna przemysłowa — logotyp herbowy", cat: "vehicles" },
    ],
  },
  EN: {
    nav: {
      work: "Work",
      process: "Process",
      services: "Services",
      contact: "Contact",
      quote: "Quote",
      freeQuote: "Request a Free Quote",
    },
    hero: {
      eyebrow: "Certified Wrap Studio",
      titleA: "Transforming surfaces into",
      titleB: "high-impact visual assets.",
      body: "Premium vehicle and storefront wrapping engineered for businesses and individuals. Color-true. Bubble-free. Built to last.",
      quote: "Request a Quote",
      work: "Explore Our Work",
      alt: "Premium vehicle wrap install",
    },
    trust: {
      label: "Certified installer · Premium material partners",
      aria: "Material partners",
    },
    process: {
      label: "Process",
      headingA: "Three stages.",
      headingB: "Zero compromise.",
      items: [
        {
          n: "01",
          icon: PenTool,
          title: "Design & Consultation",
          body: "We translate brand or vision into print-ready artwork — color-matched, scale-tested, and signed off before a single roll is cut.",
        },
        {
          n: "02",
          icon: SprayCan,
          title: "Surface Preparation",
          body: "Controlled environment, decontaminated panels, calibrated temperature. The foundation that makes a wrap last seven years, not seven months.",
        },
        {
          n: "03",
          icon: Sparkles,
          title: "Precision Application",
          body: "Certified installers, seamless seams, post-heat-set inspection. Documented quality at every panel for fleet-grade consistency.",
        },
      ],
    },
    services: {
      label: "Services",
      headingA: "Built for fleets.",
      headingB: "Detailed for individuals.",
      discuss: "Discuss a project",
      items: [
        {
          img: serviceVehicle,
          icon: Truck,
          title: "Vehicle & Fleet Wrapping",
          copy: "From a single executive car to a fifty-vehicle rollout — branded, color-shift, or protective films installed to spec.",
          bullets: ["Full & partial wraps", "Fleet color matching", "PPF & ceramic add-ons"],
          alt: "Branded vehicle wrap",
        },
        {
          img: serviceWindow,
          icon: Building2,
          title: "Storefront & Architectural",
          copy: "Window graphics, frosted privacy films, perforated one-way vinyl, and large-scale wall wraps for retail and commercial.",
          bullets: ["Perforated one-way film", "Frosted & etched glass", "Multi-site rollouts"],
          alt: "Wrapped storefront window",
        },
        {
          img: serviceVehicle,
          icon: Palette,
          title: "Color Change Wrap",
          copy: "Full-body color transformation using premium vinyl, providing a factory-finish look and superior paint protection.",
          bullets: ["Satin, matte & color-shift", "Reversible — protects OEM paint", "Seamless panel-level finish"],
          alt: "Car after full color change wrap",
        },
      ],
    },
    gallery: {
      label: "Selected Work",
      heading: "Recent installs.",
      filters: { all: "All", vehicles: "Vehicles", windows: "Windows" },
      cats: { vehicles: "Vehicles", windows: "Windows" },
    },
    contact: {
      label: "Contact",
      heading: "Request a free quote.",
      body: "Send us the project brief — we typically respond within one business day with a fixed-price estimate.",
      fields: { name: "Name", email: "Email", type: "Project Type", brief: "Project Brief" },
      placeholders: {
        name: "Your full name",
        email: "you@company.com",
        type: "Select an option",
        brief: "Vehicle make, surface, timeline, references…",
      },
      options: ["Vehicle wrap — single", "Vehicle wrap — fleet", "Storefront / window", "Architectural / wall", "Other"],
      send: "Send Request",
      phone: "Phone",
      email: "Email",
      studio: "Studio",
      map: "Google Maps · Placeholder",
    },
    footer: {
      description: "DDK — certified studio for vehicle wraps, fleet branding and architectural film.",
      rights: "All rights reserved.",
    },
    galleryItems: [
      { src: p1, title: "WAKO Developer", tag: "Delivery van — full developer branding", cat: "vehicles" },
      { src: p3, title: "Expander — Jagiellońska", tag: "Branch corner — facade graphic", cat: "windows" },
      { src: p2, title: "WAKO Fleet · Rear", tag: "Ducato fleet — unified livery", cat: "vehicles" },
      { src: p5, title: "Expander — Window", tag: "Retail window with credit offer", cat: "windows" },
      { src: p4, title: "WAKO · Side", tag: "Large-format property visual", cat: "vehicles" },
      { src: p6, title: "PZZ Kraków", tag: "Industrial tank — heritage emblem", cat: "vehicles" },
    ],
  },
};

const PARTNERS = ["3M", "AVERY DENNISON", "ORACAL", "HEXIS", "KPMF", "ARLON", "ASLAN"];
const FILTERS: Cat[] = ["all", "vehicles", "windows"];

function navItems(copy: Copy) {
  return [
    { label: copy.nav.work, href: "#gallery" },
    { label: copy.nav.process, href: "#process" },
    { label: copy.nav.services, href: "#services" },
    { label: copy.nav.contact, href: "#contact" },
  ];
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DDK — Profesjonalne Oklejanie Pojazdów i Witryn" },
      {
        name: "description",
        content:
          "DDK — studio oklejania pojazdów, flot i witryn. Reklama wielkoformatowa, change-of-color i folie ochronne wykonywane na materiałach klasy premium.",
      },
    ],
  }),
});

function LangSwitcher({
  lang,
  setLang,
  className = "",
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  className?: string;
}) {
  return (
    <div
      className={`language-switcher flex shrink-0 items-center gap-1 rounded-full border border-border bg-card/80 px-1.5 py-1 text-xs font-black uppercase tracking-normal ${className}`}
      role="group"
      aria-label="Language switcher"
      data-language={lang}
    >
      <Globe className="language-switcher__icon size-3.5 text-muted-foreground" aria-hidden />
      {(["PL", "EN"] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`language-switcher__button min-h-8 min-w-8 rounded-full px-2 transition-colors ${
            lang === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("PL");
  const copy = COPY[lang];

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground" data-lang={lang}>
      <Nav lang={lang} setLang={setLang} copy={copy} />
      <main>
        <Hero copy={copy} />
        <TrustBar copy={copy} />
        <Process copy={copy} />
        <Services copy={copy} />
        <Gallery copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
      <StickyQuoteBar copy={copy} />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav({ lang, setLang, copy }: { lang: Lang; setLang: (l: Lang) => void; copy: Copy }) {
  const [open, setOpen] = useState(false);
  const links = navItems(copy);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="nav-shell mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="logo-link flex min-w-0 shrink items-center gap-2.5 font-black tracking-tight" aria-label="DDK — Strona główna">
          <img src={logoDdk} alt="DDK logo" width={140} height={44} className="h-9 w-auto shrink-0 object-contain sm:h-10" />
          <span className="sr-only">DDK</span>
        </a>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <LangSwitcher lang={lang} setLang={setLang} />
          <a
            href="#contact"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold uppercase text-primary-foreground transition-transform hover:scale-[1.03] lg:tracking-wider"
          >
            {copy.nav.quote} <ArrowRight className="size-4" />
          </a>
        </nav>

        <div className="header-actions flex shrink-0 items-center justify-end gap-2 md:hidden">
          <LangSwitcher lang={lang} setLang={setLang} />
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex size-11 shrink-0 items-center justify-center rounded-md"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex max-w-full flex-col overflow-x-hidden bg-background md:hidden">
          <div className="flex h-16 shrink-0 items-center justify-between gap-3 px-5">
            <img src={logoDdk} alt="DDK logo" className="h-9 w-auto object-contain" />
            <div className="flex shrink-0 items-center gap-2">
              <LangSwitcher lang={lang} setLang={setLang} />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex size-11 shrink-0 items-center justify-center rounded-md"
              >
                <X className="size-6" />
              </button>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 pt-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-between gap-4 border-b border-border py-4 text-2xl font-bold tracking-tight"
              >
                <span>{l.label}</span>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-4 text-center text-base font-bold uppercase text-primary-foreground"
            >
              {copy.nav.freeQuote}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero({ copy }: { copy: Copy }) {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt={copy.hero.alt}
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl content-end gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-24 md:pt-40">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-10 bg-primary" /> {copy.hero.eyebrow}
        </div>
        <h1 className="max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight">
          {copy.hero.titleA} <span className="text-primary">{copy.hero.titleB}</span>
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{copy.hero.body}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex h-14 min-w-[220px] items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-black uppercase tracking-wider text-primary-foreground shadow-[0_10px_30px_-8px_oklch(0.72_0.19_47_/_0.65)] ring-1 ring-primary/40 transition-all hover:scale-[1.03] hover:shadow-[0_14px_40px_-8px_oklch(0.72_0.19_47_/_0.8)]"
          >
            {copy.hero.quote} <ArrowRight className="size-4" />
          </a>
          <a
            href="#gallery"
            className="inline-flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-full border border-foreground/25 bg-background/40 px-7 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:bg-foreground hover:text-background"
          >
            {copy.hero.work}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar({ copy }: { copy: Copy }) {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section aria-label={copy.trust.aria} className="border-y border-border bg-card/40 py-8">
      <div className="mx-auto mb-5 max-w-7xl px-5 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
          {copy.trust.label}
        </p>
      </div>
      <div className="marquee-clip group relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 px-5 sm:px-8">
          {row.map((p, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-2xl font-black tracking-[0.2em] text-foreground/55 sm:text-3xl"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process({ copy }: { copy: Copy }) {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionLabel index="01" label={copy.process.label} />
      <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1] tracking-tight">
        {copy.process.headingA}<br />
        {copy.process.headingB}
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {copy.process.items.map((s) => (
          <div
            key={s.n}
            className="group relative flex flex-col gap-5 rounded-md border border-border bg-card p-7 transition-colors hover:border-primary/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-5xl font-black tracking-tighter text-primary">{s.n}</span>
              <s.icon className="size-7 text-muted-foreground transition-colors group-hover:text-foreground" />
            </div>
            <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services({ copy }: { copy: Copy }) {
  return (
    <section id="services" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <SectionLabel index="02" label={copy.services.label} />
        <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1] tracking-tight">
          {copy.services.headingA}<br />
          {copy.services.headingB}
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {copy.services.items.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-7">
                <div className="flex items-center gap-3">
                  <s.icon className="size-6 shrink-0 text-primary" />
                  <h3 className="text-2xl font-black tracking-tight">{s.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <ul className="grid gap-2 pt-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Check className="size-4 shrink-0 text-primary" /> {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex h-11 w-fit items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary"
                >
                  {copy.services.discuss} <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery({ copy }: { copy: Copy }) {
  const [filter, setFilter] = useState<Cat>("all");
  const filtered = copy.galleryItems.filter((w) => filter === "all" || w.cat === filter);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel index="03" label={copy.gallery.label} />
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1] tracking-tight">
            {copy.gallery.heading}
          </h2>
        </div>
        <div role="tablist" className="flex flex-wrap gap-2">
          {FILTERS.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`min-h-11 rounded-full border px-5 text-xs font-bold uppercase tracking-wider transition-colors ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {copy.gallery.filters[c]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w) => (
          <a
            key={w.title}
            href="#contact"
            className="group relative block overflow-hidden rounded-md border border-border bg-card"
          >
            {/* Standardized 4:3 image frame — drop in any photo, no layout shift */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-background/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{copy.gallery.cats[w.cat]}</p>
                    <p className="mt-1 text-lg font-black leading-tight tracking-tight">{w.title}</p>
                    <p className="text-xs text-muted-foreground">{w.tag}</p>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-foreground" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact({ copy }: { copy: Copy }) {
  return (
    <section id="contact" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <SectionLabel index="04" label={copy.contact.label} />
        <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1] tracking-tight">
          {copy.contact.heading}
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">{copy.contact.body}</p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-5 rounded-md border border-border bg-background p-7"
          >
            <Field label={copy.contact.fields.name}>
              <input
                type="text"
                placeholder={copy.contact.placeholders.name}
                className="h-12 w-full rounded-md border border-border bg-input/60 px-4 text-sm outline-none transition-colors focus:border-primary"
              />
            </Field>
            <Field label={copy.contact.fields.email}>
              <input
                type="email"
                placeholder={copy.contact.placeholders.email}
                className="h-12 w-full rounded-md border border-border bg-input/60 px-4 text-sm outline-none transition-colors focus:border-primary"
              />
            </Field>
            <Field label={copy.contact.fields.type}>
              <select
                defaultValue=""
                className="h-12 w-full rounded-md border border-border bg-input/60 px-4 text-sm outline-none transition-colors focus:border-primary"
              >
                <option value="" disabled>
                  {copy.contact.placeholders.type}
                </option>
                {copy.contact.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </Field>
            <Field label={copy.contact.fields.brief}>
              <textarea
                rows={4}
                placeholder={copy.contact.placeholders.brief}
                className="w-full rounded-md border border-border bg-input/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              {copy.contact.send} <ArrowRight className="size-4" />
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <ContactRow icon={Phone} label={copy.contact.phone} value="+1 (415) 555-0148" href="tel:+14155550148" />
            <ContactRow
              icon={Mail}
              label={copy.contact.email}
              value="studio@wrapworks.co"
              href="mailto:studio@wrapworks.co"
            />
            <ContactRow
              icon={MapPin}
              label={copy.contact.studio}
              value="2400 Industrial Way, Bay 14 — Oakland, CA"
            />
            <div className="relative mt-2 aspect-[16/11] overflow-hidden rounded-md border border-border bg-card">
              <div
                aria-hidden
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, oklch(0.28 0.008 270) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.28 0.008 270) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute left-1/2 top-1/2 w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 text-center">
                <MapPin className="mx-auto size-7 text-primary" />
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {copy.contact.map}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag
      href={href}
      className="flex min-h-14 items-center gap-4 rounded-md border border-border bg-background p-4 transition-colors hover:border-primary/60"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <p className="break-words text-base font-semibold">{value}</p>
      </div>
    </Tag>
  );
}

/* ---------- FOOTER ---------- */
function Footer({ copy }: { copy: Copy }) {
  const links = navItems(copy);

  return (
    <footer className="border-t border-border bg-background pb-28 pt-14 md:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoDdk} alt="DDK logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{copy.footer.description}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} DDK Studio. {copy.footer.rights}
        </p>
      </div>
    </footer>
  );
}

/* ---------- STICKY MOBILE CTA ---------- */
function StickyQuoteBar({ copy }: { copy: Copy }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <a
        href="#contact"
        className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-4 text-center text-sm font-black uppercase text-primary-foreground shadow-[0_8px_24px_-6px_oklch(0.72_0.19_47_/_0.7)] ring-1 ring-primary/40 sm:tracking-wider"
      >
        {copy.nav.freeQuote} <ArrowRight className="size-4 shrink-0" />
      </a>
    </div>
  );
}

/* ---------- helpers ---------- */
function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
      <span className="text-muted-foreground">{index}</span>
      <span className="h-px w-8 bg-primary" />
      {label}
    </div>
  );
}
