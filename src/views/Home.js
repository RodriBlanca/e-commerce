import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

import '../index.css';

const Home = ({category}) => {

    return (
        <>
            <div className="main">
                <ItemListContainer category={category}/>
            </div>
        </>
    )
}

export default Home;
