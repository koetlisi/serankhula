import {Personal} from "@/app/cvTemplates/custome/EditResume/form/personal";
import React, {useContext, useState} from "react";
import ResumeInfoContext from "@/app/cvTemplates/context/resumeInfoContext";
import {Button} from "@/components/ui/button";
import {IconButton} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {LayoutGrid} from "lucide-react";
import {Summery} from "@/app/cvTemplates/custome/EditResume/form/summery";

export const FormSections = () =>{
    const context = useContext(ResumeInfoContext);

    if (!context) {
        return <div>Error: Resume information is not available.</div>;
    }
    const { resumeInfo, setResumeInfo } = context;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeIndex, setActiveIndex] = useState(1);

    return <div>
        <div className="justify-between flex items-center m-5">
            <Button variant="outline" className="flex gap-2" size="sm"><LayoutGrid/>Theme</Button>
            <div className="flex gap-2">
                {activeIndex>1&&<IconButton onClick={()=>setActiveIndex(activeIndex-1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow-md transition-all">
                    <ArrowBack/>
                </IconButton>}
                <IconButton onClick={()=>setActiveIndex(activeIndex+1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow-md transition-all">
                    <ArrowForward/>
                </IconButton>
            </div>
        </div>
        {/*Personal Details*/}
        {activeIndex ===1 && <Personal resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}

        {/*Summery*/}
        {activeIndex ===2 && <Summery resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}

        {/*Experience*/}

        {/*Educational Details*/}


        {/*Skills*/}
    </div>
}