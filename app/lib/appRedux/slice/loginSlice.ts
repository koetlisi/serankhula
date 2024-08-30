import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialLoginState} from "@/app/lib/appRedux/slice/states/loginState";
import {LoginUserType} from "@/app/lib/types/loginUserType";

export const LoginSlice = createSlice({
    name:'auth',
    initialState: initialLoginState,
    reducers:{
        logout: (state) => {
            state.isLogin = false;
            state.userData = initialLoginState.userData;
        },

        updateUserData: (state, action: PayloadAction<LoginUserType['userData']>) => {
            state.userData = action.payload;
        },

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

        updateIsLoading: (state, action: PayloadAction<LoginUserType['isLoading']>) => {
            state.isLoading = action.payload
        },
        updateIsLogin: (state, action: PayloadAction<LoginUserType['isLogin']>) => {
            state.isLogin = action.payload
        },
    }
})

export default LoginSlice.reducer;

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
    updateIsLogin,
    logout
} = LoginSlice.actions;