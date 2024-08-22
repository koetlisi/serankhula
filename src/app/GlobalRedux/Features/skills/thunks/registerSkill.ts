import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "@/app/GlobalRedux/store";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {addSkill, Skill} from "@/app/GlobalRedux/Features/skills/skill";

export const registerSkill = (data:any, toast:any) =>{
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpPostMethod(getState().login.userData.token, 'register_user_skills/', data);
            if (response.code === 201) {
                toast({
                    description: "Skill registered.",
                })
                const newData: Skill[] = response.data
                newData.forEach(skill => {
                    dispatch(addSkill(skill));
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