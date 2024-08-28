import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Experience {
    id: number;
    title: string;
    companyName: string;
    country: string;
    address:string
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    workSummery: string;
}

interface Education {
    id: number;
    institutionName: string;
    startDate: string;
    endDate: string;
    qualification: string;
    major: string;
    description: string;
}

interface Skill {
    id: number;
    name: string;
    rating: number;
}

export interface ResumeInfo {
    firstName: string;
    lastName: string;
    jobTitle: string;
    address: string;
    phone: string;
    email: string;
    themeColor: string;
    summery: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
}

interface ResumeState {
    resumeInfo: ResumeInfo;
}

const initialState: ResumeState = {
    resumeInfo: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        address: '',
        phone: '',
        email: '',
        themeColor: '',
        summery: '',
        experience: [],
        education: [],
        skills: []
    }
};

const resumeSlice = createSlice({
    name: 'templateOne',
    initialState,
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
            state.resumeInfo = initialState.resumeInfo;
        }
    }
});

export const {resetResumeInfo, editExperience,editSkill,editEducation,addEducation,addExperience, setResumeInfo, updateExperience, updateEducation, updateSkills } = resumeSlice.actions;
export default resumeSlice.reducer;
