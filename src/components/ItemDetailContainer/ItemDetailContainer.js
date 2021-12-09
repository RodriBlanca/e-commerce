import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import NavBar from '../NavBar/NavBar';

const ItemDetailContainer = () => {

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
            <>
                <ItemDetail 
                    item={item} 
                    detailProduct={detailProduct} 
                    setDetailProduct={setDetailProduct}
                    setItem={setItem}
                    // handleClick={handleClick}
                />
            </>
        )
        :
        
        null
    )
}

export default ItemDetailContainer
