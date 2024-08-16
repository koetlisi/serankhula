"use client";
import './nav.css.scss'
import {Input} from "antd";
import {ChatBubble, Notifications, Person, Search} from "@mui/icons-material";
import {Badge} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedComponent} from "@/app/GlobalRedux/Features/pageControl/pageControlSlice";
import {RootState} from "@/app/GlobalRedux/store";

export const NavBar = () => {
    const { userData } = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    const handleClick = () => dispatch(updateSelectedComponent('Profile'))
    return <div className='navbar-container'>
        <div className='navbar-left'>
            <span className='logo'>Serankhula</span>
        </div>
        <div className='navbar-center'>
            <div className="search-bar">
                <Input className='search-input' prefix={<Search className='search-icon' />} name='all-search' />
            </div>
        </div>
        <div className='navbar-right'>
            <div className="navbar-links">
                <span className="navbar-link">Homepage</span>
                <span className="navbar-link">Timeline</span>
            </div>
            <div className="navbar-icons">
                <Badge sx={{color:"white"}} badgeContent={4} color="primary" className="navbar-icon-item">
                    <Person color="action"/>
                </Badge>
                <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                    <ChatBubble color="action"/>
                </Badge>
                <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                    <Notifications color="action"/>
                </Badge>
            </div>
            <button onClick={handleClick}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={userData.profileImage} alt="" className="navbar-image"/>
            </button>
        </div>
    </div>
}
