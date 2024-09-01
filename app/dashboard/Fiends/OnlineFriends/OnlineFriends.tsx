import './online.css.scss'
import React from "react";
import {User} from "@/app/dashboard/Fiends/dummyData";

export const OnlineFriends:  React.FC<{ user: User }> = ({ user }) =>{
    return <div className="online">
        <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
                <img src={user.profilePicture}  alt={user.username} className="rightbar-profile-image" />
                <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-user-name">{user.username}</span>
        </li>
    </div>
}
