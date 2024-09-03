'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    authReducer,
    resumeReducer, resumeTemplateOneReducer,
    resumeTemplatesReducer, resumeTemplateTwoReducer,
    settingReducer,
    systemReducer,
    userReducer
} from "@/app/lib/appRedux/slice/exports";

// Function to check if localStorage is available
const isLocalStorageAvailable = () => {
    try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
};

// Persist configuration
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
    settings: settingReducer,
    resume: resumeReducer,
    auth: authReducer,
    system: systemReducer,
    resumeTemplates: resumeTemplatesReducer,
    users: userReducer,
    resumeTemplateOne: resumeTemplateOneReducer,
    resumeTemplateTwo: resumeTemplateTwoReducer,
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
