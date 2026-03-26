import { Container } from "@/components/Container";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { resume } from "@/content/resume";

export default function ProjectsPage() {
  return (
    <div className="relative bg-slate-50 dark:bg-zinc-950">
      <Container>
        <div className="py-14 sm:py-20">
          <PageBreadcrumb page="Projects" />
          <SectionHeading
            kicker="Portfolio"
            title="Projects & Professional Work"
            description="A curated set of systems and features I've built — from enterprise full-stack apps to microservices and automation."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {resume.projects.map((project, idx) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800/50 dark:hover:shadow-indigo-900/20"
              >
                {/* Subtle gradient top glow on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative">
                  {/* Period badge */}
                  {project.period && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      {idx < 2 ? "🏢" : "💡"} {project.period}
                    </div>
                  )}

                  <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {project.title}
                  </h3>

                  {project.role && (
                    <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {project.role}
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {project.summary}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm">
                    {project.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span className="text-zinc-600 dark:text-zinc-300">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
