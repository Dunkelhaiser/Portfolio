import { cn } from "@utils/cn";
import { forwardRef } from "react";

type Props = {
    id: string;
    heading: string;
    children: React.ReactNode;
    className?: string;
};

const Section = forwardRef<HTMLDivElement, Props>(({ id, heading, children, className }, ref) => {
    return (
        <section id={id} className={cn("flex flex-col items-center text-center", className)} ref={ref}>
            <h2 className="mt-8 text-3xl font-bold max-sm:mt-12 md:text-4xl">{heading}</h2>
            {children}
        </section>
    );
});
Section.displayName = "Section";

export default Section;
