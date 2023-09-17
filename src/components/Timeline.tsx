"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Button from "@ui/Button";

type Props = {
    elements: {
        title: string;
        subTitle?: string;
        duration?: string;
        description: string;
        icon: string;
        link?: string;
    }[];
};

const Timeline = ({ elements }: Props) => {
    return (
        <VerticalTimeline lineColor="">
            {elements.map((el) => (
                <VerticalTimelineElement
                    key={`${el.title}${el.subTitle}${el.description}`}
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
                    icon={<Image src={el.icon} alt={el.title} width={50} height={50} className="h-full w-full rounded-lg bg-zinc-50" />}
                    date={el.duration}
                >
                    <h3 className="text-lg font-bold">{el.title}</h3>
                    {el.subTitle && <h4 className="text-sm font-semibold text-zinc-500">{el.subTitle}</h4>}
                    <p className="!mt-2 text-zinc-700">{el.description}</p>
                    {el.link && (
                        <Button size="small" className="mt-2" asChild>
                            <a href={el.link} target="_blank" rel="noopener noreferrer">
                                My Certificates
                            </a>
                        </Button>
                    )}
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};
export default Timeline;
