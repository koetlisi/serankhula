import React from "react";
import {ResumeInfo} from "@/app/cvTemplates/custome/EditResume/dummyData";

export const Education: React.FC<{ resumeInfo: ResumeInfo }> = ({resumeInfo})=>{
    return <div className="my-6">
        <h2 className="text-center font-bold text-sm mb-2">Education</h2>
        <hr className="border-dashed my-2" style={{borderBlockColor: resumeInfo.themeColor}}/>
        {resumeInfo?.education.map((education, key)=>(
            <div key={key} className="my-5">
                <h2 style={{color:resumeInfo.themeColor}} className="text-sm font-bold">{education.universityName}</h2>
                <h2 className='text-xs flex justify-between'>{education.degree} in {education.major}
                    <span>{education.startDate} - {education.endDate}</span>
                </h2>
                <p className="text-xs my-2">{education.description}</p>
            </div>
        ))}
    </div>
}