import './editprofile.css.scss'

import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import {TabItems} from "@/app/profile/EditProfile/tab-items";
import {TabDropdown} from "@/app/profile/EditProfile/tabDropdown";
import {prepareFormData} from "@/function/prepareCourseData";
import {SaveAll} from "lucide-react";
import {IconButton} from "@mui/material";
import React from "react";
import SaveEdition from "@/app/profile/EditProfile/TabPanels/handleChanges";

const EditProfile = () => {

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
        <SaveEdition/>
    </div>
}

export default EditProfile
