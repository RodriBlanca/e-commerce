import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const initialState = [];

export const CartProvider = ({children}) => {
    const [item, setItem] = useState(initialState);

    return (
        <CartContext.Provider 
            value={[item, setItem]}>
                {children}
        </CartContext.Provider>
    );
}
