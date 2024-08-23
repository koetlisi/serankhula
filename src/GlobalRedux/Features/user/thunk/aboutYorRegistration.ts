import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "@/GlobalRedux/store";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {AboutUser, addAboutUser} from "@/GlobalRedux/Features/user/about";

export const AboutYorRegistration = (data:any, toast:any) =>{
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpPostMethod(getState().login.userData.token, 'register_about_user/', data);
            if (response.code === 201) {
                toast({
                    description: "Qualification Upgraded.",
                })
                const newData: AboutUser[] = response.data
                newData.forEach(about => {
                    dispatch(addAboutUser(about));
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