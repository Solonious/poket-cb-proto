import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Main, Category, Home, SingleDish, AdminList, AdminCategory, AdminDishes, FormResult } from './components';
import { AddCategoryContainer, AddDishContainer } from './containers';

// Use hashHistory for easier development
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
          <IndexRoute component={Home} />
	        <Route path="admin" component={AdminList}/>
	        <Route path="/admin/category"component={AdminCategory}/>
	        <Route path="addcat" component={AddCategoryContainer}/>
	        <Route path="adddish" component={AddDishContainer}/>
	        <Route path="/admin/dishes" component={AdminDishes}/>
	        <Route path="/:categoryId" component={Category}/>
	        <Route path="/:categoryId/:dishId" component={SingleDish}/>
	        <Route path="/formsended" component={FormResult}/>
        </Route>
    </Router>
);

export default routes;