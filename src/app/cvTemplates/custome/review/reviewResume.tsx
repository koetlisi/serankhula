import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ResumePreview } from "@/app/cvTemplates/custome/EditResume/resumePreview";
import ResumeInfoContext from "@/app/cvTemplates/context/resumeInfoContext";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { DummyData } from "@/app/cvTemplates/custome/EditResume/dummyData";
import { DownloadCloud } from "lucide-react";
import { Share } from "@mui/icons-material";
import { ArrowBack } from "@mui/icons-material";
import {updateSelectedComponent} from "@/GlobalRedux/Features/pageControl/pageControlSlice";

export const ReviewResume = () => {
    const dispatch = useDispatch()
    const { selectedResume } = useSelector((state: RootState) => state.system);
    const { resumes } = useSelector((state: RootState) => state.resume);
    const { dummyData } = DummyData();
    const [resumeInfo, setResumeInfo] = useState(dummyData);
    const handleClick = (e: string) => dispatch(updateSelectedComponent(e))
    const handleDownload = () => {
        window.print();
    };

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className="my-10 mx-10 md:mx-20 lg:mx-36 print:m-0 print:h-full">
                <ResumePreview />
            </div>
            {/* Floating Back Button */}
            <div className="fixed top-5 left-5" id="no-print">
                <IconButton
                    onClick={()=>handleClick('EditResume')}
                    className="bg-gray-800 text-white hover:bg-gray-600 transition duration-300"
                >
                    <ArrowBack />
                </IconButton>
            </div>
            {/* Floating Action Buttons */}
            <div className="fixed bottom-5 right-5 flex space-x-4" id="no-print">
                <IconButton
                    onClick={handleDownload}
                    className="bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
                >
                    <DownloadCloud />
                </IconButton>
                <IconButton
                    className="bg-green-500 text-white hover:bg-green-700 transition duration-300"
                >
                    <Share />
                </IconButton>
            </div>
        </ResumeInfoContext.Provider>
    );
};
