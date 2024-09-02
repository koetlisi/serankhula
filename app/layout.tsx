import type {Metadata} from "next";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
import {Inter as FontSans} from "next/font/google"
import {cn} from "@/lib/utils"
import React from "react";
import Head from "next/head";
import {Providers} from "@/app/lib/appRedux/provider";
import {TopNavBar} from "@/app/components/TopNavBar";
import {WebSocketProvider} from "@/lib/webSocket/webSocketProvider";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    fallback: ["Arial", "sans-serif"], // Add fallback fonts
});

export const metadata: Metadata = {
    title: "Serankhula",
    description: "Designed And Programmed by Theko Koetlisi",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
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
        )}>
        <Providers>
            <TopNavBar/>
            <Toaster/>
            <WebSocketProvider>
                {children}
            </WebSocketProvider>
        </Providers>
        </body>
        </html>
    );
}
