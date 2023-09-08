"use client";

import SectionContextProvider from "@context/SectionContext";
import { ThemeProvider } from "next-themes";

type Props = {
    children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SectionContextProvider>{children}</SectionContextProvider>
        </ThemeProvider>
    );
};
export default Providers;
