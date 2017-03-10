import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Main, Category, Home, SingleDish, AdminList } from './components';
import { AddCategoryContainer, AddDishContainer, AdminCategoryContainer, AdminDishContainer } from './containers';

// Use hashHistory for easier development
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
          <IndexRoute component={Home} />
	        <Route path="admin" component={AdminList}/>
	        <Route path="/admin/category"component={AdminCategoryContainer}/>
	        <Route path="addcat" component={AddCategoryContainer}/>
	        <Route path="adddish" component={AddDishContainer}/>
	        <Route path="/admin/dishes" component={AdminDishContainer}/>
	        <Route path="/:catId/dishes" component={Category}/>
	        <Route path="/:catId/dishes/:dishId" component={SingleDish}/>
        </Route>
		<Route path="*" component={Home}/>
    </Router>
);

export default routes;