"use client";
import {prepareFormData} from "@/function/prepareCourseData";
import {SaveAll} from "lucide-react";
import {IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {useToast} from "@/components/ui/use-toast";
import React from "react";
import {fetchFileFromLocalStorage} from "@/app/auth/getFiles";

// Rename the component to start with an uppercase letter
const SaveEdition: React.FC = () => {
    const {userData} = useSelector((state: RootState) => state.login);
    const {courseData} = useSelector((state: RootState) => state.course);
    const dispatch = useDispatch();
    const {toast} = useToast();

    return <IconButton className="floating-button" onClick={async () => {
        const courseDataJson = prepareFormData(courseData)
        const file = await fetchFileFromLocalStorage('file_path');
        const formData = new FormData();
        if (file !== null) {
            formData.append('file', file);
        }
        for (const [key, value] of Object.entries(userData)) {
            if (value !== null && value !== undefined) {
                formData.append(key, value.toString());
            }
        }
        // @ts-ignore
        dispatch(updateUser(formData, toast))
    }}>
        <SaveAll/>
    </IconButton>
};

export default SaveEdition;
