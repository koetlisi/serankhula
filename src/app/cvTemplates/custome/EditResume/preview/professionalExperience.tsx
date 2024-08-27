import React from "react";
import {ResumeInfo} from "@/app/cvTemplates/custome/EditResume/dummyData";

export const ProfessionalExperience : React.FC<{ resumeInfo: ResumeInfo }> = ({resumeInfo})=>{
    return <div className="my-6">
        <h2 style={{color:resumeInfo.themeColor}} className="text-center font-bold text-sm mb-2">Professional Experience</h2>
        <hr className="border-dashed my-2" style={{borderBlockColor:resumeInfo.themeColor}}/>
        {resumeInfo?.experience.map((experience,index)=>(
            <div key={index}>
                <h2 style={{color:resumeInfo.themeColor}} className="text-sm font-bold">{experience.title}</h2>
                <h2 className="text-xs flex justify-between">{experience.companyName},{experience.country}, {experience.address}
                    <span>{experience.startDate} {experience.currentlyWorking ? 'Present' : experience.endDate}</span>
                </h2>
                <p className="text-xs my-2">{experience.workSummery}</p>
            </div>
        ))}
    </div>
}