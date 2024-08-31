import React, {useContext} from "react";
import ResumeInfoContext from "@/app/cv/context/resumeInfoContext";
import {PersonalDetails} from "@/app/cv/templateOne/EditResume/preview/personalDetails";
import {Summery} from "@/app/cv/templateOne/EditResume/preview/summery";
import {ProfessionalExperience} from "@/app/cv/templateOne/EditResume/preview/professionalExperience";
import {Education} from "@/app/cv/templateOne/EditResume/preview/education";
import {Skill} from "@/app/cv/templateOne/EditResume/preview/skill";

export const ResumePreview = () =>{
    const context = useContext(ResumeInfoContext);

    if (!context) {
        return <div>Error: Resume information is not available.</div>;
    }

    const { resumeInfo, setResumeInfo } = context;

    return <div style={{borderBlockColor:resumeInfo.themeColor}} id="print-area"  className="form-scroll shadow-lg h-full p-5 m-5 print:m-0 border-t-[20px]">
        {/*personal resume info*/}
        <PersonalDetails resumeInfo={resumeInfo}/>

        {/*summery info*/}
        <Summery resumeInfo={resumeInfo}/>

        {/*Professional Experience*/}
        <ProfessionalExperience resumeInfo={resumeInfo}/>
        
        {/*Educational Preview*/}
        <Education resumeInfo={resumeInfo}/>
        
        {/*Skill Preview*/}
        <Skill resumeInfo={resumeInfo}/>
    </div>
}