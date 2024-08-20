"use client";
import {prepareFormData} from "@/function/prepareCourseData";
import {SaveAll} from "lucide-react";
import {IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {useToast} from "@/components/ui/use-toast";
import React, {useState} from "react";
import {fetchFileFromLocalStorage} from "@/app/auth/getFiles";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {loginSlice, updateUser} from "@/app/GlobalRedux/Features/auth/login";
import {addCourse, Course} from "@/app/GlobalRedux/Features/course/userCourse/courses";

// Rename the component to start with an uppercase letter
const SaveEdition: React.FC = () => {
    const [submit, setSubmit] = useState({
        userProfile: true,
        course: true
    })
    const {userData} = useSelector((state: RootState) => state.login);
    const {courseData} = useSelector((state: RootState) => state.course);
    const dispatch = useDispatch();
    const {toast} = useToast();

    return <IconButton className="floating-button" onClick={async () => {
        if (!submit.userProfile) {
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
        }
        if (submit.userProfile) {
            const courseDataJson = prepareFormData(courseData)
            try {
                const response = await HttpPostMethod(userData.token, 'register_qualification/', courseDataJson);
                if (response.code === 201) {
                    toast({
                        description: "Qualification Upgraded.",
                    })
                    const newData:Course[] = response.data
                    newData.forEach(course => {
                        dispatch(addCourse(course));
                    });
                } else if (response.code === 422) {
                    toast({
                        variant: "destructive",
                        description: response.msg,
                    })
                }
            }catch (e) {
                console.log(e)
                toast({
                    variant: "destructive",
                    description: "Something went wrong",
                })
            } finally {
                //dispatch(loginSlice.actions.updateIsLoading(false))
            }
        }
    }}>
        <SaveAll/>
    </IconButton>
};

export default SaveEdition;
