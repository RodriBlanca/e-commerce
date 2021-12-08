import React from 'react';
import cart from '../../assets/img/shopping-cart.png';
import './cart.css';

const Cart = () => {
    return (
        <>
            <img className="cart" src={cart} alt="cart"/>
            <div></div>
        </>
    )
}

export default Cart;
