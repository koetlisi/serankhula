import {Resume} from "@/GlobalRedux/Features/resume/resume";
import React from "react";
import {NotebookPen} from "lucide-react";
import {useDispatch} from "react-redux";
import {updateSelectedResume} from "@/GlobalRedux/Features/system";
import {updateSelectedComponent} from "@/GlobalRedux/Features/pageControl/pageControlSlice";

export const ResumeItemCard: React.FC<{resume:Resume}> = ({resume}) =>{
    const dispatch = useDispatch()
    const handleClick = (e:string,id:string) => {
        dispatch(updateSelectedResume(id))
        dispatch(updateSelectedComponent(e))
    }
    return <div className="">
        <div className="p-14 bg-secondary ml-4 flex items-center justify-center h-[280px] border border-primary rounded-2xl hover:scale-105 transition-all hover:shadow-accent shadow-card">
            <NotebookPen onClick={()=>handleClick('EditResume', resume.uid) }/>
        </div>
    </div>
}