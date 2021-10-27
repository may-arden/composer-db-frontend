import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react'


const Composers = ({ composers }) => {
    return (
        <div className='cat_composers'>
          <h3> composers container - Select a composer to read more about them. </h3>
            
             
            {composers.map(indivComposer => <div key={indivComposer.id}>
                <br/> 
                  <p>
                    <Link to={`/categories/${indivComposer.category_id}/composers/${indivComposer.id}`}>
                        <button>{indivComposer.name}</button>
                    </Link>
                  </p> 
                </div>)}
        </div>    
    )
}

const mapStateToProps =  state => {
    return { composers: state.composers}
}

export default connect(mapStateToProps)(Composers); 
