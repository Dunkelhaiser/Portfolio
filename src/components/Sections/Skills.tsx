import { BsShareFill } from "react-icons/bs";
import { IoMdBrowsers } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { PiToolboxFill } from "react-icons/pi";
import { Skill as SkillType } from "@models/Skill";
import Skill from "@components/Skill";
import Section from "./Section";

const frontendSkills = [
    {
        name: "HTML",
        icon: "icons/skills/html.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        icon: "icons/skills/css.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "SASS",
        icon: "icons/skills/sass.svg",
        link: "https://sass-lang.com/",
    },
    {
        name: "TailwindCSS",
        icon: "icons/skills/tailwind.svg",
        link: "https://tailwindcss.com/",
    },
    {
        name: "React",
        icon: "icons/skills/react.svg",
        link: "https://react.dev/",
    },
    {
        name: "Redux Toolkit",
        icon: "icons/skills/redux.svg",
        link: "https://redux-toolkit.js.org/",
    },
    {
        name: "Zustand",
        icon: "icons/skills/zustand.svg",
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    },
    {
        name: "React Router",
        icon: "icons/skills/react-router.svg",
        link: "https://reactrouter.com/",
    },
    {
        name: "Tanstack Query",
        icon: "icons/skills/react-query.svg",
        link: "https://tanstack.com/query/latest/",
    },
    {
        name: "React Hook Form",
        icon: "icons/skills/react-hook-form.svg",
        link: "https://react-hook-form.com/",
    },
    // {
    //     name: "Framer Motion",
    //     icon: "icons/skills/framer-motion.svg",
    //     link: "https://www.framer.com/motion/",
    // },
    {
        name: "NextJS",
        icon: "icons/skills/nextjs.svg",
        link: "https://nextjs.org/",
    },
    {
        name: "Astro",
        icon: "icons/skills/astro.svg",
        link: "https://astro.build/",
    },
];

const backendSkills = [
    {
        name: "NodeJS",
        icon: "icons/skills/nodejs.svg",
        link: "https://nodejs.org/",
    },
    {
        name: "ExpressJS",
        icon: "icons/skills/express.svg",
        link: "https://expressjs.com/",
    },
    {
        name: "Fastify",
        icon: "icons/skills/fastify.svg",
        link: "https://fastify.dev/",
    },
    {
        name: "NestJS",
        icon: "icons/skills/nestjs.svg",
        link: "https://nestjs.com/",
    },
    {
        name: "Drizzle",
        icon: "icons/skills/drizzle.svg",
        link: "https://orm.drizzle.team/",
    },
    {
        name: "Prisma",
        icon: "icons/skills/prisma.svg",
        link: "https://www.prisma.io/",
    },
    {
        name: "TypeORM",
        icon: "icons/skills/typeorm.svg",
        link: "https://typeorm.io/",
    },
    // {
    //     name: "Go",
    //     icon: "icons/skills/go.svg",
    //     link: "https://go.dev/",
    // },
    {
        name: "Java",
        icon: "icons/skills/java.svg",
        link: "https://www.oracle.com/java/",
    },
    {
        name: "Spring Boot",
        icon: "icons/skills/spring.svg",
        link: "https://spring.io/",
    },
    {
        name: "Hibernate",
        icon: "icons/skills/hibernate.svg",
        link: "https://hibernate.org/",
    },
    {
        name: "PostgreSQL",
        icon: "icons/skills/postgresql.svg",
        link: "https://www.postgresql.org/",
    },
];

const shared = [
    {
        name: "JavaScript",
        icon: "icons/skills/javascript.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        icon: "icons/skills/typescript.svg",
        link: "https://www.typescriptlang.org/",
    },
    {
        name: "tRPC",
        icon: "icons/skills/trpc.svg",
        link: "https://trpc.io/",
    },
    {
        name: "Zod",
        icon: "icons/skills/zod.svg",
        link: "https://zod.dev/",
    },
    {
        name: "ESLint",
        icon: "icons/skills/eslint.svg",
        link: "https://eslint.org/",
    },
    {
        name: "Prettier",
        icon: "icons/skills/prettier.svg",
        link: "https://prettier.io/",
    },
    {
        name: "NPM",
        icon: "icons/skills/npm.svg",
        link: "https://www.npmjs.com/",
    },
    {
        name: "PNPM",
        icon: "icons/skills/pnpm2.svg",
        link: "https://pnpm.io/",
    },
    {
        name: "Vitest",
        icon: "icons/skills/vitest.svg",
        link: "https://vitest.dev/",
    },
];

const toolbox = [
    {
        name: "Git",
        icon: "icons/skills/git.svg",
        link: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        icon: "icons/skills/github.svg",
        link: "https://github.com/",
    },
    {
        name: "VSCode",
        icon: "icons/skills/vscode.svg",
        link: "https://code.visualstudio.com/",
    },
    {
        name: "Intellij IDEA",
        icon: "icons/skills/intellij.svg",
        link: "https://www.jetbrains.com/idea/",
    },
    {
        name: "Insomnia",
        icon: "icons/skills/insomnia.svg",
        link: "https://insomnia.rest/",
    },
    {
        name: "Markdown",
        icon: "icons/skills/markdown.svg",
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
                    <Skill skill={skill} key={skill.name} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <Section id="skills" heading="Skills" threshold={0.65}>
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
