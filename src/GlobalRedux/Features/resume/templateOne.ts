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
        }
    }
});

export const { setResumeInfo, updateExperience, updateEducation, updateSkills } = resumeSlice.actions;
export default resumeSlice.reducer;
