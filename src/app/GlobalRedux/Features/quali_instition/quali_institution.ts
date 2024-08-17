"use client"
import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {HttpGetMethod} from "@/apiHandling/All/getMethod";
import {RootState} from "@/app/GlobalRedux/store";
export interface Quali_Institution {
    institutions: any[],
    qualifications: any[],
    filter:number
}

const initialState: Quali_Institution = {
    institutions: [],
    qualifications: [],
    filter:0
};

const qualiInstSlice = createSlice({
    name: "institution",
    initialState,
    reducers:{
        getInstitutions(state, action){
            state.institutions = action.payload
        },
        getQualification(state, action){
            state.qualifications = action.payload
        },
        changeFilter(state, action){
            state.filter = action.payload
        }
    }
})

export default qualiInstSlice.reducer;
interface InstitutionsResponse {
    code: number;
    msg: string;
    data: any[];
}
export const getInstitutions = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await HttpGetMethod<InstitutionsResponse>(getState().login.userData.token,'get_all_institutions/', {});

            if (response && response.code === 200) {
                dispatch(qualiInstSlice.actions.getInstitutions(response.data));
            } else {
                console.error('Error fetching institutions:');
            }
        } catch (error) {
            console.error('Error fetching institutions info:', error);
            throw error;
        }
    };
};

export const getQualification = ()=>{
    return async(dispatch:Dispatch, getState:any)=>{
        try {
            const response = await HttpGetMethod<InstitutionsResponse>(getState().login.userData.token,'get_all_qualifications/',{ });
            if (response && response.code === 200) {
                dispatch(qualiInstSlice.actions.getQualification(response.data));
            } else {
                console.error('Error fetching qualification:');
            }
        } catch (error) {
            console.error('Error fetching qualification info:', error);
            throw error;
        }
    }
}

export const changeFilter=(e:number)=>{
    return async (dispatch:Dispatch)=>{
        dispatch(qualiInstSlice.actions.changeFilter(e))
    }
}