"use client"
import './profile.css.scss'
import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {Feeds} from "@/components/Components/Feeds/Feeds";
import {RightBar} from "@/components/Components/RightBar/RightBar";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";

const Profile = () =>{
    const { userData } = useSelector((state: RootState) => state.login);
    return <div className="profile">
        <NavBar/>
        <div className="profile-wrapper">
            <Sidebar/>
            <div className="profile-right">
                <div className="profile-right-top">
                    <div className="profile-cover">
                        <img src="/assets/profile-cover.png" alt="profile-cover" className="cover-image" />
                        <img src={userData.profileImage} alt=""  className="profile-image"/>
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">{userData.surname+' '+userData.name}</h4>
                        <span className="profile-info-desc">{userData.email}</span>
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
export default Profile