import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';
import ProductDetails from "./components/ProductDetails/ProductDetails";

import {url_authorize, url_getAllProducts} from "./config";
import {fetchGetConfig} from "./config";
import {ex_path} from "./config";

import './styles/myStyles.scss';

const MyApp = (props) => {
    const [isLogged, setIsLogged] = useState(false);
    const [allProducts, setAllProducts] = useState(null);
    const [userCart, setUserCart] = useState({
        items: []
    });

    const [inCart, setInCart] = useState(null);
    const [isCart, setIsCart] = useState(false);

    const [currentProduct, setCurrentProduct] = useState(null);

    // DRY VIOLATION - NEED REFACTORING
    const updateStock = (id, value)=>{
        const newStock = [];
        allProducts.forEach(product=>{
            if(product.id === id){
                product.inStock += value;
            }
            newStock.push(product);
        });
        setAllProducts(newStock);
    }

    const addToCart = (product)=>{
        const cart = userCart.items;

        // check is duplicate
        const idx = cart.findIndex((item)=>{
            return item.id === product.id;
        });
        if(idx !== -1){
            let counter = cart[idx].amount;
            counter++;
            cart[idx].amount = counter;
            setUserCart({
                items: cart
            })
        }else{
            cart.push(product);
            setUserCart({
                items: cart
            });
        }

        // updateStock
        updateStock(product.id, -1);

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
                    product.amount = 1;
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
                <Route path={ex_path}
                       render={()=>{
                           return (<Home
                               allProducts={allProducts}
                               addToCart={addToCart}
                               setCurrentProduct={setCurrentProduct}
                           />);
                       }}
                       exact/>
                <Route path="/cart"
                       render={()=>{
                           return (<Cart
                               userCart={userCart}
                               setUserCart={setUserCart}
                               allProducts={allProducts}
                               setAllProducts={setAllProducts}
                               inCart={inCart}
                               setInCart={setInCart}
                               isCart={isCart}
                               setIsCart={setIsCart}
                           />);
                       }}
                />
                <Route path="/product"
                       render={()=>{
                           return (<ProductDetails
                                   currentProduct={currentProduct}
                               />
                           );
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
