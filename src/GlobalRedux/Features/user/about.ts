import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AboutUser {
    id: number;
    user_id: number;
    whereAbout: string;
    aboutYou: string;
    internship: string;
}

interface AboutState {
    aboutUser: AboutUser[];
}

const initialState: AboutState = {
    aboutUser: []
};

export const aboutUserSlice = createSlice({
    name: 'aboutUser',
    initialState,
    reducers: {
        setAllAboutUsers: (state, action: PayloadAction<AboutUser[]>) => {
            state.aboutUser = action.payload;
        },
        addAboutUser: (state, action: PayloadAction<AboutUser>) => {
            state.aboutUser.push(action.payload);
        }
    }
});

export const { setAllAboutUsers, addAboutUser } = aboutUserSlice.actions;

export default aboutUserSlice.reducer;
