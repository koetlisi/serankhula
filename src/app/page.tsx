"use client"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import React from "react";
import Home from "@/app/home/page";
import {Profile} from "@/app/profile/Profile";
import {EditProfile} from "@/app/profile/EditProfile/EditProfile";

const HomePage = () => {
    const selectedContent = useSelector((state: RootState) => state.pages.selectedContent);
    const pageMap: { [key: string]: JSX.Element } = {
        Home: <Home/>,
        Profile: <Profile/>,
        EditProfile: <EditProfile/>
    };
    return pageMap[selectedContent] || <div>Page not found</div>;
}

export default HomePage