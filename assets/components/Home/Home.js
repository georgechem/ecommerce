import React from 'react';
import {useState, useEffect} from 'react';

import Card from '../Card/Card';

import './Home.scss';


const Home = (props) => {
    const [cards, setCards] = useState(null);
    useEffect(() => {
        if(props.allProducts !== null){
            const allProductsList = [];
            props.allProducts.forEach(product=>{
                allProductsList.push(<Card
                    addToCart={props.addToCart}
                    key={product.id}
                    product={product}/>);
            });
            setCards(allProductsList);
        }
    },[props.allProducts]);

    return (
        <>
            <div className="Home">
                <div className="Card">
                    {cards}
                </div>
            </div>
        </>
    );
}
export default Home;
