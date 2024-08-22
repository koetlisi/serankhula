
"use client";
import {IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {useToast} from "@/components/ui/use-toast";
import {fetchFileFromLocalStorage} from "@/app/auth/getFiles";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {loginSlice, updateUser} from "@/app/GlobalRedux/Features/auth/login";
import {addCourse, Course} from "@/app/GlobalRedux/Features/course/userCourse/courses";

import React, { useState } from 'react';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton, Switch } from 'antd';
import {SaveAll} from "lucide-react";
import {BiCurrentLocation} from "react-icons/bi";
import {AllInbox} from "@mui/icons-material";
import {prepareFormData} from "@/function/prepareCourseData";
const SaveEdition: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [submit, setSubmit] = useState({
        userProfile: true,
        course: true
    })
    const {userData} = useSelector((state: RootState) => state.login);
    const {courseData} = useSelector((state: RootState) => state.course);
    const dispatch = useDispatch();
    const {toast} = useToast();

    const submitAll = async () =>{
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
    }

    return (
        <>
            <Switch  onChange={setOpen} checked={open} style={{ margin: 16 }} />
            <FloatButton.Group
                open={open}
                trigger="click"
                onClick={() => setOpen(!open)}  // Toggle the open state on click
                style={{ insetInlineEnd: 20}}
                icon={open?<CustomerServiceOutlined />:<SaveAll />}
            >
                <FloatButton icon={<BiCurrentLocation />}/>
                <FloatButton onClick={submitAll} icon={<AllInbox/>} />
            </FloatButton.Group>
        </>
    );
};

export default SaveEdition;
