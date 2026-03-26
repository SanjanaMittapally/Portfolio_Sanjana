"use client";

import { useState } from "react";
import { resume } from "@/content/resume";
import { cn } from "@/lib/cn";

export function ContactForm() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const subject = name ? `Portfolio inquiry from ${name}` : `Portfolio contact`;
  const bodyLines = [
    name ? `Name: ${name}` : null,
    senderEmail ? `Email: ${senderEmail}` : null,
    (name || senderEmail) && message ? "" : null,
    message || null,
  ].filter((l) => l !== null) as string[];
  const bodyText = bodyLines.join("\r\n");
  const mailtoHref = `mailto:${resume.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  // Gmail compose URL — works in browser without needing a desktop mail app
  const gmailHref = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(resume.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(resume.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select the text
    }
  };

  const inputCls = cn(
    "w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition",
    "focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20",
    "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500",
    "dark:focus:border-indigo-500 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:focus:ring-indigo-500/20",
  );

  return (
    <div className="space-y-5">
      {/* Quick copy row */}
      <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/60">
        <span className="flex-1 truncate text-sm font-mono text-zinc-600 dark:text-zinc-300">
          {resume.email}
        </span>
        <button
          type="button"
          onClick={copyEmail}
          className={cn(
            "shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition",
            copied
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
              : "bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:bg-indigo-50 hover:text-indigo-700 dark:bg-zinc-700 dark:text-zinc-200 dark:ring-zinc-600 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300",
          )}
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>

      {/* Optional pre-fill */}
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Fill in the fields below, then click <strong>Open Mail App</strong> — your name, email &amp; message will be pre-filled in the email.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Your name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Priya Sharma"
            className={inputCls}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Your email</label>
          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            placeholder="e.g. priya@company.com"
            className={inputCls}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the opportunity..."
          rows={4}
          className={cn(inputCls, "resize-y")}
        />
      </div>

      {/* Two send options: desktop mail app OR Gmail in browser */}
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={mailtoHref}
          className="flex items-center justify-center gap-2 rounded-xl border border-indigo-500 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 active:scale-[0.98]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Mail App
        </a>
        <a
          href={gmailHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-red-400 bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-400 active:scale-[0.98]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
          </svg>
          Open in Gmail
        </a>
      </div>

      <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">
        <strong>Mail App</strong> opens your default email client ·{" "}
        <strong>Gmail</strong> opens compose in your browser
      </p>
    </div>
  );
}
