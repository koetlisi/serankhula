import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SystemState{
    selectedContent: string;
    prevContent:string;
    selectedResumeId:number
}

const initialState:SystemState ={
    selectedContent: "Login",
    prevContent:'',
    selectedResumeId:0
}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        updateSelectedComponent: (state, action: PayloadAction<string>) => {
            state.prevContent = state.selectedContent;
            state.selectedContent = action.payload;
        },
        updateSelectedResumeId:(state, action)=>{
            state.selectedResumeId = action.payload
        }
    }
});

export default systemSlice.reducer;
export const { updateSelectedComponent,updateSelectedResumeId } = systemSlice.actions;