import React from 'react';
import {Link} from 'react-router-dom';

import {useState, useEffect} from 'react';

import './ProductDetails.scss';

const ProductDetails = (props) => {
    return (
        <>  {props.currentProduct !== null ?
            (<div className="Product">
                <div className="Product__item">
                    <img
                        className="Product__item--img"
                        src={props.currentProduct.img}
                        alt="product image"/>
                </div>
                <div className="Product__item">
                    <div
                        className="Product__item__list">
                        Name:&nbsp;{props.currentProduct.name}
                    </div>
                    <div
                        className="Product__item__list"><strong>
                        Price:&nbsp;{props.currentProduct.price}&nbsp;EUR</strong>
                    </div>
                    <div
                        className="Product__item__list">
                        In&nbsp;Stock: {props.currentProduct.inStock}
                    </div>
                    <div
                        className="Product__item__list"><em>
                        Rating:&nbsp;{props.currentProduct.rating}&nbsp;from&nbsp;
                        {props.currentProduct.numRating}&nbsp;reviews</em>
                    </div>
                    <div
                        className="Product__item__list">
                        Category:&nbsp;{props.currentProduct.category}
                    </div>
                    <div
                        className="Product__item__list">
                        Delivery&nbsp;in&nbsp;{props.currentProduct.deliveryIn}&nbsp;day(s)
                    </div>
                    <div
                        className="Product__item__list just">
                        Description:&nbsp;{props.currentProduct.description}
                    </div>

                </div>
            </div>) : <div className="Error">Refresh not supported</div>}

            <div className="Link">
                <Link className="Link__home" to="/">Home</Link>
            </div>

        </>
    );
}
export default ProductDetails;
