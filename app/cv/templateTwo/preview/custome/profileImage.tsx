import React from "react";
import {ResumeInfo} from "@/app/lib/types/templateTwoInterface";

const ProfileImage: React.FC<{ userInfo: ResumeInfo }> = ({ userInfo }) => {
    console.log(userInfo)
    return (
        <div className="flex flex-col items-center text-center p-4 profile">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-300">
                <img
                    src={userInfo.userImage}
                    alt="profile-image"
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="tracking-normal uppercase text-antiquewhite mt-4 text-xl font-semibold text-center">{userInfo.firstName + " " + userInfo.lastName}</h2>
            <p className="text-xs text-start uppercase text-[#f7f7f7ec]">{userInfo.education[2].major}</p>
        </div>
    );
};

export default ProfileImage;
