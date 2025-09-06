import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import SectionDivider from "@/components/SectionDivider"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main className="flex items-center px-4 flex-col">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
      
    </main>
  )
}
