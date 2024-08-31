import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {TemplateOneInterfaceInitialState} from "@/app/lib/appRedux/slice/states/templateOneInterfaceInitialState";
import {Education, Experience, ResumeInfo, Skill} from "@/app/lib/types/templateOneInterface";

const resumeSlice = createSlice({
    name: 'resumeTemplateOne',
    initialState:TemplateOneInterfaceInitialState,
    reducers: {
        setResumeInfo(state, action: PayloadAction<ResumeInfo>) {
            state.resumeInfo = action.payload;
        },
        updateExperience(state, action: PayloadAction<Experience[]>) {
            state.resumeInfo.experience = action.payload;
        },
        updateEducation(state, action: PayloadAction<Education[]>) {
            state.resumeInfo.education = action.payload;
        },
        updateSkills(state, action: PayloadAction<Skill[]>) {
            state.resumeInfo.skills = action.payload;
        },
        addExperience(state, action: PayloadAction<Experience>) {
            state.resumeInfo.experience.push(action.payload);
        },
        addEducation(state, action: PayloadAction<Education>) {
            state.resumeInfo.education.push(action.payload);
        },
        addSkill(state, action: PayloadAction<Skill>) {
            state.resumeInfo.skills.push(action.payload);
        },
        editExperience(state, action: PayloadAction<Experience>) {
            const index = state.resumeInfo.experience.findIndex(exp => exp.id === action.payload.id);
            if (index !== -1) {
                state.resumeInfo.experience[index] = action.payload;
            }
        },
        editEducation(state, action: PayloadAction<Education>) {
            const index = state.resumeInfo.education.findIndex(edu => edu.id === action.payload.id);
            if (index !== -1) {
                state.resumeInfo.education[index] = action.payload;
            }
        },
        editSkill(state, action: PayloadAction<Skill>) {
            const index = state.resumeInfo.skills.findIndex(skill => skill.id === action.payload.id);
            if (index !== -1) {
                state.resumeInfo.skills[index] = action.payload;
            }
        },
        resetResumeInfo(state) {
            state.resumeInfo = TemplateOneInterfaceInitialState.resumeInfo;
        }
    }
});

export const {resetResumeInfo, editExperience,editSkill,editEducation,addEducation,addExperience, setResumeInfo, updateExperience, updateEducation, updateSkills } = resumeSlice.actions;
export default resumeSlice.reducer;
