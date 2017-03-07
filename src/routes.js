import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Main, Category, Home, SingleDish } from './components';

// Use hashHistory for easier development
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
          <IndexRoute component={Home} />
	        <Route path="/:categoryId" component={Category}/>
	        <Route path="/:categoryId/:dishId" component={SingleDish}/>
        </Route>
    </Router>
);

export default routes;