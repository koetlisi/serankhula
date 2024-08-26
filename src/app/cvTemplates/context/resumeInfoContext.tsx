import { Dispatch, SetStateAction } from "react";
import { ResumeInfo } from "@/app/cvTemplates/custome/EditResume/dummyData"; // Adjust the path as needed

export interface ResumeInfoContextType {
    resumeInfo: ResumeInfo;
    setResumeInfo: Dispatch<SetStateAction<ResumeInfo>>;
}

import { createContext } from "react";
import { ResumeInfoContextType } from "./resumeInfoContextType"; // Adjust the path as needed

const ResumeInfoContext = createContext<ResumeInfoContextType | null>(null);

export default ResumeInfoContext;
