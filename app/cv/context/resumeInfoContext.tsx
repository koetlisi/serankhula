import { Dispatch, SetStateAction, createContext } from "react";
export interface ResumeInfoContextType {
    resumeInfo: any;
    setResumeInfo: Dispatch<SetStateAction<any>>;
}

const ResumeInfoContext = createContext<ResumeInfoContextType | null>(null);

export default ResumeInfoContext;
