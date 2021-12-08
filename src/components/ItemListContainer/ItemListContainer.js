import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

import './itemListContainer.css';

const ItemListContainer = ({category}) => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const url = `https://api.mercadolibre.com/sites/MLA/search?category=${category}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data.results));
    }, [category])

    return (
        <div className="item-container">
            {
                products.map(prod => (
                                        <Item 
                                            key={prod.id}
                                            name={prod.title}
                                            price={prod.price}
                                            img={prod.thumbnail}
                                            id={prod.id}
                                        />
                                     ))
            }
        </div>
    )
}

export default ItemListContainer;
