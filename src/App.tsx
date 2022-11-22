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
            className={clsx('app', {
                'theme-default': theme.mode === 'default',
                'theme-light': theme.mode === 'light',
                'theme-dark': theme.mode === 'dark',
            })}
        >
            <Header />
            <div className='main-content'>
                <AllRoutes />
            </div>
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
