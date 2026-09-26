import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-[1200px] lg:flex lg:gap-10 px-6 lg:px-10">
      <SideNav />
      <main className="min-w-0 flex-1 lg:max-w-[720px]">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
