/**
 * @file routes/Register.tsx
 * @author Jesse Zonneveld
 * @description Register route for mobile and tablet
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const Register: FC = () => {
    const respMode = useAppSelector((state) => state.responsive.mode);

    return <>{respMode === 'desktop' ? <Navigate to='/auth' /> : <div>Register</div>}</>;
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default Register;

/* -------------------------------------------------------------------------- */
