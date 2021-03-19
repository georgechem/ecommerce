import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {url_login} from "../../config";
import {fetchPostConfig} from "../../config";



import './Login.scss';

const Login = () => {
    // remember routs
    const history = useHistory();
    // store credentials
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    // On Credentials Change
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
    // SUBMIT REQUEST
    const onSubmit = () => {

        // GET TOKEN FROM SERVER
        fetch(url_login, fetchPostConfig(credentials))
            .then(res=>res.json())
            .then(result=>{
                if(result.status === 'success'){
                    history.push("/");
                }
            })
            .catch(err=>{
                console.log(err);
            });
    }
    // Generate Form for request-response
    return (
        <>
            <form onSubmit={(e)=>{e.preventDefault();}}>
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
            </form>
        </>
    );
}

export default Login;
