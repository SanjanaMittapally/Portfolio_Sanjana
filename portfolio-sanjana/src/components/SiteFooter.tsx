import Link from "next/link";
import { resume } from "@/content/resume";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{resume.name}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              {resume.headline}. Built with Next.js.
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/contact"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 font-semibold text-zinc-700 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
            >
              Let&apos;s talk
            </Link>
            <a
              href={`mailto:${resume.email}`}
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 font-semibold text-zinc-700 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
            >
              Email
            </a>
            <a
              href={`tel:${resume.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 font-semibold text-zinc-700 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
            >
              Call
            </a>

            {resume.links.linkedin ? (
              <a
                href={resume.links.linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 font-semibold text-zinc-700 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
              >
                LinkedIn
              </a>
            ) : null}

            {resume.links.github ? (
              <a
                href={resume.links.github.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 font-semibold text-zinc-700 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-500 dark:text-zinc-400">
          © {year} {resume.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

