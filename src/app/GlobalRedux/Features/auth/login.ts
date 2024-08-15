'use client';

import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {pageControlSlice} from "@/app/GlobalRedux/Features/pageControl/pageControlSlice";
import {HttpPostMethod} from "@/apiHandling/All/postMethod";
import {RootState} from "@/app/GlobalRedux/store";

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
        phone:number,
        id:number
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
        gender:'other',
        phone:0,
        id:0
    },
};
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateUserData: (state, action: PayloadAction<Login['userData']>) => {
            state.userData = action.payload;
        },

        // Individual updates for each field in userData
        updateUserToken: (state, action: PayloadAction<string>) => {
            state.userData.token = action.payload;
        },
        updateUserName: (state, action: PayloadAction<string>) => {
            state.userData.name = action.payload;
        },
        updateUserSurname: (state, action: PayloadAction<string>) => {
            state.userData.surname = action.payload;
        },
        updateUserEmail: (state, action: PayloadAction<string>) => {
            state.userData.email = action.payload;
        },
        updateUserNationality: (state, action: PayloadAction<string>) => {
            state.userData.nationality = action.payload;
        },
        updateUserNationalID: (state, action: PayloadAction<string>) => {
            state.userData.national_id = action.payload;
        },
        updateUserDOB: (state, action: PayloadAction<string>) => {
            state.userData.dob = action.payload;
        },
        updateUserGender: (state, action: PayloadAction<string>) => {
            state.userData.gender = action.payload;
        },
        updateUserPhone: (state, action: PayloadAction<number>) => {
            state.userData.phone = action.payload;
        },
        updateUserID: (state, action: PayloadAction<number>) => {
            state.userData.id = action.payload;
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

export const {
    updateUserName,
    updateUserSurname,
    updateUserEmail,
    updateUserNationality,
    updateUserNationalID,
    updateUserDOB,
    updateUserGender,
    updateUserPhone,
} = loginSlice.actions;


export const LoginFunction = (data: any) => {
    return async (dispatch: Dispatch) => {
        dispatch(loginSlice.actions.updateIsLoading(true));
        try {
            const response = await HttpPostMethod('','login', data);
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
    return async (dispatch: Dispatch, getState: () => RootState) => {
        dispatch(loginSlice.actions.updateIsLoading(true));
        try {
            const response = await HttpPostMethod(getState().login.userData.token,'update-user', data);
            console.log(data)
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