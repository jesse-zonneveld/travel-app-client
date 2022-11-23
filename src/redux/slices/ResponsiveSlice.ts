/**
 * @file redux/slices/ResponsiveSlice.ts
 * @author Jesse Zonneveld
 * @description Responsive slice
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* -------------------------------------------------------------------------- */

/* ---------------------------------- TYPES --------------------------------- */

export type ResponsiveMode = 'mobile' | 'tablet' | 'desktop' | null;

export interface ResponsiveState {
    mode: ResponsiveMode;
    isLoginForm: boolean;
    isAuthFormSwitchActivated: boolean;
}

/* -------------------------------------------------------------------------- */

/* --------------------------------- HELPERS -------------------------------- */

const getInitialRespMode = () => {
    let mode: ResponsiveMode;

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width <= 720) {
        mode = 'mobile';
    } else if (width <= 1040) {
        mode = 'tablet';
    } else {
        mode = 'desktop';
    }

    return mode;
};

/* -------------------------------------------------------------------------- */

/* ------------------------------ INITIAL STATE ----------------------------- */

const initialState: ResponsiveState = {
    mode: getInitialRespMode(),
    isLoginForm: true,
    isAuthFormSwitchActivated: false,
};

/* -------------------------------------------------------------------------- */

/* ---------------------------------- SLICE --------------------------------- */

const responsiveSlice = createSlice({
    name: 'responsive',
    initialState,
    reducers: {
        setResponsiveMode: (state, action: PayloadAction<ResponsiveMode>) => {
            console.log('setting responsive mode to ' + action.payload);
            state.mode = action.payload;
        },
        setIsLoginForm: (state, action: PayloadAction<boolean>) => {
            console.log('setting is login form to ' + action.payload);
            state.isLoginForm = action.payload;
        },
        setIsAuthFormSwitchActivated: (state, action: PayloadAction<boolean>) => {
            console.log('setting is auth switch to ' + action.payload);
            state.isAuthFormSwitchActivated = action.payload;
        },
    },
});

const { setResponsiveMode, setIsLoginForm, setIsAuthFormSwitchActivated } = responsiveSlice.actions;

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export { responsiveSlice, setResponsiveMode, setIsLoginForm, setIsAuthFormSwitchActivated };

/* -------------------------------------------------------------------------- */
