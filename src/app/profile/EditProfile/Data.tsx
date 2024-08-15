"use client"
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
interface CourseData {
    name: { [key: string]: string };
    qualification: { [key: string]: string };
    interval: { [key: string]: { start: string; end: string } };
    institution: { [key: string]: string };
    description: { [key: string]: string };
}

interface UserData {
    name: string;
    surname: string;
    nationality: string;
    national_id: string;
    dob: string;
    gender: string;
    password: string;
    password_confirmation: string;
    email: string;
    phone: any;
}


export const DataFrame = () => {
    const {userData} = useSelector((state: RootState) => state.login);
    const [profileData, setProfileData] = useState<UserData>({
        name: '',
        surname: '',
        nationality: '',
        national_id: '',
        dob: '',
        gender: '',
        password: '',
        password_confirmation: '',
        email: '',
        phone:'',
    });


    const [courseData, setCourseData] = useState<CourseData>({
        name: {},
        qualification: {},
        interval: {},
        institution: {},
        description: {}
    })

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    return {profileData, setProfileData, courseData, setCourseData, selectedFiles, setSelectedFiles}
}
