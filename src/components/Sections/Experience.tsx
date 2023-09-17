"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Section from "./Section";

const experiences = [
    {
        title: "Full-Stack Developer",
        company: "NextOne Technologies",
        duration: "September 13, 2023 - Present",
        description: "Currently working as a full stack developer at NextOne Technologies.",
        icon: "/icons/companies/nextone_technologies.png",
    },
];

const Experience = () => {
    return (
        <Section id="experience" heading="Experience" className="mt-20" threshold={0.65}>
            <VerticalTimeline lineColor="">
                {experiences.map((exp) => (
                    <VerticalTimelineElement
                        key={`${exp.title}${exp.company}${exp.description}`}
                        contentStyle={{
                            background: "#fafafa",
                            color: "#000",
                            boxShadow: "0 1px 2px rgb(0 0 0 / 0.1)",
                            borderRadius: "0.5rem",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid#fafafa" }}
                        iconStyle={{
                            background: "#fafafa",
                            color: "#fafafa",
                            borderRadius: "0.5rem",
                            boxShadow: "0 0 0 4px #fafafa, inset 0 2px 0 rgb(0 0 0 / 0.1), 0 2.5px 0 3px rgb(0 0 0 / 0.1)",
                        }}
                        icon={<Image src={exp.icon} alt={exp.company} width={50} height={50} className="h-full w-full rounded-lg" />}
                        date={exp.duration}
                    >
                        <h3 className="text-lg font-bold">{exp.company}</h3>
                        <h4 className="text-sm font-semibold text-zinc-500">{exp.title}</h4>
                        <p className="!mt-2 text-zinc-700">{exp.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Section>
    );
};
export default Experience;
