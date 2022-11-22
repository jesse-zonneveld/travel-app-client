/**
 * @file redux/slices/UserSlice.ts
 * @author Jesse Zonneveld
 * @description User slice
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

/* -------------------------------------------------------------------------- */

/* ---------------------------------- TYPES --------------------------------- */

export interface UserState {
    id: string;
    username: string;
    email: string;
}

/* -------------------------------------------------------------------------- */

/* ------------------------------ INITIAL STATE ----------------------------- */

const initialState: UserState = {
    id: '123345',
    username: 'jessezon',
    email: 'jesse@mail.com',
};

/* -------------------------------------------------------------------------- */

/* ---------------------------------- SLICE --------------------------------- */

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});

const { setUsername, setEmail } = userSlice.actions;

const selectUser = (state: RootState) => state.user;

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export { userSlice, setUsername, setEmail, selectUser };

/* -------------------------------------------------------------------------- */
