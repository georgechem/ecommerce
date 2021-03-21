import React from 'react';
import {useState, useEffect} from 'react';

import './CartItem.scss';
/* FROM Cart
props.product
 */
const CartItem = (props) => {

    return (
        <div className="CartItem">
            <div className="CartItem__Box">
                <input type="submit" value="X"/>
                <img src="" alt="product thumbnail"/>
                <div>{props.product.name}</div>
                <div>{props.product.price}</div>
                <div>{props.product.amount}</div>
            </div>
        </div>
    );
}
export default CartItem;
