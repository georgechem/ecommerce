import React from 'react';
import {useState, useEffect} from 'react';

import {url_login} from "../../config";
import {fetchPostConfig} from "../../config";

import './Login.scss';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        if(e.target.id === 'email'){
            setCredentials({
                email: e.target.value,
                password: credentials.password
            });
        }else{
            setCredentials({
                email: credentials.email,
                password: e.target.value
            });
        }


    }

    const onSubmit = (e) => {

        fetch(url_login, fetchPostConfig(credentials))
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return (
        <>
            <div className={'LoginForm'}>
                <label
                    className={'LoginForm__label'}
                    htmlFor={'email'}>Email
                </label>
                <input
                    onChange={onChange}
                    value={credentials.email}
                    className={'LoginForm__input'}
                    id={'email'} type="email"
                />
                <label
                    className={'LoginForm__label'}
                    htmlFor={'password'}>Password
                </label>
                <input
                    onChange={onChange}
                    className={'LoginForm__input'}
                    id={'password'} type="password"
                />
                <input
                    onClick={onSubmit}
                    className={'LoginForm__btn'}
                    id={'btn'}
                    value={'Log In'}
                    type="submit"/>
            </div>
        </>
    );
}
export default Login;
