'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pagesReducer from '@/app/GlobalRedux/Features/pageControl/pageControlSlice';
import institutionReducer from '@/app/GlobalRedux/Features/quali_instition/quali_institution';
import loginReducer from '@/app/GlobalRedux/Features/auth/login';
import userReducer from '@/app/GlobalRedux/Features/user/users';
import courseReducer from '@/app/GlobalRedux/Features/course/course';
import userCoursesReducer from '@/app/GlobalRedux/Features/course/userCourse/courses';
import experienceReducer from '@/app/GlobalRedux/Features/dummyData/eperience';
import aboutYouReducer from '@/app/GlobalRedux/Features/dummyData/aboutYou';
import dumSkillsReducer from '@/app/GlobalRedux/Features/dummyData/dumSkill';
import skillsReducer from '@/app/GlobalRedux/Features/skills/skill';
import joblessReducer from '@/app/GlobalRedux/Features/jobless/jobless';
import dumWorkReducer from '@/app/GlobalRedux/Features/dummyData/dummyWork';
import systemReducer from '@/app/GlobalRedux/Features/system';


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
    skills: skillsReducer,
    dumSkills: dumSkillsReducer,
    jobless: joblessReducer,
    dumWork: dumWorkReducer,
    system: systemReducer
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
