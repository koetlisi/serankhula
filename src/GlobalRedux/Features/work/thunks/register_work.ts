import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "@/GlobalRedux/store";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {addWork, Work} from "@/GlobalRedux/Features/work/work";

export const register_work = (data:any, toast:any) =>{
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpPostMethod(getState().login.userData.token, 'register_work/', data);
            if (response.code === 201) {
                toast({
                    description: "Qualification Upgraded.",
                })
                const newData: Work[] = response.data.current
                newData.forEach(work => {
                    dispatch(addWork(work));
                });

                const newData_: Work[] = response.data.prev
                newData_.forEach(work => {
                    dispatch(addWork(work));
                });
            } else if (response.code === 422) {
                toast({
                    variant: "destructive",
                    description: response.msg,
                })
            }
        } catch (e) {
            console.log(e)
            toast({
                variant: "destructive",
                description: "Something went wrong",
            })
        } finally {
            //dispatch(loginSlice.actions.updateIsLoading(false))
        }
    }
}