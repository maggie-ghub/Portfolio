import Image from "next/image";
import { profile, stats } from "@/data/content";
import { ArrowUpRight, DownloadIcon } from "./icons";

export default function Hero() {
  return (
    <section id="about" className="relative pt-4 lg:pt-16 pb-20 scroll-mt-10">
      <div className="grid-texture absolute inset-0 -z-10 opacity-60" />

      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-16">
        <div className="flex-1">
          <p className="font-mono text-sm" style={{ color: "var(--signal)" }}>
            {profile.location}
          </p>
          {/* <h2 className="font-display mt-4 text-[2.1rem] sm:text-[2.6rem] leading-[1.12] font-semibold max-w-2xl">
            I turn tangled access rules and infrastructure headaches into
            software that just{" "}
            <span style={{ color: "var(--brass)" }}>works</span>.
          </h2> */}
          <p
            className="mt-6 max-w-xl text-[1.05rem] leading-relaxed"
            style={{ color: "var(--paper-dim)" }}
          >
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--brass)", color: "var(--ink)" }}
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--brass)]"
              style={{ borderColor: "var(--ink-line)" }}
            >
              Download CV
              <DownloadIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div
            className="relative h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-sm"
            
          >
            <Image
              src="/images/profile.png"
              alt="Portrait of Mearg Gebremedhn"
              fill
              sizes="192px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: "var(--ink-line)" }}>
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="font-display text-2xl font-semibold" style={{ color: "var(--brass)" }}>
              {s.value}
            </dt>
            <dd className="mt-1 text-sm" style={{ color: "var(--paper-dim)" }}>
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
