/**
 * @file app.tsx
 * @author Jesse Zonneveld
 * @description App
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Header from './components/layout/header/Header';
import AllRoutes from './routes/AllRoutes';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { ResponsiveMode, setResponsiveMode } from './redux/slices/ResponsiveSlice';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSearch,
    faUser,
    faBell,
    faComments,
    faEnvelope,
    faUsers,
    faCaretDown,
    faLock,
    faEdit,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser as farUser, faKeyboard, faEyeSlash, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Footer from './components/layout/footer/Footer';

/* -------------------------------------------------------------------------- */

/* ------------------------------ ICON LIBRARY ------------------------------ */

library.add(
    fab,
    faSearch,
    faUser,
    faBell,
    faComments,
    faEnvelope,
    faUsers,
    faCaretDown,
    farUser,
    faKeyboard,
    faEyeSlash,
    faLightbulb,
    faLock,
    faEdit,
    faMoon,
);

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

function App() {
    const theme = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();

    const getRespMode = () => {
        let mode: ResponsiveMode;

        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (width <= 720) {
            mode = 'mobile';
        } else if (width <= 1040) {
            mode = 'tablet';
        } else {
            mode = 'desktop';
        }

        return mode;
    };

    window.addEventListener('resize', () => {
        dispatch(setResponsiveMode(getRespMode()));
    });

    return (
        <div
            className={clsx('app all-content', {
                'theme-default': theme.mode === 'default',
                'theme-light': theme.mode === 'light',
                'theme-dark': theme.mode === 'dark',
            })}
        >
            <Header />
            <div className='main-content'>
                <AllRoutes />
            </div>
            <Footer />
        </div>
    );
}

/* -------------------------------------------------------------------------- */

/* --------------------------------- WRAPPER -------------------------------- */

const AppWrapper = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default AppWrapper;

/* -------------------------------------------------------------------------- */
