import { Container } from "@/components/Container";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { resume } from "@/content/resume";

const categoryIcons: Record<string, string> = {
  "Programming Languages": "{ }",
  "Frameworks & Libraries": "⚛",
  "Databases": "🗄",
  "Tools & Platforms": "🔧",
  "Technologies & Concepts": "🔀",
  "Core Strengths": "⭐",
};

const languageLevelColors: Record<string, string> = {
  Native: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-400 dark:ring-indigo-800/50",
  Fluent: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:ring-emerald-800/50",
};

export default function SkillsPage() {
  return (
    <div className="relative bg-slate-50 dark:bg-zinc-950">
      <Container>
        <div className="py-14 sm:py-20">
          <PageBreadcrumb page="Skills" />
          <SectionHeading
            kicker="Skills"
            title="Technologies I work with"
            description="Languages, frameworks, databases, tools, and core strengths I bring to every project."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {resume.skills.map((cat) => (
              <section
                key={cat.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-md transition duration-200 hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                    {categoryIcons[cat.title] ?? "◆"}
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Spoken languages */}
          <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-7 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-base dark:bg-indigo-950/60">
                🌐
              </div>
              <h3 className="text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                Spoken Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {resume.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2.5 rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-800/60"
                >
                  <div className="text-sm font-bold text-zinc-900 dark:text-zinc-50">{lang.name}</div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${languageLevelColors[lang.level] ?? "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"}`}
                  >
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
