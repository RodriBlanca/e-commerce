import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

import './itemListContainer.css';

const ItemListContainer = ({category, setCartProducts, cartProducts}) => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const url = `https://api.mercadolibre.com/sites/MLA/search?category=${category}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data.results));
    }, [category])

    console.log(products)

    return (
        <div className="item-container">
            {
                products.map(prod => (
                                        <div key={prod.id}>
                                            {console.log(prod)}
                                            <Link to={`/item/${prod.id}`}>
                                                <Item 
                                                name={prod.title}
                                                price={prod.price}
                                                img={prod.thumbnail}
                                                id={prod.catalog_product_id}
                                                cartProducts={cartProducts}
                                                setCartProducts={setCartProducts}
                                                />
                                            </Link>
                                        </div>
                                     ))
            }
        </div>
    )
}

export default ItemListContainer;
