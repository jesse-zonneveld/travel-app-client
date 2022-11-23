/**
 * @file components/forms/LoginForm.tsx
 * @author Jesse Zonneveld
 * @description Form for logging in
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { FormRow, FormCol } from './shared';

/* -------------------------------------------------------------------------- */

/* --------------------------- FORM INITIAL VALUES -------------------------- */

const initialValues = {
    username: '',
    password: '',
};

/* -------------------------------------------------------------------------- */

/* ------------------------------- FORM SCHEMA ------------------------------ */

const schema = Yup.object().shape({
    username: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
});

/* -------------------------------------------------------------------------- */

/* ---------------------------------- FORM ---------------------------------- */

const LoginForm: FC = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: async (values, { setStatus }) => {
            setLoading(true);
            try {
                console.log(values);
                setLoading(false);
            } catch (err) {
                console.error(err);
                if (err instanceof Error) {
                    setStatus(err.message);
                } else {
                    setStatus('An error has occured, please try again later');
                }
                setLoading(false);
            }
        },
    });

    return (
        <form id='login-form' className='form-grid' onSubmit={formik.handleSubmit}>
            <FormRow padding='10px'>
                <FormCol>
                    <h3 className='form-title'>
                        Sign in to Explore<span className='logo-thin'>MyCity</span>
                    </h3>
                </FormCol>
            </FormRow>
            <FormRow padding='0px 15px 15px 15px'>
                <FormCol>
                    <div className='icon-list-container'>
                        <span className='icon-container'>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </span>
                        <span className='icon-container google-icon'>
                            <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                        </span>
                        <span className='icon-container'>
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </span>
                    </div>
                </FormCol>
            </FormRow>
            <FormRow>
                <FormCol>
                    <p>Or use your email account:</p>
                </FormCol>
            </FormRow>
            <div className='inputs-container'>
                <FormRow padding='4px'>
                    <FormCol>
                        <div className='form-icon-text-input-container'>
                            <FontAwesomeIcon icon='user' />
                            <input placeholder='Username or Email' />
                        </div>
                    </FormCol>
                </FormRow>
                <FormRow padding='4px'>
                    <FormCol>
                        <div className='form-icon-text-input-container'>
                            <FontAwesomeIcon icon='lock' />
                            <input placeholder='Password' />
                        </div>
                    </FormCol>
                </FormRow>
            </div>
            <FormRow>
                <FormCol>
                    <Link to='/forgot-password' className='form-help-link'>
                        Forgot password?
                    </Link>
                </FormCol>
            </FormRow>
            <FormRow padding='20px'>
                <FormCol>
                    <button className='btn btn-primary' type='submit' disabled={loading}>
                        Login
                    </button>
                    {/* <AuthErrorMessage
                        currentAuthErrorState={currentAuthState.error}
                        matchWord='AuthorizationError'
                    /> */}
                </FormCol>
            </FormRow>
        </form>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default LoginForm;

/* -------------------------------------------------------------------------- */
