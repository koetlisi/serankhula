import React from "react";
import {ResumeInfo} from "@/app/lib/types/templateOneInterface";

export const Summery: React.FC<{ resumeInfo: ResumeInfo }> = ({resumeInfo})=>{
    return <p className="text-xs">
        {resumeInfo.summery}
    </p>
}