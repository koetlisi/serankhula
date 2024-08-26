import React from "react";
import {ResumeInfo} from "@/app/cvTemplates/custome/EditResume/dummyData";

export const PersonalDetails: React.FC<{resumeInfo:ResumeInfo}> = ({resumeInfo}) =>{
    return <div>{resumeInfo.firstName}</div>
}