import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Skill {
    id: any;
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
            state.skills.push(action.payload);
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
    }
});

export default skillsSlice.reducer;
export const { addSkill, updateSkill, resetSkill } = skillsSlice.actions;
