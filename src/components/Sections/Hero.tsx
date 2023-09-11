"use client";

import { useContext, useEffect } from "react";
import Image from "next/image";
import { LuExternalLink, LuMail } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "@ui/Button";
import { SectionContext } from "@context/SectionContext";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Avatar from "../../../public/Avatar.png";

const Hero = () => {
    const { setActiveSection } = useContext(SectionContext);
    const { ref, inView } = useInView({
        threshold: 0.75,
    });

    useEffect(() => {
        if (inView) {
            setActiveSection("Home");
        }
    }, [inView, setActiveSection]);

    return (
        <motion.section
            ref={ref}
            className="grid place-content-center sm:h-screen lg:grid-cols-2 lg:items-center lg:gap-x-8 xl:grid-cols-7 xl:gap-x-12"
            id="home"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <div className="lg:col-span-1 xl:col-span-3">
                <h1 className="block text-4xl font-bold max-sm:text-center md:text-5xl lg:text-6xl">Kyrylo Tymchyshyn</h1>
                <p className="mt-3 text-lg text-zinc-700 max-sm:text-center">
                    I&apos;m a skilled web developer, and I my mission is to turn inovative ideas into reality. Explore my latest projects
                    in the web industry.
                </p>

                <div className="mt-5 flex flex-row items-center gap-2 max-sm:flex-col sm:gap-3 lg:mt-8">
                    <div className="flex flex-row items-center gap-2 sm:gap-3">
                        <Button size="large" asChild>
                            <a href="/Resume.pdf" target="_blank">
                                Resume <LuExternalLink />
                            </a>
                        </Button>
                        <Button size="large" variant="secondary">
                            Contact <LuMail />
                        </Button>
                    </div>
                    <div className="flex flex-row items-center gap-2 sm:gap-3 ">
                        <Button size="iconLarge" variant="secondary" asChild>
                            <a
                                href="https://www.linkedin.com/in/kyrylo-tymchyshyn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                        </Button>
                        <Button size="iconLarge" variant="secondary" asChild>
                            <a href="https://github.com/KaeserOfHonour" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            <Image
                className="ml-auto mt-10 rounded-xl object-cover max-xl:w-full lg:col-span-1 lg:mt-0 xl:col-span-4"
                src={Avatar}
                alt="Avatar"
                priority
            />
        </motion.section>
    );
};
export default Hero;
