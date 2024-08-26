import React from "react";
import {ResumeInfo} from "@/app/cvTemplates/custome/EditResume/dummyData";

export const Summery: React.FC<{ resumeInfo: ResumeInfo }> = ({resumeInfo})=>{
    return <p className="text-xs">
        {resumeInfo.summery}
    </p>
}