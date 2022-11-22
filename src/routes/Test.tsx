import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { useAppDispatch } from '../redux/hooks';
import { setTheme, ThemeMode, ThemeState } from '../redux/slices/ThemeSlice';

const initialValues: ThemeState = {
    mode: 'default',
};

const validationSchema = Yup.object({
    mode: Yup.mixed<ThemeMode>().oneOf(['default', 'light', 'dark']).required(),
});

const Test: FC = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
                dispatch(setTheme(values.mode));
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <form id='registration_form' onSubmit={formik.handleSubmit}>
            <input
                type='text'
                placeholder='theme mode'
                {...formik.getFieldProps('mode')}
                className={clsx('input', {
                    'is-invalid': formik.touched.mode && formik.errors.mode,
                })}
            />
            <button type='submit'>Update Theme</button>
        </form>
    );
};

export default Test;
