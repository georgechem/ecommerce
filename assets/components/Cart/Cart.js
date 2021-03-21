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

    const getTotal = () => {
        let total = 0.0;
        props.userCart.items.forEach(product=>{
           let amount = parseInt(product.amount);
           let price = parseFloat(product.price);
           total += amount * price;
        });

        return total.toFixed(2);
    }

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
            <div className="Total">
                <div className="Total__total">Total</div>
                <div className="Total__price">EUR: {getTotal()}</div>
            </div>
        </div>
    );
}
export default Cart;
