import React from 'react';
import {useState, useEffect} from 'react';
import CartItem from "../CartItem/CartItem";

import './Cart.scss';
/* FROM MyApp
props.userCart
props.setUserCart
 */
const Cart = (props) => {
    const [inCart, setInCart] = useState(null);

    useEffect(() => {
        const itemsInCart = [];
        props.userCart.items.forEach((product, key)=>{
            itemsInCart.push(<CartItem
                key={'cartProduct'+key}
                product={product}/>);
        })
        setInCart(itemsInCart);
    },[]);

    return (
        <div className="CartContainer">
            {inCart !== null ? inCart : null}
        </div>
    );
}
export default Cart;
