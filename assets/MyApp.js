import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

import {url_authorize} from "./config";
import {fetchGetConfig} from "./config";

import './styles/myStyles.scss';

const MyApp = () => {
    const [isLogged, setIsLogged] = useState('false');

    useEffect(()=>{
        fetch(url_authorize, fetchGetConfig())
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            })

    },[]);

    return (
        <Router>
            <>
                <Nav/>
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart}/>
                <Route path="/login" component={Login}/>
            </>
        </Router>


    );
}
export default MyApp;
