import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the initial state
interface ExperienceState {
    lesothoUnemployment: string;
    lesothoJobStruggle: string;
}

const initialState: ExperienceState = {
    lesothoUnemployment: '',
    lesothoJobStruggle: ''
}

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        updateLesothoUnemploymentReason: (state, action) => {
            state.lesothoUnemployment = action.payload;
        },
        updateLesothoJobReason: (state, action) => {
            state.lesothoJobStruggle = action.payload;
        },
    }
})

export default experienceSlice.reducer;
export const { updateLesothoUnemploymentReason, updateLesothoJobReason } = experienceSlice.actions;
