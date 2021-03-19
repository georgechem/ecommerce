import React from 'react';
import {useState, useEffect} from 'react';

import './Login.scss';

const Login = (props) => {
    return (
        <>
            <div className={'LoginForm'}>
                <label className={'LoginForm__label'} htmlFor={'email'}>Email</label>
                <input className={'LoginForm__input'} id={'email'} type="email"/>
                <label className={'LoginForm__label'} htmlFor={'password'}>Password</label>
                <input className={'LoginForm__input'} id={'password'} type="password"/>
                <input className={'LoginForm__btn'} id={'btn'} value={'Log In'} type="submit"/>
            </div>
        </>
    );
}
export default Login;
