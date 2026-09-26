import { skills, education, languages } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-10">
      <h2 className="font-display text-2xl font-semibold">Skills &amp; background</h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="font-mono text-sm" style={{ color: "var(--brass)" }}>
              {group}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {items.map((item) => (
                <li key={item} className="text-sm" style={{ color: "var(--paper-dim)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t pt-10" style={{ borderColor: "var(--ink-line)" }}>
        <div>
          <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
          <p className="mt-1 text-sm" style={{ color: "var(--paper-dim)" }}>
            {education.school} · {education.period}
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--paper-dim)" }}>
            {education.detail}
          </p>
        </div>
        <div>
          <h3 className="font-mono text-sm" style={{ color: "var(--brass)" }}>
            Languages
          </h3>
          <ul className="mt-3 space-y-1.5">
            {languages.map((l) => (
              <li key={l.name} className="text-sm" style={{ color: "var(--paper-dim)" }}>
                {l.name} <span className="font-mono">— {l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
