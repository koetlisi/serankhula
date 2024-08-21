import './editprofile.css.scss'

import {NavBar} from "@/components/Components/NavThings/NavBar";
import {Sidebar} from "@/components/Components/SideBar/Sidebar";
import React from "react";
import SaveEdition from "@/app/profile/EditProfile/TabPanels/handleChanges";
import {TabItems} from "@/app/profile/EditProfile/tab-items";
import {TabDropdown} from "@/app/profile/EditProfile/tabDropdown";

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
