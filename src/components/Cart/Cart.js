import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/img/shopping-cart.png';
import './cart.css';

const Cart = ({cartProducts}) => {

    console.log(cartProducts)

    return (
        <>
            <img className="cart" src={cart} alt="cart"/>
            <div className='products-list'>
                <div className='products-list__container'>
                    {
                    cartProducts.length === 0
                    ?
                    (<p>The Cart is Empty</p>)
                    :
                    (<div>Tiene productos</div>)
                    }
                </div>
                <Link to={"/cart"} className='cart-link'>
                    <button className='products-list__button'>Buy</button>
                </Link>
            </div>
        </>
    )
}

export default Cart;
