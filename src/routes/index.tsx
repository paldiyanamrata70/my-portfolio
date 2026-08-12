import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Compass,
  Cloud,
  Database,
  FlaskConical,
  LayoutPanelTop,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  Phone,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import botanical from "@/assets/botanical-sketch.jpg";
import kosha from "@/assets/project-kosha.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Namrata Paldiya — MCA Graduate & Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Namrata Paldiya, MCA graduate and developer crafting elegant, human-centric digital solutions with Java, React and cloud technologies.",
      },
      { property: "og:title", content: "Namrata Paldiya — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Academic journey, technical arsenal and selected engineering work by Namrata Paldiya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const education = [
  {
    icon: Sparkles,
    title: "Master of Computer Applications",
    years: "2021 — 2023",
    body: "Specialized in advanced software engineering, database management and cloud technologies. Developed a strong foundation in building scalable enterprise solutions.",
    tone: "blush" as const,
  },
  {
    icon: FlaskConical,
    title: "Bachelor of Computer Applications",
    years: "2023 — 2026",
    body: "Focused on core computer science principles, software development and analytical problem-solving. Laid the groundwork for complex algorithmic thinking.",
    tone: "sage" as const,
  },
];

const skills = [
  { icon: Code2, label: "Java & Python", tone: "blush" },
  { icon: LayoutPanelTop, label: "Web Development", tone: "sage" },
  { icon: Database, label: "SQL & NoSQL", tone: "blush" },
  { icon: Terminal, label: "JavaScript Ecosystem", tone: "sage" },
  { icon: MonitorSmartphone, label: "React & UI", tone: "sage" },
  { icon: Server, label: "Node.js Backends", tone: "blush" },
  { icon: Cloud, label: "AWS Fundamentals", tone: "sage" },
  { icon: Compass, label: "System Design", tone: "blush" },
];

const projects = [
  {
    title: "Kosha Fabric",
    body: "A live e-commerce experience for a handcrafted ethnic-wear label — product catalogue, responsive storefront and SEO-ready pages, indexed on Google Search Console.",
    tilt: "-rotate-1",
    image: kosha,
    alt: "Hand-embroidered ethnic kurtas on a boutique rack",
    demo: "https://www.koshafabric.in/",
    code: "https://github.com/paldiyanamrata70/koshanam",
  },
  {
    title: "Data Analytics Pipeline",
    body: "Automated data ingestion and processing pipeline built with Python, utilizing AWS services for scalable reporting.",
    tilt: "rotate-1",
    image: project2,
    alt: "Soft sage and blush watercolor waves",
    demo: "#work",
    code: "#work",
  },
  {
    title: "Enterprise Resource Manager",
    body: "A Java Spring Boot application designed to streamline internal company resources, complete with role-based access.",
    tilt: "-rotate-1",
    image: project3,
    alt: "Leather journal and pen on linen",
    demo: "#work",
    code: "#work",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldErrors = { name?: string; email?: string; message?: string };

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const next: FieldErrors = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name) next.name = "Please enter your name.";
    else if (name.length > 100) next.name = "Name must be under 100 characters.";
    if (!email) next.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(email) || email.length > 255)
      next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please write a short message.";
    else if (message.length > 1000) next.message = "Message must be under 1000 characters.";
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary";

  return (
    <form onSubmit={onSubmit} noValidate className="paper-card rounded-xl p-7">
      <div>
        <label htmlFor="cf-name" className="text-xs tracking-wide text-muted-foreground">
          Name
        </label>
        <input
          id="cf-name"
          value={form.name}
          maxLength={100}
          onChange={(e) => set("name")(e.target.value)}
          aria-invalid={!!errors.name}
          className={field}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="cf-email" className="text-xs tracking-wide text-muted-foreground">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          value={form.email}
          maxLength={255}
          onChange={(e) => set("email")(e.target.value)}
          aria-invalid={!!errors.email}
          className={field}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="cf-message" className="text-xs tracking-wide text-muted-foreground">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={form.message}
          maxLength={1000}
          onChange={(e) => set("message")(e.target.value)}
          aria-invalid={!!errors.message}
          className={`${field} resize-none`}
          placeholder="Tell me about your project…"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send Message <ArrowRight className="h-4 w-4" />
      </button>

      {sent && (
        <p
          role="status"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sage/50 px-4 py-3 text-xs text-ink"
        >
          <CheckCircle2 className="h-4 w-4 text-primary" />
          Thank you! Your message has been sent — I'll get back to you soon.
        </p>
      )}
    </form>
  );
}


function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/50 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg italic text-primary">
            Namrata Paldiya
          </a>
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
            >
              Let's Connect
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-ink md:hidden"
              onClick={() => setMobileMenuOpen((o) => !o)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-border/50 bg-background px-6 pb-5 md:hidden">
            <ul className="flex flex-col gap-4 pt-4 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Connect
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-14 md:py-28">
          <div>
            <p className="font-display text-lg italic text-primary">Hello, I'm</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Namrata Paldiya
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              MCA Graduate & Aspiring Developer crafting elegant digital solutions. Blending
              technical precision with organic, human-centric design.
            </p>
            <a
              href="#work"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative flex justify-center">
            <div className="blob-shape absolute -inset-6 bg-blush" aria-hidden />
            <div
              className="blob-shape absolute right-0 bottom-2 h-56 w-56 bg-sage/70"
              aria-hidden
            />
            <img
              src={botanical}
              alt="Hand-drawn pencil sketch of a wild rose and eucalyptus branch"
              width={912}
              height={1152}
              className="paper-card relative w-64 -rotate-1 rounded-sm p-3 md:w-80"
            />
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">My Background</p>
            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">Academic Journey</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {education.map((e, i) => (
                <article
                  key={e.title}
                  className={`paper-card rounded-xl p-8 ${i === 1 ? "bg-blush/40 md:mt-10" : ""}`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
                      e.tone === "blush" ? "bg-blush" : "bg-sage"
                    }`}
                  >
                    <e.icon className="h-4 w-4 text-primary" />
                  </span>
                  <h3 className="mt-5 font-display text-xl">{e.title}</h3>
                  <p className="mt-1 text-xs tracking-wide text-primary">{e.years}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">What I Do</p>
            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">Technical Arsenal</h2>
            <div className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
              {skills.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-3 text-center">
                  <span
                    className={`blob-shape flex h-16 w-16 items-center justify-center ${
                      s.tone === "blush" ? "bg-blush" : "bg-sage"
                    }`}
                  >
                    <s.icon className="h-5 w-5 text-ink" />
                  </span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">Selected Work</p>
            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">Recent Projects</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {projects.map((p) => (
                <article key={p.title} className={`paper-card rounded-lg p-3 ${p.tilt}`}>
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-40 w-full rounded-md object-cover"
                  />

                  <div className="px-2 pt-5 pb-3">
                    <h3 className="font-display text-lg">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                    <div className="mt-4 flex items-center gap-5 text-xs">
                      <a
                        href={p.demo}
                        target={p.demo.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        Live Demo <ArrowUpRight className="h-3 w-3" />
                      </a>
                      <a
                        href={p.code}
                        target={p.code.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary"
                      >
                        View Code <Code2 className="h-3 w-3" />
                      </a>
                    </div>

                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <a
                href="#work"
                className="rounded-full border border-primary/40 px-6 py-2 text-sm text-primary transition-colors hover:bg-blush"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <h2 className="text-center font-display text-3xl md:text-4xl">Let's Connect</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]">
              <ul className="space-y-5 text-sm">
                <li className="min-w-0">
                  <a
                    href="mailto:paldiyanamrata@gmail.com"
                    className="inline-flex items-center gap-3 break-words text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="blob-shape flex h-10 w-10 shrink-0 items-center justify-center bg-blush">
                      <Mail className="h-4 w-4 text-ink" />
                    </span>
                    <span className="break-all">paldiyanamrata@gmail.com</span>
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    href="tel:+919371587606"
                    className="inline-flex items-center gap-3 break-words text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="blob-shape flex h-10 w-10 shrink-0 items-center justify-center bg-sage">
                      <Phone className="h-4 w-4 text-ink" />
                    </span>
                    +91 93715 87606
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    href="https://www.linkedin.com/in/namrata-paldiya-873098314/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 break-words text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="blob-shape flex h-10 w-10 shrink-0 items-center justify-center bg-blush">
                      <Linkedin className="h-4 w-4 text-ink" />
                    </span>
                    LinkedIn Profile
                  </a>
                </li>
              </ul>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl">Namrata Paldiya</p>
            <p className="mt-2 text-xs text-background/60">
              © 2026 Namrata Paldiya. All rights reserved.
            </p>
          </div>
          <ul className="flex gap-6 text-xs text-background/80">
            <li>
              <a
                href="https://www.linkedin.com/in/namrata-paldiya-873098314/"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/paldiyanamrata70"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:paldiyanamrata@gmail.com"
                className="underline-offset-4 hover:underline"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  );
}
