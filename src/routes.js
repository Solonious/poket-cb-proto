import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Category, Home, SingleDish, AdminList, App } from './components';
import { AddCategoryContainer, AddDishContainer, AdminCategoryContainer, AdminDishContainer } from './containers';
import { Provider } from 'react-redux';
import configureStore from './store';


// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

const routes = (
<MuiThemeProvider>
	<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="admin" component={AdminList}/>
          <Route path="/admin/category" component={AdminCategoryContainer}/>
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