import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { resume } from "@/content/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resume.name} | ${resume.headline}`,
  description: "Portfolio of Sanjana Mittapally - Full-stack developer working across React/Next.js, FastAPI, and Spring Boot.",
  openGraph: {
    title: `${resume.name} | ${resume.headline}`,
    description: "Full-stack portfolio with projects, experience, and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Synchronously set dark class before first paint — prevents flash and ensures dark: utilities apply immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}else if(t==='light'){document.documentElement.classList.remove('dark')}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-400/25 to-transparent blur-3xl dark:from-indigo-500/15" />
          <div className="absolute bottom-[-220px] left-1/3 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-400/20 to-transparent blur-3xl dark:from-cyan-500/12" />
        </div>

        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
