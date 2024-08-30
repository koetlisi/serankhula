import Image from "next/image";
import { Hero } from "./home/Hero";
import { Steps } from "./home/Steps";
import {Suspense} from "react";
import Loader from "@/app/components/Loader";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <Suspense fallback={<Loader/>}>
          <Hero />
          <Steps />
      </Suspense>
    </main>
  );
}
