import React from "react";
import './friends.css.scss'
import {Button, Popover} from "antd";
import {User} from "@/app/lib/types/loginUserType";
import {ActionOnPerson} from "@/app/dashBoard/Fiends/actionOnPerson";
export const Friends: React.FC<{ user: User }> = ({ user }) =>{

    const shouldShowIcon = !user.profileImage || user.profileImage === '' || user.profileImage===null;
    return <Popover content={<ActionOnPerson user_id={user.id}/>} trigger="hover">
        <div className="friend hover-me" >
            <li className="sidebar-friend">
                <img src={shouldShowIcon ? 'assets/img.png' : user.profileImage} alt={user.name}
                     className="sidebar-friend-image"/>
                <span className="sidebar-friend-name">{user.name + ' ' + user.surname}</span>
            </li>
        </div>
    </Popover>
}
