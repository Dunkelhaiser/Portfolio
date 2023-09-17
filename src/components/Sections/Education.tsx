"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Button from "@ui/Button";
import Section from "./Section";

const education = [
    {
        name: "Secondary High School №63",
        duration: "September 2011 - June 2018",
        description: "It was my first school where I studied up to 7th class.",
        icon: "/icons/education/63.png",
    },
    {
        name: "Lviv Academic Gymnasium",
        duration: "September 2018 - June 2021",
        description: "It was my second school where I studied from 8th till 11th class.",
        icon: "/icons/education/lag.jpg",
    },
    {
        name: "Ivan Franko National University of Lviv",
        subName: "Faculty of Electronics and Computer Technologies",
        duration: "September 2021 - Present",
        description: "Currently I'm studying computer sciense at Lviv National University.",
        icon: "/icons/education/lnu.png",
    },
    {
        name: "Udemy",
        description: "Place where I study a lot of different topics.",
        icon: "/icons/education/udemy.svg",
        link: "/Certificates.zip",
    },
];

const Education = () => {
    return (
        <Section id="education" heading="Education" className="mt-8 sm:mt-20" threshold={0.65}>
            <VerticalTimeline lineColor="">
                {education.map((ed) => (
                    <VerticalTimelineElement
                        key={`${ed.name}${ed.subName}${ed.description}`}
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
                        icon={<Image src={ed.icon} alt={ed.name} width={50} height={50} className="h-full w-full rounded-lg bg-zinc-50" />}
                        date={ed.duration}
                    >
                        <h3 className="text-lg font-bold">{ed.name}</h3>
                        {ed.subName && <h4 className="text-sm font-semibold text-zinc-500">{ed.subName}</h4>}
                        <p className="!mt-2 text-zinc-700">{ed.description}</p>
                        {ed.link && (
                            <Button size="small" className="mt-2" asChild>
                                <a href={ed.link} target="_blank" rel="noopener noreferrer">
                                    My Certificates
                                </a>
                            </Button>
                        )}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Section>
    );
};
export default Education;
