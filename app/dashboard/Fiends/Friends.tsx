import React, {useEffect, useState} from "react";
import './friends.css.scss'
import {Button, Popover} from "antd";
import {User} from "@/app/lib/types/loginUserType";
import {ActionOnPerson} from "@/app/dashboard/Fiends/actionOnPerson";
import {UrlAccessible} from "@/service/urlAccessible";
export const Friends: React.FC<{ user: User }> = ({ user }) =>{
    const [profileImage, setProfileImage] = useState("/assets/img.png");

    useEffect(() => {
        const checkProfileImage = async () => {
            const isAccessible = await UrlAccessible(user.profileImage) && user.profileImage !=='';
            setProfileImage(isAccessible ? user.profileImage : "/assets/img.png");
        };

        checkProfileImage().then(r => {});
    }, [user.profileImage]);
    return <Popover content={<ActionOnPerson user={user}/>} trigger="hover">
        <div className="friend hover-me" >
            <li className="sidebar-friend">
                <img src={profileImage} alt={user.name}
                     className="sidebar-friend-image"/>
                <span className="sidebar-friend-name">{user.name + ' ' + user.surname}</span>
            </li>
        </div>
    </Popover>
}
