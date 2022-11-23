/**
 * @file components/forms/shared/FormRow.tsx
 * @author Jesse Zonneveld
 * @description Form row
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';

/* -------------------------------------------------------------------------- */

/* ------------------------------- INTERFACES ------------------------------- */

interface RowProps {
    children: React.ReactNode;
    padding?: string;
    gridColumns?: string;
}

/* -------------------------------------------------------------------------- */

/* ---------------------------------- FORM ---------------------------------- */

const FormRow: FC<RowProps> = ({ children, padding = '0px', gridColumns = '1fr' }) => {
    return (
        <div
            className='form-row'
            style={{
                padding: `${padding}`,
                gridTemplateColumns: `${gridColumns}`,
            }}
        >
            {children}
        </div>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default FormRow;

/* -------------------------------------------------------------------------- */
