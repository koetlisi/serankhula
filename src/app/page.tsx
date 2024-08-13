"use client"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import React from "react";
import Home from "@/app/home/page";
import {Profile} from "@/app/profile/Profile";

const HomePage = () => {
    const selectedContent = useSelector((state: RootState) => state.counter.selectedContent);
    const pageMap: { [key: string]: JSX.Element } = {
        Home: <Home/>,
        Profile: <Profile/>
    };
    return pageMap[selectedContent] || <div>Page not found</div>;
}

export default HomePage