import React from 'react';
import Brand from '../Brand/Brand';
import Cart from '../Cart/Cart';
import Searcher from '../Searcher/Searcher';
import './header.css';

const Header = ({cartProducts}) => {
    return (
        <header className="header">
            <div className="header-options">
                <Brand className="header-options__brand"/>
                <Searcher className="header-options__searcher"/>
                <Cart className="header-options__cart" cartProducts={cartProducts}/>
            </div>
        </header>
    )
}

export default Header;
