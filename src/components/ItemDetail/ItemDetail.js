import React, { useState } from 'react';
import arrow from '../../assets/img/arrow-down-sign-to-navigate.png'
import './itemDetail.css';


const ItemDetail = ({
    item, 
    setItem, 
    increment, 
    decrement, 
    count, 
    setProductSelected, 
    setCartProducts,
    cartProducts,
    productSelected }) => {

    const handleAdd = () => {
        setProductSelected({
            name: item.name,
            img: item.pictures[0].url,
            price: item.buy_box_winner.price,
            amount: count
        });

        setCartProducts([
            ...cartProducts,
            productSelected
        ]);

        console.log(cartProducts)
    }

    

    return (
        <div className='detail'>
            <div className='detail-img'>
                <img alt={item.name} src={item.pictures[0].url} className='detail-img__pic'/>
            </div>
            <div className='detail-info'>
                <p className='detail-info__title'>{item.name}</p>
                <p className='detail-info__price'>$ {item.buy_box_winner.price}</p>
                <div className='amount'>
                    <button 
                        onClick={increment} 
                        className='amount-increment'
                    >
                        <img 
                            alt="increment-arrow" 
                            src={arrow}
                            className='amount-increment__arrow'
                        />
                    </button>
                    <p className='amount-text'>Amount {count}</p>
                    <button 
                        onClick={decrement} 
                        className='amount-decrement'
                    >
                        <img 
                            alt="decrement-arrow" 
                            src={arrow}
                            className='amount-decrement__arrow'
                        />
                    </button>
                </div>
                <div className='add'>
                    <button className='add-button' onClick={() => handleAdd()}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
