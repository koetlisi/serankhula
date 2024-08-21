// slices/coursesSlice.ts
import { createSlice} from '@reduxjs/toolkit';

const initialState= {
    sinceWhen:'',
    tillWhen:'',
    description:'',
    id:0
}

const joblessSlice = createSlice({
    name:'jobless',
    initialState,
    reducers:{
        updateSinceWhen:(state, action)=>{
          state.sinceWhen = action.payload
        },
        updateTillWhen:(state, action)=>{
            state.tillWhen = action.payload
        },
        updateJoblessDescription:(state, action)=>{
            state.description = action.payload;
            console.log(action.payload)
        }
    }
})

export default joblessSlice.reducer;
export const {updateJoblessDescription,updateSinceWhen,updateTillWhen} = joblessSlice.actions