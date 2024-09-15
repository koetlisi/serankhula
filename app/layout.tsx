import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import Head from "next/head";
import { Providers } from "@/app/lib/appRedux/provider";
import { TopNavBar } from "@/app/components/TopNavBar";
import { WebSocketProvider } from "@/lib/webSocket/webSocketProvider";
import Script from "next/script";

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
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                as="style"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body
            className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
        >
        <Providers>
            <WebSocketProvider>
                <TopNavBar />
                <Toaster />
                {children}
            </WebSocketProvider>
        </Providers>

        {/* Asynchronous script loading using next/script */}
        <Script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            strategy="lazyOnload"
        />
        <Script
            noModule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
            strategy="lazyOnload"
        />
        </body>
        </html>
    );
}
