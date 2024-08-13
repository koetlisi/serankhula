'use client';

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pagesReducer from '@/app/GlobalRedux/Features/pageControl/pageControlSlice';

// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, pagesReducer);

// Create the store with the persisted reducer
export const store = configureStore({
    reducer: {
        pages: persistedReducer,
    },
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
