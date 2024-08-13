import './profile.css.scss'
import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {Feeds} from "@/components/Components/Feeds/Feeds";
import {RightBar} from "@/components/Components/RightBar/RightBar";

export const Profile = () =>{
    return <div className="profile">
        <NavBar/>
        <div className="profile-wrapper">
            <Sidebar/>
            <div className="profile-right">
                <div className="profile-right-top">
                    <div className="profile-cover">
                        <img src="/assets/profile-cover.png" alt="profile-cover" className="cover-image" />
                        <img src="/assets/profile.png" alt=""  className="profile-image"/>
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">Koetlisi Theko</h4>
                        <span className="profile-info-desc">Hy I am using AI</span>
                    </div>
                </div>
                <div className="profile-right-bottom">
                    <Feeds stories={false}/>
                    <RightBar profile={true}/>
                </div>
            </div>
        </div>
    </div>
}
