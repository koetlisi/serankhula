import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "@/GlobalRedux/store";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {addSkill, Skill} from "@/GlobalRedux/Features/skills/skill";
import {resetDumSkill} from "@/GlobalRedux/Features/dummyData/dumSkill";
import {InstitutionsResponse} from "@/GlobalRedux/Features/quali_instition/quali_institution";
import {HttpGetMethod} from "@/apiHandling/All/getMethod";

export const AllSkill = () =>{
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpGetMethod<InstitutionsResponse>(getState().login.userData.token,'get_all_skills/',{ });
            if (response &&response.code === 200) {
                // @ts-ignore
                dispatch(resetDumSkill())
                /*toast({
                    description: "Skill registered.",
                })*/
                const newData: Skill[] = response.data
                newData.forEach(skill => {
                    dispatch(addSkill(skill));
                });
            } else if (response&& response.code === 422) {
               /* toast({
                    variant: "destructive",
                    description: response.msg,
                })*/
            }
        } catch (e) {
            console.log(e)
            /*toast({
                variant: "destructive",
                description: "Something went wrong",
            })*/
        } finally {
            //dispatch(loginSlice.actions.updateIsLoading(false))
        }
    }
}