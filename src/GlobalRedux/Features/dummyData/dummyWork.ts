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
        removeWorkSection:(state, action)=> {
            const { index } = action.payload;
            const key = `place-${index}`;
            const title = `title-${index}`;
            const term = `term-${index}`;
            const ratting = `ratting-${index}`;
            const id = `id-${index}`;
            const emp_type = `emp_type-${index}`;
            const description = `description-${index}`;
            const interval = `interval-${index}`;
            const work_status = `work_status-${index}`;
            // Remove the specific section from the state
            delete state.WorkData.place[key]
            delete state.WorkData.title[title]
            delete state.WorkData.term[term]
            delete state.WorkData.ratting[ratting];
            delete state.WorkData.id[id];
            delete state.WorkData.emp_type[emp_type];
            delete state.WorkData.interval[interval];
            delete state.WorkData.description[description];
            delete state.WorkData.work_status[work_status];
        }
    }
})

export default workSlice.reducer;
export const {removeWorkSection,updateDumWorkWorkStatus,updateDumWorkEmpType,updateDumWorkInterval,updateDumWorkDescription,updateDumWorkRatting,updateDumWorkPlace,updateDumWorkTerm,updateDumWorkTitle,updateDumWorkId,updateDumWorkData,setDumWorkData} = workSlice.actions