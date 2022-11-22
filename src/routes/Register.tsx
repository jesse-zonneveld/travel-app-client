/**
 * @file routes/Register.tsx
 * @author Jesse Zonneveld
 * @description Register route for mobile
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const Register: FC = () => {
    const respMode = useAppSelector((state) => state.responsive.mode);

    return <>{respMode !== 'mobile' ? <Navigate to='/auth' /> : <div>Register</div>}</>;
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default Register;

/* -------------------------------------------------------------------------- */
