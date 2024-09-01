import React from "react";
import { ResumeInfo } from "@/app/lib/types/templateTwoInterface";

const SkillsInfo: React.FC<{ userInfo: ResumeInfo }> = ({ userInfo }) => {
    return (
        <div className="skill-section border-b border-[#f7f7f7] flex-2">
            <h3 className="text-center text-[1rem] uppercase text-[#f7f7f7ec] pt-1 mb-1">
                Skills
            </h3>
            <ul className="pt-1 px-3">
                {userInfo.skills.map((skill, index) => (
                    <li key={index} className="grid grid-cols-2 py-1">
                        <p className="skill-title text-[#f7f7f7] capitalize text-xs">
                            {skill.name}
                        </p>
                        <div className="progress-bar w-full h-1.5 bg-[#2D3748] rounded-full relative">
                            <div
                                className="progress absolute left-0 h-full bg-[#2D9CDB] rounded-full"
                                style={{ width: `${skill.rating}%` }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsInfo;
