import {TempFrom} from "@/app/cv/templateTwo/froms/tempFrom";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import React, {useState} from "react";
import {ResumeInfo} from "@/app/lib/types/templateTwoInterface";
import {TempReview} from "@/app/cv/templateTwo/preview/tempReview";
import {createResumeInfoContext} from "@/app/cv/context/resumeInfoContext";
export const ResumeInfoContextTwo = createResumeInfoContext<ResumeInfo>();
export const TemplateTwo = () => {
    const {selectedResumeId} = useSelector((state: RootState) => state.system);
    const {templates} = useSelector((state: RootState) => state.resumeTemplates);
    const selectedResume = templates.find(resume => resume.id === selectedResumeId);
    const [resumeInfo, setResumeInfo] = useState<ResumeInfo>(selectedResume?.requiredData);
    return <ResumeInfoContextTwo.Provider value={{resumeInfo, setResumeInfo}}>
        <div className="grid grid-cols-1 bg-dot md:grid-cols-2  p-0 gap-10">
            {/*From Section*/}
            <TempFrom/>

            {/* Preview Section*/}
            <TempReview/>
        </div>
    </ResumeInfoContextTwo.Provider>
}