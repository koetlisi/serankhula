"use client";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {useToast} from "@/components/ui/use-toast";
import {loginSlice, updateUser} from "@/app/GlobalRedux/Features/auth/login";

import React, {useState} from 'react';
import {CustomerServiceOutlined} from '@ant-design/icons';
import {FloatButton, Switch} from 'antd';
import {SaveAll} from "lucide-react";
import {BiCurrentLocation} from "react-icons/bi";
import {AllInbox} from "@mui/icons-material";
import {prepareFormData} from "@/function/prepareCourseData";
import {prepareUserProfileData} from "@/function/prepareUserProfileData";
import {registerCourse} from "@/app/GlobalRedux/Features/course/userCourse/thunks/courseRegistration";
import {AboutYorRegistration} from "@/app/GlobalRedux/Features/user/thunk/aboutYorRegistration";

const SaveEdition: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [submit, setSubmit] = useState({
        userProfile: true,
        course: true,
        aboutYou:true
    })
    const {userData} = useSelector((state: RootState) => state.login);
    const {courseData} = useSelector((state: RootState) => state.course);
    const aboutYou = useSelector((state: RootState) => state.aboutYou);
    const toSubmit = useSelector((state: RootState) => state.system);
    const dispatch = useDispatch();
    const {toast} = useToast();
    const submission = {
        'edit user profile': prepareUserProfileData(userData),
        'user qualifications': prepareFormData(courseData),
        'about you': {
            'whereAbout': 'About DaP',
            'internship': aboutYou.internshipSummary,
            'aboutYou': aboutYou.motivationalSummary,
        }
    }
    const singleSubmission = () =>{
        if(toSubmit.currentSubmission.toLowerCase() === 'about you'){
            // @ts-ignore
            dispatch(AboutYorRegistration(submission["about you"]))
        }
    }
    const submitAll = async () => {
        if (!submit.userProfile) {
            const formData = prepareUserProfileData(userData)
            // @ts-ignore
            dispatch(updateUser(formData, toast))
        }
        if (submit.userProfile) {
            const courseDataJson = prepareFormData(courseData)
            // @ts-ignore
            dispatch(registerCourse(courseDataJson))
        }
        if(submit.aboutYou){
            // @ts-ignore
            dispatch(AboutYorRegistration(submission["about you"]))
        }
    }

    return (
        <>
            <Switch onChange={setOpen} checked={open} style={{margin: 16}}/>
            <FloatButton.Group
                open={open}
                trigger="click"
                onClick={() => setOpen(!open)}  // Toggle the open state on click
                style={{insetInlineEnd: 20}}
                icon={open ? <CustomerServiceOutlined/> : <SaveAll/>}
            >
                <FloatButton onClick={singleSubmission} icon={<BiCurrentLocation/>}/>
                <FloatButton onClick={submitAll} icon={<AllInbox/>}/>
            </FloatButton.Group>
        </>
    );
};

export default SaveEdition;
