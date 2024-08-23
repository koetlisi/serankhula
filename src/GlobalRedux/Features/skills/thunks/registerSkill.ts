import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "@/GlobalRedux/store";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {addSkill, Skill} from "@/GlobalRedux/Features/skills/skill";
import {resetDumSkill} from "@/GlobalRedux/Features/dummyData/dumSkill";

export const registerSkill = (data:any, toast:any) =>{
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpPostMethod(getState().login.userData.token, 'register_user_skills/', data);
            if (response.code === 201) {
                // @ts-ignore
                dispatch(resetDumSkill())
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