'use client';

import { createSlice,  PayloadAction } from '@reduxjs/toolkit';


// Define the User type
export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    nationality: string;
    national_id: string;
    dob: string;
    gender: string;
    phone: number;
    profileImage: string;
}

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
