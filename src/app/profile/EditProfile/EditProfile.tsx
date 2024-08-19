import './editprofile.css.scss'

import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {Button, Tabs} from 'antd';
import {TabItems} from "@/app/profile/EditProfile/tab-items";
import {useProfileChanges} from "@/app/profile/EditProfile/TabPanels/handleChanges";
import {updateUser} from "@/app/GlobalRedux/Features/auth/login";
import {useDispatch, useSelector} from "react-redux";
import {DataFrame} from "@/app/profile/EditProfile/Data";
import {RootState} from "@/app/GlobalRedux/store";
import {useToast} from "@/components/ui/use-toast";
import {FilePost} from "@/apiHandling/All/file_post";
import {fetchFileFromLocalStorage} from "@/app/auth/getFiles";

const EditProfile = () => {
    const {userData} = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    const { toast } = useToast()

    const operations = <Button onClick={async ()=>{
        const file = await fetchFileFromLocalStorage('file_path');
        const formData = new FormData();
        if(file !== null){
            formData.append('file', file);
        }
        for (const [key, value] of Object.entries(userData)) {
            if (value !== null && value !== undefined) {
                formData.append(key, value.toString());
            }
        }
        // @ts-ignore
        dispatch(updateUser(formData, toast))
    }}>Save Changes</Button>;
    return <div className="edit-profile">
        <NavBar/>
        <div className="edit-profile-wrapper">
            <Sidebar/>
            <div className="profile-right">
                <div className="profile-right-top">
                    <div className="profile-cover">
                        <img src="/assets/profile-cover.png" alt="profile-cover" className="cover-image"/>
                        <img src={userData.profileImage??'/assets/img.png'} alt="" className="profile-image"/>
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">{userData.name+" "+userData.surname}</h4>
                        <span className="profile-info-desc">{userData.email}</span>
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
