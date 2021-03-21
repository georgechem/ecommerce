import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {url_login, ex_path} from "../../config";
import {fetchPostConfig} from "../../config";



import './Login.scss';

const Login = (props) => {
    // remember routs
    const history = useHistory();
    const [error, setError] = useState('');
    // store credentials
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    // clear errorMsg Timeout when component Unmounts
    useEffect(() =>{
        return function clean(){
            if(error !== ''){
                clearTimeout(errorMsg);
            }
        }
    },[]);

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
                    props.setIsLogged(true);
                    history.push(ex_path+"/");
                }else{
                    setError(
                        <div
                            style={{
                                marginTop: '20px',
                                backgroundColor: 'red',
                                color: 'white',
                                textAlign: 'center',
                                padding: '15px',
                            }}
                        >
                            Access Denied
                        </div>
                    );
                    const errorMsg = setTimeout(function () {
                        setError('');
                    }, 2000)
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
                {error}
            <div className={'LoginForm'}>
                <p>
                    <em>email: user@example.com,</em>
                </p>
                <p
                    style={{
                        borderBottom: '1px solid black',
                        paddingBottom: '5px',
                        margin: '5px 10px',
                    }}
                >
                    <em>password: user</em>
                </p>
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
