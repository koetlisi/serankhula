"use client"
import '../css/home.scss'
import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {Feeds} from "@/components/Components/Feeds/Feeds";
import {RightBar} from "@/components/Components/RightBar/RightBar";
import {useDispatch} from "react-redux";
import {useEffect} from "react"
import {getAllUser} from "@/app/GlobalRedux/Features/user/thunk/get_all_users";
import {useToast} from "@/components/ui/use-toast";

export default function Home() {
    const { toast } = useToast()
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(getAllUser(toast));
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
