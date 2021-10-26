import React from 'react';
import { Switch, Route } from 'react-router-dom';
// switch allows us to navigate betwen different routes
// helps with optimization, matches routes we're navigating

import App from '../App';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={ App } />
        </Switch>
    )
}

export default Router; 