import React from 'react';
import {useState, useEffect} from 'react';
import CartItem from "../CartItem/CartItem";

import './Cart.scss';
/* FROM MyApp
/------------
props.userCart
props.setUserCart
/--------------
props.allProducts
props.setAllProducts
 */
const Cart = (props) => {
    const [inCart, setInCart] = useState(null);
    const [isCart, setIsCart] = useState(false);

    const getTotal = () => {
        let total = 0.0;
        props.userCart.items.forEach(product=>{
           let amount = parseInt(product.amount);
           let price = parseFloat(product.price);
           total += amount * price;
        });

        return total.toFixed(2);
    }
    // DRY VIOLATION - NEED REFACTORING
    const updateStock = (id, value)=>{
        const newStock = [];
        props.allProducts.forEach(product=>{
            if(product.id === id){
                product.inStock += value;
            }
            newStock.push(product);
        });
        props.setAllProducts(newStock);

    }

    const removeAll = (id) =>{
        let productQtInCart = 0;
        const newCart = props.userCart.items.filter(item=>{
            if(item.id === id){
                productQtInCart = item.amount;
            }
            return item.id !== id;
        });
        props.setUserCart({
            items: newCart
        });
        // Update Stock
        updateStock(id,productQtInCart);

    }

    const addQuantity = (id) => {
        const newCart = props.userCart.items.map(item=>{
            if(item.id === id){
                item.amount++;
                return item;

            }else{
                return item;
            }
        })
        props.setUserCart({
            items: newCart
        });
        // Update Stock
        updateStock(id,-1);

    }

    const minusQuantity = (id) => {
        const newCart = props.userCart.items.map(item=>{
            if(item.id === id){
                item.amount--;
                item.amount < 1 ? item.amount = 1 : item.amount;
                return item;

            }else{
                return item;
            }
        })
        props.setUserCart({
            items: newCart
        });
        // Update Stock
        updateStock(id,1);
    }

    const emptyCart= (
        <div className="EmptyCart">Your cart is empty</div>
    );


    useEffect(() => {
        const itemsInCart = [];
        props.userCart.items.forEach((product, key)=>{
            itemsInCart.push(<CartItem
                key={'cartProduct'+key}
                product={product}
                removeAll={removeAll}
                addQuantity={addQuantity}
                minusQuantity={minusQuantity}
            />);
        })
        setInCart(itemsInCart);
        if(itemsInCart.length !== 0){
            setIsCart(true);
        }else{
            setIsCart(false);
        }

    },[props.userCart]);

    return (
        <div className="CartContainer">
            {inCart !== null ? inCart : null}
            {isCart === false ? emptyCart : (<div className="Total">
                <div className="Total__total">Total</div>
                <div className="Total__price">EUR: {getTotal()}</div>
            </div>)}
        </div>

    );
}
export default Cart;
