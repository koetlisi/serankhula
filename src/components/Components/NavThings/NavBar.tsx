"use client";
import './nav.css.scss'
import {Input} from "antd";
import {ChatBubble, Notifications, Person, Search} from "@mui/icons-material";
import {Badge} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedComponent} from "@/GlobalRedux/Features/pageControl/pageControlSlice";
import {RootState} from "@/GlobalRedux/store";
import {CvDrawer} from "@/app/personalCv/cv_drawer";
import {useState} from "react";

export const NavBar = () => {
    const { userData } = useSelector((state: RootState) => state.login);
    const [open, setOpen] = useState(false);
    const isOpen = () => {
        setOpen(prevState => !open);
    };
    const dispatch = useDispatch();
    const handleClick = (e:string) => dispatch(updateSelectedComponent(e))
    return <div className='navbar-container'>
        <div onClick={()=>handleClick('Home')} className='navbar-left'>
            <span className='logo'>Serankhula</span>
        </div>
        <div className='navbar-center'>
            <div className="search-bar">
                <Input className='search-input' prefix={<Search className='search-icon' />} name='all-search' />
            </div>
        </div>
        <div className='navbar-right'>
            <div className="navbar-links " >
                <span className="navbar-link pr-5">Home</span>
                <span className="navbar-link">Timeline</span>
            </div>
            <div className="navbar-icons">
                <Badge sx={{color:"white"}} badgeContent={4} color="primary" className="navbar-icon-item">
                    <Person style={{backgroundColor:"white", color:"black", borderRadius:"50%"}}/>
                </Badge>
                <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                    <ChatBubble style={{backgroundColor:"grey", color:"white", borderRadius:"50%"}}/>
                </Badge>
                <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                    <Notifications style={{backgroundColor:"white", color:"black", borderRadius:"50%"}}/>
                </Badge>
            </div>
            <CvDrawer setOpen={isOpen} open={open}/>
            <button onClick={isOpen}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={userData.profileImage} alt="" className="navbar-image"/>
            </button>
        </div>
    </div>
}
