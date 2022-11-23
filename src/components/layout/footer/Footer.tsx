/**
 * @file components/layout/footer/Footer.tsx
 * @author Jesse Zonneveld
 * @description Footer component
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const Footer: FC = () => {
    const [hideFooter, setHideFooter] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/auth') {
            setHideFooter(true);
        } else {
            setHideFooter(false);
        }
    }, [location.pathname]);
    return (
        <div
            className={clsx('main-footer', {
                hide: hideFooter,
            })}
        >
            <div>Footer</div>
        </div>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default Footer;

/* -------------------------------------------------------------------------- */
