import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = ({ category, setCategory }) => {

    const [categories, setCategories] = useState([]);
    
    const categoryPage = (e) => {

        if(e.target.textContent === 'Clothe') {
            setCategory('MLA1430');
        } else if(e.target.textContent === 'Cars') {
            setCategory('MLA1743');
        } else if(e.target.textContent === 'Mobile') {
            setCategory('MLA1055');
        } else {
            setCategory('MLA1574');
        }
    }

    useEffect(() => {
        const url = `https://api.mercadolibre.com/sites/MLA/${category}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    console.log(categories)

    return (
        <nav className="nav">
            <ul className="nav-list">
                <Link 
                    className="nav-list__link" 
                    to="/category/:cars" 
                    onClick={categoryPage}
                    >Cars
                </Link>
                <Link 
                    className="nav-list__link" 
                    to="/category/:clothe"
                    onClick={categoryPage}
                    >Clothe
                </Link>
                <Link 
                    className="nav-list__link" 
                    to="/category/:mobiles"
                    onClick={categoryPage}
                    >Mobile
                </Link>
                <Link 
                    className="nav-list__link" 
                    to="/category/:furniture"
                    onClick={categoryPage}
                >Furniture
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;
