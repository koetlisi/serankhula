'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pagesReducer from '@/GlobalRedux/Features/pageControl/pageControlSlice';
import institutionReducer from '@/GlobalRedux/Features/quali_instition/quali_institution';
import loginReducer from '@/GlobalRedux/Features/auth/login';
import userReducer from '@/GlobalRedux/Features/user/users';
import aboutUserReducer from '@/GlobalRedux/Features/user/about';
import courseReducer from '@/GlobalRedux/Features/course/course';
import userCoursesReducer from '@/GlobalRedux/Features/course/userCourse/courses';
import experienceReducer from '@/GlobalRedux/Features/dummyData/eperience';
import aboutYouReducer from '@/GlobalRedux/Features/dummyData/aboutYou';
import dumSkillsReducer from '@/GlobalRedux/Features/dummyData/dumSkill';
import skillsReducer from '@/GlobalRedux/Features/skills/skill';
import joblessReducer from '@/GlobalRedux/Features/jobless/jobless';
import dumWorkReducer from '@/GlobalRedux/Features/dummyData/dummyWork';
import systemReducer from '@/GlobalRedux/Features/system';
import userWorkReducer from '@/GlobalRedux/Features/work/work';


// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
    pages: pagesReducer,
    institution: institutionReducer,
    login:loginReducer,
    users: userReducer,
    course: courseReducer,
    userCourses: userCoursesReducer,
    experience: experienceReducer,
    aboutYou: aboutYouReducer,
    aboutUser: aboutUserReducer,
    skills: skillsReducer,
    dumSkills: dumSkillsReducer,
    jobless: joblessReducer,
    dumWork: dumWorkReducer,
    system: systemReducer,
    userWork: userWorkReducer
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
