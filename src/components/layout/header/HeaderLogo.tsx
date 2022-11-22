/**
 * @file components/layout/header/HeaderLogo.tsx
 * @author Jesse Zonneveld
 * @description Main header logo component
 */

/* --------------------------------- IMPORTS -------------------------------- */
import { FC } from 'react';
import { Link } from 'react-router-dom';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const HeaderLogo: FC = () => {
    return (
        <div className='logo'>
            <Link to='/'>
                <span className='logo-bold'>Explore</span>
                <span className='logo-thin'>MyCity</span>
            </Link>
        </div>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default HeaderLogo;

/* -------------------------------------------------------------------------- */
