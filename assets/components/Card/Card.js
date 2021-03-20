import React from 'react';
import {useState, useEffect} from 'react';

import './Card.scss';

const Card = (props) => {

    const fullStar = <i className="fas fa-star"/>;
    const halfStar = <i className="fas fa-star-half-alt"/>;
    const emptyStar = <i className="far fa-star"/>;

    return (
            <div className="Card__item">
                <div className="Card__item__box">
                    <img className="Card__item__img" src={props.product.img} alt="product image"/>
                    <div className="Card__item__name">{props.product.name}</div>
                    <div className="Card__item__price">EUR: {props.product.price}</div>
                    <div className="Card__item__">{props.product.inStock}</div>
                    <div className="Card__item__star">
                        {props.product.rating > 2 ? 'B' : 'S'}
                        <span></span>

                    </div>
                    <div className="Card__item__">{props.product.numRating}</div>
                    <div className="Card__item__">{props.product.colors}</div>
                    <div className="Card__item__">{props.product.deliveryIn}</div>
                </div>
            </div>
    );
}
export default Card;
