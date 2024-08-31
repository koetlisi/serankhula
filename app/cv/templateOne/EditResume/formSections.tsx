import React, {useContext, useState} from "react";
import {Button} from "@/components/ui/button";
import {IconButton} from "@mui/material";
import {ArrowBack, ArrowForward, ViewAgenda} from "@mui/icons-material";
import {EyeIcon, LayoutGrid} from "lucide-react";
import {useDispatch} from "react-redux";
import ResumeInfoContext from "@/app/cv/context/resumeInfoContext";
import {updateSelectedComponent} from "@/app/lib/appRedux/slice/systemSlice";
import {Personal} from "@/app/cv/templateOne/EditResume/form/personal";
import {Summery} from "@/app/cv/templateOne/EditResume/form/summery";
import {Experience} from "@/app/cv/templateOne/EditResume/form/experience";
import {Education} from "@/app/cv/templateOne/EditResume/form/education";
import {Skill} from "@/app/cv/templateOne/EditResume/form/skill";

export const FormSections = () => {
    const dispatch = useDispatch()
    const context = useContext(ResumeInfoContext);

    if (!context) {
        return <div>Error: Resume information is not available.</div>;
    }
    const {resumeInfo, setResumeInfo} = context;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (e: string) => dispatch(updateSelectedComponent(e))
    return <div className="my-5">
        <div className="justify-between flex items-center mx-5">
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
           {/*Summery*/}
           {activeIndex === 2 && <Summery resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
           {/*Experience*/}
           {activeIndex === 3 && <Experience resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
           {/*Educational Details*/}
           {activeIndex === 4 && <Education resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
           {/*Skills*/}
           {activeIndex === 5 && <Skill resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>}
       </div>
    </div>
}