import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import ItemDetail from '../ItemDetail/ItemDetail';
import NavBar from '../NavBar/NavBar';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const params = useParams();
    console.log(params)

    const [detailProduct, setDetailProduct] = useState({});

    const handleClick = () => {
        console.log('funciona')
    }
    
    useEffect(() => {
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${params}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data.results[0]),);
    }, [])

    // console.log(data)

    return (
        <>
            {/* <Header /> */}
            {/* <NavBar /> */}
            <ItemDetail 
                item={item} 
                detailProduct={detailProduct} 
                setDetailProduct={setDetailProduct}
                handleClick={handleClick}
            />
        </>
    )
}

export default ItemDetailContainer
