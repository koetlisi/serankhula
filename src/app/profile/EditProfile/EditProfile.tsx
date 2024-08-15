import './editprofile.css.scss'

import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {Button, Tabs} from 'antd';
import {TabItems} from "@/app/profile/EditProfile/tab-items";
import {useProfileChanges} from "@/app/profile/EditProfile/TabPanels/handleChanges";

const EditProfile = () => {
    const anyChange = useProfileChanges();
    const check = () =>{
        if(anyChange){
            alert("data changed")
        }else{
            alert('no change')
        }
    }
    const operations = <Button onClick={ check}>Save Changes</Button>;
    return <div className="edit-profile">
        <NavBar/>
        <div className="edit-profile-wrapper">
            <Sidebar/>
            <div className="profile-right">
                <div className="profile-right-top">
                    <div className="profile-cover">
                        <img src="/assets/profile-cover.png" alt="profile-cover" className="cover-image"/>
                        <img src="/assets/profile.png" alt="" className="profile-image"/>
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">Koetlisi Theko</h4>
                        <span className="profile-info-desc">Hy I am using AI</span>
                    </div>
                </div>
                <div className="edit-profile-right-bottom">
                    <Tabs className="edit-top" tabBarExtraContent={operations} items={TabItems}/>
                </div>
            </div>
        </div>
    </div>
}

export default EditProfile
