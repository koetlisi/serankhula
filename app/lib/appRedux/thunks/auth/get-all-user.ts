import {AxiosGet} from "@/service/axiosGet";
import {InstitutionsResponse} from "@/app/lib/types/httpsResponse";
import {Dispatch} from "redux";
import {RootState} from "@/app/lib/appRedux/store";
import {setAllUsers} from "@/app/lib/appRedux/slice/users";

export const getAllUser = (toast: any) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await AxiosGet<InstitutionsResponse>(
                getState().auth.userData.token,
                'get_all_users/'
            );
            // Handle success response
            if (response && response?.code === 200) {
                dispatch(setAllUsers(response?.data));
            } else {
                toast({
                    variant: "destructive",
                    description: "Something went wrong.",
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive", // Error notification if the request fails
                description: "Error fetching users.",
            });
        }
    };
};