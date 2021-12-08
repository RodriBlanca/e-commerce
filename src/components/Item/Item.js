import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './item.css';

const Item = ({name, price, img, description, id}) => {

    const [cart, setCart] = useState('');

    const addProduct = () => {
        setCart(Number(cart + 1));
    }

    const deleteOne = () => {
        if(cart === 0 || cart === '') {
            setCart(0);
        } else {
            setCart(Number(cart - 1));
        }
    }

    return (
        <NavLink to={`/item/${id}`}>
            <div className="item">
                <div className="item-img">
                    <img className="item-img__pic" alt={name} src={img}/>
                </div>
                <div className="item-info">
                    <p className="item-info__title">{name}</p>
                    <p className="item-info__description">{description}</p>
                    <p className="item-info__price">$ {price}</p>
                    <p>{id}</p>
                </div>
                <div className="buttons">
                    <button className="item-button decrement" onClick={deleteOne}>-</button>
                    <button className="item-button add">ADD {cart}</button>
                    <button className="item-button increment" onClick={addProduct}>+</button>
                </div>
            </div>
        </NavLink>
    )
}

export default Item;
