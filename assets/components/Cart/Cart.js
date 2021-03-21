import React from 'react';
import {useState, useEffect} from 'react';
import CartItem from "../CartItem/CartItem";

import './Cart.scss';
/* FROM MyApp
props.userCart
props.setUserCart
 */
const Cart = (props) => {

    return (
        <div className="CartContainer">
            <CartItem
            userCart={props.userCart}
            setUserCart={props.setUserCart}
            />
            <CartItem
                userCart={props.userCart}
                setUserCart={props.setUserCart}
            />
        </div>
    );
}
export default Cart;
