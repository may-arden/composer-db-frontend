// set state and handle events here 
// search function goes here 
// mapStateToProps goes here 

import React from 'react';
import { connect } from 'react-redux';

const handleCatClick = () => {
    console.log("we've been clicked!")
}

// need to use a link with a button, instead of handleClick

const Categories = ({ categories }) => {
    return (
        <div>
           this is the categories component  
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
