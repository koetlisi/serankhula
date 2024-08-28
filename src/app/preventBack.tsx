'use client';
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const PreventBackButton: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        // Push a new state to the history
        const handleRouteChange = () => {
            window.history.pushState(null, "", window.location.pathname);
        };

        // Listen to route changes
        router.events.on("routeChangeStart", handleRouteChange);

        // Clean up the event listener on unmount
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router]);

    // Override the popstate event
    useEffect(() => {
        const handlePopState = (e: PopStateEvent) => {
            e.preventDefault();
            window.history.go(1); // Navigate forward instead of back
        };

        window.addEventListener("popstate", handlePopState);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    return null; // This component does not render anything
};

export default PreventBackButton;
