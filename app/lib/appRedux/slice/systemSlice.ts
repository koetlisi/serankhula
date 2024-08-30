import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SystemState{
    selectedContent: string;
    prevContent:string;
}

const initialState:SystemState ={
    selectedContent: "Login",
    prevContent:''
}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        updateSelectedComponent: (state, action: PayloadAction<string>) => {
            state.prevContent = state.selectedContent;
            state.selectedContent = action.payload;
        },
    }
});

export default systemSlice.reducer;
export const { updateSelectedComponent } = systemSlice.actions;