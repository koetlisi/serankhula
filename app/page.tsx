"use client"
import React, {lazy, Suspense} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import Loader from "@/app/components/Loader";


const HomePage = lazy(() => import("@/app/home/homePage"));
const DashBoard = lazy(() => import("@/app/dashBoard/DashBoard"));
const TemplatesDah = lazy(() => import("@/app/cv/templatesDash"));
const EditResume = lazy(() => import("@/app/cv/editResume"));
export default function Home() {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const { selectedContent } = useSelector((state: RootState) => state.system);
  const pageMap:{ [key: string]: React.ReactNode }={
    Home:<HomePage/>,
    Dashboard:<DashBoard/>,
    Cv_template:<TemplatesDah/>,
    EditResume: <EditResume/>,
  }
  const content = !isLogin
      ? pageMap.Home
      : selectedContent === "Login"
          ? pageMap.Dashboard
          : pageMap[selectedContent] || <div>Page not found</div>;
  return (
      <Suspense fallback={<Loader />}>
        {content}
      </Suspense>
  );
} 
