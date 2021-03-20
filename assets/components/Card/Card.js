import React from 'react';
import {useState, useEffect} from 'react';

import './Card.scss';

const Card = (props) => {

    const fullStar = <i className="fas fa-star"/>;
    const halfStar = <i className="fas fa-star-half-alt"/>;
    const emptyStar = <i className="far fa-star"/>;

    const inStock = (props.product.inStock >= 5
        ? <span style={{color: 'green'}}>In Stock</span>
        : props.product.inStock >=1
            ? <span style={{color: '#96541c'}}>Ending</span>
            : props.product.inStock === 0
                ? <span style={{color: 'red'}}>Out of Stock</span>
                : '');


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
                            from&nbsp;
                            {props.product.numRating}
                            &nbsp;reviews
                        </span>

                    </div>
                    <div className="Card__item__color">
                        colors:&nbsp;
                        {props.product.colors.map((color,key)=>{
                            return (<span key={'color'+key}
                                style={{backgroundColor: color}}
                                className="Card__item__color--box">
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>);
                        })}

                    </div>
                    <div className="Card__item__delivery">
                        <i className="fas fa-shipping-fast"/>
                        &nbsp;{props.product.deliveryIn}
                        &nbsp;day(s)
                    </div>

                </div>
                <div className="Card__item__footer">
                    {props.product.inStock !== 0
                        ? <div
                            className="Card__item__footer--btn"
                            onClick={()=>{
                                props.addToCart(props.product);
                            }}
                        >Add to Cart
                    </div>
                        : null
                    }

                    <div className="Card__item__footer--btn">Details</div>
                </div>

            </div>
    );
}
export default Card;
