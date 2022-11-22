/**
 * @file index.tsx
 * @author Jesse Zonneveld
 * @description Index
 */

/* --------------------------------- IMPORTS -------------------------------- */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/bundle.scss';

/* -------------------------------------------------------------------------- */

/* ---------------------------------- INDEX --------------------------------- */

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

/* -------------------------------------------------------------------------- */
