import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "@/GlobalRedux/store";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {addCourse, Course} from "@/GlobalRedux/Features/course/userCourse/courses";

export const registerCourse = (data:any, toast:any) =>{
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpPostMethod(getState().login.userData.token, 'register_qualification/', data);
            if (response.code === 201) {
                toast({
                    description: "Qualification Upgraded.",
                })
                const newData: Course[] = response.data
                newData.forEach(course => {
                    dispatch(addCourse(course));
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