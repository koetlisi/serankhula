'use client';

import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
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
        id:number,
        profileImage:string,
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
        id:0,
        profileImage:'',
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
        updateUserProfileImage: (state, action: PayloadAction<{ profileImage: string }>) => {
            state.userData.profileImage = action.payload.profileImage;
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
    updateUserProfileImage,
    updateIsLogin
} = loginSlice.actions;


export const LoginFunction = (data: any, toast:any) => {
    return async (dispatch: Dispatch) => {
        dispatch(loginSlice.actions.updateIsLoading(true));
        try {
            const response = await HttpPostMethod('','login/', data);
            if (response.code === 200) {
                dispatch(loginSlice.actions.updateIsLogin(true));
                dispatch(loginSlice.actions.updateUserData(response.data));
            }else if(response.code === 401){
                toast({
                    variant: "destructive",
                    description: response.msg,
                })
            }
        } catch (e) {
            console.log(e)
            dispatch(loginSlice.actions.updateIsCatch(true))
        } finally {
            dispatch(loginSlice.actions.updateIsLoading(false))
        }
    }
}

export const updateUser = (data: any,toast:any) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        dispatch(loginSlice.actions.updateIsLoading(true));
        try {
            const response = await HttpPostMethod(getState().login.userData.token,'update_user/', data);
            console.log(data)
            if (response.code === 201) {
                toast({
                    variant: "success group border-green-500 bg-green-500 text-neutral-50",
                    description: "Successful updated.",
                })
                localStorage.removeItem('file_path');
                dispatch(loginSlice.actions.updateUserData(response.data));
            }else if(response.code === 422){
                toast({
                    variant: "destructive",
                    description: response.msg,
                })
            }
        } catch (e) {
            console.log(e)
            toast({
                variant: "destructive",
                description: e,
            })
        } finally {
            dispatch(loginSlice.actions.updateIsLoading(false))
        }
    }
}

export const createUser = (data: any,toast:any, setDialogOpen:any) => {

    return async (dispatch: Dispatch, getState: () => RootState) => {
        dispatch(loginSlice.actions.updateIsLoading(true));
        try {
            const response = await HttpPostMethod(getState().login.userData.token,'register_user/', data);
            if (response.code === 201) {
                setDialogOpen(false)
                toast({
                    variant: "success group border-green-500 bg-green-500 text-neutral-50",
                    description: "Successful updated.",
                })
                localStorage.removeItem('file_path');
            }else if (response.code === 422){
                toast({
                    variant: "destructive",
                    description: response.msg,
                })
            }else{
                toast({
                    variant: "destructive",
                    description: 'Unknown Error',
                })
            }
        } catch (e) {
            console.log(e)
            dispatch(loginSlice.actions.updateIsCatch(false))
        } finally {
            dispatch(loginSlice.actions.updateIsLoading(false))
        }
    }
}