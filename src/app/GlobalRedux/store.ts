'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pagesReducer from '@/app/GlobalRedux/Features/pageControl/pageControlSlice';
import institutionReducer from '@/app/GlobalRedux/Features/quali_instition/quali_institution';

// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
    pages: pagesReducer,
    institution: institutionReducer,
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
