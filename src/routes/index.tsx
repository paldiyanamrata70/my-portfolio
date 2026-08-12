import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cloud,
  Database,
  FileText,
  FlaskConical,
  Github,
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
import resume from "@/assets/Namrata-Paldiya-Resume.pdf";
import dsaCertificate from "@/assets/dsa-certificate.pdf";
import webCertificate from "@/assets/web-development-certificate.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Namrata Paldiya",
      },
      {
        name: "description",
        content:
          "Portfolio of Namrata Paldiya, an MCA student and MERN Stack Developer building modern, responsive and user-focused web applications.",
      },
      {
        property: "og:title",
        content: "Namrata Paldiya | MERN Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Explore Namrata Paldiya's projects, technical skills, academic journey and work in MERN Stack development.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Stack", href: "#stack" },
  { label: "Resume", href: "#resume" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const education = [
  {
    icon: Sparkles,
    title: "Master of Computer Applications",
    years: "Currently Pursuing",
    college: "Bharati Vidyapeeth",
    body:
      "Focused on software development, web technologies, databases, and application design while building practical full-stack applications and strengthening problem-solving skills.",
    tone: "blush" as const,
  },
  {
    icon: FlaskConical,
    title: "Bachelor of Computer Applications",
    years: "2023 — 2026",
    college: "Bharati Vidyapeeth",
    body:
      "Built a strong foundation in programming, computer science, databases, and web development through academic learning and hands-on projects.",
    tone: "sage" as const,
  },
];

const skills = [
  {
    icon: Code2,
    label: "JavaScript",
    tone: "blush",
  },
  {
    icon: MonitorSmartphone,
    label: "React.js",
    tone: "sage",
  },
  {
    icon: Server,
    label: "Node.js",
    tone: "blush",
  },
  {
    icon: Server,
    label: "Express.js",
    tone: "sage",
  },
  {
    icon: Database,
    label: "MongoDB",
    tone: "blush",
  },
  {
    icon: Database,
    label: "SQL",
    tone: "sage",
  },
  {
    icon: Terminal,
    label: "Java & Python",
    tone: "sage",
  },
  {
    icon: Cloud,
    label: "Git & Deployment",
    tone: "blush",
  },
];

const projects = [
  {
    title: "Kosha Fabric",
    body:
      "A responsive digital storefront for a handcrafted ethnic-wear brand, featuring a curated product showcase, responsive design, and SEO-ready pages.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    tilt: "-rotate-1",
    image: kosha,
    alt: "Kosha Fabric ethnic wear website",
    demo: "https://www.koshafabric.in/",
    code: "https://github.com/paldiyanamrata70/koshanam",
  },
  {
    title: "Air Presentation Controller",
    body:
      "A computer-vision based presentation controller that uses hand gestures to navigate slides and interact with presentations without physical controls.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    tilt: "rotate-1",
    image: project2,
    alt: "Air Presentation Controller project",
    demo: "#work",
    code: "https://github.com/paldiyanamrata70",
  },
  {
    title: "EcoDine Connect",
    body:
      "A web application focused on connecting users with sustainable dining experiences through an intuitive and responsive digital platform.",
    tech: ["React", "JavaScript", "Node.js"],
    tilt: "-rotate-1",
    image: project3,
    alt: "EcoDine Connect project",
    demo: "#work",
    code: "https://github.com/paldiyanamrata70",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (value: string) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    setErrors((current) => ({
      ...current,
      [key]: undefined,
    }));

    setSent(false);
  };

  const validate = () => {
    const next: FieldErrors = {};

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) {
      next.name = "Please enter your name.";
    } else if (name.length > 100) {
      next.name = "Name must be under 100 characters.";
    }

    if (!email) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_RE.test(email) || email.length > 255) {
      next.email = "Please enter a valid email address.";
    }

    if (!message) {
      next.message = "Please write a short message.";
    } else if (message.length > 1000) {
      next.message = "Message must be under 1000 characters.";
    }

    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const next = validate();

    setErrors(next);

    if (Object.keys(next).length > 0) {
      return;
    }

    /*
      NOTE:
      This currently only shows a success message.
      Connect this form to Formspree, Web3Forms, EmailJS,
      or your own backend when you want real submissions.
    */

    setSent(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const field =
    "mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="paper-card rounded-xl p-7"
    >
      <div>
        <label
          htmlFor="cf-name"
          className="text-xs tracking-wide text-muted-foreground"
        >
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

        {errors.name && (
          <p className="mt-1 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label
          htmlFor="cf-email"
          className="text-xs tracking-wide text-muted-foreground"
        >
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

        {errors.email && (
          <p className="mt-1 text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label
          htmlFor="cf-message"
          className="text-xs tracking-wide text-muted-foreground"
        >
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
          placeholder="Tell me about your project..."
        />

        {errors.message && (
          <p className="mt-1 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send Message

        <ArrowRight className="h-4 w-4" />
      </button>

      {sent && (
        <p
          role="status"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sage/50 px-4 py-3 text-xs text-ink"
        >
          <CheckCircle2 className="h-4 w-4 text-primary" />

          Thank you! Your message has been received.
        </p>
      )}
    </form>
  );
}

function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}

      <header className="sticky top-0 z-30 border-b border-border/50 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg italic text-primary"
          >
            Namrata Paldiya
          </a>

          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
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
              aria-label={
                mobileMenuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-ink md:hidden"
              onClick={() =>
                setMobileMenuOpen((open) => !open)
              }
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-border/50 bg-background px-6 pb-5 md:hidden">
            <ul className="flex flex-col gap-4 pt-4 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block transition-colors hover:text-primary"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  Let's Connect
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-14 md:py-28">
          <div>
            <p className="font-display text-lg italic text-primary">
              Hello, I'm
            </p>

            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Namrata Paldiya
            </h1>

            <p className="mt-4 text-lg font-medium text-primary">
              MCA Student & MERN Stack Developer
            </p>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              I build modern, responsive web applications using
              MongoDB, Express.js, React, and Node.js. I enjoy
              turning ideas into practical digital experiences
              with clean interfaces and reliable functionality.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/namrata-paldiya-873098314/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-blush"
              >
                LinkedIn
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className="blob-shape absolute -inset-6 bg-blush"
              aria-hidden
            />

            <div
              className="blob-shape absolute bottom-2 right-0 h-56 w-56 bg-sage/70"
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

        {/* ABOUT / EDUCATION */}

        <section
          id="journey"
          className="border-t border-border/60"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">
              My Background
            </p>

            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">
              Academic Journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              My academic journey has given me a strong foundation
              in computer science while encouraging me to explore
              modern web development and practical software projects.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {education.map((educationItem, index) => (
                <article
                  key={educationItem.title}
                  className={`paper-card rounded-xl p-8 ${
                    index === 1
                      ? "bg-blush/40 md:mt-10"
                      : ""
                  }`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
                      educationItem.tone === "blush"
                        ? "bg-blush"
                        : "bg-sage"
                    }`}
                  >
                    <educationItem.icon className="h-4 w-4 text-primary" />
                  </span>

                  <h3 className="mt-5 font-display text-xl">
                    {educationItem.title}
                  </h3>

                  <p className="mt-2 text-xs tracking-wide text-primary">
                    {educationItem.years}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {educationItem.college}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {educationItem.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}

        <section
          id="stack"
          className="bg-secondary/40"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">
              What I Do
            </p>

            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">
              MERN Stack & Technical Skills
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              A practical toolkit built around modern web
              development, backend technologies, databases,
              programming, and deployment.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <span
                    className={`blob-shape flex h-16 w-16 items-center justify-center ${
                      skill.tone === "blush"
                        ? "bg-blush"
                        : "bg-sage"
                    }`}
                  >
                    <skill.icon className="h-5 w-5 text-ink" />
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>

            {/* TECHNOLOGY GROUPS */}

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-display text-lg">
                  Frontend
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  React.js · JavaScript · TypeScript · HTML · CSS ·
                  Tailwind CSS
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-display text-lg">
                  Backend
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Node.js · Express.js · REST APIs · Server-side
                  development
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-display text-lg">
                  Database & Tools
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  MongoDB · SQL · Git · GitHub · Postman · Vercel
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section id="work">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">
              Selected Work
            </p>

            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              A selection of projects that demonstrate my interest
              in frontend development, full-stack applications,
              APIs, and computer vision.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`paper-card rounded-lg p-3 ${project.tilt}`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-40 w-full rounded-md object-cover"
                  />

                  <div className="px-2 pb-3 pt-5">
                    <h3 className="font-display text-lg">
                      {project.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-secondary px-2.5 py-1 text-[10px] text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {project.body}
                    </p>

                    <div className="mt-5 flex items-center gap-5 text-xs">
                      <a
                        href={project.demo}
                        target={
                          project.demo.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        Live Demo
                        <ArrowUpRight className="h-3 w-3" />
                      </a>

                      <a
                        href={project.code}
                        target={
                          project.code.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary"
                      >
                        View Code
                        <Code2 className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="https://github.com/paldiyanamrata70"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-2 text-sm text-primary transition-colors hover:bg-blush"
              >
                View GitHub Projects
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <p className="eyebrow">
                  A Little About Me
                </p>

                <h2 className="mt-3 font-display text-3xl md:text-4xl">
                  Building with curiosity.
                </h2>
              </div>

              <div className="text-sm leading-relaxed text-muted-foreground">
                <p>
                  I'm Namrata Paldiya, an MCA student and MERN
                  Stack Developer interested in creating practical
                  and engaging web applications.
                </p>

                <p className="mt-4">
                  I enjoy working across the development process —
                  from designing responsive interfaces and
                  connecting APIs to building backend logic and
                  working with databases.
                </p>

                <p className="mt-4">
                  I'm continuously improving my skills through
                  projects, problem-solving practice, and exploring
                  modern development tools and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME */}

        <section id="resume" className="border-t border-border/60">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">
              My Resume
            </p>

            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">
              A little more about my journey.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Explore my education, technical skills, projects,
              certifications, and experience in detail.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="paper-card w-full max-w-2xl rounded-xl p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blush">
                  <FileText className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-5 font-display text-2xl">
                  Namrata Paldiya
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  MCA Student · MERN Stack Developer
                </p>

                <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted-foreground">
                  View my complete resume to learn more about my
                  technical skills, academic background, projects,
                  certifications, and career journey.
                </p>

                <div className="mt-7 flex justify-center">
                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    View Resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}

        <section
          id="certifications"
          className="bg-secondary/40"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">
              Achievements
            </p>

            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">
              Certifications
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Certifications and learning achievements that reflect
              my continuous growth in software development.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="paper-card rounded-xl p-4">
                <img
                  src={dsaCertificate}
                  alt="Data Structures and Algorithms Certificate"
                  className="h-56 w-full rounded-lg object-cover"
                />

                <div className="p-3">
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl">
                        Data Structures & Algorithms
                      </h3>

                      <p className="mt-1 text-xs text-primary">
                        DSA Certification
                      </p>
                    </div>

                    <span className="rounded-full bg-secondary px-3 py-1 text-[10px] text-muted-foreground">
                      Certificate
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Certification demonstrating knowledge of data structures,
                    algorithms, problem solving, and programming fundamentals.
                  </p>

                  <a
                    href={dsaCertificate}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs text-primary hover:underline"
                  >
                    View Certificate
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </article>

              <article className="paper-card rounded-xl bg-blush/30 p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="blob-shape flex h-12 w-12 shrink-0 items-center justify-center bg-sage">
                    <MonitorSmartphone className="h-5 w-5 text-ink" />
                  </span>

                  <span className="rounded-full bg-secondary px-3 py-1 text-[10px] text-muted-foreground">
                    Certificate
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl">
                  Web Development
                </h3>

                <p className="mt-2 text-xs text-primary">
                  Web Development Certification
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Certification covering modern web development,
                  responsive interfaces, frontend technologies,
                  and practical application development.
                </p>

                <a
                  href={webCertificate}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs text-primary hover:underline"
                >
                  View Certificate
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="bg-secondary/40"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center">
              Get In Touch
            </p>

            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl">
              Let's Connect
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
              Interested in working together, discussing a project,
              or simply connecting? Feel free to reach out.
            </p>

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

                    <span className="break-all">
                      paldiyanamrata@gmail.com
                    </span>
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

                <li className="min-w-0">
                  <a
                    href="https://github.com/paldiyanamrata70"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 break-words text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="blob-shape flex h-10 w-10 shrink-0 items-center justify-center bg-sage">
                      <Github className="h-4 w-4 text-ink" />
                    </span>

                    GitHub Profile
                  </a>
                </li>
              </ul>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="bg-ink text-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl">
              Namrata Paldiya
            </p>

            <p className="mt-2 text-xs text-background/60">
              MCA Student · MERN Stack Developer
            </p>

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