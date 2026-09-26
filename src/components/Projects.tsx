"use client";

import { projects } from "@/data/content";
import { ArrowUpRight } from "./icons";
import { useHoverSpotlight } from "./useHoverSpotlight";
import Image from 'next/image';

export default function Projects() {
  const { hovered, bind } = useHoverSpotlight<string>();

  return (
    <section id="projects" className="py-20 scroll-mt-10">
      <h2 className="font-display text-2xl font-semibold">Projects</h2>

      <div className="mt-10 flex flex-col gap-6">
        {projects.map((p) => {
          const isHovered = hovered === p.slug;
          const isDimmed = hovered !== null && !isHovered;

          return (
            <a
              key={p.slug}
              href={p.href}
              target={p.href !== "#" ? "_blank" : undefined}
              rel={p.href !== "#" ? "noreferrer" : undefined}
              {...bind(p.slug)}
              className={`spotlight-card group flex flex-col sm:flex-row gap-5 rounded-md border p-5 sm:p-6 ${
                isHovered ? "is-active" : ""
              } ${isDimmed ? "is-dimmed" : ""}`}
              style={{
                borderColor: isHovered ? "var(--brass-soft)" : "var(--ink-line)",
                background: isHovered ? "var(--ink-raised)" : "var(--ink)",
              }}
            >
              {/* thumbnail */}
              <div
                className="relative shrink-0 h-40 w-full sm:h-28 sm:w-48 overflow-hidden rounded-sm border"
                style={{ borderColor: "var(--ink-line)" }}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`Screenshot of ${p.name}`}
                    fill
                    sizes="(min-width: 640px) 192px, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center font-display text-lg font-semibold tracking-wide"
                    style={{
                      background: `linear-gradient(135deg, ${p.thumb.from}, ${p.thumb.to})`,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {p.thumb.initials}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3
                    className="font-display text-lg font-semibold transition-colors"
                    style={{ color: isHovered ? "var(--brass)" : "var(--paper)" }}
                  >
                    {p.name}
                  </h3>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 transition-transform"
                    style={{
                      color: isHovered ? "var(--brass)" : "var(--paper-dim)",
                      transform: isHovered ? "translate(2px,-2px)" : "none",
                    }}
                  />
                </div>
                <p className="mt-0.5 font-mono text-xs" style={{ color: "var(--paper-dim)" }}>
                  {p.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                  {p.summary}
                </p>
                <ul className="mt-3 space-y-1 hidden sm:block">
                  {p.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed flex gap-2">
                      <span aria-hidden style={{ color: "var(--brass)" }}>
                        –
                      </span>
                      <span style={{ color: "var(--paper-dim)" }}>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs rounded-sm px-2 py-1 transition-colors"
                      style={{
                        background: isHovered ? "var(--ink)" : "var(--ink-raised)",
                        color: isHovered ? "var(--signal)" : "var(--paper-dim)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
