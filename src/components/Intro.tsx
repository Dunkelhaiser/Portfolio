"use client";

import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
};

const Intro = ({ children }: Props) => {
    return (
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {children}
        </motion.div>
    );
};
export default Intro;
