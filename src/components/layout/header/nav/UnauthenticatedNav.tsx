/**
 * @file components/layout/header/nav/UnauthenticatedNav.tsx
 * @author Jesse Zonneveld
 * @description Main header nav bar component for unauthenticated users
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks';
import { setAuthRoute } from '../../../../redux/slices/ResponsiveSlice';
import SearchBar from './SearchBar';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPOENT -------------------------------- */

const UnauthenticatedNav: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className='main-nav'>
            <Link to={'/'}>Home</Link>
            <Link to={'/auth'} onClick={() => dispatch(setAuthRoute('login'))}>
                Login
            </Link>
            <Link to={'/auth'} onClick={() => dispatch(setAuthRoute('register'))}>
                Register
            </Link>
            <Link to={'/test'}>Test</Link>
            <SearchBar />
        </div>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default UnauthenticatedNav;

/* -------------------------------------------------------------------------- */
