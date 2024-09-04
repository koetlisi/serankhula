import React, {useEffect, useState} from "react";
import './friends.css.scss'
import {Button, Popover} from "antd";
import {User} from "@/app/lib/types/loginUserType";
import {ActionOnPerson} from "@/app/dashboard/Fiends/actionOnPerson";
import {AvataImages} from "@/service/hooks/avataImages";
export const Friends: React.FC<{ user: User }> = ({ user }) =>{
    return <Popover content={<ActionOnPerson user={user}/>} trigger="hover">
        <div className="friend hover-me" >
            <li className="sidebar-friend">
                <AvataImages imgPath={user.profileImage} className="sidebar-friend-image"/>
                <span className="sidebar-friend-name">{user.name + ' ' + user.surname}</span>
            </li>
        </div>
    </Popover>
}
