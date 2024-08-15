'use client';

import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {pageControlSlice} from "@/app/GlobalRedux/Features/pageControl/pageControlSlice";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";

export interface Login {
    isLogin: boolean;
    isLoading: boolean;
    isCatch: boolean;
    userData: {
        token: string;
        name: string;
        surname: string;
        email: string;
        nationality: string,
        national_id: string,
        dob:string,
        gender:string,
        phone:string
    };
}

// Define the initial state
const initialState: Login = {
    isLogin: false,
    isLoading: false,
    isCatch: false,
    userData: {
        token: '',
        name: '',
        surname: '',
        email: '',
        nationality: '',
        national_id: '',
        dob:'',
        gender:'',
        phone:''
    },
};
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateUserData: (state, action: PayloadAction<Login['userData']>) => {
            state.userData = action.payload;
        },

        updateIsLoading: (state, action: PayloadAction<Login['isLoading']>) => {
            state.isLoading = action.payload
        },
        updateIsLogin: (state, action: PayloadAction<Login['isLogin']>) => {
            state.isLogin = action.payload
        },
        updateIsCatch: (state, action: PayloadAction<Login['isCatch']>) => {
            state.isCatch = action.payload
        }
    }
});

export default loginSlice.reducer;

export const LoginFunction = (data: any) => {
    return async (dispatch: Dispatch) => {
        dispatch(loginSlice.actions.updateIsLoading(true));
        try {
            const response = await HttpPostMethod('login', data);
            if (response.code === 200) {
                dispatch(loginSlice.actions.updateIsLogin(true));
                dispatch(loginSlice.actions.updateUserData(response.data));
            }else{
                alert(response.code)
            }
        } catch (e) {
            console.log(e)
            dispatch(loginSlice.actions.updateIsCatch(true))
        } finally {
            dispatch(loginSlice.actions.updateIsLoading(false))
        }
    }
}

export const updateUser = (data: any) => {
    return async (dispatch: Dispatch) => {
        dispatch(loginSlice.actions.updateIsLoading(true));
        try {
            const response = await HttpPostMethod('update-user', data);
            if (response.code === 200) {
                dispatch(loginSlice.actions.updateIsLogin(true));
                dispatch(loginSlice.actions.updateUserData(response.data));
            }else{
                alert(response.code)
            }
        } catch (e) {
            console.log(e)
            dispatch(loginSlice.actions.updateIsCatch(true))
        } finally {
            dispatch(loginSlice.actions.updateIsLoading(false))
        }
    }
}