import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from './views/Home';
import Category from './views/Category';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:id" element={<Category />}/>
                <Route path="item/:id" element={<ItemDetailContainer />}/>
            </Routes>
        </Router>
    )
}

export default App;
