import React from 'react';
import Header from '../components/Header/Header';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar';

import '../index.css';

const Home = () => {

    return (
        <>
            <Header />
            <NavBar />
            <div className="main">
                <ItemListContainer/>
            </div>
        </>
    )
}

export default Home;
