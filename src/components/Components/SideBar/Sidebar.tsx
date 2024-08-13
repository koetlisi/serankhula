import './sidebar.css.scss'
import React from "react";
import {MenuLink} from "@/components/Components/MenuLink/MenuLink";
import {LogoutOutlined, RssFeedOutlined} from "@mui/icons-material";
import {Friends} from "@/components/Components/Fiends/Friends";
import {Users} from "@/components/Components/Fiends/dummyData";

export const Sidebar = () => {
    return <div className="sidebar">
        <div className="sidebar-wrapper">
            <MenuLink icon={RssFeedOutlined} text='Total Graduates(8000)'/>
            <MenuLink icon={RssFeedOutlined} text='Feed'/>
            <MenuLink icon={RssFeedOutlined} text='Feed'/>
            <MenuLink icon={RssFeedOutlined} text='Feed'/>
            <MenuLink icon={RssFeedOutlined} text='Feed'/>
            <MenuLink icon={LogoutOutlined} text='Logout'/>
            <button className="sidebar-btn">Show More</button>
            <hr className="sidebar-hr"/>
            <ul className="sidebar-friend-list">
                {Users.map(user=>(
                    <Friends key={user.id}  user={user}/>
                ))}
            </ul>
        </div>
    </div>
}
