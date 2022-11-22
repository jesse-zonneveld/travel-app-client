/**
 * @file components/buttons/ButtonPrimary.tsx
 * @author Jesse Zonneveld
 * @description Primary button component
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { ButtonProps } from './types';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const ButtonPrimary: FC<ButtonProps> = (props) => {
    const { children, ...rest } = props;

    return (
        <button {...rest} className='btn btn-primary'>
            {children}
        </button>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default ButtonPrimary;

/* -------------------------------------------------------------------------- */
