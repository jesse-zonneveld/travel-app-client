/**
 * @file components/header/nav/SearchBar.jsx
 * @author Jesse Zonneveld
 * @description Search bar for main header
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';

/* -------------------------------------------------------------------------- */

/* ---------------------------------- FORM ---------------------------------- */

const SearchBar: FC = () => {
    return (
        <form className='search-bar'>
            <input type='text' placeholder='Search...' name='search' />
            <button type='submit'>GO</button>
        </form>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default SearchBar;

/* -------------------------------------------------------------------------- */
