"use client";

import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { DataFrame } from "@/app/profile/EditProfile/Data";
import {updateUser} from "@/app/GlobalRedux/Features/auth/login";

export const useProfileChanges = () => {
    const dispatch = useDispatch();
    // Function to compare two objects
    const hasChanges = (data: any, data_: any): boolean => {
        return JSON.stringify(data) !== JSON.stringify(data_);
    };

    // Access profileData and setProfileData from the DataFrame hook
    const { profileData } = DataFrame();

    // Access userData from the Redux store
    const { userData } = useSelector((state: RootState) => state.login);
    // @ts-ignore
    dispatch(updateUser(profileData));

    // Determine if there are changes between userData and profileData
    return hasChanges(userData, profileData);
};
