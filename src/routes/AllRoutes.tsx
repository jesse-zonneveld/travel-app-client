/**
 * @file routes/index.tsx
 * @author Jesse Zonneveld
 * @description All routes
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Test from './Test';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const AllRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/test' element={<Test />} />
        </Routes>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default AllRoutes;

/* -------------------------------------------------------------------------- */
