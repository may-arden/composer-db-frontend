import React from 'react'
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer';
import ComposerSubmissionContainer from './containers/ComposerSubmissionContainer';
// import {
//   Switch,
//   Route
// } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Home from './components/Home'

function App() {
  return (
    <div className="app">
      <h1>Hello I am the body</h1>
      <CategoriesContainer/> 
      <ComposerSubmissionContainer/>
      {/* <NavBar />

      <Switch> 
        <Route exact path='/' component={ Home } />
        <Route exact path='/composers/new' component={ ComposerSubmissionContainer } />
        <Route exact path='/categories' component={ CategoriesContainer } /> 
      </Switch> */}
    </div>
  );
}

export default App;
