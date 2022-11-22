/**
 * @file routes/Auth.tsx
 * @author Jesse Zonneveld
 * @description Auth route for desktop and tablet (login and register combined)
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { ButtonPrimary } from '../components/buttons';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setAuthRoute } from '../redux/slices/ResponsiveSlice';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const Auth: FC = () => {
    const respMode = useAppSelector((state) => state.responsive.mode);
    const authRoute = useAppSelector((state) => state.responsive.authRoute);
    const dispatch = useAppDispatch();

    return (
        <>
            {respMode === 'mobile' ? (
                <Navigate to={`/${authRoute}`} />
            ) : (
                <div>
                    <ButtonPrimary onClick={() => dispatch(setAuthRoute('login'))}>Login</ButtonPrimary>
                    <ButtonPrimary onClick={() => dispatch(setAuthRoute('register'))}>Register</ButtonPrimary>
                </div>
            )}
        </>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default Auth;

/* -------------------------------------------------------------------------- */
