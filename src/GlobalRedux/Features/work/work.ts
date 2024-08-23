// slices/coursesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Work {
    id: number;
    user_id:number;
    place: string;
    interval_start: string;
    interval_end: string;
    term: string;
    description: string;
    title: string;
    satisfaction: number;
}

interface WorkState {
    work: Work[];
}

const initialState: WorkState = {
    work: [],
};

const workSlice = createSlice({
    name: 'userWork',
    initialState,
    reducers: {
        addWork: (state, action: PayloadAction<Work>) => {

            const existingSkill = state.work.find(work => work.id === action.payload.id);
            if (!existingSkill) {
                state.work.push(action.payload);
            } else {
                console.warn(`Work with id ${action.payload.id} already exists.`);
            }
        },
        setWork: (state, action: PayloadAction<Work[]>) => {
            state.work = action.payload;
        },
        resetAllWork:(state, action: PayloadAction<Work>) => {
            state.work = initialState.work
        },
    },
});

export const { addWork, setWork , resetAllWork} = workSlice.actions;

export default workSlice.reducer;

