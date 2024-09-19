import React, {useContext, useState} from "react";
import {PersonalDetails} from "@/app/cv/templateOne/EditResume/preview/personalDetails";
import {Summery} from "@/app/cv/templateOne/EditResume/preview/summery";
import {ProfessionalExperience} from "@/app/cv/templateOne/EditResume/preview/professionalExperience";
import {Education} from "@/app/cv/templateOne/EditResume/preview/education";
import {Skill} from "@/app/cv/templateOne/EditResume/preview/skill";
import {ResumeInfoContextOne} from "@/app/cv/templateOne";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import {ResumeInfo} from "@/app/lib/types/templateOneInterface";

export const ResumePreview = () => {

    const {selectedResumeId} = useSelector((state: RootState) => state.system);
    const {templates} = useSelector((state: RootState) => state.resumeTemplates);
    const selectedResume = templates.find(resume => resume.id === selectedResumeId);
    const [resumeInfo, setResumeInfo] = useState<ResumeInfo>(selectedResume?.requiredData);

    return (
        <div
            style={{ borderBlockColor: resumeInfo.themeColor }}
            id="print-area"
            className="form-scroll shadow-lg h-full p-5 m-5 print:m-0 border-t-[20px]"
        >
            {/* Personal resume info */}
            <PersonalDetails resumeInfo={resumeInfo} />

            {/* Summery info */}
            <Summery resumeInfo={resumeInfo} />

            {/* Professional Experience */}
            <ProfessionalExperience resumeInfo={resumeInfo} />

            {/* Educational Preview */}
            <Education resumeInfo={resumeInfo} />

            {/* Skill Preview */}
            <Skill resumeInfo={resumeInfo} />
        </div>
    );
};
