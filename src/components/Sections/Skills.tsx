"use client";

import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { BsShareFill } from "react-icons/bs";
import { IoMdBrowsers } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { PiToolboxFill } from "react-icons/pi";
import { SectionContext } from "@context/SectionContext";
import { Skill as SkillType } from "@models/Skill";
import Skill from "@components/Skill";
import Section from "./Section";

const frontendSkills = [
    {
        name: "HTML",
        icon: "icons/html.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        icon: "icons/css.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "SASS",
        icon: "icons/sass.svg",
        link: "https://sass-lang.com/",
    },
    {
        name: "TailwindCSS",
        icon: "icons/tailwind.svg",
        link: "https://tailwindcss.com/",
    },
    {
        name: "React",
        icon: "icons/react.svg",
        link: "https://react.dev/",
    },
    {
        name: "Redux Toolkit",
        icon: "icons/redux.svg",
        link: "https://redux-toolkit.js.org/",
    },
    {
        name: "React Router",
        icon: "icons/react-router.svg",
        link: "https://reactrouter.com/",
    },
    {
        name: "React Query",
        icon: "icons/react-query.svg",
        link: "https://tanstack.com/query/latest/",
    },
    {
        name: "React Hook Form",
        icon: "icons/react-hook-form.svg",
        link: "https://react-hook-form.com/",
    },
    // {
    //     name: "Framer Motion",
    //     icon: "icons/framer-motion.svg",
    //     link: "https://www.framer.com/motion/",
    // },
    {
        name: "NextJS",
        icon: "icons/nextjs.svg",
        link: "https://nextjs.org/",
    },
];

const backendSkills = [
    {
        name: "NodeJS",
        icon: "icons/nodejs.svg",
        link: "https://nodejs.org/",
    },
    {
        name: "ExpressJS",
        icon: "icons/express.svg",
        link: "https://expressjs.com/",
    },
    {
        name: "Prisma",
        icon: "icons/prisma.svg",
        link: "https://www.prisma.io/",
    },
    {
        name: "PostgreSQL",
        icon: "icons/postgresql.svg",
        link: "https://www.postgresql.org/",
    },
];

const shared = [
    {
        name: "JavaScript",
        icon: "icons/javascript.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        icon: "icons/typescript.svg",
        link: "https://www.typescriptlang.org/",
    },
    {
        name: "Zod",
        icon: "icons/zod.svg",
        link: "https://zod.dev/",
    },
    {
        name: "Vitest",
        icon: "icons/vitest.svg",
        link: "https://vitest.dev/",
    },
];

const toolbox = [
    {
        name: "Git",
        icon: "icons/git.svg",
        link: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        icon: "icons/github.svg",
        link: "https://github.com/",
    },
    {
        name: "ESLint",
        icon: "icons/eslint.svg",
        link: "https://eslint.org/",
    },
    {
        name: "Prettier",
        icon: "icons/prettier.svg",
        link: "https://prettier.io/",
    },
    {
        name: "NPM",
        icon: "icons/npm.svg",
        link: "https://www.npmjs.com/",
    },
    {
        name: "Insomnia",
        icon: "icons/insomnia.svg",
        link: "https://insomnia.rest/",
    },
    {
        name: "VSCode",
        icon: "icons/vscode.svg",
        link: "https://code.visualstudio.com/",
    },
    {
        name: "Markdown",
        icon: "icons/markdown.svg",
        link: "https://www.markdownguide.org/",
    },
];

type Props = {
    title: string;
    icon: React.ReactElement;
    skills: SkillType[];
    className?: string;
};

const SkillColumn = ({ title, skills, icon, className }: Props) => {
    return (
        <div className={className}>
            <div className="flex flex-col items-center">
                {icon}
                <h3 className="text-xl font-medium">{title}</h3>
            </div>
            <div className="mt-4 flex flex-row flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                    <Skill skill={skill} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const { setActiveSection } = useContext(SectionContext);
    const { ref, inView } = useInView({
        threshold: 0.65,
    });

    useEffect(() => {
        if (inView) {
            setActiveSection("Skills");
        }
    }, [inView, setActiveSection]);

    return (
        <Section id="skills" heading="Skills" className="mt-20" ref={ref}>
            <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 xl:grid-cols-3">
                <SkillColumn title="Frontend" skills={frontendSkills} icon={<IoMdBrowsers className="text-3xl" />} />
                <SkillColumn title="Backend" skills={backendSkills} icon={<FaServer className="text-3xl" />} />
                <SkillColumn title="Shared" skills={shared} icon={<BsShareFill className="text-3xl" />} />
                <SkillColumn
                    title="Toolbox"
                    skills={toolbox}
                    icon={<PiToolboxFill className="text-3xl" />}
                    className="xl:[grid-column:2]"
                />
            </div>
        </Section>
    );
};

export default Skills;
