import React from "react"
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
const ProfileImage: React.FC<{userInfo:any}> = ({userInfo})=>{
    const {courses} = useSelector((state: RootState) => state.userCourses);
    const smallestKeyObject = courses.reduce((min, current) => {
        return current.id < min.id ? current : min;
    }, courses[0]);
    return <div className="profile">
        <img src={userInfo.profileImage} alt="profile-image" />
        <h2 className="profile-name">{userInfo.name+" "+userInfo.surname}</h2>
        <p className="profile-career" style={{fontSize:"16px"}}>{smallestKeyObject.qualification}</p>
    </div>
}

export default ProfileImage;