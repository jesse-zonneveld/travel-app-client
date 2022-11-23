/**
 * @file components/forms/shared/FormCol.tsx
 * @author Jesse Zonneveld
 * @description Form row
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';

/* -------------------------------------------------------------------------- */

/* ------------------------------- INTERFACES ------------------------------- */

interface ColProps {
    children: React.ReactNode;
    padding?: string;
}

/* -------------------------------------------------------------------------- */

/* ---------------------------------- FORM ---------------------------------- */

const FormCol: FC<ColProps> = ({ children, padding = '0px' }) => {
    return (
        <div
            className='form-col'
            style={{
                padding: `${padding}`,
            }}
        >
            {children}
        </div>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default FormCol;

/* -------------------------------------------------------------------------- */
