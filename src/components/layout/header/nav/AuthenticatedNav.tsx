/**
 * @file components/layout/header/nav/AuthenticatedNav.tsx
 * @author Jesse Zonneveld
 * @description Main header nav bar component for authenticated users
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { Link } from 'react-router-dom';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPOENT -------------------------------- */

const AuthenticatedNav: FC = () => {
    return (
        <div className='main-nav'>
            <Link to={'/test'}>Test</Link>
            <Link to={'/test2'}>Test2</Link>
            <Link to={'/test3'}>Test3</Link>
        </div>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default AuthenticatedNav;

/* -------------------------------------------------------------------------- */
