'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pagesReducer from '@/app/GlobalRedux/Features/pageControl/pageControlSlice';
import institutionReducer from '@/app/GlobalRedux/Features/quali_instition/quali_institution';
import loginReducer from '@/app/GlobalRedux/Features/auth/login';
import userReducer from '@/app/GlobalRedux/Features/user/users'

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
    users: userReducer
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
