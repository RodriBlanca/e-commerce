import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './item.css';

const Item = ({name, price, img, id, setCartProducts, cartProducts}) => {

    const [cart, setCart] = useState('');

    // const addProduct = () => {
    //     setCart(Number(cart + 1));
    // }

    // const deleteOne = () => {
    //     if(cart === 0 || cart === '') {
    //         setCart(0);
    //     } else {
    //         setCart(Number(cart - 1));
    //     }
    // }

    const handleAdd = () => {
        const item = document.getElementById(id);
        console.log(item.lastElementChild.children[1])
        this.setCartProducts([{
            name: item.firstElementChild.lastElementChild.firstElementChild.textContent,
            price: item.firstElementChild.lastElementChild.children[1].textContent,
            id: item.firstElementChild.lastElementChild.children[0].textContent
        }])
        console.log(cartProducts)
    }

    return (
        <div className="item" id={id}>
            <NavLink to={`/item/${id}`} className="item-link">
                <div className="item-img">
                    <img className="item-img__pic" alt={name} src={img}/>
                </div>
                <div className="item-info">
                    <p className="item-info__title">{name}</p>
                    <p className="item-info__price">$ {price}</p>
                    <p>{id}</p>
                </div>
            </NavLink>
        <div className="buttons">
            {/* <button className="item-button decrement" onClick={deleteOne}>-</button> */}
            <button className="item-button add" onClick={handleAdd}>ADD {cart}</button>
            {/* <button className="item-button increment" onClick={addProduct}>+</button> */}
        </div>
    </div>
    )
}

export default Item;
