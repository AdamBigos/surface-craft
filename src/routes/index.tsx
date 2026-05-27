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
  Phone,
  Mail,
  MapPin,
  Check,
  Globe,
} from "lucide-react";

type Lang = "PL" | "EN";

function LangSwitcher({
  lang,
  setLang,
  className = "",
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  className?: string;
}) {
  const other: Lang = lang === "PL" ? "EN" : "PL";
  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-1 text-xs font-bold uppercase tracking-wider ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <Globe className="size-3.5 text-muted-foreground" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("PL")}
        aria-pressed={lang === "PL"}
        className={`min-h-8 rounded-full px-2 transition-colors ${
          lang === "PL" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        PL
      </button>
      <span className="text-muted-foreground/60" aria-hidden>|</span>
      <button
        type="button"
        onClick={() => setLang("EN")}
        aria-pressed={lang === "EN"}
        className={`min-h-8 rounded-full px-2 transition-colors ${
          lang === "EN" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="sr-only">Current language: {lang}. Switch to {other}.</span>
    </div>
  );
}

import hero from "@/assets/hero.jpg";
import serviceVehicle from "@/assets/service-vehicle.jpg";
import serviceWindow from "@/assets/service-window.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WRAPWORKS — Premium Vehicle & Window Wrapping" },
      {
        name: "description",
        content:
          "Transforming surfaces into high-impact visual assets. Premium vehicle and storefront wrapping for businesses and individuals.",
      },
    ],
  }),
});

const NAV = [
  { label: "Work", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const PARTNERS = ["3M", "AVERY DENNISON", "ORACAL", "HEXIS", "KPMF", "ARLON", "ASLAN"];

const PROCESS = [
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
];

type Cat = "All" | "Vehicles" | "Windows";

const WORK: { src: string; title: string; tag: string; cat: Exclude<Cat, "All"> }[] = [
  { src: p1, title: "Project Citrine", tag: "Sports coupe — full wrap", cat: "Vehicles" },
  { src: p3, title: "Tower 41", tag: "Office tower — perforated graphic", cat: "Windows" },
  { src: p2, title: "Diluelk Fleet", tag: "Logistics — 18 vehicle rollout", cat: "Vehicles" },
  { src: p5, title: "Maison B.", tag: "Boutique — etched vinyl", cat: "Windows" },
  { src: p4, title: "Stealth GT", tag: "Color-shift satin", cat: "Vehicles" },
  { src: p6, title: "Circuit Livery", tag: "Race team — geometric wrap", cat: "Vehicles" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Process />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <StickyQuoteBar />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("PL");
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-black tracking-tight">
          <span className="inline-block size-2 rounded-sm bg-primary" />
          <span className="text-base">WRAPWORKS</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <LangSwitcher lang={lang} setLang={setLang} />
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Request Quote <ArrowRight className="size-4" />
          </a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <LangSwitcher lang={lang} setLang={setLang} />
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex size-11 items-center justify-center rounded-md"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-black tracking-tight">WRAPWORKS</span>
            <div className="flex items-center gap-2">
              <LangSwitcher lang={lang} setLang={setLang} />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex size-11 items-center justify-center rounded-md"
              >
                <X className="size-6" />
              </button>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-5 pt-6">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-between border-b border-border py-4 text-2xl font-bold tracking-tight"
              >
                {l.label}
                <ArrowUpRight className="size-5 text-muted-foreground" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-primary text-base font-bold uppercase tracking-wider text-primary-foreground"
            >
              Request a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt="Premium vehicle wrap install"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl content-end gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-24 md:pt-40">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-10 bg-primary" /> Certified Wrap Studio
        </div>
        <h1 className="max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight">
          Transforming surfaces into{" "}
          <span className="text-primary">high-impact visual assets.</span>
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Premium vehicle and storefront wrapping engineered for businesses and individuals.
          Color-true. Bubble-free. Built to last.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Request a Free Quote <ArrowRight className="size-4" />
          </a>
          <a
            href="#gallery"
            className="inline-flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-full border border-foreground/25 bg-background/40 px-7 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:bg-foreground hover:text-background"
          >
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section aria-label="Material partners" className="border-y border-border bg-card/40 py-8">
      <div className="mx-auto mb-5 max-w-7xl px-5 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Certified installer · Premium material partners
        </p>
      </div>
      <div className="group relative overflow-hidden">
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
function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionLabel index="01" label="Process" />
      <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1] tracking-tight">
        Three stages.<br />
        Zero compromise.
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {PROCESS.map((s) => (
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
function Services() {
  const items = [
    {
      img: serviceVehicle,
      icon: Truck,
      title: "Vehicle & Fleet Wrapping",
      copy: "From a single executive car to a fifty-vehicle rollout — branded, color-shift, or protective films installed to spec.",
      bullets: ["Full & partial wraps", "Fleet color matching", "PPF & ceramic add-ons"],
    },
    {
      img: serviceWindow,
      icon: Building2,
      title: "Storefront & Architectural",
      copy: "Window graphics, frosted privacy films, perforated one-way vinyl, and large-scale wall wraps for retail and commercial.",
      bullets: ["Perforated one-way film", "Frosted & etched glass", "Multi-site rollouts"],
    },
  ];
  return (
    <section id="services" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <SectionLabel index="02" label="Services" />
        <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1] tracking-tight">
          Built for fleets.<br />
          Detailed for individuals.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-7">
                <div className="flex items-center gap-3">
                  <s.icon className="size-6 text-primary" />
                  <h3 className="text-2xl font-black tracking-tight">{s.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <ul className="grid gap-2 pt-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Check className="size-4 text-primary" /> {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex h-11 w-fit items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary"
                >
                  Discuss a project <ArrowUpRight className="size-4" />
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
function Gallery() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = WORK.filter((w) => filter === "All" || w.cat === filter);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <SectionLabel index="03" label="Selected Work" />
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1] tracking-tight">
            Recent installs.
          </h2>
        </div>
        <div role="tablist" className="flex flex-wrap gap-2">
          {(["All", "Vehicles", "Windows"] as Cat[]).map((c) => (
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
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((w) => (
          <a
            key={w.title}
            href="#contact"
            className="group relative block break-inside-avoid overflow-hidden rounded-md border border-border"
          >
            <img
              src={w.src}
              alt={w.title}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{w.cat}</p>
                <p className="mt-1 text-lg font-black tracking-tight">{w.title}</p>
                <p className="text-xs text-muted-foreground">{w.tag}</p>
              </div>
              <ArrowUpRight className="size-5 translate-y-0 text-foreground transition-transform group-hover:-translate-y-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <SectionLabel index="04" label="Contact" />
        <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1] tracking-tight">
          Request a free quote.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Send us the project brief — we typically respond within one business day with a
          fixed-price estimate.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-5 rounded-md border border-border bg-background p-7"
          >
            <Field label="Name">
              <input
                type="text"
                placeholder="Your full name"
                className="h-12 w-full rounded-md border border-border bg-input/60 px-4 text-sm outline-none transition-colors focus:border-primary"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                placeholder="you@company.com"
                className="h-12 w-full rounded-md border border-border bg-input/60 px-4 text-sm outline-none transition-colors focus:border-primary"
              />
            </Field>
            <Field label="Project Type">
              <select
                defaultValue=""
                className="h-12 w-full rounded-md border border-border bg-input/60 px-4 text-sm outline-none transition-colors focus:border-primary"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option>Vehicle wrap — single</option>
                <option>Vehicle wrap — fleet</option>
                <option>Storefront / window</option>
                <option>Architectural / wall</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Project Brief">
              <textarea
                rows={4}
                placeholder="Vehicle make, surface, timeline, references…"
                className="w-full rounded-md border border-border bg-input/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Send Request <ArrowRight className="size-4" />
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <ContactRow icon={Phone} label="Phone" value="+1 (415) 555-0148" href="tel:+14155550148" />
            <ContactRow
              icon={Mail}
              label="Email"
              value="studio@wrapworks.co"
              href="mailto:studio@wrapworks.co"
            />
            <ContactRow
              icon={MapPin}
              label="Studio"
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
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <MapPin className="mx-auto size-7 text-primary" />
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Google Maps · Placeholder
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
      <div className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <p className="text-base font-semibold">{value}</p>
      </div>
    </Tag>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-28 pt-14 md:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-black tracking-tight">
            <span className="inline-block size-2 rounded-sm bg-primary" />
            WRAPWORKS
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Certified vehicle and architectural wrap studio. Oakland, California.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((l) => (
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
          © {new Date().getFullYear()} WrapWorks Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------- STICKY MOBILE CTA ---------- */
function StickyQuoteBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <a
        href="#contact"
        className="flex h-14 items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold uppercase tracking-wider text-primary-foreground"
      >
        Request a Free Quote <ArrowRight className="size-4" />
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
