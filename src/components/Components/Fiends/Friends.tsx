import React from "react";
import './friends.css.scss'
import {User} from "@/components/Components/Fiends/dummyData";
export const Friends: React.FC<{ user: User }> = ({ user }) =>{
    return <div className="friend">
        <li className="sidebar-friend">
            <img src={user.profilePicture} alt={user.username} className="sidebar-friend-image"/>
            <span className="sidebar-friend-name">{user.username}</span>
        </li>
    </div>
}
