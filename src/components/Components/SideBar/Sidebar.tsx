"use client"
import './sidebar.css.scss'
import React from "react";
import {MenuLink} from "@/components/Components/MenuLink/MenuLink";
import {LogoutOutlined} from "@mui/icons-material";
import {Friends} from "@/components/Components/Fiends/Friends";
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WalletIcon from '@mui/icons-material/Wallet';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";
import {logout, updateIsLogin} from "@/GlobalRedux/Features/auth/login";
import {updateSelectedComponent} from "@/GlobalRedux/Features/pageControl/pageControlSlice";

export const Sidebar = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state: RootState) => state.users);
    const {userData} = useSelector((state: RootState) => state.login);
    const handleClick = () => dispatch(updateSelectedComponent('Profile'))
    return <div className="sidebar">
        <div className="sidebar-wrapper">
            <div onClick={handleClick} className="menu-link">
                <img alt={userData.name} style={{width:"40px", height:"40px", borderRadius:"500%"}} src={(userData.profileImage===null|| userData.profileImage=='')?'assets/img.png':userData.profileImage} className="sidebar-icon" />
                <span className="sidebar-list-item-text menu-link-text">{userData.name+' '+userData.surname}</span>
            </div>
            <MenuLink onClick={()=>{}} icon={AccountBalanceIcon} text='Students'/>
            <MenuLink onClick={()=>{}} icon={SchoolIcon} text='Graduates'/>
            <MenuLink onClick={()=>{}} icon={BadgeIcon} text='Jobless'/>
            <MenuLink onClick={()=>{}} icon={AccountBalanceWalletIcon} text='Workers'/>
            <MenuLink onClick={()=>{}} icon={WalletIcon} text='Entrepreneurs'/>
            <MenuLink onClick={()=>dispatch(logout())} icon={LogoutOutlined} text='Logout'/>
            <button className="sidebar-btn">Show More</button>
            <hr className="sidebar-hr"/>
            <ul className="sidebar-friend-list">
                {users
                    .filter(user => user.id !== userData.id)
                    .map(user => (
                        <Friends key={user.id} user={user}/>
                    ))
                }
            </ul>
        </div>
    </div>
}
