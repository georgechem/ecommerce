import React from 'react';
import {useState, useEffect} from 'react';
import CartItem from "../CartItem/CartItem";

import './Cart.scss';
/*
props.userCart
props.setUserCart
 */
const Cart = (props) => {

    return (
        <div className="CartContainer">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    );
}
export default Cart;
