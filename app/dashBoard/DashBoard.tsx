import {SideBar} from "@/app/dashBoard/sideBar/SideBar";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useToast} from "@/components/ui/use-toast";
import {getAllUser} from "@/app/lib/appRedux/thunks/auth/get-all-user";
import {Feeds} from "@/app/dashBoard/Feeds/Feeds";
import {RightBar} from "@/app/dashBoard/RightBar/RightBar";
import {ResumeTemplates} from "@/app/lib/appRedux/thunks/resumes/resumeTemplates";

const DashBoard =()=>{
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

export default DashBoard