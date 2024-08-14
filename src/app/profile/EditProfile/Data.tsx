import {useState} from "react";

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


    const [courseData, setCourseData] = useState({
        name: [],
        qualification: [],
        interval: [],
        institution: [],
        description: []
    })

    return {profileData, setProfileData, courseData, setCourseData}
}
