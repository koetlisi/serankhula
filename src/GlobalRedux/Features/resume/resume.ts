import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Resume{
    uid:string,
    id:number,
    title:string,
    selectedResume:string
}
export interface ResumeState {
    resumes:Resume[]
}

const initialState: ResumeState ={
    resumes:[]
}

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers:{
        addResume: (state, action: PayloadAction<Resume>) => {
            state.resumes.push(action.payload);
        },
        setResume: (state, action: PayloadAction<Resume[]>)=>{
            state.resumes = action.payload
        },
        resetAllResume:(state, action:PayloadAction<Resume>)=>{
            state.resumes = initialState.resumes
        },

    }
})

export const {addResume, setResume, resetAllResume} = resumeSlice.actions;

export default resumeSlice.reducer;