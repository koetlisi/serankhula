import { Dispatch, SetStateAction, createContext } from "react";

export interface ResumeInfoContextType<T> {
    resumeInfo: T;
    setResumeInfo: Dispatch<SetStateAction<T>>;
}

// Use a function to create a generic context
export function createResumeInfoContext<T>() {
    return createContext<ResumeInfoContextType<T> | null>(null);
}

