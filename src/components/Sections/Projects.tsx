import Project from "@components/Project";
import Section from "./Section";

const projects = [
    {
        name: "Periodicum",
        description:
            "Periodicum is an interactive periodic table of elements. It's built with React, TypeScript, and SCSS modules. It also uses i18next for support of English and Ukrainian languages. It has support for light and dark themes. This app has the support of PWA. Everything from planning and UI design to coding was made by me.",
        link: "https://periodicum.netlify.app",
        github: "https://github.com/KaeserOfHonour/Periodicum",
        image: "/projects/periodicum.png",
        tags: ["React", "TypeScript", "SCSS"],
    },
    {
        name: "Pomei",
        description:
            "Pomei is a full-stack note-taking app. It's built with React, TypeScript, and SCSS modules on the front-end and Node.js, Express.js, PostgreSQL, and Prisma on the back-end. Everything from planning and UI design to coding was made by me.",
        link: "https://pomei.netlify.app",
        github: "https://github.com/KaeserOfHonour/Pomei",
        image: "/projects/pomei.png",
        tags: ["React", "TypeScript", "SCSS", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    },
    {
        name: "Calculatrix",
        description:
            "Calculatrix is a simple calculator app built with React, TypeScript, and TailwindCSS. It has support for light, dark, and system themes. This app has the support of PWA. Everything from planning to coding was made by me.",
        link: "https://calculatrix.netlify.app",
        github: "https://github.com/KaeserOfHonour/Calculatrix",
        image: "/projects/calculatrix.png",
        tags: ["React", "TypeScript", "TailwindCSS"],
    },
    {
        name: "Sorting Visualizer",
        description:
            "It's an app for the visualization of different sorting algorithms( bubble sort, selection sort, insertion sort, merge sort, quick sort ). It’s built with React, TypeScript, and SCSS modules. Everything from planning and UI design to coding was made by me.",
        link: "https://smug-sorting-visualizer.netlify.app",
        github: "https://github.com/KaeserOfHonour/Sorting-Visualizer",
        image: "/projects/sorting.png",
        tags: ["React", "TypeScript", "SCSS"],
    },
    {
        name: "Hangem",
        description:
            "Hangem is a simple hangman game built with React, TypeScript, and TailwindCSS. There are many random words to guess, and also you can create your own word and get a URL for it, to share with other people. Everything from planning and UI design to coding was made by me.",
        link: "https://hangem.netlify.app",
        github: "https://github.com/KaeserOfHonour/Hangem",
        image: "/projects/hangem.png",
        tags: ["React", "TypeScript", "TailwindCSS"],
    },
];

const Projects = () => {
    return (
        <Section id="projects" heading="Projects" threshold={0.1}>
            <div className="mt-4 flex flex-col gap-6 sm:mt-8">
                {projects.map((project) => {
                    return <Project {...project} key={project.name} />;
                })}
            </div>
        </Section>
    );
};
export default Projects;
