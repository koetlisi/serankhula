import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import {ResumeInfo} from "@/app/lib/types/templateOneInterface";
import ResumeInfoContext from "@/app/cv/context/resumeInfoContext";
import {FormSections} from "@/app/cv/EditResume/formSections";
import {ResumePreview} from "@/app/cv/EditResume/resumePreview";

export const EditResume: React.FC = () => {
    const {selectedResumeId} = useSelector((state: RootState) => state.system);
    const {templates} = useSelector((state: RootState) => state.resumeTemplates);
    const selectedResume = templates.find(resume => resume.id === selectedResumeId);
    const [resumeInfo, setResumeInfo] = useState<ResumeInfo>(selectedResume?.requiredData);
    return <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
        <div className="grid grid-cols-1 bg-dot md:grid-cols-2 p-0 gap-10">
             {/*From Section*/}
            <FormSections/>

            {/* Preview Section*/}
            <ResumePreview/>
        </div>
    </ResumeInfoContext.Provider>
}