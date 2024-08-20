import './editprofile.css.scss'

import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {Button, Tabs} from 'antd';
import {TabItems} from "@/app/profile/EditProfile/tab-items";
import {updateUser} from "@/app/GlobalRedux/Features/auth/login";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {useToast} from "@/components/ui/use-toast";
import {fetchFileFromLocalStorage} from "@/app/auth/getFiles";
import {IconButton} from "@mui/material";
import {SaveAll} from "lucide-react";
import {TabDropdown} from "@/app/profile/EditProfile/tabDropdown";
import {DataFrame} from "@/app/profile/EditProfile/Data";
import {resetCourseData} from "@/app/GlobalRedux/Features/course/course";
import {prepareFormData} from "@/function/prepareCourseData";

const EditProfile = () => {
    const {userData} = useSelector((state: RootState) => state.login);
    const { courseData } = useSelector((state: RootState) => state.course);
    const dispatch = useDispatch();
    const { toast } = useToast()
    return <div className="edit-profile">
        <NavBar/>
        <div className="edit-profile-wrapper">
            <Sidebar/>
            <div className="profile-right">
                <div className="edit-profile-right-bottom">
                    <div className="edit-top">
                        <TabDropdown tabs={TabItems}  />
                    </div>
                </div>
            </div>
        </div>
        <IconButton className="floating-button" onClick={async ()=>{
            const prepareFormData_ = prepareFormData(courseData)
            console.log(JSON.stringify(prepareFormData_,null,2))
            //dispatch(resetCourseData())
            /*const file = await fetchFileFromLocalStorage('file_path');
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
            dispatch(updateUser(formData, toast))*/
        }}>
            <SaveAll/>
        </IconButton>

    </div>
}

export default EditProfile
