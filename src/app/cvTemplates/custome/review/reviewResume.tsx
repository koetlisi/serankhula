import { NavBar } from "@/components/Components/NavThings/NavBar";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ResumePreview } from "@/app/cvTemplates/custome/EditResume/resumePreview";
import ResumeInfoContext from "@/app/cvTemplates/context/resumeInfoContext";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { DummyData } from "@/app/cvTemplates/custome/EditResume/dummyData";
import {DownloadCloud} from "lucide-react";
import {Share} from "@mui/icons-material";

export const ReviewResume = () => {
    const { selectedResume } = useSelector((state: RootState) => state.system);
    const { resumes } = useSelector((state: RootState) => state.resume);
    const { dummyData } = DummyData();
    const [resumeInfo, setResumeInfo] = useState(dummyData);

    const handleDownload = () => {
        window.print();
    };

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id="no-print">
                <NavBar />
                <div className="my-10 mx-10 md:mx-20 lg:mx-36">
                    <h2 className="text-2xl text-center font-medium">
                        Congrats! Your Ultimate AI generated Resume is Ready
                    </h2>
                    <p className="text-center">You can now download or share it</p>
                </div>
            </div>
            <div className="my-10 mx-10 md:mx-20 lg:mx-36 print:m-0 print:h-full">
                <ResumePreview />
            </div>
            {/* Floating Buttons */}
            <div className="fixed bottom-5 right-5 flex space-x-4">
                <IconButton
                    onClick={handleDownload}
                    className="bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
                >
                    <DownloadCloud/>
                </IconButton>
                <IconButton
                    className="bg-green-500 text-white hover:bg-green-700 transition duration-300"
                >
                    <Share/>
                </IconButton>
            </div>
        </ResumeInfoContext.Provider>
    );
};
