"use client";

import { motion } from "framer-motion";
import { FaHome, FaUser } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { MdWorkHistory, MdSchool } from "react-icons/md";
import { BsDiagram3Fill } from "react-icons/bs";
import { PiProjectorScreenBold } from "react-icons/pi";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ui/Tooltip";
import { cn } from "@utils/cn";
import { useContext } from "react";
import { SectionContext } from "@context/SectionContext";

export const links = [
    {
        name: "Home",
        icon: <FaHome />,
        href: "#home",
    },
    {
        name: "About",
        icon: <FaUser />,
        href: "#about",
    },
    {
        name: "Skills",
        icon: <BsDiagram3Fill />,
        href: "#skills",
    },
    {
        name: "Education",
        icon: <MdSchool />,
        href: "#education",
    },
    {
        name: "Projects",
        icon: <PiProjectorScreenBold />,
        href: "#projects",
    },
    {
        name: "Experience",
        icon: <MdWorkHistory />,
        href: "#experience",
    },
    {
        name: "Contact",
        icon: <LuMail />,
        href: "#contact",
    },
] as const;

const Header = () => {
    const { activeSection, setActiveSection } = useContext(SectionContext);
    return (
        <motion.header
            className="fixed right-8 top-1/2 z-[999] h-[27.35rem] w-[3.25rem] rounded-lg bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur [--horizontal-from:100px] [--horizontal-to:0px] [--vertical-from:-50%] [--vertical-to:-50%] max-sm:bottom-6 max-sm:left-6 max-sm:right-6 max-sm:top-auto max-sm:h-[3.25rem] max-sm:w-auto max-sm:[--horizontal-from:0px] max-sm:[--horizontal-to:0px] max-sm:[--vertical-from:50%] max-sm:[--vertical-to:0%]"
            initial={{ x: "var(--horizontal-from)", y: "var(--vertical-from)", opacity: 0 }}
            animate={{ x: "var(--horizontal-to)", y: "var(--vertical-to)", opacity: 1 }}
            transition={{ delay: 0.25 }}
        >
            <nav className="h-full w-full">
                <ul className="flex h-full w-full flex-col items-center justify-center gap-5 max-sm:flex-row max-sm:justify-evenly max-sm:gap-2">
                    {links.map((link) => (
                        <motion.li key={link.href} className="relative">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            aria-label={link.name}
                                            href={link.href}
                                            onClick={() => setActiveSection(link.name)}
                                            className={cn(
                                                "flex w-full items-center justify-center rounded-md px-3 py-3 text-base text-zinc-500 transition hover:text-zinc-900  sm:text-xl",
                                                {
                                                    "cursor-default bg-sky-800 text-zinc-50 hover:text-zinc-50":
                                                        activeSection === link.name,
                                                }
                                            )}
                                        >
                                            {link.icon}
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{link.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
};
export default Header;
