import { createSlice} from '@reduxjs/toolkit';



const initialState = {
    motivationalSummary:'',
    internshipSummary:''
}

export const experienceSlice = createSlice({
    name: 'aboutYou',
    initialState,
    reducers: {
        updateMotivationSummary: (state, action) => {
            state.motivationalSummary = action.payload;
        },
        updateInternshipSummary: (state, action) => {
            state.internshipSummary = action.payload;
        },
    }
})

export default experienceSlice.reducer;
export const { updateMotivationSummary, updateInternshipSummary } = experienceSlice.actions;
