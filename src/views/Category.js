import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Category = ({category, setCartProducts, cartProducts}) => {

    return (
        <div>
            <ItemListContainer 
                category={category} 
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
            />
        </div>
    )
}

export default Category;
