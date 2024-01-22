import Timeline from "@components/Timeline";
import Section from "./Section";

const experiences = [
    {
        title: "NextOne Technologies",
        subTitle: "Full-Stack Developer",
        duration: "September, 2023 - December, 2023",
        description: "At this job, I worked as a full-stack developer. It was a full-time job and I have worked on two projects.",
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
