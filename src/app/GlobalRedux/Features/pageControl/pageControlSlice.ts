'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AppDispatch, RootState} from "@/app/GlobalRedux/store";

// Define the initial state type
export interface CounterState {
    selectedContent: string;
    profileSteps: string[];
}

// Define the initial state
const initialState: CounterState = {
    selectedContent: "Login",
    profileSteps: ['Jobless']
};

// Create the slice
export const pageControlSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        updateSelectedComponent: (state, action: PayloadAction<string>) => {
            state.selectedContent = action.payload;
        },
        updateProfileStep(state, action: PayloadAction<string[]>) {
            state.profileSteps = action.payload;
        }
    }
});

// Export the reducer
export default pageControlSlice.reducer;

export const updateProfileStep = (list: string[]) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(pageControlSlice.actions.updateProfileStep(list));
    };
};

// Export action creators
export const { updateSelectedComponent } = pageControlSlice.actions;
