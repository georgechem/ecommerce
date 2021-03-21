import React from 'react';
import {useState, useEffect} from 'react';

import './CartItem.scss';
/* FROM Cart
props.product
props.removeAll
props.addQuantity
props.minusQuantity
 */
const CartItem = (props) => {

    return (
        <div className="CartItem">
            <div className="CartItem__Box">
                <input
                    onClick={()=>{
                        props.removeAll(props.product.id);
                    }}
                    className="CartItem__btn--remove"
                    type="submit"
                    value="X"
                />
                <input
                    onClick={()=>{
                        props.addQuantity(props.product.id);
                    }}
                    className="CartItem__btn--edit"
                    type="submit"
                    value="+"
                />
                <input
                    onClick={()=>{
                        props.minusQuantity(props.product.id);
                    }}
                    style={{minWidth: 24}}
                    className="CartItem__btn--edit"
                    type="submit"
                    value="-"
                />
                <img className="CartItem__img" src={props.product.img} alt="product thumbnail"/>
                <div className="CartItem__name"><em>{props.product.name}</em></div>
                <div className="CartItem__price">EUR: {props.product.price}</div>
                <div className="CartItem__amount">Qt: {props.product.amount}</div>
            </div>
        </div>
    );
}
export default CartItem;
