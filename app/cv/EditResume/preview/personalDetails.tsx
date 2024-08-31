import React from "react";
import {ResumeInfo} from "@/app/lib/types/templateOneInterface";

export const PersonalDetails: React.FC<{ resumeInfo: ResumeInfo }> = ({resumeInfo}) => {
    return <div>
        <h2 style={{color:resumeInfo?.themeColor}} className="font-bold text-xl text-center">{resumeInfo.firstName} {resumeInfo.lastName}</h2>
        <h2 className="text-center text-sm font-medium">{resumeInfo.jobTitle}</h2>
        <h2 className="text-center font-normal text-xs">{resumeInfo.address}</h2>

        <div className="flex justify-between">
            <h2 className="font-normal text-xs">Phone: {resumeInfo.phone}</h2>
            <h2 className="font-normal text-xs">Email: {resumeInfo.email}</h2>
        </div>
        <hr style={{borderBlockColor:resumeInfo.themeColor}} className="border-[1.5px] my-2"/>
    </div>
}