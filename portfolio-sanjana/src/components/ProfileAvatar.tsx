"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ProfileAvatar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Clickable avatar */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative cursor-zoom-in focus:outline-none"
        aria-label="View full profile photo"
      >
        {/* Animated glow ring */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500 via-cyan-500 to-violet-500 opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-3xl" />
        {/* Gradient border */}
        <div className="relative rounded-full bg-gradient-to-br from-indigo-500 via-cyan-400 to-violet-500 p-[3px] shadow-2xl shadow-indigo-500/25">
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white dark:ring-zinc-950">
            <Image
              src={`${basePath}/profile.jpg`}
              alt={name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </div>
        {/* Zoom hint badge */}
        <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow-lg ring-1 ring-zinc-200 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:bg-zinc-900 dark:ring-zinc-700">
          🔍
        </div>
      </button>

      {/* Lightbox modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo enlarged"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div
            className="lightbox-card relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-bold text-zinc-700 shadow-xl ring-1 ring-zinc-200 transition hover:bg-zinc-100 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700 dark:hover:bg-zinc-700"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Photo */}
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-2 ring-white/20">
              <Image
                src={`${basePath}/profile.jpg`}
                alt={name}
                width={480}
                height={640}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            {/* Caption */}
            <p className="mt-3 text-center text-sm text-white/50">
              Press <kbd className="rounded bg-white/15 px-1.5 py-0.5 font-mono text-xs">Esc</kbd> or click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
