"use client"
import {HomePage} from "@/app/home/homePage";
import React, {Suspense} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import Loader from "@/app/components/Loader";

export default function Home() {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const { selectedContent } = useSelector((state: RootState) => state.system);
  const pageMap:{ [key: string]: React.ReactNode }={
    Home:<HomePage/>
  }
  const content = !isLogin
      ? pageMap.Home
      : selectedContent === "Login"
          ? pageMap.Home
          : pageMap[selectedContent] || <div>Page not found</div>;
  return (
      <Suspense fallback={<Loader />}>
        {content}
      </Suspense>
  );
}
