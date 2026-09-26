"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile } from "@/data/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import Link from "next/link";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:w-[340px] lg:shrink-0 flex flex-col justify-between px-6 py-10 lg:px-12 lg:py-16">
      <div>
        <Link href="#top">
          <h1 className="font-display mt-6 text-[2rem] leading-[1.05] font-semibold text-[var(--paper)]">
            {profile.name}
          </h1>
        </Link>
        <p className="mt-2 text-[1.05rem] font-medium" style={{ color: "var(--brass)" }}>
          {profile.role}
        </p>
        

        <nav className="mt-12 hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center gap-3 text-sm font-medium tracking-wide transition-colors"
                    style={{ color: isActive ? "var(--paper)" : "var(--paper-dim)" }}
                  >
                    <span
                      className="h-px transition-all duration-300"
                      style={{
                        width: isActive ? "2.5rem" : "1rem",
                        background: isActive ? "var(--brass)" : "var(--ink-line)",
                      }}
                    />
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 lg:mt-0 flex items-center gap-5">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <MailIcon className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
