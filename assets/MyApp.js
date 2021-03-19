import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

import {url_authorize} from "./config";
import {fetchGetConfig} from "./config";

import './styles/myStyles.scss';

const MyApp = (props) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(()=>{
        fetch(url_authorize, fetchGetConfig())
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                if(result.auth === true){
                    setIsLogged(true);
                }else{
                    setIsLogged(false)
                }
            })
            .catch(err=>{
                console.log(err);
            })

    },[]);

    return (
        <Router>
            <>
                <Nav isLogged={isLogged}/>
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
            </>
        </Router>


    );
}
export default MyApp;
