"use client";

import { forwardRef, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@utils/cn";
import type { links } from "@components/Header";
import { SectionContext } from "@context/SectionContext";
import { mergeRefs } from "react-merge-refs";

type Props = {
    id: string;
    heading: (typeof links)[number]["name"];
    children: React.ReactNode;
    className?: string;
    threshold?: number;
};

const Section = forwardRef<HTMLDivElement, Props>(({ id, heading, children, className, threshold }, ref) => {
    const { setActiveSection } = useContext(SectionContext);
    const { ref: iRef, inView } = useInView({
        threshold,
    });

    useEffect(() => {
        if (inView) {
            setActiveSection(heading);
        }
    }, [heading, inView, setActiveSection]);

    return (
        <section id={id} className={cn("mt-8 flex flex-col items-center sm:mt-20", className)} ref={mergeRefs([ref, iRef])}>
            <h2 className="mt-8 text-3xl font-bold max-sm:mt-12 md:text-4xl">{heading}</h2>
            {children}
        </section>
    );
});
Section.displayName = "Section";

export default Section;
