// home page goes here 
import React from 'react';
import CategoriesContainer from '../containers/CategoriesContainer'

const Home = () => {
  return (
    <div className='home-pg'>
      <h2>welcome to composer-db</h2>
      <h4>a place to share information about classical composers</h4>
      < CategoriesContainer /> 
    </div>
  )
}

export default Home; 