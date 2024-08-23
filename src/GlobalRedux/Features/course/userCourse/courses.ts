// slices/coursesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Course {
    id: number;
    user_id:number;
    name: string;
    interval_start: string;
    interval_end: string;
    institution: string;
    description: string;
    qualification: string;
}

interface CoursesState {
    courses: Course[];
}

const initialState: CoursesState = {
    courses: [],
};

const coursesSlice = createSlice({
    name: 'userCourses',
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<Course>) => {
            state.courses.push(action.payload);
        },
        setCourses: (state, action: PayloadAction<Course[]>) => {
            state.courses = action.payload;
        },
        resetAllCourse:(state, action: PayloadAction<Course>) => {
            state.courses = initialState.courses
        },
    },
});

export const { addCourse, setCourses , resetAllCourse} = coursesSlice.actions;

export default coursesSlice.reducer;

