"use client"
import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import Loader from "@/app/loader";
import InactivityTracker from "@/app/auth/is_active";

const Home = lazy(() => import('@/app/home/page'));
const Profile = lazy(() => import('@/app/profile/Profile'));
const EditProfile = lazy(() => import('@/app/profile/EditProfile/EditProfile'));
const Login = lazy(() => import('@/app/auth/Login'));

const HomePage = () => {
    const selectedContent = useSelector((state: RootState) => state.pages.selectedContent);
    const { isLogin } = useSelector((state: RootState) => state.login);

    const pageMap: { [key: string]: React.ReactNode } = {
        Home: <Home />,
        Profile: <Profile />,
        EditProfile: <EditProfile />,
        Login: <Login />
    };

    return (
        <Suspense fallback={<Loader />}>
            <InactivityTracker/>
            {!isLogin?pageMap['Home']:(pageMap[selectedContent] || <div>Page not found</div>)}
        </Suspense>
    );
};

export default HomePage;
