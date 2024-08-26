import React from "react";
import {ResumeInfo} from "@/app/cvTemplates/custome/EditResume/dummyData";

export const PersonalDetails: React.FC<{ resumeInfo: ResumeInfo }> = ({resumeInfo}) => {
    return <div>
        <h2 style={{color:resumeInfo?.themeColor}} className="font-bold text-xl text-center">{resumeInfo.firstName} {resumeInfo.lastName}</h2>
        <h2 className="text-center text-sm font-medium">{resumeInfo.jobTitle}</h2>
        <h2 className="text-center font-normal text-xs">{resumeInfo.address}</h2>
    </div>
}