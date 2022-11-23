/**
 * @file routes/Login.tsx
 * @author Jesse Zonneveld
 * @description Login route for mobile and tablet
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const Login: FC = () => {
    const respMode = useAppSelector((state) => state.responsive.mode);

    return <>{respMode === 'desktop' ? <Navigate to='/auth' /> : <div>Login</div>}</>;
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default Login;

/* -------------------------------------------------------------------------- */
