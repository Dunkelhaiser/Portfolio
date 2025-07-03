import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "@components/Providers";
import Header from "@components/Header";
import "./globals.css";
import Intro from "@components/Intro";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Kyrylo Tymchyshyn | Personal Portfolio",
    description: "Kyrylo Tymchyshyn is a full-stack developer from Ukraine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${montserrat.className} mx-auto max-w-[85rem] bg-zinc-100 px-6 py-6 text-zinc-900 max-sm:mb-16 sm:my-[-2rem] sm:p-8 sm:px-8 lg:px-10`}
            >
                <Providers>
                    <Header />
                    <Intro>
                        <main>{children}</main>
                    </Intro>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
