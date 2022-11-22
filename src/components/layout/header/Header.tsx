/**
 * @file components/layout/header/index.tsx
 * @author Jesse Zonneveld
 * @description Main header component
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import HeaderLogo from './HeaderLogo';
import AuthenticatedNav from './nav/AuthenticatedNav';
import UnauthenticatedNav from './nav/UnauthenticatedNav';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const Header: FC = () => {
    const loggedIn = false;

    return (
        <div className='main-header'>
            <HeaderLogo />
            {loggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
        </div>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default Header;

/* -------------------------------------------------------------------------- */
