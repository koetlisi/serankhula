import React from "react";
import {ResumeInfo} from "@/app/lib/types/templateTwoInterface";

const EducationInfo: React.FC<{ userInfo: ResumeInfo }> = ({ userInfo }) => {

    return (
        <section className="flex-4 py-3 px-4">
            <h2 className="relative text-blue-500 uppercase tracking-wide ">
                Education
                <span className="absolute w-3/5 h-1 bg-blue-400 right-0 top-1/2 transform -translate-y-1/2 rounded-lg"></span>
            </h2>
            {userInfo.education.map((course, index) => (
                <div key={index} className="gap-4">
                    <div className="flex justify-between items-start py-2">
                        <div className="flex flex-col">
                            <h5 className="font-semibold text-gray-900 capitalize">{course.institutionName}</h5>
                            <p className="text-gray-600 text-xs">
                                {course.startDate} - {course.endDate}
                            </p>
                        </div>
                        <div className="pl-2 relative">
                            <div>
                                <h5 className="text-sm font-semibold text-blue-500 capitalize">{course.qualification}</h5>
                                <span
                                    className="absolute left-[-0.35rem] top-[0.45rem] w-2 h-2 bg-blue-500 transform rotate-45"></span>
                            </div>
                            <p className="text-xs italic text-gray-600">({course.major})</p>
                        </div>
                    </div>
                    <div className="relative pb-4">
                        <p className="text-xs text-gray-600">{course.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default EducationInfo;
