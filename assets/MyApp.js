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
    const [userCart, setUserCart] = useState({
        items: []
    });
    const addToCart = (product)=>{
        const cart = userCart.items;
        cart.push(product);
        setUserCart({
            items: cart
        });
        console.log(userCart);
    }

    // Authorize User
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
    // Fetch All products
    useEffect(()=>{
        fetch(url_getAllProducts, fetchGetConfig)
            .then(res=>res.json())
            .then(result=>{
                const transformedResult = [];
                // Add property to original product
                result.map((product)=>{
                    product.amount = 0;
                    transformedResult.push(product);
                });
                setAllProducts(transformedResult);
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);

    return (
        <Router>
            <>
                <Nav
                    isLogged={isLogged}
                    userCart={userCart}
                />
                <Route path="/"
                       render={()=>{
                           return (<Home
                               allProducts={allProducts}
                               addToCart={addToCart}
                           />);
                       }}
                       exact/>
                <Route path="/cart"
                       render={()=>{
                           return (<Cart
                               userCart={userCart}
                               setUserCart={setUserCart}
                           />);
                       }}
                />
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
