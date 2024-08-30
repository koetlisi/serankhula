import {Suspense} from "react";
import Loader from "@/app/components/Loader";
import {Hero} from "@/app/home/Hero";
import {Steps} from "@/app/home/Steps";

export const HomePage = () => {
    return <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
        <Hero/>
        <Steps/>
    </main>
}