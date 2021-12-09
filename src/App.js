import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from './views/Home';
import Category from './views/Category';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './views/CartContainer';

//Context
import { CartProvider } from './context/CartContext';

// Components
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

// Hook
import { useCounter } from './hooks/useCounter';

const App = () => {

    const [category, setCategory] = useState('MLA1055');

    const [cartProducts, setCartProducts] = useState([]);

    const {increment, decrement, count} = useCounter();

    const [productSelected, setProductSelected] = useState({
        name: null, 
        img: null,
        price: null,
        amount: null
    });

    return (
        <CartProvider>
            <Router>
                <Header cartProducts={cartProducts}/>
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
                        <Route path="item/:id" element={<ItemDetailContainer 
                                                            increment={increment}
                                                            decrement={decrement}
                                                            count={count}
                                                            setCartProducts={setCartProducts}
                                                            setProductSelected={setProductSelected}
                                                            cartProducts={cartProducts}
                                                            productSelected={productSelected}
                                                        />}/>
                        <Route path="/cart" element={<CartContainer />}/>
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    )
}

export default App;
