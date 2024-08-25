import { createSlice} from '@reduxjs/toolkit';



const initialState = {
    currentSubmission:'',
    selectedResume:""
}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        updateCurrentSubmission: (state, action) => {
            state.currentSubmission = action.payload;
        },
        updateSelectedResume:(state, action)=>{
            state.selectedResume = action.payload
        }
    }
})

export default systemSlice.reducer;
export const { updateSelectedResume, updateCurrentSubmission } = systemSlice.actions;
