import React, {useContext} from "react";
import ResumeInfoContext from "@/app/cvTemplates/context/resumeInfoContext";
import {PersonalDetails} from "@/app/cvTemplates/custome/EditResume/preview/personalDetails";
import {Summery} from "@/app/cvTemplates/custome/EditResume/preview/summery";
import {ProfessionalExperience} from "@/app/cvTemplates/custome/EditResume/preview/professionalExperience";
import {Education} from "@/app/cvTemplates/custome/EditResume/preview/education";
import {Skill} from "@/app/cvTemplates/custome/EditResume/preview/skill";

export const ResumePreview = () =>{
    const context = useContext(ResumeInfoContext);

    if (!context) {
        return <div>Error: Resume information is not available.</div>;
    }

    const { resumeInfo, setResumeInfo } = context;

    return <div style={{borderBlockColor:resumeInfo.themeColor}} id="print-area"  className="form-scroll shadow-lg h-full p-14 m-5 print:m-0 border-t-[20px]">
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