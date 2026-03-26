import { Container } from "@/components/Container";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { resume } from "@/content/resume";

function ExperienceCard({
  company,
  role,
  location,
  start,
  end,
  bullets,
  tags,
  parentCompany,
  isLast,
}: {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: Array<{ text: string; highlight?: boolean }>;
  tags?: string[];
  parentCompany?: string;
  isLast: boolean;
}) {
  const isCurrent = end === "Present";

  return (
    <div className="relative pl-8 sm:pl-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-5 flex h-7 w-7 items-center justify-center sm:left-2">
        <div className={`h-3 w-3 rounded-full ring-4 ${isCurrent ? "bg-indigo-600 ring-indigo-200 dark:ring-indigo-900" : "bg-zinc-400 ring-zinc-100 dark:ring-zinc-800"}`} />
      </div>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[13px] top-9 bottom-0 w-px bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-700 sm:left-[17px]" />
      )}

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition duration-200 hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800/50">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            {parentCompany && (
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                via {parentCompany}
              </div>
            )}
            <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">{company}</h3>
            <p className="mt-0.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">{role}</p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {start} – {end}
              {location ? ` · ${location}` : ""}
            </p>
          </div>
          <div className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${isCurrent ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:ring-emerald-800/50" : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"}`}>
            {isCurrent ? "● Current" : end}
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-5 space-y-2.5 text-sm leading-6">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
              <span className={b.highlight ? "font-semibold text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-300"}>
                {b.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        {tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="relative bg-slate-50 dark:bg-zinc-950">
      <Container>
        <div className="py-14 sm:py-20">
          <PageBreadcrumb page="Experience" />
          <SectionHeading
            kicker="Timeline"
            title="Work Experience"
            description="Roles and outcomes across full-stack development, microservices, and performance-focused engineering."
          />

          <div className="mt-12 space-y-8">
            {resume.experience.map((exp, idx) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}-${exp.start}`}
                company={exp.company}
                role={exp.role}
                location={exp.location}
                start={exp.start}
                end={exp.end}
                bullets={exp.bullets}
                tags={exp.tags}
                parentCompany={exp.parentCompany}
                isLast={idx === resume.experience.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
