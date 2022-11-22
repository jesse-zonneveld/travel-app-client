/**
 * @file redux/hooks.ts
 * @author Jesse Zonneveld
 * @description Redux hooks
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* -------------------------------------------------------------------------- */
