"use client"
import '../css/home.scss'
import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {Feeds} from "@/components/Components/Feeds/Feeds";
import {RightBar} from "@/components/Components/RightBar/RightBar";
import {useDispatch} from "react-redux";
import {useEffect} from "react"
import {getAllUser} from "@/GlobalRedux/Features/user/thunk/get_all_users";
import {useToast} from "@/components/ui/use-toast";
import {getAllCourses} from "@/GlobalRedux/Features/course/userCourse/thunks/allCourse";
import {getAllAboutUsers} from "@/GlobalRedux/Features/user/thunk/get_all_about";
import {AllSkill} from "@/GlobalRedux/Features/skills/thunks/get_all_skills";
import {get_all_work} from "@/GlobalRedux/Features/work/thunks/get_all_work";

export default function Home() {
    const { toast } = useToast()
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(getAllUser(toast));
        // @ts-ignore
        dispatch(getAllCourses());
        // @ts-ignore
        dispatch(getAllAboutUsers());
        // @ts-ignore
        dispatch(AllSkill());
        // @ts-ignore
        dispatch(get_all_work(toast));
    }, [dispatch]);
  return <div className='home'>
        <NavBar/>
        <div className="home-container">
            <Sidebar/>
            <Feeds stories={true}/>
            <RightBar profile={false}/>
        </div>
    </div>
}
