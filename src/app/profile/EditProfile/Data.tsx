import {useState} from "react";

export const DataFrame = () =>{
    const [profileData, setProfileData] = useState({
        name: '',
        surname: '',
        nationality: '',
        national_id:'',
        dob:'',
        gender:'other',
        password:'',
        password_confirmation:'',
        email:'',
        phone:0,
    });

    return {profileData, setProfileData}
}
