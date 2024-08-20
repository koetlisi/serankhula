// src/app/GlobalRedux/Features/course/courseSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseData {
    id:{[key:string]:number}
    name: { [key: string]: string };
    qualification: { [key: string]: string };
    interval: { [key: string]: { start: string; end: string } };
    institution: { [key: string]: any };
    description: { [key: string]: string };
}

interface CourseState {
    courseData: CourseData;
}

const initialState: CourseState = {
    courseData: {
        id:{},
        name: {},
        qualification: {},
        interval: {},
        institution: {},
        description: {}
    }
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourseData: (state, action: PayloadAction<CourseData>) => {
            state.courseData = action.payload;
        },

        updateCourseData: (state, action: PayloadAction<Partial<CourseData>>) => {
            state.courseData = {
                ...state.courseData,
                ...action.payload,
            };
        },
        updateCourseId: (state, action: PayloadAction<{id: { [key: string]: any }}>) => {
            state.courseData.id = {
                ...state.courseData.id,
                ...action.payload.id,
            };
        },
        updateDescription: (state, action: PayloadAction<{description: { [key: string]: any }}>) => {
            state.courseData.description = {
                ...state.courseData.description,
                ...action.payload.description,
            };
        },
        updateDateInterval: (state, action: PayloadAction<{interval: { [key: string]: any }}>) => {
            state.courseData.interval = {
                ...state.courseData.interval,
                ...action.payload.interval,
            };
        },
        updateCourseName: (state, action: PayloadAction<{name: { [key: string]: any }}>) => {
            state.courseData.name = {
                ...state.courseData.name,
                ...action.payload.name,
            };
        },

        updateInstitution: (state, action: PayloadAction<{institution: { [key: string]: any }}>) => {
            state.courseData.institution = {
                ...state.courseData.institution,
                ...action.payload.institution,
            };
        },
        updateQualification: (state, action: PayloadAction<{qualification: { [key: string]: any }}>) => {
            state.courseData.qualification = {
                ...state.courseData.qualification,
                ...action.payload.qualification,
            };

            console.log(action.payload.qualification)
        },
        resetCourseData: (state) => {
            state.courseData = initialState.courseData;
        },
    },
});

export const {updateCourseId, updateDescription,updateDateInterval,updateCourseName,updateQualification,updateCourseData,updateInstitution, resetCourseData } = courseSlice.actions;

export default courseSlice.reducer;
