import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';

import {url_authorize, url_getAllProducts} from "./config";
import {fetchGetConfig} from "./config";

import './styles/myStyles.scss';

const MyApp = (props) => {
    const [isLogged, setIsLogged] = useState(false);
    const [allProducts, setAllProducts] = useState(null);

    useEffect(()=>{
        fetch(url_authorize, fetchGetConfig())
            .then(res=>res.json())
            .then(result=>{
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
    useEffect(()=>{
        fetch(url_getAllProducts, fetchGetConfig)
            .then(res=>res.json())
            .then(result=>{
                setAllProducts(result);
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);

    return (
        <Router>
            <>
                <Nav isLogged={isLogged}/>
                <Route path="/"
                       render={()=>{
                           return <Home allProducts={allProducts}/>
                       }}
                       exact/>
                <Route path="/cart" component={Cart}/>
                <Route path="/login"
                       render={()=>{
                    return <Login
                        setIsLogged={setIsLogged}
                    />;
                }}/>
                <Route path="/logout"
                       render={()=>{
                           return <Logout
                               setIsLogged={setIsLogged}
                           />
                       }}
                />
                <Footer />
            </>
        </Router>


    );
}

export default MyApp;
