import React from "react";
const ProfileImage = ({userInfo})=>{
    return <div className="profile">
        <img src={userInfo.profileImage} alt="profile-image" />
        <h2 className="profile-name">{userInfo.name+" "+userInfo.surname}</h2>
        <p className="profile-career">Computer Science</p>
    </div>
}

export default ProfileImage;