'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import settingReducer from '@/app/lib/appRedux/slice/settingsSlice';
import resumeReducer from '@/app/lib/appRedux/slice/defaultResumeSlice';


// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
    settings: settingReducer,
    resume: resumeReducer,
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
