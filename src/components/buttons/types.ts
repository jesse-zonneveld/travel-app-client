/**
 * @file components/buttons/types.ts
 * @author Jesse Zonneveld
 * @description Button types
 */

/* --------------------------------- IMPORTS -------------------------------- */

import React from 'react';

/* -------------------------------------------------------------------------- */

/* ------------------------------- INTERFACES ------------------------------- */

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
        React.AriaAttributes {
    children: React.ReactNode;
}

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export type { ButtonProps };

/* -------------------------------------------------------------------------- */
