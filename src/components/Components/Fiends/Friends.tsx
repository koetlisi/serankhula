import React from "react";
import './friends.css.scss'
import type { User } from "@/app/GlobalRedux/Features/user/users"
export const Friends: React.FC<{ user: User }> = ({ user }) =>{
    const shouldShowIcon = !user.profileImage || user.profileImage === '' || user.profileImage===null;
    return <div className="friend">
        <li className="sidebar-friend">
            <img src={shouldShowIcon?'assets/img.png':user.profileImage} alt={user.name} className="sidebar-friend-image"/>
            <span className="sidebar-friend-name">{user.name+' '+user.surname}</span>
        </li>
    </div>
}
