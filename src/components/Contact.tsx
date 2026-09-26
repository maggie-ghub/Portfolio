import { profile } from "@/data/content";
import { ArrowUpRight } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 pb-28 scroll-mt-10">
      <h2 className="font-display mt-4 text-[2rem] sm:text-[2.4rem] leading-tight font-semibold max-w-xl">
        Have a project in mind or looking for a developer? Let&apos;s connect and build something useful.
      </h2>
      <a
        // href={`mailto:${profile.email}`}
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-lg font-medium link-underline"
        style={{ color: "var(--brass)" }}
      >
        {profile.email}
        <ArrowUpRight className="h-5 w-5" />
      </a>
      <p className="mt-3 text-sm" style={{ color: "var(--paper-dim)" }}>
        {profile.phone} · {profile.location}
      </p>

      <footer
        className="mt-24 flex flex-col sm:flex-row justify-between gap-4 border-t pt-6 text-sm"
        style={{ borderColor: "var(--ink-line)", color: "var(--paper-dim)" }}
      >
        <p>&copy; {new Date().getFullYear()} {profile.name}.</p>
      </footer>
    </section>
  );
}
