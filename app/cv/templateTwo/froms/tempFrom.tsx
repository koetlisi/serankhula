import {useDispatch} from "react-redux";
import React, {useContext, useState} from "react";
import {updateSelectedComponent} from "@/app/lib/appRedux/slice/systemSlice";
import {Button} from "@/components/ui/button";
import {EyeIcon, LayoutGrid} from "lucide-react";
import {IconButton} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {Personal} from "@/app/cv/templateTwo/froms/customs/personal";
import {Experience} from "@/app/cv/templateTwo/froms/customs/experience";
import {ResumeInfoContextTwo} from "@/app/cv/templateTwo/templateTwo";
import {Summery} from "@/app/cv/templateTwo/froms/customs/summery";
import {Education} from "@/app/cv/templateTwo/froms/customs/education";
import {Skill} from "@/app/cv/templateTwo/froms/customs/skill";

export const TempFrom = () => {
    const dispatch = useDispatch()
    const context = useContext(ResumeInfoContextTwo);
    const [activeIndex, setActiveIndex] = useState(1);
    if (!context) {
        return <div>Error: Resume information is not available.</div>;
    }
    // @ts-ignore
    const {resumeInfo, setResumeInfo} = context;
    const handleClick = (e: string) => dispatch(updateSelectedComponent(e))

    return <div>
        <div className="justify-between flex items-center m-5 sticky">
            <Button variant="outline" className="flex gap-2" size="sm"><LayoutGrid/>Theme</Button>
            <div className="flex gap-2">
                {activeIndex > 1 && <IconButton onClick={() => setActiveIndex(activeIndex - 1)}
                                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow-md transition-all">
                    <ArrowBack/>
                </IconButton>}
                {activeIndex === 5 ? <IconButton onClick={() => handleClick('ViewResume')}
                                                 className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow-md transition-all">
                    <EyeIcon/>
                </IconButton> : <IconButton onClick={() => setActiveIndex(activeIndex + 1)}
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow-md transition-all">
                    <ArrowForward/>
                </IconButton>}
            </div>
        </div>
        <div className="form-scroll">
            {/*Personal Details*/}
            {activeIndex === 1 && <Personal resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
            {activeIndex === 2 && <Summery resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
            {activeIndex === 3 && <Experience resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
            {activeIndex === 4 && <Education resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
            {activeIndex === 5 && <Skill resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
            {/*Summery*/}
        </div>
    </div>
}