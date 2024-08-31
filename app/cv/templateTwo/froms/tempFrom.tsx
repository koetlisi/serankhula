import {useDispatch} from "react-redux";
import React, {useContext, useState} from "react";
// @ts-ignore
import ResumeInfoContext from "@/app/cv/context/resumeInfoContext";
// @ts-ignore
import {updateSelectedComponent} from "@/app/lib/appRedux/slice/systemSlice";
// @ts-ignore
import {Button} from "@/components/ui/button";
import {EyeIcon, LayoutGrid} from "lucide-react";
import {IconButton} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
export const TempFrom = () =>{
    const dispatch = useDispatch()
    const context = useContext(ResumeInfoContext);
    if (!context) {
        return <div>Error: Resume information is not available.</div>;
    }
    // @ts-ignore
    const {resumeInfo, setResumeInfo} = context;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (e: string) => dispatch(updateSelectedComponent(e))
    return <div className="form-scroll">
        <div className="justify-between flex items-center m-5">
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
    </div>
}