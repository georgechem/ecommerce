import React from 'react';
import {useState, useEffect} from 'react';

import './Card.scss';

const Card = (props) => {
    return (
            <div className="Card__item">
                <div className="Card__item__box">
                    <img className="Card__item__img" src={props.product.img} alt="product image"/>
                    <div className="Card__item__name">{props.product.name}</div>
                    <div className="Card__item__price">EUR: {props.product.price}</div>
                    <div className="Card__item__">{props.product.inStock}</div>
                    <div className="Card__item__">{props.product.rating}</div>
                    <div className="Card__item__">{props.product.numRating}</div>
                    <div className="Card__item__">{props.product.colors}</div>
                    <div className="Card__item__">{props.product.deliveryIn}</div>
                </div>
            </div>
    );
}
export default Card;
