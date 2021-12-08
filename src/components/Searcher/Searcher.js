import React from 'react';
import './searcher.css';

const Searcher = () => {
    return (
        <form className="searcher">
            <input
                type="text"
                placeholder="Search any product"
                name="searcher"
                className="searcher-input"
            />
            <button className="searcher-button">Search</button>
        </form>
    )
}

export default Searcher;
