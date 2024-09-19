import React, {useContext} from "react";
import {PersonalDetails} from "@/app/cv/templateOne/EditResume/preview/personalDetails";
import {Summery} from "@/app/cv/templateOne/EditResume/preview/summery";
import {ProfessionalExperience} from "@/app/cv/templateOne/EditResume/preview/professionalExperience";
import {Education} from "@/app/cv/templateOne/EditResume/preview/education";
import {Skill} from "@/app/cv/templateOne/EditResume/preview/skill";
import {ResumeInfoContextOne} from "@/app/cv/templateOne";

export const ResumePreview = () => {
    const context = useContext(ResumeInfoContextOne);

    if (!context || !context.resumeInfo) {
        // Show loading state while context or resumeInfo is not available
        return <div>Loading resume information...</div>;
    }

    const { resumeInfo, setResumeInfo } = context;

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
