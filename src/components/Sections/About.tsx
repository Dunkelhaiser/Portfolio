import Section from "./Section";

const About = () => {
    return (
        <Section id="about" heading="About Me" threshold={1}>
            <p className="mt-3 max-w-prose text-center text-lg text-zinc-700">
                My name is Kyrylo and I&apos;m 19 years old. I am a computer science student at Ivan Franko National University of Lviv. I
                became interested in programming at the age of 12. My first program was written in C++, but I found my passion in web
                development, as I can make programs that anyone can access without any pain. I&apos;m positioning myself as a full-stack
                developer with my core stack being React/Next.js, Node.js, TypeScript, and PostgreSQL.
            </p>
        </Section>
    );
};
export default About;
