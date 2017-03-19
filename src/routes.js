import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Category, Home, SingleDish, AdminList } from './components';
import { AddCategoryContainer, AddDishContainer, AdminCategoryContainer, AdminDishContainer, MainContainer } from './containers';
import { Provider } from 'react-redux';
import store, { history } from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const routes = (
<MuiThemeProvider>
	<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={MainContainer} >
          <IndexRoute component={Home} />
          <Route path="admin" component={AdminList}/>
          <Route path="/admin/category"component={AdminCategoryContainer}/>
          <Route path="addcat" component={AddCategoryContainer}/>
          <Route path="adddish" component={AddDishContainer}/>
          <Route path="/admin/dishes" component={AdminDishContainer}/>
          <Route path="/:catId/dishes" component={Category}/>
          <Route path="/:catId/:dishId" component={SingleDish}/>
          <Route path="*" component={Home}/>
        </Route>
    </Router>
	</Provider>
</MuiThemeProvider>
);

export default routes;