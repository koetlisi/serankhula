import '../css/home.scss'
import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {Feeds} from "@/components/Components/Feeds/Feeds";
import {RightBar} from "@/components/Components/RightBar/RightBar";

export default function Home() {
  return <div className='home'>
        <NavBar/>
        <div className="home-container">
            <Sidebar/>
            <Feeds stories={true}/>
            <RightBar profile={false}/>
        </div>
    </div>
}
