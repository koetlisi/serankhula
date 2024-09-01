"use client"
import {SideBar} from "@/app/dashboard/sideBar/SideBar";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useToast} from "@/components/ui/use-toast";
import {getAllUser} from "@/app/lib/appRedux/thunks/auth/get-all-user";
import {Feeds} from "@/app/dashboard/Feeds/Feeds";
import {RightBar} from "@/app/dashboard/RightBar/RightBar";
import {ResumeTemplates} from "@/app/lib/appRedux/thunks/resumes/resumeTemplates";

const Page =()=>{
    const { toast } = useToast()
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(getAllUser(toast));
        // @ts-ignore
        dispatch(ResumeTemplates());
    }, [dispatch, toast]);
    return <div className="mx-auto max-w-screen-2xl flex w-full bg-dot text-gray-900 ">
        <SideBar/>
        <Feeds stories={true}/>
        <RightBar profile={false}/>
    </div>
}

export default Page