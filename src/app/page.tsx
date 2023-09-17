import About from "@components/Sections/About";
import Education from "@components/Sections/Education";
import Experience from "@components/Sections/Experience";
import Hero from "@components/Sections/Hero";
import Projects from "@components/Sections/Projects";
import Skills from "@components/Sections/Skills";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Experience />
        </>
    );
}
