import React from "react";
import { ResumeInfo } from "@/app/lib/types/templateTwoInterface";
import Description from "@/app/components/widgets/description";

const ExperienceInfo: React.FC<{ userInfo: ResumeInfo }> = ({ userInfo }) => {

    return (
        <section className="flex-4 py-3 px-4">
            <h2 className="relative text-blue-500 uppercase tracking-wide">
                Experience
                <span className="absolute w-3/5 h-1 bg-blue-400 right-0 top-1/2 transform -translate-y-1/2 rounded-lg"></span>
            </h2>
            {userInfo.experience.map((work, index) => (
                <div key={index} className=" gap-4">
                    <div className="flex border-gray-300 justify-between py-2">
                        <div className="flex flex-col">
                            <h5 className=" font-semibold text-gray-900 capitalize">{work.companyName}</h5>
                            <p className="text-gray-600 text-xs">{work.startDate + " - " + work.endDate}</p>
                        </div>
                        <div className="pl-2 relative">
                            <h5 className="text-sm font-semibold text-blue-500 capitalize">{work.title}</h5>
                            <span
                                className="absolute left-[-0.35rem] top-2 w-2 h-2 bg-blue-500 transform rotate-45"></span>
                        </div>

                    </div>
                    <div className="pl-2 relative pb-4">
                        <p className="text-sm">{work.workSummery}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ExperienceInfo;
