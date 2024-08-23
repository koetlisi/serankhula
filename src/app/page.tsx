"use client"
import React, {Suspense, lazy, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/GlobalRedux/store';
import Loader from "@/app/loader";
import InactivityTracker from "@/app/auth/is_active";
import {getAllCourses} from "@/GlobalRedux/Features/course/userCourse/thunks/allCourse";
import {getAllAboutUsers} from "@/GlobalRedux/Features/user/thunk/get_all_about";

const Home = lazy(() => import('@/app/home/page'));
const Profile = lazy(() => import('@/app/profile/Profile'));
const EditProfile = lazy(() => import('@/app/profile/EditProfile/EditProfile'));
const Login = lazy(() => import('@/app/auth/Login'));

const HomePage = () => {
    const selectedContent = useSelector((state: RootState) => state.pages.selectedContent);
    const { isLogin } = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch()
    const pageMap: { [key: string]: React.ReactNode } = {
        Home: <Home />,
        Profile: <Profile />,
        EditProfile: <EditProfile />,
        Login: <Login />
    };

    return (
        <Suspense fallback={<Loader />}>
            <InactivityTracker/>
            {!isLogin?pageMap['Login']:(isLogin && selectedContent==='Login'? pageMap['Home']:pageMap[selectedContent] || <div>Page not found</div>)}
        </Suspense>
    );
};

export default HomePage;
