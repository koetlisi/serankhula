'use client';

import { createSlice,  PayloadAction } from '@reduxjs/toolkit';
import {User} from "@/app/lib/types/loginUserType";
// Define the initial state structure
interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: []
};

// Create the slice
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setAllUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
    }
});

export const { setAllUsers } = userSlice.actions;

export default userSlice.reducer;
