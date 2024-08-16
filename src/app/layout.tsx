import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google"
import "./css/globals.css";
import {cn} from "@/lib/utils"
import React from "react";
import Head from "next/head";
import {Providers} from "@/app/GlobalRedux/provider";
import {Toaster} from "@/components/ui/toaster";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    fallback: ["Arial", "sans-serif"], // Add fallback fonts
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <Head>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                  as="style"/>
        </Head>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
        )}><Providers>
            {children}
            <Toaster />
        </Providers></body>
        </html>
    );
}
