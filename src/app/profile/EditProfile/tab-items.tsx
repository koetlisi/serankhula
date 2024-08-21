import {UserProfile} from "@/app/profile/EditProfile/TabPanels/UserProfile";
import {UserQualification} from "@/app/profile/EditProfile/TabPanels/UserQualification";
import {EmploymentStatus} from "@/app/profile/EditProfile/TabPanels/employmentStatus";
import React from "react";
export interface TabItem {
    label: string;
    key: number;
    content: React.ReactNode;
}


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

    {
        label: 'Experience',
        key: '3',
        content: <EmploymentStatus/>
    },
    {
        label: 'Jobless',
        key: '4',
        content: <EmploymentStatus/>
    },
    {
        label: 'Skills',
        key: '7',
        content: <EmploymentStatus/>
    },
    {
        label: 'References',
        key: '5',
        content: <EmploymentStatus/>
    },
    {
        label: 'About Me',
        key: '6',
        content: <EmploymentStatus/>
    },
]
