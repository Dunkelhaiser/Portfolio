import Timeline from "@components/Timeline";
import Section from "./Section";

const experiences = [
    {
        title: "NextOne Technologies",
        subTitle: "Full-Stack Developer",
        duration: "September 13, 2023 - Present",
        description: "Currently working as a full stack developer at NextOne Technologies.",
        icon: "/icons/companies/nextone_technologies.jpg",
        link: "https://www.linkedin.com/company/nextonetechnologies",
    },
];

const Experience = () => {
    return (
        <Section id="experience" heading="Experience" threshold={0.65}>
            <Timeline elements={experiences} />
        </Section>
    );
};
export default Experience;
