import { RootState } from "@/app/GlobalRedux/store";
import { HttpGetMethod } from "@/apiHandling/All/getMethod";
import {Dispatch} from '@reduxjs/toolkit';
import {setAllUsers} from "@/app/GlobalRedux/Features/user/users";

interface InstitutionsResponse {
    code: number;
    msg: string;
    data: any
}

// Thunk for getting all users
export const getAllUser = (toast: any) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpGetMethod<InstitutionsResponse>(
                getState().login.userData.token,
                'get_all_users/'
            );

            // Handle success response
            if (response && response.code === 200) {
                dispatch(setAllUsers(response.data));
            } else {
                toast({
                    variant: "destructive",
                    description: "Something went wrong.",
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive",
                description: "Error fetching users.",
            });
        }
    };
};
