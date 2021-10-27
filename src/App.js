import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import CategoriesContainer from './containers/CategoriesContainer';
import ComposerSubmissionContainer from './containers/ComposerSubmissionContainer';
import ComposersContainer from './containers/ComposersContainer';
// import Home from './components/Home'; 
// import NavBar from './components/NavBar'
// import { fetchCategories } from './actions/categoriesActions' 
// import { connect } from 'react-redux'; 
// import Home from './components/Home'

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div>
          <ul>
            <ol>
              <Link to='/'>home</Link>
              <Link to='/categories'> view categories </Link>
              <Link to='/composers/new'> composer submission </Link>       
            </ol>
          </ul>
        </div>
          <Switch>
              <Route exact path='/'>< Home /></Route>  
              <Route exact path='/composers/new' component={ComposerSubmissionContainer} /> 
              <Route exact path='/categories' component={CategoriesContainer} /> 
              <Route exact path='/categories/:category_id/composers' component={ComposersContainer}/> 
          </Switch>
      </Router> 
      )
      }
  }
        
    



function Home() {
  return (
    <div>
      <h2>welcome to composer-db</h2>
      <h4>a place to share information about classical composers</h4>
    </div>
  )
  }

export default App;
