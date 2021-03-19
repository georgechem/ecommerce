import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

import './styles/myStyles.scss';

const MyApp = () => {
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
