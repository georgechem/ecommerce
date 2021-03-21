import React from 'react';
import {Link} from 'react-router-dom';

import {useState, useEffect} from 'react';

import './ProductDetails.scss';

const ProductDetails = (props) => {
    return (
        <>
            <div>
                ProductDetails{console.log(props.currentProduct)}
            </div>

            <div className="Link">
                <Link className="Link__home" to="/">Home</Link>
            </div>

        </>
    );
}
export default ProductDetails;
