import React from "react";
import {ResumeInfo} from "@/app/cvTemplates/custome/EditResume/dummyData";

export const Skill: React.FC<{ resumeInfo: ResumeInfo }> = ({resumeInfo})=>{
    return <div className="my-6">
        <h2 style={{color:resumeInfo.themeColor}} className="text-center font-bold text-sm mb-2">
            Skills
        </h2>
        <hr className="border-dashed" style={{borderBlockColor:resumeInfo.themeColor}}/>
        <div className="my-4 grid grid-cols-2 gap-4">
            {resumeInfo.skills.map((skill,key)=>(
                <div key={key} className="flex items-center justify-between">
                    <h2 className="text-xs">{skill.name}</h2>
                    <div className="h-2 bg-gray-200 w-[120px]">
                        <div className="h-2" style={{backgroundColor:resumeInfo.themeColor, width: skill.rating+'%'}}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}