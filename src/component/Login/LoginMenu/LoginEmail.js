import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Formik } from 'formik';

import * as accountService from '~/utils/services/accountService';
import styles from './LoginMenu.module.scss';

const cx = classNames.bind(styles);

export function LoginEmail() {
    const [fail, setFail] = useState(false);

    const handleFail = () => {
        setFail(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit ne');
    };

    const [state, setState] = useState({
        hide: true,
        type: 'password',
        icon: faEye,
    });

    const handleChangeType = () => {
        let updateState = { ...state };

        if (state.hide) {
            updateState = {
                hide: false,
                type: 'text',
                icon: faEyeSlash,
            };
        } else {
            updateState = {
                hide: true,
                type: 'password',
                icon: faEye,
            };
        }

        setState((state) => ({
            ...state,
            ...updateState,
        }));
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
                const errors = {};
                if (!values.email || !values.password) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
                const result = await accountService.login({ email: values.email, password: values.password });
                sessionStorage.setItem('user', JSON.stringify(result));
                let getUser = JSON.parse(sessionStorage.getItem('user'));
                console.log(getUser);
                window.location.href = '/';
                //setSubmitting(false);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form className={cx('form-container')} onSubmit={handleSubmit}>
                    <h2 className={cx('form-header')}>Log in</h2>
                    <p className={cx('input-label')}>Email or username</p>
                    <div className={cx('input-container')}>
                        <input
                            type="text"
                            placeholder="Email or username"
                            name="email"
                            onChange={handleChange}
                            className={cx('input-login')}
                            value={values.email}
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <input
                            type={state.type}
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            className={cx('input-login', { fail })}
                            value={values.password}
                        />
                        <div className={cx('input-pass')} onClick={handleChangeType}>
                            <FontAwesomeIcon icon={state.icon} className={cx('input-pass-icon')} />
                        </div>
                    </div>
                    {errors.email}
                    <p className={cx('input-forgot')}>Forgot password?</p>

                    <button type="submit" className={cx('form-btn')}>
                        Login
                    </button>
                </form>
            )}
        </Formik>
    );
}
