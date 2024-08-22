import { createSlice} from '@reduxjs/toolkit';



const initialState = {
    currentSubmission:''
}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        updateCurrentSubmission: (state, action) => {
            state.currentSubmission = action.payload;
        },
    }
})

export default systemSlice.reducer;
export const { updateCurrentSubmission } = systemSlice.actions;
