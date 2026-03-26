import { Container } from "@/components/Container";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { resume } from "@/content/resume";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950">
      <Container>
        <div className="py-14 sm:py-20">
          <PageBreadcrumb page="Contact" />

          <div className="mt-6">
            <SectionHeading
              kicker="Contact"
              title="Let's work together"
              description="Open to full-time SDE / Software Engineer roles. Reach out and I'll respond within 24–48 hours."
            />
          </div>

          {/* Job preferences banner */}
          <div className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-800/40 dark:bg-indigo-950/20">
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-lg dark:bg-indigo-900/40">
                💼
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-indigo-800 dark:text-indigo-300">
                  Open to opportunities
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {resume.jobPreferences.roles.map((r) => (
                    <span key={r} className="rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                      {r}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {resume.jobPreferences.workTypes.map((w) => (
                    <span key={w} className="rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
                      {w}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {resume.jobPreferences.locations.map((l) => (
                    <span key={l} className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800/40">
                      📍 {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            {/* Left: direct links */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Direct
                  </span>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${resume.email}`}
                    className="flex items-center gap-3 rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
                  >
                    <span className="text-base">✉️</span>
                    <span className="truncate">{resume.email}</span>
                  </a>

                  <a
                    href={`tel:${resume.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
                  >
                    <span className="text-base">📞</span>
                    {resume.phone}
                  </a>

                  {resume.links.linkedin && (
                    <a
                      href={resume.links.linkedin.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-blue-600 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
                    >
                      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  )}

                  {resume.links.github && (
                    <a
                      href={resume.links.github.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                    >
                      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right: message form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-5 flex items-center gap-2">
                  <div className="h-1 w-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Send a Message
                  </span>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
