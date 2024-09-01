import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {IconButton} from "@mui/material";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {RootState} from "@/app/lib/appRedux/store";
import {popForwardContent, popPreviousContent} from "@/app/lib/appRedux/slice/systemSlice";

export const NavigationButtons: React.FC = () => {
    const dispatch = useDispatch();
    const {prevContent, forwardContent } = useSelector((state: RootState) => state.system);
    const handleBack = () => {
        dispatch(popPreviousContent());
    };

    const handleForward = () => {
        dispatch(popForwardContent());
    };

    return <div className="navbar-links gap-3.5">
        <IconButton onClick={handleBack} disabled={prevContent.length === 0} className="icon-button navbar-link pr-5 text-black">
            <FaArrowLeft/>
        </IconButton>
        <IconButton onClick={handleForward} disabled={forwardContent.length === 0} className="navbar-link icon-button">
            <FaArrowRight/>
        </IconButton>
    </div>
};
