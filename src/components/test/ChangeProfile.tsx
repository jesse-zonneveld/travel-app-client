import { FC } from 'react';
import { setUsername, setEmail } from '../../redux/slices/UserSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { useAppDispatch } from '../../redux/hooks';

const initialValues = {
    username: '',
    email: '',
};

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Name is required'),
    email: Yup.string().required('Age is required'),
});

const ChangeProfile: FC = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
                console.log(values);
                dispatch(setUsername(values.username));
                dispatch(setEmail(values.email));
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <form
            className='form w-300 fv-plugins-bootstrap5 fv-plugins-framework'
            id='registration_form'
            onSubmit={formik.handleSubmit}
        >
            <input
                type='text'
                placeholder='username'
                {...formik.getFieldProps('username')}
                className={clsx('input', {
                    'is-invalid': formik.touched.username && formik.errors.username,
                })}
            />
            <input
                type='text'
                placeholder='email'
                {...formik.getFieldProps('email')}
                className={clsx('input', {
                    'is-invalid': formik.touched.email && formik.errors.email,
                })}
            />
            <button type='submit'>Update Info</button>
        </form>
    );
};

export default ChangeProfile;
