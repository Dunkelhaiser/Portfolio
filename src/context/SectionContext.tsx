import type { links } from "@components/Header";
import { createContext, useMemo, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type SectionContextType = {
    activeSection: (typeof links)[number]["name"];
    setActiveSection: React.Dispatch<React.SetStateAction<(typeof links)[number]["name"]>>;
};

const SectionContextState: SectionContextType = {
    activeSection: "Home",
    setActiveSection: () => {},
};

export const SectionContext = createContext<SectionContextType>(SectionContextState);

const SectionContextProvider = ({ children }: Props) => {
    const [activeSection, setActiveSection] = useState<(typeof links)[number]["name"]>("Home");

    const value = useMemo(() => ({ activeSection, setActiveSection }), [activeSection, setActiveSection]);

    return <SectionContext.Provider value={value}>{children}</SectionContext.Provider>;
};
export default SectionContextProvider;
