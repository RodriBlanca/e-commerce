import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from './views/Home';
import Category from './views/Category';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//Context
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

const App = () => {

    const [category, setCategory] = useState('MLA1055');

    
    const [cartProducts, setCartProducts] = useState([]);

    console.log(cartProducts);

    return (
        <CartProvider>
            <Router>
                <Header />
                <NavBar category={category} setCategory={setCategory}/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home category={category}/>}/>
                        <Route 
                            path="/category/:id" 
                            element={<Category 
                                        category={category}
                                        cartProducts={cartProducts}
                                        setCartProducts={setCartProducts}
                                     />}
                        />
                        <Route path="item/:id" element={<ItemDetailContainer />}/>
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    )
}

export default App;
