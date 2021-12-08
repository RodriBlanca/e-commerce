import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar';

const Category = () => {

    const [category, setCategory] = useState('MLA1055');

    return (
        <div>
            <Header />
            <NavBar category={category} setCategory={setCategory}/>
            <ItemListContainer category={category}/>
        </div>
    )
}

export default Category;
