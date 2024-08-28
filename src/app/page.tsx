"use client";

import React, { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import Loader from "@/app/loader";
import InactivityTracker from "@/app/auth/is_active";
import CreateTemplate from "@/app/cvTemplates/CreateTempate";
import {EditResume} from "@/app/cvTemplates/custome/editResume";
import {ReviewResume} from "@/app/cvTemplates/custome/review/reviewResume";

// Lazy-loaded components
const Home = lazy(() => import("@/app/home/page"));
const Profile = lazy(() => import("@/app/profile/Profile"));
const EditProfile = lazy(() => import("@/app/profile/EditProfile/EditProfile"));
const Login = lazy(() => import("@/app/auth/Login"));

const HomePage: React.FC = () => {
    const { selectedContent } = useSelector((state: RootState) => state.pages);
    const { isLogin } = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    // Map of available pages
    const pageMap: { [key: string]: React.ReactNode } = {
        Home: <Home />,
        Profile: <Profile />,
        EditProfile: <EditProfile />,
        Login: <Login />,
        Cv_template: <CreateTemplate />,
        EditResume: <EditResume/>,
        ViewResume: <ReviewResume/>
    };

    // Determine the content to display
    const content = !isLogin
        ? pageMap.Login
        : selectedContent === "Login"
            ? pageMap.Home
            : pageMap[selectedContent] || <div>Page not found</div>;

    return (
        <Suspense fallback={<Loader />}>
            <InactivityTracker />
            {content}
        </Suspense>
    );
};

export default HomePage;
