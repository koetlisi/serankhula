import React from "react";
import {ResumeInfo} from "@/GlobalRedux/Features/resume/templateOne";

export const Summery: React.FC<{ resumeInfo: ResumeInfo }> = ({resumeInfo})=>{
    return <p className="text-xs">
        {resumeInfo.summery}
    </p>
}