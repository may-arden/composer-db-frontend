import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react'


const Composers = ({ composers, category }) => {
    return (
        <div className='cat_composers'>
            <h3> here are composers classified as {category.name}. select a composer to read more about them. </h3>
            {
            composers.map(indivComposer => <div key={indivComposer.id}>
            
            <p>
            <Link to={`/categories/${indivComposer.category_id}/composers/${indivComposer.id}`}>
                <button>{indivComposer.name}</button>
            </Link>
            </p> 

        </div>)}
        </div>
        
    )
}

const mapStateToProps =  stateFromStore => {
    return { composers: stateFromStore.composers}
}

export default connect(mapStateToProps)(Composers); 
