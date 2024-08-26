import {Resume} from "@/GlobalRedux/Features/resume/resume";
import React from "react";
import {NotebookPen} from "lucide-react";
import {useDispatch} from "react-redux";
import {updateSelectedResume} from "@/GlobalRedux/Features/system";

export const ResumeItemCard: React.FC<{resume:Resume}> = ({resume}) =>{
    const dispatch = useDispatch()
    return <div className="">
        <div className="p-14 bg-secondary ml-4 flex items-center justify-center h-[280px] border border-primary rounded-2xl hover:scale-105 transition-all hover:shadow-accent shadow-card">
            <NotebookPen onClick={()=>dispatch(updateSelectedResume(resume.uid))}/>
        </div>
    </div>
}