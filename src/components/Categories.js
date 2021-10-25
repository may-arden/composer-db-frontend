// set state and handle events here 
// search function goes here 
// mapStateToProps goes here 

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

const handleCatClick = () => {
    console.log("we've been clicked!")
}

const Categories = ({ categories }) => {
    return (
        <div>
            show categories
            {categories.map(category => 
                <ul key={category.id}>
                    <ol> 
                        <button onClick={handleCatClick}>{category.name}</button>
                    </ol> 
                </ul>
            )} 
        </div>
    );
}; 

const mapStateToProps = state => {
    // returns obj with property
    return { categories: state.categories }
}

// want to grab state from tore to make a list 
export default connect(mapStateToProps)(Categories);
