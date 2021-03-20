import React from 'react';
import {useState, useEffect} from 'react';

import './Card.scss';

const Card = (props) => {

    const fullStar = <i className="fas fa-star"/>;
    const halfStar = <i className="fas fa-star-half-alt"/>;
    const emptyStar = <i className="far fa-star"/>;

    const inStock = (props.product.inStock >= 5 ? <span>In Stock</span> :
        props.product.inStock >=1 ? <span>Ending</span> : props.product.inStock === 0
    ? <span>Out of Stock</span> : '');

    return (
            <div className="Card__item">
                <div className="Card__item__box">
                    <img className="Card__item__img" src={props.product.img} alt="product image"/>
                    <div className="Card__item__name">{props.product.name}</div>
                    <div className="Card__item__price">EUR: {props.product.price}</div>
                    <div className="Card__item__stock">
                        {inStock}
                    </div>
                    <div className="Card__item__star">
                        <span>
                            {props.product.rating >=1
                                ? fullStar : props.product.rating >= 0.5
                                    ? halfStar : emptyStar}
                        </span>
                        <span>
                            {props.product.rating >=2
                                ? fullStar : props.product.rating >= 1.5
                                    ? halfStar : emptyStar}
                        </span>
                        <span>
                            {props.product.rating >=3
                                ? fullStar : props.product.rating >= 2.5
                                    ? halfStar : emptyStar}
                        </span>
                        <span>
                            {props.product.rating >=4
                                ? fullStar : props.product.rating >= 3.5
                                    ? halfStar : emptyStar}
                        </span>
                        <span>
                            {props.product.rating >=5
                                ? fullStar : props.product.rating >= 4.5
                                    ? halfStar : emptyStar}
                        </span>
                        <span className="Card__item__rating">
                            from
                            {props.product.numRating}
                            &nbsp;reviews
                        </span>

                    </div>
                    <div className="Card__item__">{props.product.numRating}</div>
                    <div className="Card__item__">{props.product.colors}</div>
                    <div className="Card__item__">{props.product.deliveryIn}</div>
                </div>
            </div>
    );
}
export default Card;
