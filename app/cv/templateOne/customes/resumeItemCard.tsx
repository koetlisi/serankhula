import React from "react";
import { NotebookPen, MoreHorizontal } from "lucide-react"; // Importing the three-dot icon
import { useDispatch } from "react-redux";
import { updateSelectedComponent, updateSelectedResumeId } from "@/app/lib/appRedux/slice/systemSlice";
import { Template } from "@/app/lib/types/templates";

export const ResumeItemCard: React.FC<{ resume: Template }> = ({ resume }) => {
    const dispatch = useDispatch();

    const handleClick = (e: string, id: number) => {
        dispatch(updateSelectedResumeId(id));
        dispatch(updateSelectedComponent(e));
    };

    return (
        <div className="">
            <div
                onClick={() => handleClick('EditResume', resume.id)}
                style={{
                    borderColor: resume.requiredData.themeColor,
                    backgroundImage: 'url(/cv.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
                className="relative p-14 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-2xl hover:scale-105 transition-all hover:shadow-accent shadow-card"
            >
                <div className="flex items-center justify-center h-[180px]">
                    <NotebookPen />
                </div>
                <button
                    className="absolute bottom-2 right-2 p-1 rounded-full hover:bg-gray-200 transition-all"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <MoreHorizontal size={20} />
                </button>
            </div>
            <h2 className="text-sm text-center mt-2">{resume.title}</h2>
        </div>
    );
};
