import Link from "next/link";
import { resume } from "@/content/resume";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { ProfileAvatar } from "@/components/ProfileAvatar";

function FeaturedCard({
  title,
  description,
  href,
  tags,
}: {
  title: string;
  description: string;
  href: string;
  tags: string[];
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800/50 dark:hover:shadow-indigo-900/20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-indigo-500/8 to-transparent blur-2xl transition group-hover:from-indigo-500/15"
      />
      <div className="relative">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
          ✦ Featured
        </div>
        <div className="mt-3 text-lg font-bold text-zinc-950 dark:text-zinc-50">{title}</div>
        <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          View details
          <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

const whatIDo = [
  {
    icon: "🖥️",
    title: "Full-Stack Development",
    desc: "End-to-end features — React/Next.js frontends with FastAPI and Spring Boot backends.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Cut page load times from 10s to 2s (80% faster) and reduced API response times to under 200ms.",
  },
  {
    icon: "🔁",
    title: "Backend & Integrations",
    desc: "REST APIs and async pipelines connecting modern apps with legacy enterprise systems.",
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-zinc-950">
      {/* Decorative background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-56 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/8" />
        <div className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/6" />
        <div className="absolute top-96 -left-20 h-[350px] w-[350px] rounded-full bg-cyan-500/8 blur-3xl dark:bg-cyan-500/5" />
      </div>

      <Container>
        {/* ── HERO ── */}
        <section className="relative py-20 sm:py-28">
          <div className="flex flex-col items-center text-center">

            {/* Profile avatar with lightbox */}
            <ProfileAvatar name={resume.name} />

            {/* Name */}
            <h1 className="mt-6 bg-gradient-to-b from-zinc-900 to-zinc-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-zinc-400 sm:text-6xl lg:text-7xl">
              {resume.name}
            </h1>

            {/* Headline */}
            <p className="mt-3 max-w-xl text-base font-semibold text-indigo-600 dark:text-indigo-400 sm:text-lg">
              SDE at Quantlytix Pvt. Ltd &nbsp;·&nbsp; B.Tech Graduate from IIT Dharwad
            </p>

            {/* Open to work pill */}
            <div className="mt-3 inline-flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-950/30 dark:text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Open to SDE / Software Engineer · Full-time
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
                📍 Remote · Hyderabad · Bengaluru
              </span>
            </div>

            {/* Social quick-links */}
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={resume.links.linkedin?.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-400 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-md transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:bg-blue-950/30 dark:hover:text-blue-400"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={`mailto:${resume.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-400 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-md transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-400"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition duration-200 hover:from-indigo-500 hover:to-violet-500 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95"
              >
                Explore Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-zinc-400 bg-white px-7 py-3 text-sm font-semibold text-zinc-800 shadow-md transition duration-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
              >
                Contact Me
              </Link>
              <a
                href={`${basePath}/resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-400 bg-white px-7 py-3 text-sm font-semibold text-zinc-800 shadow-md transition duration-200 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
              >
                <span>↓</span> Resume
              </a>
            </div>
          </div>

          {/* ── ABOUT + WHAT I DO ── */}
          <div className="mt-20 grid gap-6 lg:grid-cols-12 lg:items-start">
            {/* About me card */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-3xl border border-zinc-200 bg-white p-8 shadow-md dark:border-zinc-800 dark:bg-zinc-900/70">
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    About Me
                  </span>
                </div>
                <div className="grid gap-4">
                  {resume.summary.map((s, idx) => (
                    <p key={idx} className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* What I do card */}
            <div className="lg:col-span-5">
              <div className="h-full rounded-3xl border border-zinc-200 bg-white p-8 shadow-md dark:border-zinc-800 dark:bg-zinc-900/70">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    What I Do
                  </span>
                </div>
                <p className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  What I work on
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Building production-grade features for enterprise clients across the full stack.
                </p>
                <div className="mt-6 grid gap-3">
                  {whatIDo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/40"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-700 dark:ring-zinc-600">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                          {item.title}
                        </div>
                        <div className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED WORK ── */}
        <section className="pb-16 sm:pb-20">
          <SectionHeading
            kicker="Highlights"
            title="Featured work"
            description="A quick snapshot of professional projects and systems you can browse in detail."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FeaturedCard
              title="CWP Admin Modules – Kraft Heinz"
              description="Admin-driven configuration systems and role-based task workflows for frontline workers."
              href="/projects"
              tags={["React", "Next.js", "FastAPI", "MS SQL Server", "Performance"]}
            />
            <FeaturedCard
              title="Vessel Master Data – Maersk"
              description="New Prospect vessel status feature, Spring Boot APIs, and Kafka async pipelines."
              href="/experience"
              tags={["Java", "Spring Boot", "Kafka", "React", "Microservices"]}
            />
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className="pb-16 sm:pb-20">
          <SectionHeading
            kicker="Education"
            title="Academic background"
            description="Strong foundation in computer science and engineering from IIT Dharwad."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {resume.education.map((edu) => (
              <article
                key={`${edu.school}-${edu.startYear}`}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800/50"
              >
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  🎓 {edu.school}
                </div>
                <div className="text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {edu.degree}
                </div>
                <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {edu.startYear} – {edu.endYear}
                  {edu.location ? ` · ${edu.location}` : ""}
                </div>
                {edu.grade ? (
                  <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                    ★ {edu.grade}
                  </div>
                ) : null}
                {edu.details?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {edu.details.map((d, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* ── QUICK NAV ── */}
        <section className="pb-24">
          <SectionHeading
            kicker="Explore"
            title="Everything you need"
            description="Browse projects, experience timeline, skills, and contact details."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/projects", label: "Projects", value: `${resume.projects.length}+`, icon: "🚀", color: "from-indigo-500 to-violet-500" },
              { href: "/experience", label: "Experience", value: `${resume.experience.length}`, icon: "💼", color: "from-cyan-500 to-indigo-500" },
              { href: "/skills", label: "Skills", value: `${resume.skills.reduce((a, s) => a + s.items.length, 0)}+`, icon: "🛠️", color: "from-violet-500 to-pink-500" },
              { href: "/contact", label: "Contact", value: "Let's talk", icon: "✉️", color: "from-emerald-500 to-cyan-500" },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 -top-12 h-24 bg-gradient-to-b opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${card.color.replace("from-", "from-").replace("to-", "to-")}`}
                  style={{ backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))` }}
                />
                <div className="relative">
                  <div className="text-2xl">{card.icon}</div>
                  <div className={`mt-3 bg-gradient-to-r ${card.color} bg-clip-text text-2xl font-extrabold text-transparent`}>
                    {card.value}
                  </div>
                  <div className="mt-1 text-base font-bold text-zinc-950 dark:text-zinc-50">
                    {card.label}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-zinc-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Open{" "}
                    <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
