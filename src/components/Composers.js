import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react'


const Composers = ({ composers }) => {
    return (
        <div className='cat_composers'>
          <h4> choose a composer </h4>
            
             
            {composers.map(indivComposer => <div key={indivComposer.id}>
                <br/> 
                  <p>
                    <Link to={`/categories/${indivComposer.category_id}/composers/${indivComposer.id}`}>
                        
                        <button>{indivComposer.name}</button> 
                    </Link>
                    <button>  upvotes</button>
                  </p> 
                </div>)}
        </div>    
    )
}

const mapStateToProps =  state => {
  // debugger 
    return { composers: state.composers}
}

const handleClick = () => {
    console.log("we've been clicked!")
}

export default connect(mapStateToProps)(Composers); 
