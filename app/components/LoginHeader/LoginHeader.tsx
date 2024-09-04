"use client"
import {useDispatch, useSelector} from "react-redux";
import {popForwardContent, popPreviousContent, updateSelectedComponent} from "@/app/lib/appRedux/slice/systemSlice";
import {cx} from "@/app/lib/cx";
import {usePathname} from "next/navigation";
import {Logo} from "@/app/components/widgets/Logo/Logo";
import {Input, Popover} from "antd";
import {ChatBubble, Notifications, Person, Search} from "@mui/icons-material";
import {Badge, IconButton} from "@mui/material";
import './login.scss'
import {useEffect, useState} from "react";
import {RootState} from "@/app/lib/appRedux/store";
import {NavigationButtons} from "@/app/components/LoginHeader/navigatorBtn";
import { UserRequest } from "@/app/dashboard/Fiends/userRequest";
import { CustomProver } from "./customProver";
import { useWebSocket } from "@/lib/webSocket/webSocketProvider";
import {UrlAccessible} from "@/service/urlAccessible";

export const LoginHeader = () => {

    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const {userData} = useSelector((state: RootState) => state.auth);
    const {friendRequestNot,friendRequestList} = useSelector((state: RootState) => state.system);
    const [profileImage, setProfileImage] = useState("/assets/img.png");

    useEffect(() => {
        const checkProfileImage = async () => {
            const isAccessible = await UrlAccessible(userData.profileImage) && userData.profileImage !=='';
            setProfileImage(isAccessible ? userData.profileImage : "/assets/img.png");
        };

        checkProfileImage().then(r => {});
    }, [userData.profileImage]);
    const [open, setOpen] = useState(false);
    const isOpen = () => {
        setOpen(prevState => !open);
    };
    const dispatch = useDispatch();
    const handleClick = (e: string) => dispatch(updateSelectedComponent(e))
    return <header
        className={cx("flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12", isHomePage && "bg-dot sticky zoom-in-999 top-0")}
        aria-label="Site Header">
        <div className="navbar-container justify-between">
            <div onClick={() => handleClick('Dashboard')} className='mr-7 navbar-left'>
                <span className='logo logo-name'><Logo/></span>
            </div>
            <div className='navbar-center'>
                <div className="search-bar">
                    <Input className='search-input' prefix={<Search className='search-icon'/>} name='all-search'/>
                </div>
            </div>
            <div className='navbar-right'>
                <NavigationButtons/>
                <div className="navbar-icons">
                    <CustomProver node={<UserRequest />} count={friendRequestNot} icon={<Person style={{backgroundColor: "grey", color: "white", borderRadius: "50%"}}/>}/>
                    <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                        <ChatBubble style={{backgroundColor: "grey", color: "white", borderRadius: "50%"}}/>
                    </Badge>
                    <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                        <Notifications style={{backgroundColor: "white", color: "black", borderRadius: "50%"}}/>
                    </Badge>
                </div>
                <button onClick={isOpen}>
                    <img src={profileImage} alt="" className="navbar-image"/>
                </button>
            </div>
        </div>
    </header>
}