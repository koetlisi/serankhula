"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import { Logo } from "@/app/components/widgets/Logo/Logo";
import { useState } from "react";
import { Login } from "@/app/auth/Login";

export const TopNavBar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [open, setOpen] = useState(false);

    return (
        <header
            aria-label="Site Header"
            className={cx(
                "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
                isHomePage && "bg-dot"
            )}
        >
            <div className="flex h-10 w-full items-center justify-between">
                <Logo />
                <nav
                    aria-label="Site Nav Bar"
                    className="flex items-center gap-2 text-sm font-medium"
                >
                    <button
                        className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
                        onClick={() => console.log('Register button clicked')}
                    >
                        Register
                    </button>
                    <button
                        className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
                        onClick={() => setOpen(true)}
                    >
                        Login
                    </button>
                </nav>
            </div>
            <Login open={open} setOpen={setOpen}/>
        </header>
    );
};
