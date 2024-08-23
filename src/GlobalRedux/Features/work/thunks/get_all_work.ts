import { RootState } from "@/GlobalRedux/store";
import { HttpGetMethod } from "@/apiHandling/All/getMethod";
import {Dispatch} from '@reduxjs/toolkit';
import {addWork, Work} from "@/GlobalRedux/Features/work/work";

interface InstitutionsResponse {
    code: number;
    msg: string;
    data: any
}

// Thunk for getting all users
export const get_all_work = (toast: any) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpGetMethod<InstitutionsResponse>(
                getState().login.userData.token,
                'get_all_work/'
            );

            // Handle success response
            if (response && response.code === 200) {
                const newData: Work[] = response.data.current
                newData.forEach(work => {
                    dispatch(addWork(work));
                });

                const newData_: Work[] = response.data.prev
                newData_.forEach(work => {
                    dispatch(addWork(work));
                });
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
