import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import NavBar from '../NavBar/NavBar';

import './itemDetailContainer.css';

const ItemDetailContainer = ({
    increment, 
    decrement, 
    count, 
    setProductSelected, 
    setCartProducts,
    cartProducts,
    productSelected }) => {

    const params = useParams();
    console.log(params.id)

    const [item, setItem] = useState({});

    const [detailProduct, setDetailProduct] = useState({});

    useEffect(() => {
        const url = `https://api.mercadolibre.com/products/${params.id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [params.id])

    console.log(item)

    return (
        item.hasOwnProperty('name')
        ?
        (
            <div className='detail-container'>
                <ItemDetail 
                    item={item} 
                    detailProduct={detailProduct} 
                    setDetailProduct={setDetailProduct}
                    setItem={setItem}
                    increment={increment}
                    decrement={decrement}
                    count={count}
                    setCartProducts={setCartProducts}
                    setProductSelected={setProductSelected}
                    cartProducts={cartProducts}
                    productSelected={productSelected}
                    // handleClick={handleClick}
                />
            </div>
        )
        :
        
        null
    )
}

export default ItemDetailContainer
