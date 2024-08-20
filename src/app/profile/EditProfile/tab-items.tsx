import {UserProfile} from "@/app/profile/EditProfile/TabPanels/UserProfile";
import {UserQualification} from "@/app/profile/EditProfile/TabPanels/UserQualification";

export const TabItems = [
    {
        label: 'Edit User Profile',
        key: '1',
        content: <UserProfile/>
    },
    {
        label: 'User Qualifications',
        key: '2',
        content: <UserQualification/>
    },
]
