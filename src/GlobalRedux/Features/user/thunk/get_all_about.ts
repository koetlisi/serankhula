import { RootState } from "@/GlobalRedux/store";
import { HttpGetMethod } from "@/apiHandling/All/getMethod";
import {Dispatch} from '@reduxjs/toolkit';
import {setAllUsers} from "@/GlobalRedux/Features/user/users";
import {AboutUser, addAboutUser} from "@/GlobalRedux/Features/user/about";

interface InstitutionsResponse {
    code: number;
    msg: string;
    data: any
}

// Thunk for getting all users
export const getAllAboutUsers = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpGetMethod<InstitutionsResponse>(
                getState().login.userData.token,
                'get_all_about_you/'
            );

            // Handle success response
            if (response && response.code === 200) {
                const newData: AboutUser[] = response.data
                newData.forEach(about => {
                    dispatch(addAboutUser(about));
                });
            } else {
               /* toast({
                    variant: "destructive",
                    description: "Something went wrong.",
                });*/
            }
        } catch (error) {
            console.log(error);
           /* toast({
                variant: "destructive",
                description: "Error fetching users.",
            });*/
        }
    };
};
