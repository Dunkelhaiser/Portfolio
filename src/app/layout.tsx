import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "@components/Providers";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Tymchyshyn Kyrylo | Personal Portfolio",
    description: "Tymchyshyn Kyrylo is a full-stack developer from Ukraine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} bg-zinc-100 px-2 py-6 text-zinc-900 sm:p-8`}>
                <Providers>
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
