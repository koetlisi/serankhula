'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
export interface CounterState {
    selectedContent: string;
}

// Define the initial state
const initialState: CounterState = {
    selectedContent: "Login",
};

// Create the slice
export const pageControlSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        updateSelectedComponent: (state, action: PayloadAction<string>) => {
            state.selectedContent = action.payload;
        }
    }
});

// Export the reducer
export default pageControlSlice.reducer;

// Export action creators
export const { updateSelectedComponent } = pageControlSlice.actions;
