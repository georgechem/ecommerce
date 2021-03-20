import React from 'react';
import {useState, useEffect} from 'react';

import './Card.scss';

const Card = (props) => {
    return (
            <div className="Card__item">
                <div className="Card__item__box">
                    <img className="Card__item__img" src={props.product.img} alt="product image"/>
                    <div className="Card__item__">{props.product.name}</div>
                    <div>{props.product.price}</div>
                    <div>{props.product.inStock}</div>
                    <div>{props.product.rating}</div>
                    <div>{props.product.numRating}</div>
                    <div>{props.product.colors}</div>
                    <div>{props.product.deliveryIn}</div>
                </div>
            </div>
    );
}
export default Card;
