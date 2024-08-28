import React from "react";
import { Flex, Progress } from 'antd';
import {ResumeInfo} from "@/GlobalRedux/Features/resume/templateOne";
export const Skill: React.FC<{ resumeInfo: ResumeInfo }> = ({ resumeInfo }) => {
    return (
        <div className="my-6">
            <h2 style={{ color: resumeInfo.themeColor }} className="text-center font-bold text-sm mb-2">
                Skills
            </h2>
            <hr className="border-dashed" style={{ borderBlockColor: resumeInfo.themeColor }} />
            <div className="my-4 grid grid-cols-2 gap-4">
                {resumeInfo.skills.map((skill, key) => (
                    <div key={key} className="flex items-center justify-between">
                        <h2 className="text-xs">{skill.name}</h2>

                        <div className="w-[220px]">
                            <Progress percent={resumeInfo.skills[key].rating} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
