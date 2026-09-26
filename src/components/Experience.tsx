"use client";

import { experience } from "@/data/content";
import { useHoverSpotlight } from "./useHoverSpotlight";

export default function Experience() {
  const { hovered, bind } = useHoverSpotlight<string>();

  return (
    <section id="experience" className="py-20 scroll-mt-10">
      <h2 className="font-display text-2xl font-semibold">Experience</h2>
      

      <ol className="mt-10 relative border-l pl-8" style={{ borderColor: "var(--ink-line)" }}>
        {experience.map((job) => {
          const id = job.role + job.org;
          const isHovered = hovered === id;
          const isDimmed = hovered !== null && !isHovered;

          return (
            <li key={id} className="relative pb-6 last:pb-0">
              <span
                className="absolute -left-[calc(2rem+3px)] top-7 h-2.5 w-2.5 rounded-full transition-colors"
                style={{ background: isHovered ? "var(--brass)" : "var(--ink-line)" }}
              />
              <div
                {...bind(id)}
                className={`spotlight-card rounded-md border cursor-pointer p-5 ${isHovered ? "is-active" : ""} ${
                  isDimmed ? "is-dimmed" : ""
                }`}
                style={{
                  borderColor: isHovered ? "var(--brass-soft)" : "var(--ink-line)",
                  background: isHovered ? "var(--ink-raised)" : "transparent",
                }}
              >
                <p className="font-mono text-xs" style={{ color: "var(--paper-dim)" }}>
                  {job.period}
                </p>
                <h3
                  className="font-display mt-1 text-lg font-semibold transition-colors"
                  style={{ color: isHovered ? "var(--brass)" : "var(--paper)" }}
                >
                  {job.role} <span style={{ color: "var(--paper-dim)" }} className="flex-row items-center text-3xl pl-2 pr-1">.</span><span style={{ color: "var(--paper-dim)" }}>
                     {job.org}</span>
                </h3>
                <p className="text-sm" style={{ color: "var(--paper-dim)" }}>
                  {job.location}
                </p>
                <ul className="mt-3 space-y-2 max-w-2xl">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-[0.95rem] leading-relaxed"
                      style={{ color: "var(--paper)" }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
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
            </li>
          );
        })}
      </ol>
    </section>
  );
}
