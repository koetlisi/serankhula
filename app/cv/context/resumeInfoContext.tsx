import { Dispatch, SetStateAction, createContext } from "react";
import {ResumeInfo} from "@/app/lib/types/templateOneInterface";
export interface ResumeInfoContextType {
    resumeInfo: ResumeInfo;
    setResumeInfo: Dispatch<SetStateAction<ResumeInfo>>;
}

const ResumeInfoContext = createContext<ResumeInfoContextType | null>(null);

export default ResumeInfoContext;
