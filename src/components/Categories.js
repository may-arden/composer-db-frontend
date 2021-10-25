// set state and handle events here 
// search function goes here 
// mapStateToProps goes here 

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const handleCatClick = () => {
    console.log("we've been clicked!")
}

// need to use a link with a button, instead of handleClick

const Categories = ({ categories }) => {
    return (
        <div className='categories' >
           this is the categories component  
            {categories.map(category => 
                <div key={category.id}>
                 <p>
                     <Link to={`/categories/${category.id}/composers`}>
                         <button>{category.name}</button>
                     </Link>
                 </p> 
            
                </div>)}
        </div> 
    );
};  

const mapStateToProps = stateFromStore => {
    // returns obj with property
    return { categories: stateFromStore.categories }
}

// want to grab state from tore to make a list 
export default connect(mapStateToProps)(Categories);
