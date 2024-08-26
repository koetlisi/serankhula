import { Dispatch, SetStateAction, createContext } from "react";
import { ResumeInfo } from "@/app/cvTemplates/custome/EditResume/dummyData"; // Adjust the path as needed

export interface ResumeInfoContextType {
    resumeInfo: ResumeInfo;
    setResumeInfo: Dispatch<SetStateAction<ResumeInfo>>;
}

const ResumeInfoContext = createContext<ResumeInfoContextType | null>(null);

export default ResumeInfoContext;
