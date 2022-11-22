/**
 * @file components/buttons/ButtonSecondary.tsx
 * @author Jesse Zonneveld
 * @description Secondary button component
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { ButtonProps } from './types';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const ButtonSecondary: FC<ButtonProps> = (props) => {
    const { children, ...rest } = props;

    return (
        <button {...rest} className='btn btn-secondary'>
            {children}
        </button>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default ButtonSecondary;

/* -------------------------------------------------------------------------- */
