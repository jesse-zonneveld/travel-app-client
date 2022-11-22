/**
 * @file redux/store.ts
 * @author Jesse Zonneveld
 * @description Redux store
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { configureStore } from '@reduxjs/toolkit';
import { responsiveSlice } from './slices/ResponsiveSlice';
import { themeSlice } from './slices/ThemeSlice';
import { userSlice } from './slices/UserSlice';

/* -------------------------------------------------------------------------- */

/* ---------------------------------- STORE --------------------------------- */

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        responsive: responsiveSlice.reducer,
        theme: themeSlice.reducer,
    },
});

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };

/* -------------------------------------------------------------------------- */
