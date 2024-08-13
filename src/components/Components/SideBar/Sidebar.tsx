import './sidebar.css.scss'
import React from "react";
import {MenuLink} from "@/components/Components/MenuLink/MenuLink";
import {LogoutOutlined, RssFeedOutlined} from "@mui/icons-material";
import {Friends} from "@/components/Components/Fiends/Friends";
import {Users} from "@/components/Components/Fiends/dummyData";
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WalletIcon from '@mui/icons-material/Wallet';
export const Sidebar = () => {
    return <div className="sidebar">
        <div className="sidebar-wrapper">
            <MenuLink icon={AccountBalanceIcon} text='Students(10000)'/>
            <MenuLink icon={SchoolIcon} text='Total Graduates(8000)'/>
            <MenuLink icon={BadgeIcon} text='Unemployed(6900)'/>
            <MenuLink icon={AccountBalanceWalletIcon} text='Employed(9600)'/>
            <MenuLink icon={WalletIcon} text='Self-Employed(2001)'/>
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
