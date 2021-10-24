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
// import {
//   Switch,
//   Route
// } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Home from './components/Home'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <ol>
              <Link to='/'>home</Link>
              <Link to='/composers/new'> composer submission </Link>            
            </ol>
          </ul>
        </div>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/cases/new' component={ComposerSubmissionContainer} /> 
        </Switch>
      </Router>
  );
}
}

function Home() {
  return (
    <div>
      <h2>composer-db page title</h2>
      < CategoriesContainer /> 
    </div>
  )
}

// export default App;
