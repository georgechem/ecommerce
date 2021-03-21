import React from 'react';
import {useState, useEffect} from 'react';

import './CartItem.scss';
/* FROM Cart
props.userCart
props.setUserCart
 */
const CartItem = (props) => {
    return (
        <div className="CartItem">
            <div className="CartItem__Box">
                <div>btnRemove</div>
                <div>sm. img</div>
                <div>pr. name</div>
                <div>pr.price</div>
                <div>pr. quantity</div>
            </div>
        </div>
    );
}
export default CartItem;
