'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import React from "react";

interface Prop {
    children: React.ReactNode;
}

export const Providers: React.FC<Prop> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
