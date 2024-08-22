import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WorkData{
    id:{[key:string]:number}
    place:{ [key: string]: string };
    title:{ [key: string]: string };
    term:{ [key: string]: string };
    ratting:{ [key: string]: string };
    interval: { [key: string]: { start: string; end: string } };
    description: { [key: string]: string };
    emp_type:{ [key: string]: string };
    work_status:{ [key: string]: string };
}

interface WorkState{
    WorkData:WorkData
}

const initialState: WorkState = {
    WorkData: {
        place: {},
        title: {},
        term: {},
        ratting: {},
        interval: {},
        description: {},
        emp_type: {},
        id: {},
        work_status: {}
    }
}

const workSlice = createSlice({
    name:'dumWork',
    initialState,
    reducers:{
        setDumWorkData:(state, action:PayloadAction<WorkData>)=>{
            state.WorkData = action.payload
        },
        updateDumWorkData:(state, action:PayloadAction<Partial<WorkData>>)=>{
            state.WorkData ={
                ...state.WorkData,
                ...action.payload
            }
        },
        updateDumWorkId: (state, action: PayloadAction<{id: { [key: string]: any }}>) => {
            state.WorkData.id ={
                ...state.WorkData.id,
                ...action.payload.id
            }
        },
        updateDumWorkPlace:(state, action: PayloadAction<{place: { [key: string]: any }}>) => {
            state.WorkData.place ={
                ...state.WorkData.place,
                ...action.payload.place
            }
        },
        updateDumWorkTitle:(state, action: PayloadAction<{title: { [key: string]: any }}>) => {
            state.WorkData.title ={
                ...state.WorkData.title,
                ...action.payload.title
            }
        },
        updateDumWorkTerm:(state, action: PayloadAction<{term: { [key: string]: any }}>) => {
            state.WorkData.term ={
                ...state.WorkData.term,
                ...action.payload.term
            }
        },
        updateDumWorkRatting:(state, action: PayloadAction<{ratting: { [key: string]: any }}>) => {
            state.WorkData.ratting ={
                ...state.WorkData.ratting,
                ...action.payload.ratting
            }
        },

        updateDumWorkEmpType:(state, action: PayloadAction<{emp_type: { [key: string]: any }}>) => {
            state.WorkData.emp_type ={
                ...state.WorkData.emp_type,
                ...action.payload.emp_type
            }
        },

        updateDumWorkWorkStatus:(state, action: PayloadAction<{work_status: { [key: string]: any }}>) => {
            state.WorkData.work_status ={
                ...state.WorkData.work_status,
                ...action.payload.work_status
            }
        },

        updateDumWorkInterval:(state, action: PayloadAction<{interval: { [key: string]: any }}>) => {
            state.WorkData.interval ={
                ...state.WorkData.interval,
                ...action.payload.interval
            }
        },

        updateDumWorkDescription:(state, action: PayloadAction<{description: { [key: string]: any }}>) => {
            state.WorkData.description ={
                ...state.WorkData.description,
                ...action.payload.description
            }
        },

    }
})

export default workSlice.reducer;
export const {updateDumWorkWorkStatus,updateDumWorkEmpType,updateDumWorkInterval,updateDumWorkDescription,updateDumWorkRatting,updateDumWorkPlace,updateDumWorkTerm,updateDumWorkTitle,updateDumWorkId,updateDumWorkData,setDumWorkData} = workSlice.actions