import {useState} from "react";
interface CourseData {
    name: { [key: string]: string };
    qualification: { [key: string]: string };
    interval: { [key: string]: { start: string; end: string } };
    institution: { [key: string]: string };
    description: { [key: string]: string };
}

export const DataFrame = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        surname: '',
        nationality: '',
        national_id: '',
        dob: '',
        gender: 'other',
        password: '',
        password_confirmation: '',
        email: '',
        phone: 0,
    });


    const [courseData, setCourseData] = useState<CourseData>({
        name: {},
        qualification: {},
        interval: {},
        institution: {},
        description: {}
    })

    return {profileData, setProfileData, courseData, setCourseData}
}
