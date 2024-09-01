import React from "react";
import { ResumeInfo } from "@/app/lib/types/templateTwoInterface";

const AboutMe: React.FC<{ userInfo: ResumeInfo }> = ({ userInfo }) => {
    return (
        <section className="flex-4 py-3 px-4">
            <h2 className="relative text-blue-500 uppercase tracking-wide mb-1">
                About Me
                <span className="absolute w-3/5 h-1 bg-blue-400 right-0 top-1/2 transform -translate-y-1/2 rounded-lg"></span>
            </h2>
            <p className="text-xs text-gray-600">
                {userInfo.summery}
            </p>
        </section>
    );
}

export default AboutMe;
