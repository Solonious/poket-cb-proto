import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Main, Category, Home, SingleDish, AdminList, AdminCategory, AdminDishes, addCategory, addDish } from './components';

// Use hashHistory for easier development
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
          <IndexRoute component={Home} />
	        <Route path="admin" component={AdminList}/>
	        <Route path="/admin/category"component={AdminCategory}/>
	        <Route path="/admin/addcat" component={addCategory}/>
	        <Route path="/admin/addDish" component={addDish}/>
	        <Route path="/admin/dish" component={AdminDishes}/>
	        <Route path="/:categoryId" component={Category}/>
	        <Route path="/:categoryId/:dishId" component={SingleDish}/>
        </Route>
    </Router>
);

export default routes;