"use client"
import React, {lazy, Suspense} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import Loader from "@/app/components/Loader";


const HomePage = lazy(() => import("@/app/home/page"));
const DashBoard = lazy(() => import("@/app/dashboard/page"));
const TemplatesDah = lazy(() => import("@/app/cv/page"));
const EditResume = lazy(() => import("@/app/cv/edit/page"));
export default function Page() {
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
