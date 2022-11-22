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
export type AuthRoute = 'login' | 'register';

export interface ResponsiveState {
    mode: ResponsiveMode;
    authRoute: AuthRoute;
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
    authRoute: 'login',
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
        setAuthRoute: (state, action: PayloadAction<AuthRoute>) => {
            console.log('setting auth route to ' + action.payload);
            state.authRoute = action.payload;
        },
    },
});

const { setResponsiveMode, setAuthRoute } = responsiveSlice.actions;

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export { responsiveSlice, setResponsiveMode, setAuthRoute };

/* -------------------------------------------------------------------------- */
