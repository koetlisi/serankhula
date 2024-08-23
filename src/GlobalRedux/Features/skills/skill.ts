import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Skill {
    id: number;
    user_id:number;
    name: string;
    ratting: number;
    summary: string;
}

interface SkillsState {
    skills: Skill[];
}

const initialState: SkillsState = {
    skills: []
};

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkill: (state, action: PayloadAction<Skill>) => {
            const existingSkill = state.skills.find(skill => skill.id === action.payload.id);
            if (!existingSkill) {
                state.skills.push(action.payload);
            } else {
                console.warn(`Skill with id ${action.payload.id} already exists.`);
            }
        },
        updateSkill: (state, action: PayloadAction<Skill>) => {
            const index = state.skills.findIndex(skill => skill.id === action.payload.id);
            if (index !== -1) {
                state.skills[index] = action.payload;
            }
        },
        resetSkill:(state, action: PayloadAction<Skill>) => {
            state.skills = initialState.skills
        },
        deleteSkill: (state, action: PayloadAction<any>) => {
            state.skills = state.skills.filter(skill => skill.user_id !== action.payload);
        }
    }
});

export default skillsSlice.reducer;
export const { addSkill, updateSkill, resetSkill } = skillsSlice.actions;
