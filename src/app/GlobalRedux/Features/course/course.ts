// src/app/GlobalRedux/Features/course/courseSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseData {
    id:{[key:string]:number}
    name: { [key: string]: string };
    qualification: { [key: string]: string };
    interval: { [key: string]: { start: string; end: string } };
    institution: { [key: string]: string };
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
        resetCourseData: (state) => {
            state.courseData = initialState.courseData;
        },
    },
});

export const { setCourseData, updateCourseData, resetCourseData } = courseSlice.actions;

export default courseSlice.reducer;
