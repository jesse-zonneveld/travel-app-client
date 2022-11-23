/**
 * @file routes/Auth.tsx
 * @author Jesse Zonneveld
 * @description Auth route for desktop and tablet (login and register combined)
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC } from 'react';
import { Navigate } from 'react-router-dom';
// import { ButtonPrimary } from '../components/buttons';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setIsAuthFormSwitchActivated, setIsLoginForm } from '../redux/slices/ResponsiveSlice';
import background from '../media/images/nyc-bg.jpg';
import clsx from 'clsx';
import RegisterForm from '../components/forms/RegisterForm';
import LoginForm from '../components/forms/LoginForm';

/* -------------------------------------------------------------------------- */

/* -------------------------------- COMPONENT ------------------------------- */

const Auth: FC = () => {
    const respMode = useAppSelector((state) => state.responsive.mode);
    const isLoginForm = useAppSelector((state) => state.responsive.isLoginForm);
    const isAuthSwitchActivated = useAppSelector((state) => state.responsive.isAuthFormSwitchActivated);
    const dispatch = useAppDispatch();

    const toggleSwitch = () => {
        dispatch(setIsLoginForm(!isLoginForm));

        if (!isAuthSwitchActivated) {
            dispatch(setIsAuthFormSwitchActivated(!isAuthSwitchActivated));
        }
    };

    return (
        <>
            {respMode !== 'desktop' ? (
                isLoginForm ? (
                    <Navigate to='/login' />
                ) : (
                    <Navigate to='/register' />
                )
            ) : (
                <div
                    className='auth-page page-container'
                    style={{
                        backgroundImage: `url(${background})`,
                    }}
                >
                    <div className='page-container-overlay'>
                        <div className='outer-container'>
                            <div
                                className={
                                    isAuthSwitchActivated
                                        ? !isLoginForm
                                            ? 'layer-one move'
                                            : 'layer-one move-back'
                                        : 'layer-one'
                                }
                            >
                                <div>
                                    <RegisterForm />
                                </div>
                            </div>
                            <div
                                className='layer-two'
                                style={{
                                    backgroundImage: `url(${background})`,
                                }}
                            >
                                <div className='overlay'>
                                    <div>
                                        <h3>Hello, Traveller!</h3>
                                        <p>Register your account and start finding things to do across the world.</p>
                                    </div>
                                    <div>
                                        <h3>Welcome Back!</h3>
                                        <p>Sign in to view your account and discover things to do across the world.</p>
                                    </div>
                                    <button
                                        type='button'
                                        onClick={() => toggleSwitch()}
                                        className={clsx('btn btn-trans', {
                                            move: !isLoginForm,
                                            'move-back': isLoginForm,
                                        })}
                                    >
                                        Sign Up
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => toggleSwitch()}
                                        className={clsx('btn btn-trans', {
                                            move: !isLoginForm,
                                            'move-back': isLoginForm,
                                        })}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                            <div
                                className={
                                    isAuthSwitchActivated
                                        ? !isLoginForm
                                            ? 'layer-three move'
                                            : 'layer-three move-back'
                                        : 'layer-three'
                                }
                            >
                                <div>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default Auth;

/* -------------------------------------------------------------------------- */
