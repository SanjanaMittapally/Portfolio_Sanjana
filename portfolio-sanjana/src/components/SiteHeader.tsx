"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { resume } from "@/content/resume";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d={open ? "M6 6L16 16" : "M3 6H19"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={open ? "M16 6L6 16" : "M3 11H19"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {open ? null : (
        <path
          d="M3 16H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  // trailingSlash:true in next.config means pathname may be "/projects/" — strip it
  const activeHref = useMemo(() => {
    if (pathname === "/") return "/";
    return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-slate-50/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / name */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-2 py-1 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
          onClick={() => setOpen(false)}
        >
          <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-xl ring-2 ring-indigo-500/40">
            <Image src={`${basePath}/profile.jpg`} alt={resume.name} fill className="object-cover object-top" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-bold text-zinc-950 dark:text-zinc-50">{resume.name}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">SDE · Quantlytix · IIT Dharwad</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-150",
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30 dark:bg-indigo-500 dark:text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`${basePath}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-400 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-md transition-all duration-150 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
          >
            Resume ↗
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <a
            href={`${basePath}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-400 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-400 bg-white text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div id="mobile-nav" className="border-t border-zinc-200 bg-white/95 p-3 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
