/**
 * @file redux/slices/ThemeSlice.ts
 * @author Jesse Zonneveld
 * @description Theme slice
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* -------------------------------------------------------------------------- */

/* ---------------------------------- TYPES --------------------------------- */

export type ThemeMode = 'default' | 'light' | 'dark';

export interface ThemeState {
    mode: ThemeMode;
}

/* -------------------------------------------------------------------------- */

/* ------------------------------ INITIAL STATE ----------------------------- */

const initialState: ThemeState = {
    mode: 'default',
};

/* -------------------------------------------------------------------------- */

/* ---------------------------------- SLICE --------------------------------- */

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeMode>) => {
            console.log('setting theme to ' + action.payload);
            state.mode = action.payload;
        },
    },
});

const { setTheme } = themeSlice.actions;

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export { themeSlice, setTheme };

/* -------------------------------------------------------------------------- */
