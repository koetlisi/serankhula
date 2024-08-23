import {Dispatch} from "@reduxjs/toolkit";
import {HttpGetMethod} from "@/apiHandling/All/getMethod";
import {InstitutionsResponse} from "@/GlobalRedux/Features/quali_instition/quali_institution";
import {addCourse, Course, resetAllCourse} from "@/GlobalRedux/Features/course/userCourse/courses";

export const getAllCourses = ()=>{
    return async(dispatch:Dispatch, getState:any)=>{
        try {
            const response = await HttpGetMethod<InstitutionsResponse>(getState().login.userData.token,'get_all_course/',{ });
            if (response && response.code === 200) {
                // @ts-ignore
                dispatch(resetAllCourse());
                const newData: Course[] = response.data
                newData.forEach(course => {
                    dispatch(addCourse(course));
                });
            } else {
                console.error('Error fetching qualification:');
            }
        } catch (error) {
            console.error('Error fetching qualification info:', error);
            throw error;
        }
    }
}