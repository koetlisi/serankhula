import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import {Index} from "@/app/cv/templateOne";
import {TemplateTwo} from "@/app/cv/templateTwo/templateTwo";

const EditResume: React.FC = () => {
    const {selectedResumeId} = useSelector((state: RootState) => state.system);
    const {templates} = useSelector((state: RootState) => state.resumeTemplates);
    const selectedResume = templates.find(resume => resume.id === selectedResumeId);
    const pageMap:{[key:string]: React.ReactNode} = {
        null:<div>Page not found</div>,
        default:<Index/>,
        templateTwo:<TemplateTwo/>
    }
    return pageMap[selectedResume?.name??'null'] 

}

export default EditResume