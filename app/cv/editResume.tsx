import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import {ResumeInfo} from "@/app/lib/types/templateOneInterface";
import ResumeInfoContext from "@/app/cv/context/resumeInfoContext";

export const EditResume: React.FC = () => {
    const {selectedResumeId} = useSelector((state: RootState) => state.system);
    const {templates} = useSelector((state: RootState) => state.resumeTemplates);
    const selectedResume = templates.find(resume => resume.id === selectedResumeId);
    const [resumeInfo, setResumeInfo] = useState<ResumeInfo>(selectedResume?.requiredData);
    return <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>

    </ResumeInfoContext.Provider>
}