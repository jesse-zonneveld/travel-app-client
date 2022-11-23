/**
 * @file components/forms/RegisterForm.tsx
 * @author Jesse Zonneveld
 * @description Form for registering new user
 */

/* --------------------------------- IMPORTS -------------------------------- */

import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormRow, FormCol } from './shared';

/* --------------------------- FORM INITIAL VALUES -------------------------- */

const initialValues = {
    emailAddress: '',
    username: '',
    password: '',
    confirmPassword: '',
};

/* -------------------------------------------------------------------------- */

/* ------------------------------- FORM SCHEMA ------------------------------ */

const schema = Yup.object().shape({
    emailAddress: Yup.string().email('Must be a valid email address').required('This field is required'),
    username: Yup.string().max(50, 'Maximum of 50 characters').required('This field is required'),
    password: Yup.string()
        .required('This field is required')
        .min(8, 'Minimum length of 8 characters')
        .max(50, 'Maximum of 50 characters'),
    confirmPassword: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

/* -------------------------------------------------------------------------- */

/* ---------------------------------- FORM ---------------------------------- */

const RegisterForm: FC = () => {
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
                    setStatus('An error has occered, please try again later');
                }
                setLoading(false);
            }
        },
    });

    return (
        <form id='register-form' className='form-grid' onSubmit={formik.handleSubmit}>
            <FormRow padding='10px'>
                <FormCol>
                    <h3 className='form-title'>Create Account</h3>
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
            <FormRow gridColumns='1fr'>
                <FormCol padding='4px'>
                    <div className='form-icon-text-input-container'>
                        <FontAwesomeIcon icon='envelope' />
                        <input {...formik.getFieldProps('emailAddress')} placeholder='Email' />
                        {formik.touched.emailAddress && formik.errors.emailAddress && (
                            <div className='form-error-container'>
                                <span className='form-error'>{formik.errors.emailAddress}</span>
                            </div>
                        )}
                    </div>
                </FormCol>
            </FormRow>
            <FormRow gridColumns='1fr'>
                <FormCol padding='4px'>
                    <div className='form-icon-text-input-container'>
                        <FontAwesomeIcon icon='user' />
                        <input {...formik.getFieldProps('username')} placeholder='Username' />
                        {formik.touched.username && formik.errors.username && (
                            <div className='form-error-container'>
                                <span className='form-error'>{formik.errors.username}</span>
                            </div>
                        )}
                    </div>
                </FormCol>
            </FormRow>
            <FormRow gridColumns='1fr 1fr'>
                <FormCol padding='4px'>
                    <div className='form-icon-text-input-container'>
                        <FontAwesomeIcon icon='lock' />
                        <input {...formik.getFieldProps('password')} placeholder='Password' />
                        {formik.touched.password && formik.errors.password && (
                            <div className='form-error-container'>
                                <span className='form-error'>{formik.errors.password}</span>
                            </div>
                        )}
                    </div>
                </FormCol>
                <FormCol padding='4px'>
                    <div className='form-icon-text-input-container'>
                        <FontAwesomeIcon icon='lock' />
                        <input {...formik.getFieldProps('confirmPassword')} placeholder='Confirm Password' />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <div className='form-error-container'>
                                <span className='form-error'>{formik.errors.confirmPassword}</span>
                            </div>
                        )}
                    </div>
                </FormCol>
            </FormRow>
            <FormRow padding='20px'>
                <FormCol>
                    <button className='btn btn-primary' type='submit' disabled={loading}>
                        Create Account
                    </button>
                </FormCol>
            </FormRow>
        </form>
    );
};

/* -------------------------------------------------------------------------- */

/* --------------------------------- EXPORTS -------------------------------- */

export default RegisterForm;

/* -------------------------------------------------------------------------- */
